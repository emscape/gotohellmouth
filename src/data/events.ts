import type { ScheduleEvent } from '@/types';

const importedSaturdayDescription = 'Imported from the HellmouthCon 2026 Saturday CSV schedule.';
const importedSundayDescription = 'Imported from the HellmouthCon 2026 Sunday CSV schedule.';

function csvEvent(
  id: string,
  title: string,
  startTime: string,
  endTime: string,
  roomId: string,
  category: ScheduleEvent['category'],
  description = importedSaturdayDescription,
): ScheduleEvent {
  return {
    id,
    title,
    description,
    day: 'saturday',
    startTime,
    endTime,
    roomId,
    category,
  };
}

function sundayCsvEvent(
  id: string,
  title: string,
  startTime: string,
  endTime: string,
  roomId: string,
  category: ScheduleEvent['category'],
  description = importedSundayDescription,
): ScheduleEvent {
  return {
    id,
    title,
    description,
    day: 'sunday',
    startTime,
    endTime,
    roomId,
    category,
  };
}

const saturdayCsvEvents: ScheduleEvent[] = [
  csvEvent('sat-opening-ceremonies', 'Opening Ceremonies', '2026-06-13T09:30:00-07:00', '2026-06-13T10:00:00-07:00', 'main-auditorium', 'panel'),
  csvEvent('sat-welcome-to-the-hellmouth', 'Welcome to the Hellmouth', '2026-06-13T09:30:00-07:00', '2026-06-13T10:00:00-07:00', 'photo-op-room', 'photo-op'),
  csvEvent('sat-amber-benson-audiobook', 'Amber Benson Audiobook', '2026-06-13T10:00:00-07:00', '2026-06-13T11:00:00-07:00', 'main-auditorium', 'panel'),
  csvEvent('sat-soothsaying', 'Soothsaying', '2026-06-13T10:00:00-07:00', '2026-06-13T10:30:00-07:00', 'panel-room-b', 'panel'),
  csvEvent('sat-they-might-take-yours-doug', 'They Might Take Yours (Doug)', '2026-06-13T10:00:00-07:00', '2026-06-13T10:30:00-07:00', 'photo-op-room', 'photo-op'),
  csvEvent('sat-larry-emma', 'Larry, Emma', '2026-06-13T10:00:00-07:00', '2026-06-13T10:30:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-fortunetelling', 'Fortunetelling', '2026-06-13T10:30:00-07:00', '2026-06-13T11:00:00-07:00', 'panel-room-b', 'panel'),
  {
    ...csvEvent('sat-im-in-starch-heaven', "I'm in Starch Heaven: Angel Cast Breakfast", '2026-06-13T10:00:00-07:00', '2026-06-13T11:00:00-07:00', 'panel-room-a', 'fan-experience'),
    description: `Help the Helpless to another helping alongside Angel's friends and foes during I'M IN STARCH HEAVEN, a Saturday morning catered breakfast featuring the denizens of the Buffyverse's Los Angeles, who will rotate from table to table in the tradition of our traditional Villains Breakfast.

Fan Experience Breakfast with Amy Acker, Charisma Carpenter, Julie Benz, Mark Lutz, J August Richards, and Stephanie Romanov.`,
    heroImage: '/images/fan-experiences/starch-heaven.avif',
  },
  csvEvent('sat-clare-james', 'Clare, James', '2026-06-13T10:30:00-07:00', '2026-06-13T11:00:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-camden', 'Camden??', '2026-06-13T11:00:00-07:00', '2026-06-13T11:30:00-07:00', 'main-auditorium', 'panel'),
  csvEvent('sat-demonhuntr', 'Demonhuntr', '2026-06-13T11:00:00-07:00', '2026-06-13T11:30:00-07:00', 'panel-room-b', 'panel'),
  csvEvent('sat-moving-in', 'We\'re Moving In (Angel Cast Photo)', '2026-06-13T11:00:00-07:00', '2026-06-13T11:30:00-07:00', 'photo-op-room', 'photo-op'),
  csvEvent('sat-lesbian-gay-type-lovers', 'Lesbian Gay-Type Lovers (Amber/Iyari)', '2026-06-13T11:00:00-07:00', '2026-06-13T11:30:00-07:00', 'photo-op-room', 'photo-op'),
  csvEvent('sat-clare', 'Clare', '2026-06-13T11:00:00-07:00', '2026-06-13T11:30:00-07:00', 'autograph-alley', 'autograph'),
  { ...csvEvent('sat-sunnydale-elem', 'Sunnydale Elem', '2026-06-13T11:00:00-07:00', '2026-06-13T11:30:00-07:00', 'school-courtyard', 'meetup'), hidden: true },
  csvEvent('sat-amber-photo', 'Amber', '2026-06-13T11:30:00-07:00', '2026-06-13T12:00:00-07:00', 'photo-op-room', 'photo-op'),
  { ...csvEvent('sat-singalong', 'Singalong', '2026-06-13T11:30:00-07:00', '2026-06-13T12:00:00-07:00', 'school-courtyard', 'mixer'), hidden: true },
  csvEvent('sat-multi-beings', 'Beings (Multi)', '2026-06-13T12:00:00-07:00', '2026-06-13T13:00:00-07:00', 'main-auditorium', 'panel'),
  csvEvent('sat-hey-im-enjoying-the', 'Hey Im Enjoying the', '2026-06-13T12:00:00-07:00', '2026-06-13T12:30:00-07:00', 'panel-room-b', 'panel'),
  csvEvent('sat-j-august', 'J August', '2026-06-13T12:00:00-07:00', '2026-06-13T12:30:00-07:00', 'photo-op-room', 'photo-op'),
  csvEvent('sat-doug', 'Doug', '2026-06-13T12:00:00-07:00', '2026-06-13T12:30:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-studying', 'Studying', '2026-06-13T12:30:00-07:00', '2026-06-13T13:00:00-07:00', 'panel-room-b', 'panel'),
  csvEvent('sat-ruler-throne', 'They Made Me Ruler (Throne)', '2026-06-13T12:30:00-07:00', '2026-06-13T13:00:00-07:00', 'photo-op-room', 'photo-op'),
  csvEvent('sat-james', 'James', '2026-06-13T12:30:00-07:00', '2026-06-13T13:00:00-07:00', 'photo-op-room', 'photo-op'),
  csvEvent('sat-amber-autographs', 'Amber', '2026-06-13T12:30:00-07:00', '2026-06-13T13:00:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-casting-call', 'Casting Call', '2026-06-13T13:00:00-07:00', '2026-06-13T14:00:00-07:00', 'main-auditorium', 'panel'),
  csvEvent('sat-bring-back-firefy', 'Bring Back Firefy', '2026-06-13T13:00:00-07:00', '2026-06-13T14:00:00-07:00', 'panel-room-b', 'panel'),
  {
    ...csvEvent('sat-vowel-play', 'Vowel Play: A Vision Quest', '2026-06-13T13:00:00-07:00', '2026-06-13T14:00:00-07:00', 'panel-room-a', 'fan-experience'),
    description: `The suave but scheming Lilah Morgan has blocked Cordelia's visions and rerouted them to invade the minds of two otherworldly beings, Glorificus and Darla. They just keep seeing and hearing Buffy and Angel quotes on repeat! Glory's Minions will face off against Darla's Muscle to be the first to restore their leader's comfort and sanity by solving the puzzle to complete the quotes. But watch out, Lilah may step out of the Vanna White Room to reveal a few tricks up her sleeve to stop you. Which team will decipher the most visions in Vowel Play: A Vision Quest, a "Wheel of Fortune"-style Fan Experience?

Fan Experience Party Game with Clare Kramer, Julie Benz, and Stephanie Romanov.`,
    heroImage: '/images/fan-experiences/vowel-play.avif',
  },
  { ...csvEvent('sat-the-bronze', 'The Bronze', '2026-06-13T13:00:00-07:00', '2026-06-13T14:00:00-07:00', 'school-courtyard', 'meetup'), hidden: true },
  csvEvent('sat-amy', 'Amy', '2026-06-13T13:30:00-07:00', '2026-06-13T14:00:00-07:00', 'photo-op-room', 'photo-op'),
  csvEvent('sat-j-autographs', 'J', '2026-06-13T13:30:00-07:00', '2026-06-13T14:00:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-beauty-and-the-beasts', 'Beauty and the Beasts', '2026-06-13T14:00:00-07:00', '2026-06-13T15:00:00-07:00', 'main-auditorium', 'panel'),
  csvEvent('sat-panel-by-panel', 'Panel by Panel', '2026-06-13T14:00:00-07:00', '2026-06-13T14:30:00-07:00', 'panel-room-b', 'panel'),
  csvEvent('sat-lets-get-crazy-clare', 'Let\'s Get Crazy (Clare)', '2026-06-13T14:00:00-07:00', '2026-06-13T14:30:00-07:00', 'photo-op-room', 'photo-op'),
  csvEvent('sat-charisma-photo', 'Charisma', '2026-06-13T14:00:00-07:00', '2026-06-13T14:30:00-07:00', 'photo-op-room', 'photo-op'),
  csvEvent('sat-j-autographs-2', 'J', '2026-06-13T14:00:00-07:00', '2026-06-13T14:30:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-is-this-seat-taken', 'Is This Seat Taken? (C+A)', '2026-06-13T14:30:00-07:00', '2026-06-13T15:00:00-07:00', 'photo-op-room', 'photo-op'),
  csvEvent('sat-amy-iyari-julie', 'Amy Iyari julie', '2026-06-13T14:30:00-07:00', '2026-06-13T15:00:00-07:00', 'autograph-alley', 'autograph'),
  { ...csvEvent('sat-sunnydale-high-gsa', 'Sunnydale High GSA', '2026-06-13T14:30:00-07:00', '2026-06-13T15:00:00-07:00', 'school-courtyard', 'meetup'), hidden: true },
  csvEvent('sat-clare-chats-w-friends', 'Clare chats w/friends', '2026-06-13T15:00:00-07:00', '2026-06-13T16:00:00-07:00', 'main-auditorium', 'panel'),
  csvEvent('sat-international-buffy-day', 'International Buffy Day', '2026-06-13T15:00:00-07:00', '2026-06-13T16:00:00-07:00', 'panel-room-b', 'panel'),
  {
    ...csvEvent('sat-poetry-for-demons', 'Poetry for Demons', '2026-06-13T15:00:00-07:00', '2026-06-13T16:00:00-07:00', 'panel-room-a', 'fan-experience'),
    description: `After Sunnydale collapsed, Clem and Groo got a job team-teaching English to demons… obviously. You're a demon enrolled in their class, and today's topic: Episode Titles! Your instructors know better than anyone that the world likes its demons monosyllabic, so no two syllable words are allowed! And if he hears one, your teacher just might express some disappointment through the universal language of punishment. This "Poetry for Neanderthals"-inspired Fan Experience will be a class act.

Fan Experience Party Game with James C Leary and Mark Lutz.`,
    heroImage: '/images/fan-experiences/poetry-for-demons.avif',
  },
  { ...csvEvent('sat-mixer', 'Mixer', '2026-06-13T15:00:00-07:00', '2026-06-13T15:30:00-07:00', 'school-courtyard', 'mixer'), hidden: true },
  csvEvent('sat-larry-photo', 'Larry', '2026-06-13T15:30:00-07:00', '2026-06-13T16:00:00-07:00', 'photo-op-room', 'photo-op'),
  csvEvent('sat-stephanie-julie', 'Stephanie, Julie', '2026-06-13T15:30:00-07:00', '2026-06-13T16:00:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-neurodivergence-in-buffyverse', 'Neurodivergence in Buffyverse', '2026-06-13T16:00:00-07:00', '2026-06-13T17:00:00-07:00', 'panel-room-b', 'panel'),
  csvEvent('sat-charisma-clare', 'Charisma Clare', '2026-06-13T16:00:00-07:00', '2026-06-13T16:30:00-07:00', 'autograph-alley', 'autograph'),
  { ...csvEvent('sat-watchers-academy', 'Watchers Academy', '2026-06-13T16:00:00-07:00', '2026-06-13T16:30:00-07:00', 'school-courtyard', 'meetup'), hidden: true },
  csvEvent('sat-buffyverse', 'Buffyverse', '2026-06-13T16:30:00-07:00', '2026-06-13T17:00:00-07:00', 'panel-room-b', 'panel'),
  {
    ...csvEvent('sat-letters-from-los-angeles', 'Letters from Los Angeles: Demonic Spelling Bee', '2026-06-13T16:30:00-07:00', '2026-06-13T17:30:00-07:00', 'panel-room-a', 'fan-experience'),
    description: `Thesulac. Kleynach. Krevlorsnwath. Skip.

Consult your Nyazian Scrolls, something BIG is coming and you're going to have to tackle it one letter at a time! Team Fred faces off against Team Gunn to save the world in the Demon Spelling Bee to end all spelling bees. The power was inside you the whole time. Also the vowels. Study up on your demon names, prophecy authors, and magical words (Thaumogenesis, anyone?) to prepare for this other-word-ly "Scrabble"-inspired Fan Experience.

Fan Experience Party Game with Amy Acker and J August Richards.`,
    heroImage: '/images/fan-experiences/letters-from-los-angeles.avif',
  },
  { ...csvEvent('sat-slayer-lineage', 'Slayer Lineage', '2026-06-13T16:30:00-07:00', '2026-06-13T17:00:00-07:00', 'school-courtyard', 'meetup'), hidden: true },
  csvEvent('sat-once-more-with-feeling-parody', 'Once More with Feeling Parody', '2026-06-13T17:00:00-07:00', '2026-06-13T18:00:00-07:00', 'main-auditorium', 'panel'),
  csvEvent('sat-idiots-lantern', 'Idiots Lantern', '2026-06-13T19:00:00-07:00', '2026-06-13T20:00:00-07:00', 'panel-room-b', 'panel'),
];

const sundayCsvEvents: ScheduleEvent[] = [
  sundayCsvEvent('sun-yes-please-diner', 'Yes Please (Diner)', '2026-06-14T09:30:00-07:00', '2026-06-14T10:00:00-07:00', 'photo-op-room', 'photo-op'),
  sundayCsvEvent('sun-doug-jones', 'Doug Jones cosplay and sfx Q&A', '2026-06-14T10:00:00-07:00', '2026-06-14T11:00:00-07:00', 'main-auditorium', 'panel'),
  sundayCsvEvent('sun-cosplay-and-sfx-beginners', 'Cosplay and sfx for beginners', '2026-06-14T10:00:00-07:00', '2026-06-14T10:30:00-07:00', 'panel-room-b', 'workshop'),
  sundayCsvEvent('sun-you-need-this-more-than-i-do', 'You Need This More Than I Do (E+C)', '2026-06-14T10:00:00-07:00', '2026-06-14T10:30:00-07:00', 'photo-op-room', 'photo-op'),
  sundayCsvEvent('sun-some-of-the-kids-at-my-camp', 'Some of the Kids at my Camp Put it Together For Me (J/Axe)', '2026-06-14T10:00:00-07:00', '2026-06-14T10:30:00-07:00', 'photo-op-room', 'photo-op'),
  { ...sundayCsvEvent('sun-d-hoffrans-fold', "D' Hoffran's Fold", '2026-06-14T10:00:00-07:00', '2026-06-14T10:30:00-07:00', 'school-courtyard', 'meetup'), hidden: true },
  sundayCsvEvent('sun-q-and-a', 'Q&A', '2026-06-14T10:30:00-07:00', '2026-06-14T11:00:00-07:00', 'main-auditorium', 'panel'),
  sundayCsvEvent('sun-for-beginners', 'for beginners', '2026-06-14T10:30:00-07:00', '2026-06-14T11:00:00-07:00', 'panel-room-b', 'workshop'),
  sundayCsvEvent('sun-hang-with-me-and-mine', 'Hang with Me and Mine (Buffy Cast Photo)', '2026-06-14T10:30:00-07:00', '2026-06-14T11:00:00-07:00', 'photo-op-room', 'photo-op'),
  sundayCsvEvent('sun-amy-acker', 'Amy Acker', '2026-06-14T10:30:00-07:00', '2026-06-14T11:00:00-07:00', 'photo-op-room', 'photo-op'),
  sundayCsvEvent('sun-j-august-stephanie', 'J.August, stephanie', '2026-06-14T10:30:00-07:00', '2026-06-14T11:00:00-07:00', 'autograph-alley', 'autograph'),
  { ...sundayCsvEvent('sun-curses', 'Curses', '2026-06-14T10:30:00-07:00', '2026-06-14T11:00:00-07:00', 'school-courtyard', 'meetup'), hidden: true },
  sundayCsvEvent('sun-hold-you-so-tight', 'Hold You So Tight', '2026-06-14T11:00:00-07:00', '2026-06-14T11:30:00-07:00', 'main-auditorium', 'panel'),
  sundayCsvEvent('sun-watchers-academy', 'Watchers Academy', '2026-06-14T11:00:00-07:00', '2026-06-14T11:30:00-07:00', 'panel-room-b', 'panel'),
  sundayCsvEvent('sun-julie-benz', 'Julie Benz', '2026-06-14T11:00:00-07:00', '2026-06-14T11:30:00-07:00', 'photo-op-room', 'photo-op'),
  sundayCsvEvent('sun-mark', 'Mark', '2026-06-14T11:00:00-07:00', '2026-06-14T11:30:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-demons-of-the-hlmth', 'Demons of the Hlmth', '2026-06-14T11:30:00-07:00', '2026-06-14T12:00:00-07:00', 'panel-room-b', 'panel'),
  sundayCsvEvent('sun-stephanie-photo', 'Stephanie', '2026-06-14T11:30:00-07:00', '2026-06-14T12:00:00-07:00', 'photo-op-room', 'photo-op'),
  sundayCsvEvent('sun-turning-your-passion', 'Turning Your Passion into a Paying Gig', '2026-06-14T12:00:00-07:00', '2026-06-14T13:00:00-07:00', 'main-auditorium', 'panel'),
  sundayCsvEvent('sun-slaying-real-life', 'Slaying Real Life', '2026-06-14T12:00:00-07:00', '2026-06-14T12:30:00-07:00', 'panel-room-b', 'panel'),
  {
    ...sundayCsvEvent('sun-muffin-i-cooked-them-myself-cast-brunch', 'Muffin? I Cooked Them Myself!: Buffy Cast Brunch', '2026-06-14T11:00:00-07:00', '2026-06-14T12:30:00-07:00', 'panel-room-a', 'fan-experience'),
    description: `Join 7 of our Sunnydale alum from Buffy the Vampire Slayer for MUFFIN? I COOKED THEM MYSELF!, a fang-tastic and unforgettable themed catered brunch on Sunday morning. Our heroes and villains will rotate from table to table in the tradition of our popular Villains Breakfast.

Fan Experience Brunch with Amber Benson, Clare Kramer, Doug Jones, Emma Caulfield, James C Leary, Larry Bagby, and Iyari Limon.`,
    heroImage: '/images/fan-experiences/muffin.avif',
  },
  sundayCsvEvent('sun-mark-photo', 'Mark', '2026-06-14T12:00:00-07:00', '2026-06-14T12:30:00-07:00', 'photo-op-room', 'photo-op'),
  sundayCsvEvent('sun-amy-j-autographs', 'Amy, J.', '2026-06-14T12:00:00-07:00', '2026-06-14T12:30:00-07:00', 'autograph-alley', 'autograph'),
  { ...sundayCsvEvent('sun-under-their-spell', 'Under Their Spell', '2026-06-14T12:00:00-07:00', '2026-06-14T12:30:00-07:00', 'school-courtyard', 'meetup'), hidden: true },
  sundayCsvEvent('sun-a-paying-gig', 'a Paying Gig', '2026-06-14T12:30:00-07:00', '2026-06-14T13:00:00-07:00', 'main-auditorium', 'panel'),
  sundayCsvEvent('sun-demons', 'Demons', '2026-06-14T12:30:00-07:00', '2026-06-14T13:00:00-07:00', 'panel-room-b', 'panel'),
  sundayCsvEvent('sun-you-rock-clem', 'You Rock! (Clem)', '2026-06-14T12:30:00-07:00', '2026-06-14T13:00:00-07:00', 'photo-op-room', 'photo-op'),
  sundayCsvEvent('sun-amy-autograph', 'Amy', '2026-06-14T12:30:00-07:00', '2026-06-14T13:00:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-sapphic-stories', 'Sapphic Stories', '2026-06-14T12:30:00-07:00', '2026-06-14T13:00:00-07:00', 'school-courtyard', 'meetup'),
  sundayCsvEvent('sun-rabbits-skin-conditions', 'Rabbits, Skin Conditions and School Spirit', '2026-06-14T13:00:00-07:00', '2026-06-14T14:00:00-07:00', 'main-auditorium', 'panel'),
  sundayCsvEvent('sun-what-would-buffy-do', 'What Would Buffy Do', '2026-06-14T13:00:00-07:00', '2026-06-14T13:30:00-07:00', 'panel-room-b', 'panel'),
  {
    ...sundayCsvEvent('sun-cant-even', "Can't Even Shout: Sunnydale Locations Pictionary", '2026-06-14T13:00:00-07:00', '2026-06-14T14:00:00-07:00', 'panel-room-a', 'fan-experience'),
    description: `The citizens of Sunnydale are fleeing The Gentlemen, but they don't have their voices! Each player will get a chance to sketch the Sunnydale location they are fleeing to (as randomly drawn) while their teammates write their best guesses on the white boards hanging around their necks. Those who get it right take one step closer to Tara and to safety. Those who don't are forced to stand still until the next round… as The Lead Gentleman advances. Who will make it all the way to safety, and whose heart will end up in a jar? This "Pictionary"-meets-"Red-Rover"-style Fan Experience will be a SCREAM.

Fan Experience Party Game with Amber Benson and Doug Jones.`,
    heroImage: '/images/fan-experiences/cant-even-shout.avif',
  },
  sundayCsvEvent('sun-charisma-photo', 'Charisma', '2026-06-14T13:00:00-07:00', '2026-06-14T13:30:00-07:00', 'photo-op-room', 'photo-op'),
  sundayCsvEvent('sun-clare-autograph', 'clare', '2026-06-14T13:00:00-07:00', '2026-06-14T13:30:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-and-school-spirit', 'and School Spirit', '2026-06-14T13:30:00-07:00', '2026-06-14T14:00:00-07:00', 'main-auditorium', 'panel'),
  sundayCsvEvent('sun-iyari-photo', 'Iyari', '2026-06-14T13:30:00-07:00', '2026-06-14T14:00:00-07:00', 'photo-op-room', 'photo-op'),
  sundayCsvEvent('sun-clare-autograph-2', 'Clare', '2026-06-14T13:30:00-07:00', '2026-06-14T14:00:00-07:00', 'autograph-alley', 'autograph'),
  { ...sundayCsvEvent('sun-corp-dance', 'Corp Dance', '2026-06-14T13:30:00-07:00', '2026-06-14T14:00:00-07:00', 'school-courtyard', 'meetup'), hidden: true },
  sundayCsvEvent('sun-that-old-gang', 'That old Gang of Mine', '2026-06-14T14:00:00-07:00', '2026-06-14T15:00:00-07:00', 'main-auditorium', 'panel'),
  sundayCsvEvent('sun-3pm-monster', '3p.m MOnster', '2026-06-14T14:00:00-07:00', '2026-06-14T14:30:00-07:00', 'panel-room-a', 'fan-experience'),
  sundayCsvEvent('sun-iyari-photo-2', 'Iyari', '2026-06-14T14:00:00-07:00', '2026-06-14T14:30:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-mine', 'Mine', '2026-06-14T14:30:00-07:00', '2026-06-14T15:00:00-07:00', 'main-auditorium', 'panel'),
  sundayCsvEvent('sun-bunny-wrksp', 'Bunny Wrksp', '2026-06-14T14:30:00-07:00', '2026-06-14T15:00:00-07:00', 'photo-op-room', 'photo-op'),
  sundayCsvEvent('sun-lets-get-crazy-clare', 'Let\'s Get Crazy (Clare)', '2026-06-14T14:30:00-07:00', '2026-06-14T15:00:00-07:00', 'photo-op-room', 'photo-op'),
  { ...sundayCsvEvent('sun-the-gay-watchers', 'The Gay Watchers', '2026-06-14T14:30:00-07:00', '2026-06-14T15:00:00-07:00', 'school-courtyard', 'meetup'), hidden: true },
  sundayCsvEvent('sun-nerd-best', 'Nerd Best', '2026-06-14T15:00:00-07:00', '2026-06-14T15:30:00-07:00', 'panel-room-b', 'panel'),
  sundayCsvEvent('sun-is-this-seat-taken', 'Is This Seat Taken? (C+A)', '2026-06-14T15:00:00-07:00', '2026-06-14T15:30:00-07:00', 'photo-op-room', 'photo-op'),
  sundayCsvEvent('sun-julie-dj-autographs', 'Julie, DJ', '2026-06-14T15:00:00-07:00', '2026-06-14T15:30:00-07:00', 'autograph-alley', 'autograph'),
  { ...sundayCsvEvent('sun-counsel', 'counsel', '2026-06-14T15:00:00-07:00', '2026-06-14T15:30:00-07:00', 'school-courtyard', 'meetup'), hidden: true },
  sundayCsvEvent('sun-youre-just-a', 'Youre Just a', '2026-06-14T15:30:00-07:00', '2026-06-14T16:00:00-07:00', 'main-auditorium', 'panel'),
  sundayCsvEvent('sun-friends', 'Friends', '2026-06-14T15:30:00-07:00', '2026-06-14T16:00:00-07:00', 'panel-room-b', 'panel'),
  {
    ...sundayCsvEvent('sun-hall-pass-to-the-hellmouth-walking-tour', 'Hall Pass to the Hellmouth: Walking Tour', '2026-06-14T15:00:00-07:00', '2026-06-14T16:00:00-07:00', 'panel-room-a', 'fan-experience'),
    description: `Wish Granted!

Back by popular demand, this time with a new twist! Cordy and Anya are getting together to guide you through their favorite high school memories in this walking tour of Sunnydale High filming locations with dynamic duo Charisma Carpenter and Emma Caulfield. Steep yourself in Buffy history as you follow along and listen to stories from their shooting days.

Fan Experience Walking Tour with Charisma Carpenter and Emma Caulfield.`,
    heroImage: '/images/fan-experiences/hall-pass-to-the-hellmouth.avif',
  },
  sundayCsvEvent('sun-j-stephanie', 'J Stephanie', '2026-06-14T15:30:00-07:00', '2026-06-14T16:00:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-girl', 'Girl', '2026-06-14T16:00:00-07:00', '2026-06-14T16:30:00-07:00', 'main-auditorium', 'panel'),
  sundayCsvEvent('sun-charisma-j', 'Charisma J', '2026-06-14T16:00:00-07:00', '2026-06-14T16:30:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-closing-ceremonies', 'Closing Ceremonies', '2026-06-14T16:30:00-07:00', '2026-06-14T17:00:00-07:00', 'main-auditorium', 'panel'),
];

export const events: ScheduleEvent[] = [...saturdayCsvEvents, ...sundayCsvEvents];

