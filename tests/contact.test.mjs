import {test} from 'node:test';
import assert from 'node:assert/strict';
import {handleContact} from '../api/contact.js';
const env={SITE_URL:'https://property.example',RESEND_API_KEY:'test-only',CONTACT_FROM:'Website <website@property.example>',CONTACT_TO:'owner@property.example'};
function request(changes={},origin='https://property.example') {const f=new FormData();for(const [k,v] of Object.entries({name:'Test Visitor',email:'visitor@example.com',phone:'',property:'lecce-giardino',message:'Vorrei informazioni per una vacanza.',privacy:'accepted',lang:'it',...changes}))f.set(k,v);return new Request('https://property.example/api/contact',{method:'POST',headers:{origin},body:f});}
test('valid enquiry sends only to the configured recipient and sets reply-to',async()=>{let calls=0;const result=await handleContact(request(),env,async(url,opts)=>{calls++;const body=JSON.parse(opts.body);assert.deepEqual(body.to,[env.CONTACT_TO]);assert.equal(body.reply_to,'visitor@example.com');assert.equal(body.from,env.CONTACT_FROM);assert.match(body.text,/Villetta con giardino/);return Response.json({id:'test-email'});});assert.equal(result.status,200);assert.equal(calls,1);});
test('invalid email, short message and missing privacy fail before sending',async()=>{const r=await handleContact(request({email:'bad',message:'x',privacy:''}),env,()=>{throw Error('must not send');});assert.equal(r.status,422);assert.deepEqual((await r.json()).fields,['email','message','privacy']);});
test('honeypot never sends or returns success',async()=>{const r=await handleContact(request({website:'bot'}),env);assert.equal(r.status,400);});
test('foreign origin rejected',async()=>assert.equal((await handleContact(request({},'https://elsewhere.example'),env)).status,403));
test('missing configuration never returns success',async()=>assert.equal((await handleContact(request(),{SITE_URL:env.SITE_URL})).status,503));
test('provider failure never returns success',async()=>assert.equal((await handleContact(request(),env,async()=>new Response('',{status:500}))).status,502));
test('provider without delivery id never returns success',async()=>assert.equal((await handleContact(request(),env,async()=>Response.json({}))).status,502));
test('unknown property rejected',async()=>assert.equal((await handleContact(request({property:'invented'}),env)).status,422));
test('oversized body is rejected even without Content-Length',async()=>assert.equal((await handleContact(new Request('https://property.example/api/contact',{method:'POST',headers:{origin:env.SITE_URL},body:new URLSearchParams({message:'x'.repeat(21000)})}),env)).status,413));
