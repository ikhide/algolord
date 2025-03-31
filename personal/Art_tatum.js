const MASTERPIECES = {
  volume1: [
    "Moonglow",
    "Love For Sale",
    "Body And Soul",
    "Just A-Sittin' And A-Rockin'",
    "It's Only A Paper Moon",
    "Have You Met Miss Jones",
    "Stay As Sweet As You Are",
    "My Last Affair",
    "Willow Weep For Me",
    "Too Marvelous For Words",
    "You Took Advantage Of Me",
    "Sophisticated Lady",
    "I'm In The Mood For Love",
    "Everything I Have Is Yours",
    "Blue Lou",
    "Embraceable You",
  ],
  volume2: [
    "Elegy",
    "This Can't Be Love",
    "There Will Never Be Another You",
    "Gone With The Wind",
    "I Don't Stand A Ghost Of A Chance With You",
    "Lover Come Back To Me",
    "I'll See You In My Dreams",
    "Heat Wave",
    "September Song",
    "I Didn't Know What Time It Was",
    "Tea For Two",
    "Come Rain Or Come Shine",
    "The Very Thought Of You",
    "Please Be Kind",
    "Would You Like To Take A Walk?",
  ],
  volume3: [
    "Yesterdays",
    "Tenderly",
    "Jitterbug Waltz",
    "Love Me Or Leave Me",
    "Deep Purple",
    "Begin The Beguine",
    "Dixieland Band",
    "All The Things You Are",
    "Crazy Rhythm",
    "Prisoner Of Love",
    "After You've Gone",
    "When Your Lover Has Gone",
    "Indiana (Back Home Again In Indiana)",
    "I Surrender, Dear",
    "If You Hadn't Gone Away",
    "I Can't Give You Anything But Love",
  ],
  volume4: [
    "Aunt Hagar's Blues",
    "Isn't This A Lovely Day",
    "Ill Wind",
    "I've Got The World On A String",
    "Stardust",
    "The Man I Love",
    "What's New",
    "They Can't Take That Away From Me",
    "I Only Have Eyes For You",
    "If You Hadn't Gone Away",
    "Without A Song",
    "I Hadn't Anyone Till You",
    "Mean To Me",
    "You're Mine You",
    "I'll See You Again",
  ],
  volume5: [
    "Makin' Whoopee",
    "Don't Worry 'Bout Me",
    "That Old Feeling",
    "Louise",
    "Fine And Dandy",
    "Stompin' At The Savoy",
    "Blue Moon",
    "I Cover The Waterfront",
    "Stars Fell On Alabama",
    "You're Driving Me Crazy",
    "I Gotta Right To Sing The Blues",
    "S'posin'",
    "The Moon Is Low",
    "Lullaby In Rhythm",
    "Memories Of You",
  ],
  volume6: [
    "I've Got A Crush On You",
    "There's A Small Hotel",
    "Night And Day",
    "The Way You Look Tonight",
    "Cherokee",
    "I'm Comin' Virginia",
    "Do Nothing Till You Hear From Me",
    "You're Blase",
    "Ain't Misbehavin'",
    "Boulevard Of Broken Dreams",
    "Someone To Watch Over Me",
    "Danny Boy",
    "Happy Feet",
    "Over The Rainbow",
    "Just Like A Butterfly That's Caught In The Rain",
  ],
  volume7: [
    "Mighty Like A Rose",
    "What Does It Take",
    "Taboo",
    "Humoresque",
    "Smoke Gets In Your Eyes",
    "Moon Song",
    "Dancing In The Dark",
    "Japanese Sandman",
    "So Beats My Heart For You",
    "Judy",
    "Out Of Nowhere",
    "Somebody Loves Me",
    "Wrap Your Troubles In Dreams",
    "Moonlight On The Ganges",
    "Where Or When",
    "Isn't It Romantic",
  ],
  volume8: [
    "In A Sentimental Mood",
    "Blue Skies",
    "These Foolish Things (Remind Me Of You)",
    "She's Funny That Way",
    "Sweet Lorraine",
    "On The Sunny Side Of The Street",
    "I Won't Dance",
    "You Go To My Head",
    "It's The Talk Of The Town",
    "Can't We Be Friends",
    "If I Had You",
    "When A Woman Loves A Man",
    "Caravan",
    "Someone To Watch Over Me - live at the Hollywood Bowl, 1956",
    "Begin The Beguine - live at the Hollywood Bowl, 1956",
    "Willow Weep For Me - live at the Hollywood Bowl, 1956",
    "Humoresque - live at the Hollywood Bowl, 1956",
  ],
};

const MILESTONES = {
  volume1: [
    "My Blue Heaven",
    "Blues In B Flat",
    "Street of Dreams",
    "Idaho",
    "'S Wonderful",
    "Hands Across the Table",
    "Old Fashioned Love",
    "I'm Left With the Blues In My Heart",
    "Can't We Be Friends",
    "Elegy",
    "This Can't Be Love",
    "Dixieland Band",
    "Humoresque",
    "Begin the Beguine",
    "Judy",
  ],
  volume2: [
    "Night and Day",
    "The Moon Is Low",
    "In a Sentimental Mood",
    "This Can't Be Love",
    "I Won't Dance",
    "Moon Song",
    "You Took Advantage of Me",
    "I Surrender Dear",
    "The Man I Love",
    "Over the Rainbow",
    "Memories of You",
    "Body and Soul",
    "Makin' Whoopee",
    "Mighty Like a Rose",
  ],
  volume3: [
    "Perdido ft. Lionel Hampton & Buddy Rich",
    "Hallelujah ft. Lionel Hampton & Buddy Rich",
    "I'll Never Be the Same ft. Lionel Hampton & Buddy Rich",
    "How High the Moon ft. Lionel Hampton & Buddy Rich",
    "What Is This Thing Called Love ft. Lionel Hampton & Buddy Rich",
    "More Than You Know ft. Lionel Hampton & Buddy Rich",
    "Makin' Whoopee ft. Lionel Hampton & Buddy Rich",
    "Love for Sale",
    "Wrap Your Troubles In Dreams",
    "Louise",
    "Come Rain or Come Shine",
    "I'm coming Virginia",
    "Embraceable You",
  ],
  volume4: [
    "Plaid ft. Harry Edison, Barney Kessel, Art Tatum & Buddy Rich",
    "Somebody Loves Me ft. Harry Edison, Barney Kessel, Art Tatum, John Simmons & Buddy Rich",
    "Deep Purple ft. Harry Edison, Barney Kessel, Art Tatum, John Simmons & Buddy Rich",
    "September Song ft. Harry Edison, Art Tatum, Red Callender & Buddy Rich",
    "Verve Blues ft. Harry Edison, Art Tatum & Buddy Rich",
    "Tenderly",
    "Sittin' and Rockin'",
    "There'll Never Be Another You",
    "I've Got the World On a String",
    "You Took Advantage of Me",
    "Yesterdays",
    "What does it take",
  ],
  volume5: [
    "Blues In C",
    "A Foggy Day",
    "You're Mine You",
    "Undecided",
    "Under a Blanket of Blue",
    "Makin' Whoopee",
    "Isn't This a Lovely Day",
    "In a Sentimental Mood",
    "Have You Met Miss Jones?",
    "Stompin At the Savoy",
    "Taboo",
    "Without a Song",
    "My Last Affair",
  ],
  volume6: [
    "Just One of Those Things",
    "Blue Lou",
    "Some Other Spring",
    "If",
    "More Than You Know",
    "Love for Sale",
    "Trio Blues",
    "I Guess I'll Have to Change My Plans",
    "I´ll Never Be the Same",
    "Isn't It Romantic",
    "September Song",
    "I Hadn't Anyone 'Til You",
    "Night and Day",
    "Jitterbug Waltz",
    "You're Driving Me Crazy What Did I Do",
    "Stars Fell On Alabama",
    "Smoke Gets In Your Eyes",
    "Blue Moon",
  ],
  volume7: [
    "Deep Night",
    "This Can´t Be Love",
    "Memories of You",
    "Once In a While",
    "A Foggy Day",
    "Makin´ Whoopee",
    "You´re Mine You",
    "Lover Man",
    "Someone to Watch Over Me",
    "The Very Thought of You",
    "I Don't Stand a Ghost of a Chance With You",
    "I'll See You Again",
    "Stardust",
    "Where or When",
    "Stay as Sweet as You Are",
  ],
  volume8: [
    "Gone With the Wind",
    "All the Things You Are",
    "Have You Met Miss Jones?",
    "My One and Only Love",
    "Night and Day",
    "My Ideal",
    "Where or When",
    "I Cover the Waterfront",
    "Fine and Dandy",
    "All the Things You Are",
    "I'm In the Mood for Love",
    "Willow Weep for Me",
    "When a Woman Loves a Man",
    "Ain't Misbehavin'",
    "Love Me or Leave Me",
  ],
  volume9: [
    "Ill Wind",
    "I'll See You In My Dreams",
    "Blue Skies",
    "Lover Come Back to Me",
    "Would You Like to Take a Walk",
    "I've Got a Crush On You",
    "Japanese Sandman",
    "Aunt Hagar's Blues",
    "Too Marvelous for Words",
    "Just Like a Butterfly That's Caught In the Wind",
    "Gone With the Wind",
    "Danny Boy",
    "Blue Lou",
    "They Can't Take That Away from Me",
    "Tea for Two",
    "It's the Talk of the Town",
    "Caravan",
  ],
  volume10: [
    "There's a Small Hotel",
    "The Way You Look Tonight",
    "Cherokee",
    "Sophisticated Lady",
    "You Go to My Head",
    "Dancing In the Dark",
    "These Foolish Things (Remind Me of You)",
    "After You've Gone",
    "I Won't Dance",
    "I Can't Give You Anything but Love",
    "Lullaby In Rhythm",
    "Out of Nowhere",
    "So Beats My Heart for You",
    "Moonglow",
    "I Gotta Right to Sing the Blues",
    "It's Only a Paper Moon",
    "On the Sunny Side of the Street",
    "Do Nothin' Till You Hear from Me",
  ],
};

const allMasterpieces = Object.values(MASTERPIECES).flat();
const allMilestones = Object.values(MILESTONES).flat();
const totalAll = allMasterpieces.concat(allMilestones);

const uniqueMasterSet = new Set(allMasterpieces);
const uniqueMilestoneSet = new Set(allMilestones);

const uniqueMasterpieces = Array.from(uniqueMasterSet);
const uniqueMilestones = Array.from(uniqueMilestoneSet);

const onlyInMasterpieces = uniqueMasterpieces.filter(
  (x) => !uniqueMilestoneSet.has(x)
);
const onlyInMilestones = uniqueMilestones.filter(
  (x) => !uniqueMasterSet.has(x)
);
const totalOnly = onlyInMasterpieces.concat(onlyInMilestones);

const totalOverlap = uniqueMasterpieces.filter((x) =>
  uniqueMilestoneSet.has(x)
);

// Example of returned map structure: { milestones: { volume1: ["Song1"] }, masterpieces: { volume3: ["Song1"] } }
const mapOfRepeatedTracksWhereTheyAre = (tracks, masterpieces, milestones) => {
  const map = { milestones: {}, masterpieces: {} };
  const volumeLength = Math.max(
    Object.keys(masterpieces).length,
    Object.keys(milestones).length
  );
  console.log({ volumeLength });
  for (let i = 1; i <= volumeLength; i++) {
    const currentVolume = `volume${i}`;
    console.log({ currentVolume });
    const currentMasterpiece = masterpieces[currentVolume];
    const currentMilestone = milestones[currentVolume];
    if (
      currentMasterpiece &&
      currentMasterpiece.some((x) => tracks.includes(x))
    ) {
      map.masterpieces[currentVolume] = currentMasterpiece.filter((x) =>
        tracks.includes(x)
      );
    }
    if (currentMilestone && currentMilestone.some((x) => tracks.includes(x))) {
      map.milestones[currentVolume] = currentMilestone.filter((x) =>
        tracks.includes(x)
      );
    }
  }

  return map;
};

console.log("All Tracks in masterpieces:", allMasterpieces.length);
console.log("All Tracks in milestones:", allMilestones.length);
console.log("Total Tracks all:", totalAll.length);
console.log();
console.log("Unique Tracks Names in masterpieces:", uniqueMasterpieces.length);
console.log("Unique Tracks Names in milestones:", uniqueMilestones.length);
console.log();
console.log("Unique Tracks Only in masterpieces:", onlyInMasterpieces.length);
console.log("Unique Tracks Only in milestones:", onlyInMilestones.length);
console.log("Total Unique only Tracks:", totalOnly.length);
console.log("Total overlap:", totalOverlap.length);
console.log(
  mapOfRepeatedTracksWhereTheyAre(totalOverlap, MASTERPIECES, MILESTONES)
);
