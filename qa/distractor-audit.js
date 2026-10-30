const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),L=require('../sim-lessons.js');
// Human review notes point to each template's near-miss distractors; this harness
// checks coverage and answer structure, not semantic quality by pretending to
// score every generated wording mechanically.
const review={
  'javascript/multiply':'Options 2–4 are distinct errors: adding unlike values, counting one extra item, or omitting one item; arithmetic signatures are checked across positive integer inputs.',
  'javascript/loop-boundary':'Options 2–4 are boundary-condition near misses: includes length, skips the last index, or extends the overrun.',
  'javascript/strict-equality':'Options 2–4 reflect loose-equality and ignored-conversion mistakes; the two logged comparisons make the consequence checkable.',
  'javascript/array-mutation':'Options 2–4 preserve an alias, mutate the source in place, or subtract a fixed amount instead of 10 percent.',
  'javascript/async-race':'Options 2–4 try timing, duplicate requests, or clearing input; each leaves stale-response ordering unresolved.',
  'javascript/discount':'Options 2–4 apply a fixed subtraction, discount the quantity, or divide by the percentage rather than discounting the total.',
  'sql/null':'Options 2–4 confuse NULL with equality, numeric zero, or the literal text NULL.',
  'sql/group-having':'Options 2–4 filter before aggregation or source rows instead of groups; the >= threshold now differs at exactly the threshold count.',
  'sql/left-join':'Options 2–4 retain the wrong join key, multiply rows, or try to restore removed rows with DISTINCT.',
  'sql/parameter':'Options 2–4 validate syntax, hand-escape text, or limit rows; none separates SQL syntax from user data.',
  'sql/transaction':'Options 2–4 commit partial work, check without atomic writes, or retry without idempotency checks.',
  'sql/count-null':'Options distinguish row count, non-NULL count, and NULL handling with plausible arithmetic near misses.',
  'ux/label':'Options 2–4 offer supplemental description, title, or placeholder; the note acknowledges title may be exposed as a name but is hidden and inconsistently discoverable.',
  'ux/focus':'Options 2–4 move focus away from its invoking context or leave it on a removed control.',
  'ux/error':'Options 2–4 vary between technical codes, field-only wording, and escalation without a direct repair instruction.',
  'ux/experiment':'Options 2–4 mistake raw counts, rates, or pooled totals for a reliable experiment result.',
  'ux/contrast':'Options 2–4 add color, icon-only, or delayed messaging without a persistent text cue associated with the field.',
  'qa/boundary':'Options 2–4 use typical values, duplicate only the boundary, or omit the upper boundary entirely.',
  'qa/oracle':'Options 2–4 assert existence or self-consistency rather than a business-derived expected value.',
  'qa/regression':'Options 2–4 remove evidence, narrow coverage, or normalize the expected result to the old bug.',
  'qa/equivalence':'Options 2–4 partition by an irrelevant attribute, use too-coarse ranges, or sample only endpoints.',
  'qa/mock':'Options 2–4 cover success, replay a different failure, or hide the signal instead of modeling timeout behavior.',
  'data/conversion':'Options use alternative funnel denominators or raw counts; the prompt defines the conversion denominator.',
  'data/median':'Options confuse mean, median, and extreme-value handling; all require interpreting a skewed sample.',
  'data/join-duplication':'Options 2–4 propose DISTINCT on equal legitimate totals, filter child rows without correcting parent grain, or count totals instead of summing them.',
  'data/missing':'Options impute zero, drop a period, or carry forward a value without declaring assumptions.',
  'security/secret':'Options hide, delete, or restrict visibility while leaving the exposed credential usable.',
  'security/permission':'Options 2–4 check authentication or general roles, validate identifier existence, or filter fields without checking ownership for each resource.',
  'security/phishing':'Options trust visual identity, share credentials, or test with old credentials rather than verifying independently.',
  'security/minimize':'Options retain identifiers or rely on access/behavior restrictions instead of reducing data.',
  'communication/status':'Options omit impact, a concrete ask, or the next update time, making the team infer status.',
  'communication/feedback':'Options 2–4 substitute preference, a leading redesign proposal, or a defensive compliance check for observing task behavior.',
  'communication/conflict':'Options assert authority, defer without evidence, or conceal a disagreement instead of proposing a bounded test.',
  'communication/handoff':'Options provide files, screenshots, or raw chat without runnable steps and ownership context.',
  'planning/dependency':'Options violate dependency order, serialize independent work, or start work without sequencing constraints.',
  'planning/scope':'Options absorb capacity, change scope without agreement, or reject without presenting a trade-off.',
  'planning/wip':'Options 2–4 increase started work, split work without limiting concurrency, or change tooling while leaving WIP unchanged.',
  'planning/risk':'Options 2–4 recognize the migration risk but omit rollback rehearsal, trust local success without recovery planning, or defer the high-impact check.',
  'communication/confirm':'Options jump to layout, colors, or features before confirming audience and decision need.',
  'communication/recap':'Options 2–4 preserve a long record without clear ownership, silently take on shared work, or use a yes/no check that can conceal disagreement.',
  'planning/capacity':'Options double-count meeting time, add unlike quantities, or count meeting hours as productive capacity.'
};
assert.equal(L.templates.length,41,'Audit must cover all 41 lesson templates');
const multiply=L.templates.find(t=>t.id==='multiply').build({a:7,b:3});const arithmetic=expression=>Function('price','qty',`return ${expression}`);const multiplyProbes=[[1,3],[2,3],[7,3],[17,4],[13,9]];const multiplySignatures=multiply.options.map(expression=>multiplyProbes.map(([price,qty])=>arithmetic(expression)(price,qty)).join(','));assert.equal(new Set(multiplySignatures).size,4,'Multiply choices must have distinct arithmetic meanings');for(const [price,qty] of multiplyProbes){assert.equal(multiply.options.filter(expression=>arithmetic(expression)(price,qty)===price*qty).length,1,`Multiply must have exactly one correct choice for price=${price}, qty=${qty}`)}const having=L.templates.find(t=>t.id==='group-having').build({b:3});assert(having.options[2].includes('>= 3'),'HAVING near-miss must exclude groups equal to the threshold count');
const entries=L.templates.map(t=>{const q=t.build({a:7,b:3}),key=`${t.domain}/${t.id}`;assert.equal(q.options.length,4,`${key} must have four options`);assert.equal(new Set(q.options).size,4,`${key} has duplicate options`);assert.equal(q.answer,0,`${key} must have one keyed best option`);assert(q.explanation.length>25,`${key} needs explanatory feedback`);assert(review[key],`${key} needs manual reviewer notes`);return{domain:t.domain,id:t.id,title:q.title,prompt:q.prompt,options:q.options.map((text,index)=>({index:index+1,role:index===q.answer?'keyed best answer':'distractor',text})),answer:q.answer+1,explanation:q.explanation,reviewNote:review[key]}});
const result={templates:entries.length,method:'Manual review notes paired with structural checks; semantic plausibility is for reviewer inspection, not a heuristic score.',entries};
const out=path.join(__dirname,'results','distractor-audit.json');fs.mkdirSync(path.dirname(out),{recursive:true});fs.writeFileSync(out,JSON.stringify(result,null,2));
console.log(`Reviewed ${entries.length} lesson templates; wrote ${out}`);
