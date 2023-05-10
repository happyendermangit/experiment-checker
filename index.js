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
    for (let d of data) {
        ids.push(Object.keys(d)[0]);
    }
    console.log(ids);
    if (ids.indexOf(experiment) !== -1) {
        let rollouts = data[ids.indexOf(experiment)][experiment];
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
                    result;
                }
            }
        }
    } else {
        let res = "❌ Experiment doesn't exist!";
        res;
    }
}
