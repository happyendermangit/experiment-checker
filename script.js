
function checkExperiment() {
    var experimentName = document.getElementById("experimentName").value;
    var guildId = document.getElementById("guildId").value;
    var args = experimentName + ":" + guildId;
    let response = check(args)
    if (response.startsWith('❌')){
     document.getElementById('res').innerHTML = `  <div id="error"  style="width:fit-content;background-color: #e74c3c; color: white; padding: 10px; border-radius: 5px;">
     <div style="font-size: 25px;">
       <span style="margin-right: 10px;">🚫</span>
       Oops
       <span style="margin-right: 10px;">🚫</span>
   
     </div>
     <div style="font-size: 18px; margin-top: 5px;" id="text-error">
       You don't have the experiment {experiment} in the guild {id}.
     </div>
   </div>  <br>`.replace('{experiment}',"<a href='https://github.com/happyendermangit/experiment-checker-assyst/tree/main/experiments/"+experimentName+".md'>"+experimentName+"</a>").replace('{id}',guildId)    
     }
     else{
       if (response.startsWith('✅')){
       document.getElementById('res').innerHTML = `   <div id="success"  style="width:fit-content;background-color: #29c46b ; color: white; padding: 10px; border-radius: 5px;">
   <div style="font-size: 25px;">
     <span style="margin-right: 10px;">🎉</span>
     Congratulations! 
     <span style="margin-right: 10px;">🎉</span>

   </div>
   <div style="font-size: 18px; margin-top: 5px;" id="text-success">
     You have the experiment {experiment} in the guild {id}.
   </div>
 </div>
 `.replace('{experiment}',"<a href='https://github.com/happyendermangit/experiment-checker-assyst/tree/main/experiments/"+experimentName+".md'>"+experimentName+"</a>").replace('{id}',guildId)  
     }
   }
   if (response.startsWith('✖️')){
       document.getElementById('res').innerHTML = `    <div id="error"  style="width:fit-content;background-color: #e74c3c; color: white; padding: 10px; border-radius: 5px;">
   <div style="font-size: 25px;">
     <span style="margin-right: 10px;">🚫</span>
     Oops! 
     <span style="margin-right: 10px;">🚫</span>

   </div>
   <div style="font-size: 18px; margin-top: 5px;" id="text-success">
     The experiment {experiment} doesn't exist!.
   </div>
 </div>
 `.replace('{experiment}',experimentName.bold())  
     }
   
   
  }
  const data = [{"2021-06_guild_role_subscriptions":[{"buckets":{"1":{"rollout":[{"min":0,"max":4750},{"min":4750,"max":5200},{"min":5200,"max":5700},{"min":5700,"max":6200},{"min":6200,"max":7200}]},"-1":{"rollout":[{"min":7200,"max":10000}]}},"filters":[{"type":"guild_in_range_by_hash","hash_key":1405831955,"target":10000}]},{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2021-09_watch_together_rollout":[{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2021-10_study_group":[{"buckets":{"1":{"rollout":[{"min":3333,"max":6666}]},"-1":{"rollout":[{"min":6666,"max":9999},{"min":9999,"max":10000}]}},"filters":[]}]},{"2021-11_member_verification_manual_approval":[{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2021-11_hub_events":[{"buckets":{"-1":{"rollout":[{"min":0,"max":3333},{"min":3333,"max":6666},{"min":6666,"max":9999},{"min":9999,"max":10000}]}},"filters":[{"type":"guild_hub_types","hub_types":[2]}]}]},{"2021-12_soundboard":[{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2022-01_guild_role_subscription_multigroup":[{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2022-01_guild_role_subscription_trials":[{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_in_range_by_hash","hash_key":770139301,"target":10000}]},{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2022-01_home_tab_guild":[{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2022-02_guild_audit_log_guild":[{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2022-03_role_subscription_analytics_portal":[{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2022-04_guild_role_subscription_purchase_feedback_loop":[{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2022-05_mobile_web_role_subscription_purchase_page":[{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2022-06_community_admin_server":[{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["COMMUNITY"]},{"type":"guild_member_count_range","min_id":500,"max_id":null}]}]},{"2022-06_free_sticker_slots_design_updates":[{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2022-07_guild_role_subscriptions_variable_max_tiers":[{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2022-07_voice_in_threads":[{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["VOICE_IN_THREADS"]}]}]},{"2022-07_report_raids":[{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_in_range_by_hash","hash_key":1055563741,"target":10000}]},{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2022-07_invites_disabled":[{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["PARTNERED"]}]},{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["COMMUNITY"]}]}]},{"2022-09_creator_monetization_raven":[{"buckets":{"1":{"rollout":[{"min":0,"max":1000},{"min":1000,"max":2000},{"min":2000,"max":3000},{"min":3000,"max":5000},{"min":5000,"max":10000}]}},"filters":[]}]},{"2022-10_creator_store_pages":[{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2022-10_communities_multi":[{"buckets":{"1":{"rollout":[{"min":4000,"max":6000}]},"2":{"rollout":[{"min":6000,"max":8000}]},"-1":{"rollout":[{"min":0,"max":2000},{"min":8000,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["COMMUNITY_EXP_LARGE_UNGATED"]}]},{"buckets":{"1":{"rollout":[{"min":4000,"max":6000}]},"2":{"rollout":[{"min":6000,"max":8000}]},"-1":{"rollout":[{"min":0,"max":2000},{"min":8000,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["COMMUNITY_EXP_LARGE_GATED"]}]}]},{"2022-10_text_in_stage":[{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["COMMUNITY"]},{"type":"guild_in_range_by_hash","hash_key":848173753,"target":10000}]},{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["COMMUNITY"]}]},{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2022-10_guild_raid_messaging":[{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["COMMUNITY"]}]}]},{"2022-11_creator_monetization_onboarding_waitlist":[{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_in_range_by_hash","hash_key":987884927,"target":10000}]},{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2022-11_automod_non_community_guilds_release":[{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["COMMUNITY"]}]},{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_member_count_range","min_id":null,"max_id":300},{"type":"guild_in_range_by_hash","hash_key":2608013421,"target":10000}]},{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_member_count_range","min_id":null,"max_id":300}]},{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_in_range_by_hash","hash_key":2608013421,"target":10000}]},{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2022-11_default_disable_mass_mention":[{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["COMMUNITY"]},{"type":"guild_member_count_range","min_id":5000,"max_id":null}]},{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2022-12_mobile_guild_role_subscription_team_setup":[{"buckets":{"1":{"rollout":[{"min":0,"max":1000}]},"-1":{"rollout":[{"min":1000,"max":10000}]}},"filters":[]}]},{"2022-12_mention_raid_limit":[{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["PARTNERED"]}]},{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["COMMUNITY"]}]}]},{"2022-12_home_header_redesign":[{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2023-01_forums_activity_2_guild":[{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2023-01_mention_raid_notice":[{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["PARTNERED"]}]},{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["COMMUNITY"]}]}]},{"2023-01_forums_non_community":[{"buckets":{"1":{"rollout":[{"min":2500,"max":5000}]},"-1":{"rollout":[{"min":5000,"max":10000}]}},"filters":[]}]},{"2023-01_shared_canvas":[{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["INTERNAL_EMPLOYEE_ONLY"]}]},{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["SHARED_CANVAS_FRIENDS_AND_FAMILY_TEST"]}]},{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2023-01_voice_messages":[{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_member_count_range","min_id":0,"max_id":200}]}]},{"2023-02_server_subscriptions_iap":[{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]},{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2023-02_onboarding_home_admin":[{"buckets":{"1":{"rollout":[{"min":5000,"max":10000}]}},"filters":[{"type":"guild_in_range_by_hash","hash_key":748249793,"target":10000}]},{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2023-02_burst_reaction_guild_experiment":[{"buckets":{"4":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["INTERNAL_EMPLOYEE_ONLY"]}]},{"buckets":{"1":{"rollout":[{"min":0,"max":100},{"min":200,"max":600}]},"4":{"rollout":[{"min":100,"max":200},{"min":600,"max":1000},{"min":1000,"max":1500},{"min":1500,"max":2000}]},"-1":{"rollout":[{"min":2000,"max":10000}]}},"filters":[]}]},{"2023-02_stage_boosting":[{"buckets":{"1":{"rollout":[{"min":0,"max":500},{"min":500,"max":5000},{"min":5000,"max":9500},{"min":9500,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["COMMUNITY"]},{"type":"guild_in_range_by_hash","hash_key":1816004721,"target":10000}]},{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["COMMUNITY"]}]},{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2023-02_app_recommendations_server_checklist":[{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2023-02_p13n_summarization":[{"buckets":{"2":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["SUMMARIES_ENABLED_GA"]}]},{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["SUMMARIES_ENABLED"]}]}]},{"2023-02_automod_custom_message":[{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["PARTNERED"]}]},{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2023-02_free_form":[{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2023-02_automod_on_user_profile":[{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["AUTOMOD_TRIGGER_USER_PROFILE"]}]}]},{"2023-02_onboardingdropdowns":[{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_in_range_by_hash","hash_key":3884904940,"target":10000}]},{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2023-02_onboarding_advanced_mode":[{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["COMMUNITY_CANARY"]},{"type":"guild_in_range_by_hash","hash_key":2544556038,"target":10000}]},{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["COMMUNITY_CANARY"]}]},{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_in_range_by_hash","hash_key":2544556038,"target":10000}]},{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2023-03_split_permissions":[{"buckets":{"1":{"rollout":[{"min":0,"max":100}]},"-1":{"rollout":[{"min":200,"max":10000}]}},"filters":[]}]},{"2023-03_cr_accept_new_terms":[{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2023-03_server_subscriptions_tier_templates":[{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2023-03_self_demonetization":[{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2023-03_home_deprecation":[{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_in_range_by_hash","hash_key":280214844,"target":10000}]},{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2023-03_clyde_ai":[{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["CLYDE_EXPERIMENT_ENABLED","INTERNAL_EMPLOYEE_ONLY"]}]},{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["COMMUNITY"]}]},{"buckets":{"1":{"rollout":[{"min":0,"max":100}]},"3":{"rollout":[{"min":200,"max":1200}]},"-1":{"rollout":[{"min":2200,"max":10000}]}},"filters":[{"type":"guild_member_count_range","min_id":0,"max_id":100}]},{"buckets":{"3":{"rollout":[{"min":0,"max":1000}]},"-1":{"rollout":[{"min":2000,"max":10000}]}},"filters":[{"type":"guild_member_count_range","min_id":101,"max_id":200}]}]},{"2023-03_improved_message_markdown_guild":[{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2023-03_guild_safety_settings":[{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["COMMUNITY"]}]}]},{"2023-03_mj_chat_bar_guild":[{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2023-03_guild_media_channel":[{"buckets":{"1":{"rollout":[{"min":0,"max":2500}]},"-1":{"rollout":[{"min":2500,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["ROLE_SUBSCRIPTIONS_ENABLED"]}]},{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2023-03_onboarding_upsell_lifecycle":[{"buckets":{"1":{"rollout":[{"min":2400,"max":4400}]},"-1":{"rollout":[{"min":0,"max":400},{"min":4400,"max":10000}]}},"filters":[{"type":"guild_member_count_range","min_id":5000,"max_id":null},{"type":"guild_in_range_by_hash","hash_key":485475819,"target":10000}]},{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_member_count_range","min_id":5000,"max_id":null}]},{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2023-03_onboarding_soft_requirement_for_partnership":[{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_in_range_by_hash","hash_key":3738976194,"target":10000}]},{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2023-04_fast_new_channels":[{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["COMMUNITY_CANARY"]}]},{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2023-04_guild_alert_mode":[{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2023-02_guest_voice_invites":[{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_vanity_url"},{"type":"guild_member_count_range","min_id":1,"max_id":50}]}]},{"2023-02_temporary_invite_discoverability":[{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_vanity_url"},{"type":"guild_member_count_range","min_id":1,"max_id":50}]}]},{"2023-04_growing_friend_guild_community_upsell":[{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2022-11_default_to_server_vanity_v2":[{"buckets":{"1":{"rollout":[{"min":0,"max":5000},{"min":5000,"max":9000},{"min":9000,"max":10000}]}},"filters":[{"type":"guild_in_range_by_hash","hash_key":2507971540,"target":10000}]},{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2023-04_mobile_remix_v2":[{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]}]
function between_(num,min,max){
return num >= min && num <= max;
}
function hash(x) {
var e, a = 0, c = 3432918353, h = 461845907, r = 0;
for (var t = x; r < t.length - t.length % 4; r += 4) {
  e = 5 * (65535 & (e = (e ^= a = (65535 & (a = (a = (65535 & (a = 255 & t.charCodeAt(r) | (255 & t.charCodeAt(r + 1)) << 8 | (255 & t.charCodeAt(r + 2)) << 16 | (255 & t.charCodeAt(r + 3)) << 24)) * c + (((a >>> 16) * c & 65535) << 16)) << 15 | a >>> 17)) * h + (((a >>> 16) * h & 65535) << 16)) << 13 | e >>> 19)) + ((5 * (e >>> 16) & 65535) << 16) + 3864292196;
}
switch (a = 0, t.length % 4) {
  case 3:
    a ^= (255 & t.charCodeAt(r + 2)) << 16;
  case 2:
    a ^= (255 & t.charCodeAt(r + 1)) << 8;
  case 1:
    e ^= a = (65535 & (a = (a = (65535 & (a ^= 255 & t.charCodeAt(r))) * c + (((a >>> 16) * c & 65535) << 16)) << 15 | a >>> 17)) * h + (((a >>> 16) * h & 65535) << 16);
}
e ^= t.length;
e = 2246822507 * (65535 & (e ^= e >>> 16)) + ((2246822507 * (e >>> 16) & 65535) << 16);
e = 3266489909 * (65535 & (e ^= e >>> 13)) + ((3266489909 * (e >>> 16) & 65535) << 16);
e ^= e >>> 16;
return (e >>> 0) % 1e4;
}

for (let d of data) {
  let id = Object.keys(d)[0]
   document.getElementById('experimentsIds').innerHTML += `<option value="${id}">${id}</option>`;
}
function check(args) {
let splited = args.split(':');
let experiment = splited[0];
let murmurhash3 = hash(args);
let ids = [];
console.log(splited[0]);
for (let d of data) {
    ids.push(Object.keys(d)[0]);
}
console.log(ids);
if (ids.indexOf(experiment) !== -1) {
    let rollouts = data[ids.indexOf(experiment)][experiment];
    console.log(rollouts);
    let result = '';
    for (let e of rollouts) {
        if (e.filters[0] && e.filters[0].guild_features) {
            continue;
        }
        for (let b of Object.keys(e.buckets)) {
            let bucket = e.buckets[b];
            if (between_(murmurhash3, bucket.rollout[0].min, bucket.rollout[0].max)) {
                result = (b === "-1") ? "❌ You don't have " + experiment + ` in ${splited[1]} (DEBUG: ||${murmurhash3}||)` : "✅ You do have " + `${experiment} in ${splited[1]} (DEBUG: ||${murmurhash3}||)`;
                if (result.startsWith('✅')) {
                    result += `(Treatment ${b})`;
                }
                return result;
            }
        }
    }
    return "❌";
} else {
    return "✖️ Experiment doesn't exist!";
}
}



