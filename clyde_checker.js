
  const data = [{"2023-03_clyde_ai":[{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["CLYDE_EXPERIMENT_ENABLED","INTERNAL_EMPLOYEE_ONLY"]}]},{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["COMMUNITY"]}]},{"buckets":{"1":{"rollout":[{"min":0,"max":100}]},"3":{"rollout":[{"min":200,"max":1200}]},"-1":{"rollout":[{"min":2200,"max":10000}]}},"filters":[{"type":"guild_member_count_range","min_id":0,"max_id":100}]},{"buckets":{"3":{"rollout":[{"min":0,"max":1000}]},"-1":{"rollout":[{"min":2000,"max":10000}]}},"filters":[{"type":"guild_member_count_range","min_id":101,"max_id":200}]}]},{"2023-03_improved_message_markdown_guild":[{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2023-03_guild_safety_settings":[{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["COMMUNITY"]}]}]},{"2023-03_mj_chat_bar_guild":[{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2023-03_guild_media_channel":[{"buckets":{"1":{"rollout":[{"min":0,"max":2500}]},"-1":{"rollout":[{"min":2500,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["ROLE_SUBSCRIPTIONS_ENABLED"]}]},{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2023-03_onboarding_upsell_lifecycle":[{"buckets":{"1":{"rollout":[{"min":2400,"max":4400}]},"-1":{"rollout":[{"min":0,"max":400},{"min":4400,"max":10000}]}},"filters":[{"type":"guild_member_count_range","min_id":5000,"max_id":null},{"type":"guild_in_range_by_hash","hash_key":485475819,"target":10000}]},{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_member_count_range","min_id":5000,"max_id":null}]},{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2023-03_onboarding_soft_requirement_for_partnership":[{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_in_range_by_hash","hash_key":3738976194,"target":10000}]},{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2023-04_fast_new_channels":[{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_feature","guild_features":["COMMUNITY_CANARY"]}]},{"buckets":{"1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2023-04_guild_alert_mode":[{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2023-02_guest_voice_invites":[{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_vanity_url"},{"type":"guild_member_count_range","min_id":1,"max_id":50}]}]},{"2023-02_temporary_invite_discoverability":[{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[{"type":"guild_has_vanity_url"},{"type":"guild_member_count_range","min_id":1,"max_id":50}]}]},{"2023-04_growing_friend_guild_community_upsell":[{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2022-11_default_to_server_vanity_v2":[{"buckets":{"1":{"rollout":[{"min":0,"max":5000},{"min":5000,"max":9000},{"min":9000,"max":10000}]}},"filters":[{"type":"guild_in_range_by_hash","hash_key":2507971540,"target":10000}]},{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]},{"2023-04_mobile_remix_v2":[{"buckets":{"-1":{"rollout":[{"min":0,"max":10000}]}},"filters":[]}]}]
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
if (args.split(':')[0] && args && args.split(':')[1]){
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
    return "❌ You don't have " + experiment + ` in ${splited[1]} (DEBUG: ||${murmurhash3}||)`;
} else {
    return "✖️ Experiment doesn't exist!";
}
}else{
  return "❌ Enter the guild id!"
}
}



