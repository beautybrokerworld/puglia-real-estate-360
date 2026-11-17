import {createHash} from 'node:crypto';

const propertyNames = {
  'lecce-giardino':'Villetta con giardino — Lecce',
  'otranto-mare':'Otranto sul mare — Box auto',
  'galugnano-piscina':'Villetta con piscina — Galugnano',
  'lecce-aria-sana':'Villetta — Lecce Aria Sana',
  'tramontana':'Tramontana — Otranto',
  'la-terrazza':'La Terrazza — Otranto'
};
const json=(status,body)=>Response.json(body,{status,headers:{'Cache-Control':'no-store'}});

// Uses Web Request/Response handlers supported by Vercel. Provider and environment are
// injected by tests; no real messages are sent during verification.
export async function handleContact(request,env=process.env,send=fetch) {
  if(request.method!=='POST') return new Response(null,{status:405,headers:{Allow:'POST'}});
  const allowedOrigin=env.SITE_URL ? new URL(env.SITE_URL).origin : new URL(request.url).origin;
  if(request.headers.get('origin')!==allowedOrigin) return json(403,{error:'origin'});
  const type=request.headers.get('content-type')||'';
  if(!type.startsWith('multipart/form-data')&&!type.startsWith('application/x-www-form-urlencoded'))return json(415,{error:'content_type'});
  if(Number(request.headers.get('content-length')||0)>20000)return json(413,{error:'size'});
  // Bound the streamed body too: Content-Length is not trusted.
  let chunks=[],total=0;
  try {
    const reader=request.body?.getReader();
    if(!reader)return json(400,{error:'body'});
    while(true){const {value,done}=await reader.read();if(done)break;total+=value.byteLength;if(total>20000){await reader.cancel();return json(413,{error:'size'});}chunks.push(value);}
  }catch{return json(400,{error:'body'});}
  let data;
  try{data=await new Request(request.url,{method:'POST',headers:{'content-type':type},body:Buffer.concat(chunks)}).formData();}catch{return json(400,{error:'body'});}
  const get=key=>typeof data.get(key)==='string'?data.get(key).trim():'';
  if(get('website'))return json(400,{error:'spam'});
  const name=get('name'),email=get('email'),phone=get('phone'),property=get('property'),message=get('message'),lang=get('lang');
  const fields=[];
  if(name.length<2||name.length>100||/[\r\n]/.test(name))fields.push('name');
  if(email.length>254||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))fields.push('email');
  if(phone.length>40||/[\r\n]/.test(phone))fields.push('phone');
  if(property&&!Object.hasOwn(propertyNames,property))fields.push('property');
  if(message.length<10||message.length>4000)fields.push('message');
  if(!['it','en'].includes(lang))fields.push('lang');
  if(get('privacy')!=='accepted')fields.push('privacy');
  if(fields.length)return json(422,{error:'validation',fields});
  if(!env.RESEND_API_KEY||!env.CONTACT_FROM||!env.CONTACT_TO)return json(503,{error:'not_configured'});
  const text=`Nuova richiesta dal sito Puglia Real Estate 360\n\nNome: ${name}\nEmail: ${email}\nTelefono: ${phone||'Non indicato'}\nSoluzione: ${propertyNames[property]||'Da consigliare'}\nLingua: ${lang}\n\n${message}\n\nInformativa privacy: lettura confermata.`;
  // Collapse identical retries for a ten-minute window without storing personal data.
  const digest=createHash('sha256').update(text+Math.floor(Date.now()/600000)).digest('hex');
  try{
    const res=await send('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${env.RESEND_API_KEY}`,'Content-Type':'application/json','Idempotency-Key':`enquiry-${digest}`},body:JSON.stringify({from:env.CONTACT_FROM,to:[env.CONTACT_TO],reply_to:email,subject:`Richiesta soggiorno — ${propertyNames[property]||'Salento'}`,text}),signal:AbortSignal.timeout(10000)});
    if(!res.ok)return json(502,{error:'delivery'});
    const result=await res.json();if(!result.id)return json(502,{error:'delivery'});
    return json(200,{ok:true});
  }catch{return json(502,{error:'delivery'});}
}

export async function POST(request){return handleContact(request);}
