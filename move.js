const MOVES = {
    fast: {
        /* ノーマル (Normal) */
        "あくび": {
            nameEn: "Yawn",
            type: "ノーマル", pwr: 0, eng: 12, turns: 4 },
        "いあいぎり": {
            nameEn: "Cut",
            type: "ノーマル", pwr: 3, eng: 2, turns: 1 },
        "たいあたり": {
            nameEn: "Tackle",
            type: "ノーマル", pwr: 3, eng: 3, turns: 1 },
        "でんこうせっか": {
            nameEn: "Quick Attack",
            type: "ノーマル", pwr: 5, eng: 8, turns: 2 },
        "とっしん": {
            nameEn: "Take Down",
            type: "ノーマル", pwr: 14, eng: 9, turns: 3 },
        "はたく": {
            nameEn: "Pound",
            type: "ノーマル", pwr: 4, eng: 4, turns: 2 },
        "ひっかく": {
            nameEn: "Scratch",
            type: "ノーマル", pwr: 3, eng: 4, turns: 1 },
        "プレゼント": {
            nameEn: "Present",
            type: "ノーマル", pwr: 3, eng: 12, turns: 3 },
        "へんしん": {
            nameEn: "Transform",
            type: "ノーマル", pwr: 0, eng: 0, turns: 3 },
        "ロックオン": {
            nameEn: "Lock-On",
            type: "ノーマル", pwr: 1, eng: 5, turns: 1 },

        /* ひこう (Flying) */
        "エアスラッシュ": {
            nameEn: "Air Slash",
            type: "ひこう", pwr: 9, eng: 9, turns: 3 },
        "かぜおこし": {
            nameEn: "Gust",
            type: "ひこう", pwr: 16, eng: 14, turns: 4 },
        "つつく": {
            nameEn: "Peck",
            type: "ひこう", pwr: 6, eng: 8, turns: 2 },
        "つばさでうつ": {
            nameEn: "Wing Attack",
            type: "ひこう", pwr: 5, eng: 8, turns: 2 },
        "めざめるパワー(飛)": {
            nameEn: "Hidden Power (Flying)",
            type: "ひこう", pwr: 9, eng: 8, turns: 3 },

        /* ほのお (Fire) */
        "ひのこ": {
            nameEn: "Ember",
            type: "ほのお", pwr: 4, eng: 9, turns: 2 },
        "ほのおのうず": {
            nameEn: "Fire Spin",
            type: "ほのお", pwr: 11, eng: 10, turns: 3 },
        "ほのおのキバ": {
            nameEn: "Fire Fang",
            type: "ほのお", pwr: 8, eng: 6, turns: 2 },
        "めざめるパワー(炎)": {
            nameEn: "Hidden Power (Fire)",
            type: "ほのお", pwr: 9, eng: 8, turns: 3 },
        "やきつくす": {
            nameEn: "Incinerate",
            type: "ほのお", pwr: 20, eng: 20, turns: 5 },

        /* みず (Water) */
        "あわ": {
            nameEn: "Bubble",
            type: "みず", pwr: 8, eng: 11, turns: 3 },
        "たきのぼり": {
            nameEn: "Waterfall",
            type: "みず", pwr: 11, eng: 10, turns: 3 },
        "はねる": {
            nameEn: "Splash",
            type: "みず", pwr: 0, eng: 12, turns: 4 },
        "みずしゅりけん": {
            nameEn: "Water Shuriken",
            type: "みず", pwr: 6, eng: 14, turns: 3 },
        "みずでっぽう": {
            nameEn: "Water Gun",
            type: "みず", pwr: 3, eng: 3, turns: 1 },
        "めざめるパワー(水)": {
            nameEn: "Hidden Power (Water)",
            type: "みず", pwr: 9, eng: 8, turns: 3 },

        /* くさ (Grass) */
        "このは": {
            nameEn: "Leafage",
            type: "くさ", pwr: 6, eng: 8, turns: 2 },
        "タネマシンガン": {
            nameEn: "Bullet Seed",
            type: "くさ", pwr: 5, eng: 13, turns: 3 },
        "つるのムチ": {
            nameEn: "Vine Whip",
            type: "くさ", pwr: 5, eng: 8, turns: 2 },
        "はっぱカッター": {
            nameEn: "Razor Leaf",
            type: "くさ", pwr: 9, eng: 4, turns: 2 },
        "マジカルリーフ": {
            nameEn: "Magical Leaf",
            type: "くさ", pwr: 10, eng: 10, turns: 3 },
        "めざめるパワー(草)": {
            nameEn: "Hidden Power (Grass)",
            type: "くさ", pwr: 9, eng: 8, turns: 3 },

        /* でんき (Electoric) */
        "かみなりのキバ": {
            nameEn: "Thunder Fang",
            type: "でんき", pwr: 8, eng: 6, turns: 2 },
        "スパーク": {
            nameEn: "Spark",
            type: "でんき", pwr: 5, eng: 7, turns: 2 },
        "チャージビーム": {
            nameEn: "Charge Beam",
            type: "でんき", pwr: 6, eng: 11, turns: 3 },
        "でんきショック": {
            nameEn: "Thunder Shock",
            type: "でんき", pwr: 4, eng: 9, turns: 2 },
        "ボルトチェンジ": {
            nameEn: "Volt Switch",
            type: "でんき", pwr: 14, eng: 16, turns: 4 },
        "めざめるパワー(電)": {
            nameEn: "Hidden Power (Electric)",
            type: "でんき", pwr: 9, eng: 8, turns: 3 },

        /* こおり (Ice) */
        "こおりのいぶき": {
            nameEn: "Frost Breath",
            type: "こおり", pwr: 7, eng: 5, turns: 2 },
        "こおりのキバ": {
            nameEn: "Ice Fang",
            type: "こおり", pwr: 8, eng: 6, turns: 2 },
        "こおりのつぶて": {
            nameEn: "Iche Shard",
            type: "こおり", pwr: 9, eng: 10, turns: 3 },
        "こなゆき": {
            nameEn: "Powder Snow",
            type: "こおり", pwr: 6, eng: 8, turns: 2 },
        "めざめるパワー(氷)": {
            nameEn: "Hidden Power (Ice)",
            type: "こおり", pwr: 9, eng: 8, turns: 3 },

        /* かくとう (Fighthing) */
        "いわくだき": {
            nameEn: "Rock Smash",
            type: "かくとう", pwr: 9, eng: 7, turns: 3 },
        "カウンター": {
            nameEn: "Counter",
            type: "かくとう", pwr: 8, eng: 6, turns: 2 },
        "からてチョップ": {
            nameEn: "Karate Chop",
            type: "かくとう", pwr: 5, eng: 9, turns: 2 },
        "けたぐり": {
            nameEn: "Low Kick",
            type: "かくとう", pwr: 6, eng: 8, turns: 2 },
        "にどげり": {
            nameEn: "Double Kick",
            type: "かくとう", pwr: 8, eng: 12, turns: 3 },
        "はっけい": {
            nameEn: "Force Palm",
            type: "かくとう", pwr: 13, eng: 10, turns: 3 },
        "めざめるパワー(格)": {
            nameEn: "Hidden Power (Fighting)",
            type: "かくとう", pwr: 9, eng: 8, turns: 3 },

        /* どく (Poison) */
        "どくづき": {
            nameEn: "Poison Jab",
            type: "どく", pwr: 7, eng: 7, turns: 2 },
        "どくばり": {
            nameEn: "Poison Sting",
            type: "どく", pwr: 4, eng: 9, turns: 2 },
        "めざめるパワー(毒)": {
            nameEn: "Hidden Power (Poison)",
            type: "どく", pwr: 9, eng: 8, turns: 3 },
        "ようかいえき": {
            nameEn: "Acid",
            type: "どく", pwr: 6, eng: 8, turns: 2 },

        /* じめん (Ground) */
        "すなかけ": {
            nameEn: "Sand Attack",
            type: "じめん", pwr: 2, eng: 4, turns: 1 },
        "どろかけ": {
            nameEn: "Mud-Slap",
            type: "じめん", pwr: 11, eng: 10, turns: 3 },
        "マッドショット": {
            nameEn: "Mud Shot",
            type: "じめん", pwr: 3, eng: 9, turns: 2 },
        "めざめるパワー(地)": {
            nameEn: "Hidden Power (Ground)",
            type: "じめん", pwr: 9, eng: 8, turns: 3 },

        /* エスパー (Psychic) */
        "サイコウェーブ": {
            nameEn: "Psywave",
            type: "エスパー", pwr: 3, eng: 4, turns: 1 },
        "サイコカッター": {
            nameEn: "Psycho Cut",
            type: "エスパー", pwr: 4, eng: 9, turns: 2 },
        "しねんのずつき": {
            nameEn: "Zen Headbutt",
            type: "エスパー", pwr: 8, eng: 6, turns: 3 },
        "じんつうりき": {
            nameEn: "Extrasensory",
            type: "エスパー", pwr: 8, eng: 10, turns: 3 },
        "ねんりき": {
            nameEn: "Confusion",
            type: "エスパー", pwr: 16, eng: 14, turns: 4 },
        "めざめるパワー(超)": {
            nameEn: "Hidden Power (Psychic)",
            type: "エスパー", pwr: 9, eng: 8, turns: 3 },

        /* むし (Bug) */
        "まとわりつく": {
            nameEn: "Infestation",
            type: "むし", pwr: 10, eng: 12, turns: 3 },
        "むしくい": {
            nameEn: "Bug Bite",
            type: "むし", pwr: 4, eng: 3, turns: 1 },
        "むしのていこう": {
            nameEn: "Struggle Bug",
            type: "むし", pwr: 9, eng: 8, turns: 3 },
        "めざめるパワー(虫)": {
            nameEn: "Hidden Power (Bug)",
            type: "むし", pwr: 9, eng: 8, turns: 3 },
        "れんぞくぎり": {
            nameEn: "Fury Cutter",
            type: "むし", pwr: 3, eng: 4, turns: 1 },

        /* いわ (Rock) */
        "いわおとし": {
            nameEn: "Rock Throw",
            type: "いわ", pwr: 8, eng: 5, turns: 2 },
        "うちおとす": {
            nameEn: "Smack Down",
            type: "いわ", pwr: 11, eng: 8, turns: 3 },
        "ころがる": {
            nameEn: "Rollout",
            type: "いわ", pwr: 7, eng: 13, turns: 3 },
        "めざめるパワー(岩)": {
            nameEn: "Hidden Power (Rock)",
            type: "いわ", pwr: 9, eng: 8, turns: 3 },

        /* ゴースト (Ghost) */
        "おどろかす": {
            nameEn: "Astonish",
            type: "ゴースト", pwr: 12, eng: 10, turns: 3 },
        "したでなめる": {
            nameEn: "Lick",
            type: "ゴースト", pwr: 3, eng: 3, turns: 1 },
        "シャドークロー": {
            nameEn: "Shadow Claw",
            type: "ゴースト", pwr: 6, eng: 8, turns: 2 },
        "たたりめ": {
            nameEn: "Hex",
            type: "ゴースト", pwr: 7, eng: 13, turns: 3 },
        "めざめるパワー(霊)": {
            nameEn: "Hidden Power (Ghost)",
            type: "ゴースト", pwr: 9, eng: 8, turns: 3 },

        /* ドラゴン (Dragon) */
        "ドラゴンテール": {
            nameEn: "Dragon Tail",
            type: "ドラゴン", pwr: 9, eng: 12, turns: 3 },
        "めざめるパワー(竜)": {
            nameEn: "Hidden Power (Dragon)",
            type: "ドラゴン", pwr: 9, eng: 8, turns: 3 },
        "りゅうのいぶき": {
            nameEn: "Dragon Breath",
            type: "ドラゴン", pwr: 3, eng: 4, turns: 1 },

        /* あく (Dark) */
        "かみつく": {
            nameEn: "Bite",
            type: "あく", pwr: 2, eng: 4, turns: 1 },
        "だましうち": {
            nameEn: "Feint Attack",
            type: "あく", pwr: 6, eng: 6, turns: 2 },
        "バークアウト": {
            nameEn: "Snarl",
            type: "あく", pwr: 5, eng: 13, turns: 3 },
        "ふいうち": {
            nameEn: "Sucker Punch",
            type: "あく", pwr: 8, eng: 7, turns: 2 },
        "めざめるパワー(悪)": {
            nameEn: "Hidden Power (Dark)",
            type: "あく", pwr: 9, eng: 8, turns: 3 },

        /* はがね (Steel) */
        "アイアンテール": {
            nameEn: "Iron Tail",
            type: "はがね", pwr: 10, eng: 7, turns: 3 },
        "きんぞくおん": {
            nameEn: "Metal Sound",
            type: "はがね", pwr: 5, eng: 8, turns: 2 },
        "はがねのつばさ": {
            nameEn: "Steel Wing",
            type: "はがね", pwr: 7, eng: 5, turns: 2 },
        "バレットパンチ": {
            nameEn: "Bullet Punch",
            type: "はがね", pwr: 7, eng: 7, turns: 2 },
        "めざめるパワー(鋼)": {
            nameEn: "Hidden Power (Steel)",
            type: "はがね", pwr: 9, eng: 8, turns: 3 },
        "メタルクロー": {
            nameEn: "Metal Claw",
            type: "はがね", pwr: 5, eng: 7, turns: 2 },

        /* フェアリー (Fairy) */
        "あまえる": {
            nameEn: "Charm",
            type: "フェアリー", pwr: 12, eng: 8, turns: 3 },
        "ジオコントロール": {
            nameEn: "Geomancy",
            type: "フェアリー", pwr: 8, eng: 13, turns: 3 },
        "ようせいのかぜ": {
            nameEn: "Fairy Wind",
            type: "フェアリー", pwr: 4, eng: 9, turns: 2 }
    },

    special: {
        /* ノーマル (Normal) */
        "ウェザーボール(ノーマル)": {
            nameEn: "Weather Ball (Normal)",
            type: "ノーマル", pwr: 60, eng: 35 },
        "おんがえし": {
            nameEn: "Return",
            type: "ノーマル", pwr: 130, eng: 70 },
        "ギガインパクト": {
            nameEn: "Giga Impact",
            type: "ノーマル", pwr: 150, eng: 80 },
        "スピードスター": {
            nameEn: "Swift",
            type: "ノーマル", pwr: 55, eng: 35 },
        "つのでつく": {
            nameEn: "Horn Attack",
            type: "ノーマル", pwr: 40, eng: 35 },
        "テクノバスター(ノーマル)": {
            nameEn: "Techno Blast (Normal)",
            type: "ノーマル", pwr: 120, eng: 55 },
        "とっておき": {
            nameEn: "Last Resort",
            type: "ノーマル", pwr: 90, eng: 55 },
        "トライアタック": {
            nameEn: "Tri Attack",
            type: "ノーマル", pwr: 65, eng: 50,
            effects: [{ target: "opponent", stat: "atk", stage: -1},
                      { target: "opponent", stat: "def", stage: -1}],
            chance: 0.5 },
        "にぎりつぶす": {
            nameEn: "Crush Grip",
            type: "ノーマル", pwr: 110, eng: 50 },
        "のしかかり": {
            nameEn: "Body Slam",
            type: "ノーマル", pwr: 65, eng: 40 },
        "はかいこうせん": {
            nameEn: "Hyper Beam",
            type: "ノーマル", pwr: 150, eng: 80 },
        "ばくおんぱ": {
            nameEn: "Boomburst",
            type: "ノーマル", pwr: 150, eng: 70 },
        "はさむ": {
            nameEn: "VIse Grip",
            type: "ノーマル", pwr: 70, eng: 40 },
        "ひっさつまえば": {
            nameEn: "Hyper Fang",
            type: "ノーマル", pwr: 80, eng: 50 },
        "ふみつけ": {
            nameEn: "Stomp",
            type: "ノーマル", pwr: 55, eng: 40 },
        "まきつく": {
            nameEn: "Wrap",
            type: "ノーマル", pwr: 70, eng: 45,
            effects: [{ target: "opponent", stat: "def", stage: -1}],
            chance: 1.0 },
        "やつあたり": {
            nameEn: "Frustration",
            type: "ノーマル", pwr: 10, eng: 70 },
        "ロケットずつき": {
            nameEn: "Skull Bash",
            type: "ノーマル", pwr: 130, eng: 75,
            effects: [{ target: "self",     stat: "def", stage:  1}],
            chance: 1.0 },
        "わるあがき": {
            nameEn: "Struggle",
            type: "ノーマル", pwr: 35, eng: 100 },

        /* ひこう (Flying) */
        "アクロバット": {
            nameEn: "Acrobatics",
            type: "ひこう", pwr: 110, eng: 55 },
        "エアカッター": {
            nameEn: "Air Cutter",
            type: "ひこう", pwr: 60, eng: 40,
            effects: [{ target: "self",     stat: "atk", stage:  1}],
            chance: 0.125 },
        "エアロブラスト": {
            nameEn: "Aeroblast",
            type: "ひこう", pwr: 170, eng: 75,
            effects: [{ target: "self",     stat: "atk", stage: 2}],
            chance: 0.125 },
        "ガリョウテンセイ": {
            nameEn: "Dragon Ascent",
            type: "ひこう", pwr: 110, eng: 45,
            effects: [{ target: "self",     stat: "def", stage: -1}],
            chance: 1.0 },
        "くちばしキャノン": {
            nameEn: "Beak Blast",
            type: "ひこう", pwr: 110, eng: 55,
            effects: [{ target: "opponent", stat: "atk", stage: -1}],
            chance: 1.0 },
        "こがらしあらし": {
            nameEn: "Bleakwind Storm",
            type: "ひこう", pwr: 60, eng: 45,
            effects: [{ target: "opponent", stat: "atk", stage: -1}],
            chance: 1.0 },
        "ゴッドバード": {
            nameEn: "Sky Attack",
            type: "ひこう", pwr: 75, eng: 50 },
        "そらをとぶ": {
            nameEn: "Fly",
            type: "ひこう", pwr: 80, eng: 45 },
        "つばめがえし": {
            nameEn: "Aerial Ace",
            type: "ひこう", pwr: 60, eng: 45 },
        "デスウイング": {
            nameEn: "Oblivion Wing",
            type: "ひこう", pwr: 85, eng: 50,
            effects: [{ target: "self",     stat: "def", stage:  1}],
            chance: 1.0 },
        "ドリルくちばし": {
            nameEn: "Drill Peck",
            type: "ひこう", pwr: 70, eng: 40 },
        "ドリルくちばし+": {
            nameEn: "Drill Peck+",
            type: "ひこう", pwr: 60, eng: 35 },
        "フェザーダンス": {
            nameEn: "Feather Dance",
            type: "ひこう", pwr: 35, eng: 50,
            effects: [{ target: "opponent", stat: "atk", stage: -2}],
            chance: 1.0 },
        "ブレイブバード": {
            nameEn: "Brave Bird",
            type: "ひこう", pwr: 130, eng: 55,
            effects: [{ target: "self",     stat: "def", stage: -3}],
            chance: 1.0 },
        "ブレイブバード+": {
            nameEn: "Brave Bird+",
            type: "ひこう", pwr: 70, eng: 40,
            effects: [{ target: "self",     stat: "def", stage: -3}],
            chance: 1.0 },
        "ぼうふう": {
            nameEn: "Hurricane",
            type: "ひこう", pwr: 110, eng: 60 },

        /* ほのお (Fire) */
        "Vジェネレート": {
            nameEn: "V-create",
            type: "ほのお", pwr: 95, eng: 40,
            effects: [{ target: "self",     stat: "def", stage: -3}],
            chance: 1.0 },
        "ウェザーボール(炎)": {
            nameEn: "Weather Ball (Fire)",
            type: "ほのお", pwr: 60, eng: 35 },
        "オーバーヒート": {
            nameEn: "Overheat",
            type: "ほのお", pwr: 130, eng: 55,
            effects: [{ target: "self",     stat: "atk", stage: -2}],
            chance: 1.0 },
        "かえんぐるま": {
            nameEn: "Flame Wheel",
            type: "ほのお", pwr: 80, eng: 45 },
        "かえんほうしゃ": {
            nameEn: "Flamethrower",
            type: "ほのお", pwr: 90, eng: 55 },
        "かえんボール": {
            nameEn: "Psyro Ball",
            type: "ほのお", pwr: 75, eng: 40 },
        "クロスフレイム": {
            nameEn: "Fusion Flare",
            type: "ほのお", pwr: 90, eng: 45 },
        "せいなるほのお": {
            nameEn: "Sacred Fire",
            type: "ほのお", pwr: 130, eng: 65,
            effects: [{ target: "opponent", stat: "atk", stage: -1}],
            chance: 0.5 },
        "だいもんじ": {
            nameEn: "Fire Blast",
            type: "ほのお", pwr: 140, eng: 80 },
        "テクノバスター(炎)": {
            nameEn: "Techno Blast (Fire)",
            type: "ほのお", pwr: 120, eng: 55 },
        "ニトロチャージ": {
            nameEn: "Flame Charge",
            type: "ほのお", pwr: 65, eng: 50,
            effects: [{ target: "self",     stat: "atk", stage:  1}],
            chance: 1.0 },
        "ねっぷう": {
            nameEn: "",
            type: "ほのお", pwr: 75, eng: 45 },
        "はじけるほのお": {
            nameEn: "Flame Burst",
            type: "ほのお", pwr: 70, eng: 55 },
        "ビックリヘッド": {
            nameEn: "Mind Blown",
            type: "ほのお", pwr: 90, eng: 35,
            effects: [{ target: "self",     stat: "def", stage: -4}],
            chance: 1.0 },
        "ブラストバーン": {
            nameEn: "Blast Burn",
            type: "ほのお", pwr: 110, eng: 50 },
        "フレアソング": {
            nameEn: "Torch Song",
            type: "ほのお", pwr: 70, eng: 45,
            effects: [{ target: "self",     stat: "atk", stage:  1}],
            chance: 1.0 },
        "ブレイズキック": {
            nameEn: "Blaze Kick",
            type: "ほのお", pwr: 60, eng: 35 },
        "ほのおのパンチ": {
            nameEn: "Fire Punch",
            type: "ほのお", pwr: 60, eng: 40 },
        "マグマストーム": {
            nameEn: "Magma Storm",
            type: "ほのお", pwr: 65, eng: 40 },
        "マジカルフレイム": {
            nameEn: "Mystical Fire",
            type: "ほのお", pwr: 60, eng: 45,
            effects: [{ target: "opponent", stat: "atk", stage: -1}],
            chance: 1.0 },
        "マジカルフレイム+": {
            nameEn: "Mystical Fire+",
            type: "ほのお", pwr: 50, eng: 40,
            effects: [{ target: "opponent", stat: "atk", stage: -1}],
            chance: 1.0 },

        /* みず (Water) */
        "アクアジェット": {
            nameEn: "Aqua Jet",
            type: "みず", pwr: 70, eng: 40 },
        "アクアステップ": {
            nameEn: "Aqua Step",
            type: "みず", pwr: 55, eng: 40,
            effects: [{ target: "self",     stat: "atk", stage:  1}],
            chance: 1.0 },
        "アクアテール": {
            nameEn: "Aqua Tail",
            type: "みず", pwr: 55, eng: 35 },
        "アクアブレイク": {
            nameEn: "Liquidation",
            type: "みず", pwr: 70, eng: 45,
            effects: [{ target: "opponent", stat: "def", stage: -1}],
            chance: 0.3 },
        "アクアブレイク+": {
            nameEn: "Liquidation+",
            type: "みず", pwr: 55, eng: 40,
            effects: [{ target: "opponent", stat: "def", stage: -1}],
            chance: 0.3 },
        "ウェザーボール(水)": {
            nameEn: "Weather Ball (Water)",
            type: "みず", pwr: 60, eng: 35 },
        "うたかたのアリア": {
            nameEn: "Sparkling Aria",
            type: "みず", pwr: 80, eng: 45 },
        "オクタンほう": {
            nameEn: "Octazooka",
            type: "みず", pwr: 50, eng: 50,
            effects: [{ target: "opponent", stat: "atk", stage: -2}],
            chance: 0.5 },
        "クラブハンマー": {
            nameEn: "Crabhammer",
            type: "みず", pwr: 85, eng: 50,
            effects: [{ target: "self",     stat: "atk", stage: 2}],
            chance: 0.125 },
        "こんげんのはどう": {
            nameEn: "Origin Pulse",
            type: "みず", pwr: 130, eng: 60 },
        "シェルブレード": {
            nameEn: "Razor Shell",
            type: "みず", pwr: 35, eng: 35,
            effects: [{ target: "opponent", stat: "def", stage: -1}],
            chance: 0.5 },
        "しおみず": {
            nameEn: "Brine",
            type: "みず", pwr: 100, eng: 60 },
        "だくりゅう": {
            nameEn: "Muddy Water",
            type: "みず", pwr: 35, eng: 35,
            effects: [{ target: "opponent", stat: "atk", stage: -1}],
            chance: 0.3 },
        "テクノバスター(水)": {
            nameEn: "Techno Blast (Water)",
            type: "みず", pwr: 120, eng: 55 },
        "なみのり": {
            nameEn: "Surf",
            type: "みず", pwr: 75, eng: 45 },
        "なみのり+": {
            nameEn: "Surf+",
            type: "みず", pwr: 55, eng: 35 },
        "ねっとう": {
            nameEn: "Scald",
            type: "みず", pwr: 85, eng: 50,
            effects: [{ target: "opponent", stat: "atk", stage: -1}],
            chance: 0.3 },
        "ハイドロカノン": {
            nameEn: "Hydro Cannon",
            type: "みず", pwr: 80, eng: 40 },
        "ハイドロポンプ": {
            nameEn: "Hydro Pump",
            type: "みず", pwr: 130, eng: 75 },
        "バブルこうせん": {
            nameEn: "Bubble Beam",
            type: "みず", pwr: 50, eng: 50,
            effects: [{ target: "opponent", stat: "atk", stage: -1}],
            chance: 1.0 },
        "ひやみず": {
            nameEn: "Chilling Water",
            type: "みず", pwr: 60, eng: 45,
            effects: [{ target: "opponent", stat: "atk", stage: -1}],
            chance: 1.0 },
        "みずのはどう": {
            nameEn: "Water Pulse",
            type: "みず", pwr: 80, eng: 50 },

        /* くさ (Grass) */
        "エナジーボール": {
            nameEn: "Energy Ball",
            type: "くさ", pwr: 80, eng: 45,
            effects: [{ target: "opponent", stat: "def", stage: -1}],
            chance: 0.1 },
        "くさむすび": {
            nameEn: "Grass Knot",
            type: "くさ", pwr: 90, eng: 50 },
        "くさわけ": {
            nameEn: "Trailblaze",
            type: "くさ", pwr: 65, eng: 45,
            effects: [{ target: "self",     stat: "atk", stage:  1}],
            chance: 1.0 },
        "グラスミキサー": {
            nameEn: "Leaf Tornado",
            type: "くさ", pwr: 45, eng: 40,
            effects: [{ target: "opponent", stat: "atk", stage: -2}],
            chance: 0.5 },
        "シードフレア": {
            nameEn: "Seed Flare",
            type: "くさ", pwr: 130, eng: 75,
            effects: [{ target: "opponent", stat: "def", stage: -2}],
            chance: 0.4 },
        "ソーラービーム": {
            nameEn: "Solar Beam",
            type: "くさ", pwr: 150, eng: 80 },
        "タネばくだん": {
            nameEn: "Seed Bomb",
            type: "くさ", pwr: 55, eng: 40 },
        "タネばくだん+": {
            nameEn: "Seed Bomb+",
            type: "くさ", pwr: 60, eng: 40 },
        "ドラムアタック": {
            nameEn: "Drum Beating",
            type: "くさ", pwr: 60, eng: 35,
            effects: [{ target: "opponent", stat: "atk", stage: -1}],
            chance: 1.0 },
        "トリックフラワー": {
            nameEn: "Flower Trick",
            type: "くさ", pwr: 30, eng: 35,
            effects: [{ target: "self",     stat: "atk", stage:  1}],
            chance: 1.0 },
        "はなふぶき": {
            nameEn: "Petal Blizzard",
            type: "くさ", pwr: 110, eng: 65 },
        "ハードプラント": {
            nameEn: "Frenzy Plant",
            type: "くさ", pwr: 100, eng: 45 },
        "パワーウィップ": {
            nameEn: "Power Whip",
            type: "くさ", pwr: 90, eng: 50 },
        "リーフストーム": {
            nameEn: "Leaf Storm",
            type: "くさ", pwr: 130, eng: 55,
            effects: [{ target: "self",     stat: "atk", stage: -2}],
            chance: 1.0 },
        "リーフブレード": {
            nameEn: "Leaf Blade",
            type: "くさ", pwr: 70, eng: 35 },

        /* でんき (Electric) */
        "10まんボルト": {
            nameEn: "Thunderbolt",
            type: "でんき", pwr: 90, eng: 55 },
        "オーラぐるま(電)": {
            nameEn: "Aura Wheel (Electric)",
            type: "でんき", pwr: 100, eng: 45,
            effects: [{ target: "self",     stat: "atk", stage:  1}],
            chance: 1.0 },
        "かみなり": {
            nameEn: "Thunder",
            type: "でんき", pwr: 100, eng: 60 },
        "かみなりあらし": {
            nameEn: "Wildbolt Storm",
            type: "でんき", pwr: 60, eng: 45,
            effects: [{ target: "opponent", stat: "atk", stage: -1}],
            chance: 1.0 },
        "かみなりパンチ": {
            nameEn: "Thunder Punch",
            type: "でんき", pwr: 60, eng: 40 },
        "クロスサンダー": {
            nameEn: "Fusion Bolt",
            type: "でんき", pwr: 90, eng: 45 },
        "サンダープリズン": {
            nameEn: "Thunder Cage",
            type: "でんき", pwr: 60, eng: 40,
            effects: [{ target: "opponent", stat: "def", stage: -1}],
            chance: 0.2 },
        "テクノバスター(電)": {
            nameEn: "Techno Blast (Grass)",
            type: "でんき", pwr: 120, eng: 55 },
        "でんじほう": {
            nameEn: "Zap Cannon",
            type: "でんき", pwr: 150, eng: 80,
            effects: [{ target: "opponent", stat: "atk", stage: -1}],
            chance: 0.333 },
        "でんじほう+": {
            nameEn: "Zap Cannon",
            type: "でんき", pwr: 70, eng: 45,
            effects: [{ target: "opponent", stat: "atk", stage: -1}],
            chance: 1.0 },
        "パラボラチャージ": {
            nameEn: "Parabolic Charge",
            type: "でんき", pwr: 70, eng: 50,
            effects: [{ target: "self",     stat: "def", stage:  1}],
            chance: 1.0 },
        "ほうでん": {
            nameEn: "Discharge",
            type: "でんき", pwr: 55, eng: 40 },
        "ほうでん+": {
            nameEn: "Discharge",
            type: "でんき", pwr: 50, eng: 35 },
        "ボルテッカー": {
            nameEn: "Volt Tackle",
            type: "でんき", pwr: 90, eng: 40,
            effects: [{ target: "self",     stat: "def", stage: -1}],
            chance: 1.0 },
        "ボルテッカー+": {
            nameEn: "Volt Tackle",
            type: "でんき", pwr: 65, eng: 35,
            effects: [{ target: "self",     stat: "def", stage: -1}],
            chance: 1.0 },
        "ワイルドボルト": {
            nameEn: "Wild Charge",
            type: "でんき", pwr: 100, eng: 45,
            effects: [{ target: "self",     stat: "def", stage: -2}],
            chance: 1.0 },

        /* こおり (Ice) */
        "ウェザーボール(氷)": {
            nameEn: "Weather Ball (Ice)",
            type: "こおり", pwr: 60, eng: 35 },
        "オーロラビーム": {
            nameEn: "Aurora Beam",
            type: "こおり", pwr: 80, eng: 60 },
        "コールドフレア": {
            nameEn: "Ice Burn",
            type: "こおり", pwr: 120, eng: 60,
            effects: [{ target: "opponent", stat: "def", stage: -1}],
            chance: 0.3 },
        "こごえるかぜ": {
            nameEn: "Icy Wind",
            type: "こおり", pwr: 60, eng: 45,
            effects: [{ target: "opponent", stat: "atk", stage: -1}],
            chance: 1.0 },
        "こごえるせかい": {
            nameEn: "Glaciate",
            type: "こおり", pwr: 60, eng: 40,
            effects: [{ target: "opponent", stat: "atk", stage: -1}],
            chance: 1.0 },
        "つららばり": {
            nameEn: "Icicle Spear",
            type: "こおり", pwr: 70, eng: 40 },
        "テクノバスター(氷)": {
            nameEn: "Techno Blast (Ice)",
            type: "こおり", pwr: 120, eng: 55 },
        "トリプルアクセル": {
            nameEn: "Triple Axel",
            type: "こおり", pwr: 60, eng: 45,
            effects: [{ target: "self",     stat: "atk", stage:  1}],
            chance: 1.0 },
        "ふぶき": {
            nameEn: "Blizzard",
            type: "こおり", pwr: 140, eng: 75 },
        "フリーズボルト": {
            nameEn: "Freeze Shock",
            type: "こおり", pwr: 120, eng: 60,
            effects: [{ target: "opponent", stat: "atk", stage: -1}],
            chance: 0.3 },
        "ゆきなだれ": {
            nameEn: "Avalanche",
            type: "こおり", pwr: 90, eng: 45 },
        "れいとうパンチ": {
            nameEn: "Ice Punch",
            type: "こおり", pwr: 60, eng: 40 },
        "れいとうビーム": {
            nameEn: "Ice Beam",
            type: "こおり", pwr: 90, eng: 55 },

        /* かくとう (Fighting) */
        "インファイト": {
            nameEn: "Close Combat",
            type: "かくとう", pwr: 100, eng: 45,
            effects: [{ target: "self",     stat: "def", stage: -2}],
            chance: 1.0 },
        "かわらわり": {
            nameEn: "Brick Break",
            type: "かくとう", pwr: 50, eng: 40,
            effects: [{ target: "opponent", stat: "def", stage: -1}],
            chance: 1.0 },
        "かわらわり+": {
            nameEn: "Brick Break+",
            type: "かくとう", pwr: 40, eng: 35,
            effects: [{ target: "opponent", stat: "def", stage: -1}],
            chance: 1.0 },
        "きあいだま": {
            nameEn: "Focus Blast",
            type: "かくとう", pwr: 150, eng: 75 },
        "グロウパンチ": {
            nameEn: "Power-Up Punch",
            type: "かくとう", pwr: 20, eng: 35,
            effects: [{ target: "self",     stat: "atk", stage:  1}],
            chance: 1.0 },
        "クロスチョップ": {
            nameEn: "Cross Chop",
            type: "かくとう", pwr: 55, eng: 35 },
        "じごくぐるま": {
            nameEn: "Submission",
            type: "かくとう", pwr: 60, eng: 50 },
        "しんぴのつるぎ": {
            nameEn: "Secret Sword",
            type: "かくとう", pwr: 70, eng: 35 },
        "せいなるつるぎ": {
            nameEn: "Sacred Sword",
            type: "かくとう", pwr: 60, eng: 35 },
        "とびひざげり": {
            nameEn: "High Jump Kick",
            type: "かくとう", pwr: 110, eng: 55,
            effects: [{ target: "self",     stat: "def", stage: -4}],
            chance: 0.1 },
        "ドレインパンチ": {
            nameEn: "Drain Punch",
            type: "かくとう", pwr: 40, eng: 40,
            effects: [{ target: "self",     stat: "def", stage:  1}],
            chance: 1.0 },
        "ばかぢから": {
            nameEn: "Superpower",
            type: "かくとう", pwr: 85, eng: 40,
            effects: [{ target: "self",     stat: "atk", stage: -1},
                      { target: "self",     stat: "def", stage: -1}],
            chance: 1.0 },
        "ばくれつパンチ": {
            nameEn: "Dynamic Punch",
            type: "かくとう", pwr: 90, eng: 45 },
        "ばくれつパンチ+": {
            nameEn: "Dynamic Punch",
            type: "かくとう", pwr: 130, eng: 80 },
        "はどうだん": {
            nameEn: "Aura Sphere",
            type: "かくとう", pwr: 80, eng: 40 },
        "はやてがえし": {
            nameEn: "Upper Hand",
            type: "かくとう", pwr: 70, eng: 40,
            effects: [{ target: "opponent", stat: "def", stage: -1}],
            chance: 0.3 },
        "フライングプレス": {
            nameEn: "Flying Press",
            type: "かくとう", pwr: 90, eng: 40 },
        "ローキック": {
            nameEn: "Low Sweep",
            type: "かくとう", pwr: 40, eng: 40 },

        /* どく (Poison) */
        "アシッドボム": {
            nameEn: "Acid Spray",
            type: "どく", pwr: 20, eng: 45,
            effects: [{ target: "opponent", stat: "def", stage: -2}],
            chance: 1.0 },
        "アシッドボム+": {
            nameEn: "Acid Spray+",
            type: "どく", pwr: 20, eng: 40,
            effects: [{ target: "opponent", stat: "def", stage: -2}],
            chance: 1.0 },
        "クロスポイズン": {
            nameEn: "Cross Poison",
            type: "どく", pwr: 50, eng: 35,
            effects: [{ target: "self",     stat: "atk", stage: 2}],
            chance: 0.125 },
        "ダストシュート": {
            nameEn: "Gunk Shot",
            type: "どく", pwr: 130, eng: 75 },
        "どくどくのキバ": {
            nameEn: "Poison Fang",
            type: "どく", pwr: 50, eng: 40,
            effects: [{ target: "opponent", stat: "def", stage: -1}],
            chance: 1.0 },
        "ヘドロウェーブ": {
            nameEn: "Sludge Wave",
            type: "どく", pwr: 110, eng: 65 },
        "ヘドロこうげき": {
            nameEn: "Sludge",
            type: "どく", pwr: 70, eng: 40 },
        "ヘドロばくだん": {
            nameEn: "Sludge Bomb",
            type: "どく", pwr: 80, eng: 50 },

        /* じめん (Ground) */
        "10まんばりき": {
            nameEn: "High Horsepower",
            type: "じめん", pwr: 100, eng: 55 },
        "あなをほる": {
            nameEn: "Dig",
            type: "じめん", pwr: 70, eng: 50 },
        "じしん": {
            nameEn: "Earhtquake",
            type: "じめん", pwr: 120, eng: 65 },
        "じならし": {
            nameEn: "Bulldoze",
            type: "じめん", pwr: 80, eng: 55,
            effects: [{ target: "opponent", stat: "def", stage: -1}],
            chance: 1.0 },
        "すなじごく": {
            nameEn: "Sand Tomb",
            type: "じめん", pwr: 55, eng: 45,
            effects: [{ target: "opponent", stat: "def", stage: -1}],
            chance: 1.0 },
        "だいちのちから": {
            nameEn: "Earth Power",
            type: "じめん", pwr: 90, eng: 50,
            effects: [{ target: "opponent", stat: "def", stage: -1}],
            chance: 0.1 },
        "だんがいのつるぎ": {
            nameEn: "Precipice Blades",
            type: "じめん", pwr: 130, eng: 60 },
        "ドリルライナー": {
            nameEn: "Drill Run",
            type: "じめん", pwr: 70, eng: 40 },
        "どろばくだん": {
            nameEn: "Mud Bomb",
            type: "じめん", pwr: 65, eng: 45 },
        "ねっさのあらし": {
            nameEn: "Sandsear Storm",
            type: "じめん", pwr: 60, eng: 45,
            effects: [{ target: "opponent", stat: "atk", stage: -1}],
            chance: 1.0 },
        "ねっさのだいち": {
            nameEn: "Scorching Sands",
            type: "じめん", pwr: 80, eng: 50,
            effects: [{ target: "opponent", stat: "atk", stage: -1}],
            chance: 0.1 },
        "ホネこんぼう": {
            nameEn: "Bone Club",
            type: "じめん", pwr: 55, eng: 35 },

        /* エスパー (Psychic) */
        "サイケこうせん": {
            nameEn: "Psybeam",
            type: "エスパー", pwr: 70, eng: 60 },
        "サイケこうせん+": {
            nameEn: "Psybeam+",
            type: "エスパー", pwr: 60, eng: 45 },
        "サイコキネシス": {
            nameEn: "Psychic",
            type: "エスパー", pwr: 75, eng: 55,
            effects: [{ target: "opponent", stat: "def", stage: -1}],
            chance: 0.1 },
        "サイコショック": {
            nameEn: "Psushock",
            type: "エスパー", pwr: 70, eng: 40 },
        "サイコファング": {
            nameEn: "Psychic Fangs",
            type: "エスパー", pwr: 40, eng: 35,
            effects: [{ target: "opponent", stat: "def", stage: -1}],
            chance: 1.0 },
        "サイコブースト": {
            nameEn: "Psycho Boost",
            type: "エスパー", pwr: 85, eng: 35,
            effects: [{ target: "self",     stat: "atk", stage: -2}],
            chance: 1.0 },
        "サイコブレイク": {
            nameEn: "Psystrike",
            type: "エスパー", pwr: 90, eng: 45 },
        "シンクロノイズ": {
            nameEn: "Synchronoise",
            type: "エスパー", pwr: 80, eng: 50 },
        "ミストボール": {
            nameEn: "Mist Ball",
            type: "エスパー", pwr: 120, eng: 60,
            effects: [{ target: "opponent", stat: "atk", stage: -1}],
            chance: 0.5 },
        "ミラーコート": {
            nameEn: "Mirror Coat",
            type: "エスパー", pwr: 75, eng: 45 },
        "みらいよち": {
            nameEn: "Future Sight",
            type: "エスパー", pwr: 110, eng: 65 },
        "みらいよち+": {
            nameEn: "Future Sight+",
            type: "エスパー", pwr: 130, eng: 80 },
        "ラスターパージ": {
            nameEn: "Luster Purge",
            type: "エスパー", pwr: 120, eng: 60,
            effects: [{ target: "opponent", stat: "def", stage: -1}],
            chance: 0.5 },

        /* むし (Bug) */
        "ぎんいろのかぜ": {
            nameEn: "Silver Wind",
            type: "むし", pwr: 75, eng: 45,
            effects: [{ target: "self",     stat: "atk", stage:  1},
                      { target: "self",     stat: "def", stage:  1}],
            chance: 0.1 },
        "シグナルビーム": {
            nameEn: "Signal Beam",
            type: "むし", pwr: 75, eng: 55,
            effects: [{ target: "opponent", stat: "atk", stage: -1},
                      { target: "opponent", stat: "def", stage: -1}],
            chance: 0.2 },
        "シザークロス": {
            nameEn: "X-Scissor",
            type: "むし", pwr: 65, eng: 40 },
        "とどめばり": {
            nameEn: "Fell Stinger",
            type: "むし", pwr: 20, eng: 35,
            effects: [{ target: "self",     stat: "atk", stage:  1}],
            chance: 1.0 },
        "とどめばり+": {
            nameEn: "Fell Stinger+",
            type: "むし", pwr: 40, eng: 35,
            effects: [{ target: "self",     stat: "atk", stage:  1}],
            chance: 1.0 },
        "とびかかる": {
            nameEn: "Lunge",
            type: "むし", pwr: 70, eng: 45,
            effects: [{ target: "opponent", stat: "atk", stage: -1}],
            chance: 1.0 },
        "むしのさざめき": {
            nameEn: "Bug Buzz",
            type: "むし", pwr: 100, eng: 60,
            effects: [{ target: "opponent", stat: "def", stage: -1}],
            chance: 0.3 },
        "メガホーン": {
            nameEn: "Megahorn",
            type: "むし", pwr: 110, eng: 55 },

        /* いわ (Rock) */
        "いわなだれ": {
            nameEn: "Rock Slide",
            type: "いわ", pwr: 75, eng: 45 },
        "ウェザーボール(岩)": {
            nameEn: "Weather Ball (Rock)",
            type: "いわ", pwr: 60, eng: 35 },
        "がんせきふうじ": {
            nameEn: "Rock Tomb",
            type: "いわ", pwr: 75, eng: 50,
            effects: [{ target: "opponent", stat: "atk", stage: -1}],
            chance: 1.0 },
        "がんせきほう": {
            nameEn: "Rock Wrecker",
            type: "いわ", pwr: 110, eng: 50 },
        "げんしのちから": {
            nameEn: "Ancient Power",
            type: "いわ", pwr: 60, eng: 45,
            effects: [{ target: "self",     stat: "atk", stage:  1},
                      { target: "self",     stat: "def", stage:  1}],
            chance: 0.1 },
        "ストーンエッジ": {
            nameEn: "Stone Edge",
            type: "いわ", pwr: 100, eng: 55 },
        "パワージェム": {
            nameEn: "Power Gem",
            type: "いわ", pwr: 85, eng: 50 },
        "メテオビーム": {
            nameEn: "Meteor Beam",
            type: "いわ", pwr: 120, eng: 60,
            effects: [{ target: "self",     stat: "atk", stage:  1}],
            chance: 1.0 },
        "ロックブラスト": {
            nameEn: "Rock Blast",
            type: "いわ", pwr: 50, eng: 40 },

        /* ゴースト (Ghost) */
        "あやしいかぜ": {
            nameEn: "Ominouos Wind",
            type: "ゴースト", pwr: 45, eng: 45,
            effects: [{ target: "self",     stat: "atk", stage:  1},
                      { target: "self",     stat: "def", stage:  1}],
            chance: 0.1 },
        "あやしいかぜ+": {
            nameEn: "Ominouos Wind",
            type: "ゴースト", pwr: 50, eng: 45,
            effects: [{ target: "self",     stat: "atk", stage:  1},
                      { target: "self",     stat: "def", stage:  1}],
            chance: 0.1 },
        "かげうち": {
            nameEn: "Shadow Sneak",
            type: "ゴースト", pwr: 75, eng: 50 },
        "かげぬい": {
            nameEn: "Spirit Shackle",
            type: "ゴースト", pwr: 50, eng: 40,
            effects: [{ target: "opponent", stat: "def", stage: -1}],
            chance: 0.33 },
        "シャドーダイブ": {
            nameEn: "Shadow Force",
            type: "ゴースト", pwr: 120, eng: 65 },
        "シャドーパンチ": {
            nameEn: "Shadow Punch",
            type: "ゴースト", pwr: 55, eng: 35 },
        "シャドーボール": {
            nameEn: "Shadow Ball",
            type: "ゴースト", pwr: 90, eng: 50 },
        "シャドーボーン": {
            nameEn: "Shadow Bone",
            type: "ゴースト", pwr: 80, eng: 45,
            effects: [{ target: "opponent", stat: "def", stage: -1}],
            chance: 0.2 },
        "シャドーレイ": {
            nameEn: "Moongeist Beam",
            type: "ゴースト", pwr: 135, eng: 65 },
        "ナイトヘッド": {
            nameEn: "Night Shade",
            type: "ゴースト", pwr: 70, eng: 45 },
        "ナイトヘッド+": {
            nameEn: "Night Shade",
            type: "ゴースト", pwr: 55, eng: 45 },
        "ふんどのこぶし": {
            nameEn: "Rage Fist",
            type: "ゴースト", pwr: 55, eng: 40,
            effects: [{ target: "self",     stat: "atk", stage:  1}],
            chance: 1.0 },
        "ポルターガイスト": {
            nameEn: "Poltergeist",
            type: "ゴースト", pwr: 150, eng: 75 },

        /* ドラゴン (Dragon) */
        "あくうせつだん": {
            nameEn: "Spacial Rend",
            type: "ドラゴン", pwr: 95, eng: 55 },
        "きょけんとつげき": {
            nameEn: "Glaive Rush",
            type: "ドラゴン", pwr: 90, eng: 40,
            effects: [{ target: "self",     stat: "def", stage: -1}],
            chance: 1.0 },
        "げきりん": {
            nameEn: "Outrage",
            type: "ドラゴン", pwr: 110, eng: 60 },
        "げきりん+": {
            nameEn: "Outrage+",
            type: "ドラゴン", pwr: 80, eng: 50 },
        "スケイルノイズ": {
            nameEn: "Clanging Scales",
            type: "ドラゴン", pwr: 120, eng: 45,
            effects: [{ target: "self",     stat: "def", stage: -1}],
            chance: 1.0 },
        "ダイマックスほう": {
            nameEn: "Dynamax Cannon",
            type: "ドラゴン", pwr: 80, eng: 45 },
        "たつまき": {
            nameEn: "Twister",
            type: "ドラゴン", pwr: 70, eng: 40 },
        "ときのほうこう": {
            nameEn: "Roar of Time",
            type: "ドラゴン", pwr: 150, eng: 65 },
        "ドラゴンエナジー": {
            nameEn: "Dragon Energy",
            type: "ドラゴン", pwr: 90, eng: 45 },
        "ドラゴンクロー": {
            nameEn: "Dragon Claw",
            type: "ドラゴン", pwr: 80, eng: 50 },
        "りゅうせいぐん": {
            nameEn: "Draco Meteor",
            type: "ドラゴン", pwr: 150, eng: 65,
            effects: [{ target: "self",     stat: "atk", stage: -2}],
            chance: 1.0 },
        "りゅうのはどう": {
            nameEn: "Dragon Pulse",
            type: "ドラゴン", pwr: 90, eng: 55 },
        "ワイドブレイカー": {
            nameEn: "Breaking Swipe",
            type: "ドラゴン", pwr: 50, eng: 50,
            effects: [{ target: "opponent", stat: "atk", stage: -1}],
            chance: 1.0 },

        /* あく (Dark) */
        "DDラリアット": {
            nameEn: "Darkest Lariat",
            type: "あく", pwr: 120, eng: 60 },
        "あくのはどう": {
            nameEn: "Dark Pulse",
            type: "あく", pwr: 80, eng: 45 },
        "あくのはどう+": {
            nameEn: "Dark Pulse+",
            type: "あく", pwr: 60, eng: 40 },
        "イカサマ": {
            nameEn: "Foul Play",
            type: "あく", pwr: 65, eng: 40 },
        "オーラぐるま(悪)": {
            nameEn: "Aura Wheel (Dark)",
            type: "あく", pwr: 100, eng: 45,
            effects: [{ target: "self",     stat: "atk", stage:  1}],
            chance: 1.0 },
        "かみくだく": {
            nameEn: "Crunch",
            type: "あく", pwr: 70, eng: 45,
            effects: [{ target: "opponent", stat: "def", stage: -1}],
            chance: 0.2 },
        "しっぺがえし": {
            nameEn: "Payback",
            type: "あく", pwr: 110, eng: 60 },
        "つじぎり": {
            nameEn: "Night Slash",
            type: "あく", pwr: 50, eng: 35,
            effects: [{ target: "self",     stat: "atk", stage:  1}],
            chance: 0.125 },
        "ブロッキング": {
            nameEn: "Obstruct",
            type: "あく", pwr: 15, eng: 40,
            effects: [{ target: "opponent", stat: "def", stage: -1}, 
                      { target: "self",     stat: "def", stage:  1}],
            chance: 1.0 },
        "ぶんまわす": {
            nameEn: "Brutal Swing",
            type: "あく", pwr: 55, eng: 35 },

        /* はがね (Steel) */
        "アイアンヘッド": {
            nameEn: "Iron Head",
            type: "はがね", pwr: 85, eng: 50 },
        "きょじゅうざん": {
            nameEn: "Behemoth Blade",
            type: "はがね", pwr: 100, eng: 55 },
        "きょじゅうだん": {
            nameEn: "Behemoth Bash",
            type: "はがね", pwr: 80, eng: 45 },
        "コメットパンチ": {
            nameEn: "Meteor Mash",
            type: "はがね", pwr: 100, eng: 45 },
        "ジャイロボール": {
            nameEn: "Gyro Ball",
            type: "はがね", pwr: 80, eng: 50 },
        "ダブルパンツァー": {
            nameEn: "Double Iron Bash",
            type: "はがね", pwr: 70, eng: 35 },
        "デカハンマー": {
            nameEn: "Gigaton Hammer",
            type: "はがね", pwr: 130, eng: 60 },
        "はめつのねがい": {
            nameEn: "Doom Desire",
            type: "はがね", pwr: 75, eng: 40 },
        "ヘビーボンバー": {
            nameEn: "Heavy Slam",
            type: "はがね", pwr: 70, eng: 50 },
        "マグネットボム": {
            nameEn: "Magnet Bomb",
            type: "はがね", pwr: 70, eng: 40 },
        "ミラーショット": {
            nameEn: "Mirror Shot",
            type: "はがね", pwr: 35, eng: 35,
            effects: [{ target: "opponent", stat: "atk", stage: -1}],
            chance: 0.3 },
        "メテオドライブ": {
            nameEn: "Sunsteel Strike",
            type: "はがね", pwr: 135, eng: 65 },
        "ラスターカノン": {
            nameEn: "Flash Cannon",
            type: "はがね", pwr: 110, eng: 65 },

        /* フェアリー (Fairy) */
        "しぜんのいかり": {
            nameEn: "Nature's Madness",
            type: "フェアリー", pwr: 80, eng: 50,
            effects: [{ target: "opponent", stat: "def", stage: -1}],
            chance: 1.0 },
        "じゃれつく": {
            nameEn: "Play Rough",
            type: "フェアリー", pwr: 90, eng: 60 },
        "チャームボイス": {
            nameEn: "Disarming Voice",
            type: "フェアリー", pwr: 70, eng: 45 },
        "ドレインキッス": {
            nameEn: "Draining Kiss",
            type: "フェアリー", pwr: 80, eng: 55,
            effects: [{ target: "self",     stat: "def", stage:  1}],
            chance: 1.0  },
        "マジカルシャイン": {
            nameEn: "Dazzling Gleam",
            type: "フェアリー", pwr: 90, eng: 55 },
        "ムーンフォース": {
            nameEn: "Moonblast",
            type: "フェアリー", pwr: 90, eng: 50,
            effects: [{ target: "opponent", stat: "atk", stage: -1}],
            chance: 0.1 },
    }
};
