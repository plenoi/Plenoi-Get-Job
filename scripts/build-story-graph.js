const fs=require('node:fs'),path=require('node:path'),zlib=require('node:zlib'),{once}=require('node:events');
const C=require('../sim-core.js');
async function build(){
  const dir=path.join(__dirname,'..','storygraph');fs.mkdirSync(dir,{recursive:true});
  const file=path.join(dir,'nodes.jsonl.gz'),zip=zlib.createGzip({level:6}),dest=fs.createWriteStream(file);zip.pipe(dest);
  let edges=0,fixedGateDescriptors=0,legacyFallbackDescriptors=0;const eventIds=new Set(),descriptorVariants=new Set();
  for(let id=0;id<C.STORY_NODES+C.LEAVES;id++){
    const n=C.node(id);
    if(n.kind==='scene'){
      edges+=n.choices.length;
      if(n.category==='gate')fixedGateDescriptors++;
      else if(n.category==='legacy')legacyFallbackDescriptors++;
      if(n.eventId&&n.category!=='legacy'&&n.category!=='gate'){
        eventIds.add(n.eventId);
        descriptorVariants.add([n.eventId,n.state.stage,n.state.family,n.state.team,n.state.work,n.state.pressure,n.state.chain].join(':'));
      }
      if(n.state.stage===79)n.terminalRules={selector:'WILCore.outcome(run)',destinationRange:[C.STORY_NODES,C.STORY_NODES+C.LEAVES-1],inputs:['assessment14','general8','NPC bonds5','quality','reliability','health','relationships','proposal','final','four advisor visits','causal facts','hiring availability seeded at 4%'],note:'to is a representative leaf; outcome guards select the actual terminal leaf from the complete run history'};
    }
    if(!zip.write(JSON.stringify(n)+'\n'))await once(zip,'drain');
  }
  zip.end();await once(dest,'finish');
  const manifest={version:3,sourceHash:require('node:crypto').createHash('sha256').update(fs.readFileSync(path.join(__dirname,'..','sim-core.js'),'utf8').replace(/\r\n/g,'\n')).digest('hex'),nodes:C.STORY_NODES+C.LEAVES,storyNodes:C.STORY_NODES,endingLeaves:C.LEAVES,choices:edges,stages:C.STAGES,dimensions:{stages:80,families:8,teamContext:5,workContext:5,pressure:2,openCausalChain:5},eventLibrary:{authoredTemplates:C.eventCatalog.length,authoredTemplatesInCanonicalGraph:eventIds.size,compiledNodeDescriptors:C.STORY_NODES,authoredEventDescriptorVariants:descriptorVariants.size,fixedGateDescriptors,legacyFallbackDescriptors,variantDefinition:'Each graph node stores one concrete canonical descriptor. An authored event descriptor is a state variant of an authored template, not a separately authored script.',descriptorCountCheck:'authoredEventDescriptorVariants + fixedGateDescriptors + legacyFallbackDescriptors = compiledNodeDescriptors'},format:'UTF-8 JSON Lines, gzip',data:'nodes.jsonl.gz',conditionalDefinitions:'gates.json',gateRules:C.GATES.length,endingAxes:{outcome:5,workSummaryTheme:5,closingNarrator:4,nextStep:2,causalCallback:5},renderer:'../sim-art.js',runtimeRules:'../sim-core.js',terminalSelector:'outcome-v2',description:'Explicit compiled story-state DAG. Each node records one concrete canonical descriptor selected from authored event templates (or a fixed conditional gate); descriptors are state variants, not unique scripts. Full numeric history is evaluated by terminal guards.',bytes:fs.statSync(file).size};
  fs.writeFileSync(path.join(dir,'gates.json'),JSON.stringify(C.GATES.map(({id,when,once,chance,scene})=>({id,when,once:!!once,chance:chance||100,scene})),null,2));
  fs.writeFileSync(path.join(dir,'manifest.json'),JSON.stringify(manifest,null,2));console.log(JSON.stringify(manifest));
}
build().catch(e=>{console.error(e);process.exitCode=1});
