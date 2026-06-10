import type { ScheduleEvent } from '@/types';

const importedDescriptions: Partial<Record<string, string>> = {
  'sat-opening-ceremonies': `Welcome to HellmouthCon 2026.`,
  'sat-amber-benson-audiobook': `Join Amber Benson and Raven Belasco as they discuss writing their audiobook series! They may have a surprise or two in store for you!`,
  'sat-soothsaying': `This session will introduce the idea of scenario planning. Rather than focusing on the future of work or the future of libraries, Dan Rasmus will introduce the ideas of uncertainty, focal questions, forecasting, and matrix development through uncertainties and futures drawn from the extended Buffy universe.`,
  'sat-camden': `Camden Toy meant a great deal to us at HellmouthCon. Join us as we discuss him and some of the ways we remember him still.`,
  'sat-demonhuntr': `DEMONHUNTR is an LGBTQ series that follows a scrappy, super-powered group of friends fighting darkness in Southern California while navigating turbulent personal lives and relationships. Created by Buffy superfan Tim O'Leary, the show is a love letter to the Buffyverse while carving out its own identity as an extremely queer, extremely racy genre series. This panel includes a screening of the first two episodes followed by a talk with creator Tim O'Leary and producer-actor Robert Rice, plus a Q&A about turning fandom into original work.`,
  'sat-multi-beings': `Explore shades of gray and dive into the nuances of portraying moral complexity with Stephanie Romanov, Julie Benz, Amy Acker (as Illyria), and Clare Kramer.`,
  'sat-hey-im-enjoying-the': `This panel, led by board members of the Association for the Study of Buffy+, explores the importance of studying Buffy, the intersection between fandom and academia, the symbiotic relationship between fans and scholars, and the continuing significance of Buffy fandom in pop-culture studies.`,
  'sat-studying': `This panel, led by board members of the Association for the Study of Buffy+, explores the importance of studying Buffy, the intersection between fandom and academia, the symbiotic relationship between fans and scholars, and the continuing significance of Buffy fandom in pop-culture studies.`,
  'sat-casting-call': `Join in on a Hellmouth first: war stories from the casting room. Catch up with Iyari Limon, Mark Lutz, and Larry Bagby in a Q&A about auditioning for Buffy and Angel, whether they knew the scope of their roles, and how fans reacted to their introductions into an already established world.`,
  'sat-bring-back-firefy': `With Nathan Fillion and the rest of the original cast discussing the possible return of Season 2 in animated form, Browncoats have a lot of questions. What do we know? What can fans expect? How can Browncoats help? We might not have all the answers, but let's have a palaver about it.`,
  'sat-beauty-and-the-beasts': `What's it like to perform under makeup and prosthetics? How does it change your thinking, your mannerisms, and your voice? How many hours does it really take to craft a look? Find out in this conversation with Doug Jones, Emma Caulfield, and James Leary.`,
  'sat-panel-by-panel': `From Dark Horse's canon comic-book seasons to IDW's continuation of Angel and Boom Studios' multiverse approach, navigating Buffy in comics can be intimidating. This panel breaks down where to start, what to look forward to in those stories, and what fans hope to see next for Buffy in sequential art.`,
  'sat-clare-chats-w-friends': `Join Clare Kramer as she sits down with her pals Charisma Carpenter and J. August Richards to talk about all things Buffyverse!`,
  'sat-neurodivergence-in-buffyverse': `From prophetic visions and soul-returning guilt to magical obsessions and unconventional ways of seeing the world, the Buffyverse is filled with characters whose experiences resonate with many neurodivergent viewers. This interactive workshop explores characters such as Anya, Tara, Drusilla, and others while discussing how supernatural storylines can serve as metaphors for disability, neurodivergence, and chronic conditions.`,
  'sat-once-more-with-feeling-parody': `For one night only, the Scoobies come back together to bring Buffy's iconic musical episode to life in a hilarious live parody. See Buffy slay all day as she sings, dances, and suffers demonic entrances in a one-of-a-kind celebration of the ultimate Buffy musical experience.`,
  'sat-idiots-lantern': `Hellmouth's Saturday night stage show brings the ruckus with The Idiot's Lantern, a sketch-comedy performance that explores the funnier side of Buffy and Angel fandom through a variety of styles and characters.`,
  'sun-doug-jones': `Join the gentlemanly Doug Jones as he talks past projects and what he has in store for the future!`,
  'sun-q-and-a': `Join the gentlemanly Doug Jones as he talks past projects and what he has in store for the future!`,
  'sun-cosplay-and-sfx-beginners': `Makeup and special-effects tips for cosplayers from beginner to advanced. Bring your cosplay makeup and SFX questions—host Brooque Creative opens with a short presentation on favorite techniques before turning the session over to audience Q&A.`,
  'sun-for-beginners': `Makeup and special-effects tips for cosplayers from beginner to advanced. Bring your cosplay makeup and SFX questions—host Brooque Creative opens with a short presentation on favorite techniques before turning the session over to audience Q&A.`,
  'sun-hold-you-so-tight': `A screening of the short film "Hold You So Tight" followed by a Q&A with the filmmakers.`,
  'sun-watchers-academy': `In this specialized briefing, Rupert Giles offers an essential primer on the threat matrix of the California Hellmouth, drawing directly from the hard-won encounters he and his Slayer faced. Recruits will study the local demonic ecosystem, behavioral patterns, and practical weaknesses needed to understand Sunnydale's unique dangers.`,
  'sun-demons-of-the-hlmth': `In this specialized briefing, Rupert Giles offers an essential primer on the threat matrix of the California Hellmouth, drawing directly from the hard-won encounters he and his Slayer faced. Recruits will study the local demonic ecosystem, behavioral patterns, and practical weaknesses needed to understand Sunnydale's unique dangers.`,
  'sun-turning-your-passion': `Talk to some super-creative people who have turned something they love into a paying gig!`,
  'sun-a-paying-gig': `Talk to some super-creative people who have turned something they love into a paying gig!`,
  'sun-slaying-real-life': `Kral Space is a comedy-meets-heart podcast about mental health, resilience, and navigating a chaotic world through the lens of pop culture—especially Buffy the Vampire Slayer. This live episode blends humor, personal storytelling, fandom, and audience interaction as Kym Kral and Keith Saltojanes explore how Buffy themes like chosen family, inner strength, and facing your demons connect to real-life mental-health struggles.`,
  'sun-demons': `Kral Space is a comedy-meets-heart podcast about mental health, resilience, and navigating a chaotic world through the lens of pop culture—especially Buffy the Vampire Slayer. This live episode blends humor, personal storytelling, fandom, and audience interaction as Kym Kral and Keith Saltojanes explore how Buffy themes like chosen family, inner strength, and facing your demons connect to real-life mental-health struggles.`,
  'sun-sapphic-stories': `This gathering explores the groundbreaking lineage of the women who loved women across the Buffyverse, from Willow and Tara's historic relationship to later queer characters and storylines in television, comics, and novels. Join the discussion as fans celebrate the characters who shattered the mold and made so many viewers feel seen.`,
  'sun-rabbits-skin-conditions': `Join Emma Caulfield, James Leary, and Larry Bagby as they discuss their favorite—and not-so-favorite—parts of their characters.`,
  'sun-and-school-spirit': `Join Emma Caulfield, James Leary, and Larry Bagby as they discuss their favorite—and not-so-favorite—parts of their characters.`,
  'sun-what-would-buffy-do': `After the cancellation of the proposed Buffy revival, this panel explores why Buffy Summers and her story are still needed today. Expect a discussion about Buffy's endurance in pop culture, what comes next after the revival's cancellation, and why today's challenges still call for everyone's favorite Slayer.`,
  'sun-that-old-gang': `Reunite with some of the Angel Investigations team—Amy Acker and J August Richards—and their frenemies Julie Benz, Stephanie Romanov, and Mark Lutz.`,
  'sun-mine': `Reunite with some of the Angel Investigations team—Amy Acker and J August Richards—and their frenemies Julie Benz, Stephanie Romanov, and Mark Lutz.`,
  'sun-nerd-best': `Author Whitney Hathcock has taken Threads by storm with daily Buffy first-watch responses that have inspired others to start the show. Join The Nerd Best Friends as they discuss what it's been like watching Buffy for the first time.`,
  'sun-friends': `Author Whitney Hathcock has taken Threads by storm with daily Buffy first-watch responses that have inspired others to start the show. Join The Nerd Best Friends as they discuss what it's been like watching Buffy for the first time.`,
  'sun-youre-just-a': `Dissect Buffy's legacy of female empowerment with Clare Kramer and Iyari Limon.`,
  'sun-girl': `Dissect Buffy's legacy of female empowerment with Clare Kramer and Iyari Limon.`,
  'sun-closing-ceremonies': `Join us as we say goodbye to Sunnydale for another year.`,
};

function csvEvent(
  id: string,
  title: string,
  startTime: string,
  endTime: string,
  roomId: string,
  category: ScheduleEvent['category'],
  description = importedDescriptions[id] ?? '',
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
  description = importedDescriptions[id] ?? '',
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
  csvEvent('sat-opening-ceremonies', 'Opening Ceremonies', '2026-06-13T09:30:00-07:00', '2026-06-13T09:50:00-07:00', 'main-auditorium', 'panel'),
  {
    ...csvEvent('sat-welcome-to-the-hellmouth', 'Welcome to the Hellmouth (Julie Benz)', '2026-06-13T09:30:00-07:00', '2026-06-13T10:00:00-07:00', 'outside-photo-studio', 'photo-op'),
    description: `Kick your weekend off and sink your teeth into Buffy history alongside Julie Benz in the halls of Sunnydale High. This photo pays homage to the iconic moment when Darla set the tone for an entire genre-subverting world. Whether you're new in town or a vampire with centuries of convention experience, this fang-tastic photo opportunity will be killer.

Specialty Tableau Photo with Julie Benz.

$110 | Limited to 30`,
    heroImage: '/images/specialty-tableaux/welcome-to-the-hellmouth.jpg',
  },
  csvEvent('sat-amber-benson-audiobook', 'Genre Literature: A conversation with Amber Benson and Raven Belasco', '2026-06-13T10:00:00-07:00', '2026-06-13T10:45:00-07:00', 'main-auditorium', 'panel'),
  csvEvent('sat-soothsaying', 'Soothsaying and Fortune Telling: Learning How to foretell the future through scenario planning', '2026-06-13T10:00:00-07:00', '2026-06-13T10:45:00-07:00', 'panel-room-b', 'panel'),
  {
    ...csvEvent('sat-they-might-take-yours-doug', 'They Might Take Yours (Doug Jones)', '2026-06-13T10:00:00-07:00', '2026-06-13T10:30:00-07:00', 'photo-op-room', 'photo-op'),
    description: `Inspired by one of Buffy's most haunting episodes, this eerie tableau places you alongside the very gentlemanly Doug Jones. Featuring a preserved heart in a jar and an homage to the looming Sunnydale clocktower, this chilling photo will cut right to the heart.

Specialty Tableau Photo with Doug Jones.

$95 | Limited to 30 each day`,
    heroImage: '/images/specialty-tableaux/they-might-take-yours.jpg',
  },
  csvEvent('sat-james-autograph-morning', 'James Leary', '2026-06-13T10:00:00-07:00', '2026-06-13T11:00:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-larry-autograph-morning', 'Larry Bagby', '2026-06-13T10:00:00-07:00', '2026-06-13T11:00:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-clare-autograph-morning', 'Clare Kramer', '2026-06-13T10:00:00-07:00', '2026-06-13T11:30:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-emma-autograph-morning', 'Emma Caulfield', '2026-06-13T10:00:00-07:00', '2026-06-13T11:30:00-07:00', 'autograph-alley', 'autograph'),
  {
    ...csvEvent('sat-im-in-starch-heaven', "I'm in Starch Heaven: Angel Cast Breakfast", '2026-06-13T10:00:00-07:00', '2026-06-13T11:00:00-07:00', 'panel-room-a', 'fan-experience'),
    description: `Help the Helpless to another helping alongside Angel's friends and foes during I'M IN STARCH HEAVEN, a Saturday morning catered breakfast featuring the denizens of the Buffyverse's Los Angeles, who will rotate from table to table in the tradition of our traditional Villains Breakfast.

Fan Experience Breakfast with Amy Acker, Charisma Carpenter, Julie Benz, Mark Lutz, J August Richards, and Stephanie Romanov.`,
    heroImage: '/images/fan-experiences/starch-heaven.avif',
  },
  csvEvent('sat-raven-autograph-morning', 'Raven Belasco', '2026-06-13T11:00:00-07:00', '2026-06-13T12:00:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-camden', 'Why We Fight: Camden Toy, PanCAN, and How HellmouthCon Chooses its Charities', '2026-06-13T11:00:00-07:00', '2026-06-13T11:45:00-07:00', 'main-auditorium', 'panel'),
  csvEvent('sat-demonhuntr', 'DEMONHUNTR: When Buffy/Angel Nerds Make an Original Series', '2026-06-13T11:00:00-07:00', '2026-06-13T11:45:00-07:00', 'panel-room-b', 'panel'),
  csvEvent('sat-gay-watchers-council', "The Gay Watcher's Council", '2026-06-13T11:00:00-07:00', '2026-06-13T12:00:00-07:00', 'secondary-courtyard', 'meetup'),
  {
    ...csvEvent('sat-moving-in', 'We\'re Moving In (Amy Acker, Charisma Carpenter, J. August Richards, Julie Benz, Mark Lutz, Stephanie Romanov)', '2026-06-13T11:00:00-07:00', '2026-06-13T11:30:00-07:00', 'panel-room-a', 'photo-op'),
    description: `68 Rooms, 68 Vacancies. The Hyperion Hotel wasn't just headquarters—it was home. Join Amy Acker, Charisma Carpenter, J. August Richards, Julie Benz, Mark Lutz, and Stephanie Romanov in this unique HellmouthCon tribute to the place where Angel Investigations became a family.

Specialty Tableau Cast Photo with Amy Acker, Charisma Carpenter, J August Richards, Julie Benz, Mark Lutz, and Stephanie Romanov.

$430 | Limited to 15`,
    heroImage: '/images/specialty-tableaux/were-moving-in.jpg',
  },
  {
    ...csvEvent('sat-lesbian-gay-type-lovers', 'Lesbian Gay-Type Lovers (Amber Benson, Iyari Limon)', '2026-06-13T11:00:00-07:00', '2026-06-13T11:30:00-07:00', 'photo-op-room', 'photo-op'),
    description: `Stand between two of Willow's great loves in this Combo Photo in the Photo Studio with Amber Benson and Iyari Limon.

Specialty Tableau Photo with Amber Benson and Iyari Limon.

$130 | Limited to 30`,
    heroImage: '/images/specialty-tableaux/lesbian-gay-type-lovers.jpg',
  },
  csvEvent('sat-sunnydale-elem', 'Sunnydale Elementary Storytime & Sing-Along', '2026-06-13T12:00:00-07:00', '2026-06-13T13:00:00-07:00', 'outdoor-stage', 'meetup'),
  { ...csvEvent('sat-amber-photo', 'Amber Benson', '2026-06-13T11:30:00-07:00', '2026-06-13T12:00:00-07:00', 'photo-op-room', 'photo-op'), heroImage: '/images/photo-ops/amber-benson.jpg' },
  csvEvent('sat-multi-beings', '(Multi) Dimensional Beings', '2026-06-13T12:00:00-07:00', '2026-06-13T12:45:00-07:00', 'main-auditorium', 'panel'),
  csvEvent('sat-hey-im-enjoying-the', `"Hey, I'm enjoying the studying": Academia, Fandom, and the Acafan`, '2026-06-13T12:00:00-07:00', '2026-06-13T12:45:00-07:00', 'panel-room-b', 'panel'),
  csvEvent('sat-wolfram-hart-talent-acquisition', 'Wolfram & Hart: Talent Acquisition', '2026-06-13T12:00:00-07:00', '2026-06-13T13:00:00-07:00', 'secondary-courtyard', 'workshop'),
  { ...csvEvent('sat-j-august', 'J August Richards', '2026-06-13T12:00:00-07:00', '2026-06-13T12:30:00-07:00', 'photo-op-room', 'photo-op'), heroImage: '/images/photo-ops/j-august-richards.jpg' },
  csvEvent('sat-amber-autograph-midday', 'Amber Benson', '2026-06-13T12:00:00-07:00', '2026-06-13T13:00:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-doug-autograph-midday', 'Doug Jones', '2026-06-13T12:00:00-07:00', '2026-06-13T13:00:00-07:00', 'autograph-alley', 'autograph'),
  {
    ...csvEvent('sat-ruler-throne', 'They Made Me Ruler (Charisma Carpenter, Mark Lutz)', '2026-06-13T12:30:00-07:00', '2026-06-13T13:00:00-07:00', 'panel-room-a', 'photo-op'),
    description: `Step into the palace of Pylea to take your place beside Princess Cordelia and the Groosalugg beside the actual throne used during the filming of Angel's Pylea arc. This is no replica—it's the exact throne seen on screen. This is a once-in-a-lifetime chance to claim the seat of power in the company of two of Pylea's rulers while recreating Angel Investigations' most unforgettable adventure.

Specialty Tableau Photo with Charisma Carpenter and Mark Lutz.`,
    heroImage: '/images/specialty-tableaux/they-made-me-ruler.jpg',
  },
  { ...csvEvent('sat-james', 'James Leary', '2026-06-13T12:30:00-07:00', '2026-06-13T13:00:00-07:00', 'photo-op-room', 'photo-op'), heroImage: '/images/photo-ops/james-leary.jpg' },
  csvEvent('sat-casting-call', 'Casting Call', '2026-06-13T13:00:00-07:00', '2026-06-13T13:45:00-07:00', 'main-auditorium', 'panel'),
  csvEvent('sat-bring-back-firefy', 'Bring Back Firefly!', '2026-06-13T13:00:00-07:00', '2026-06-13T13:45:00-07:00', 'panel-room-b', 'panel'),
  {
    ...csvEvent('sat-vowel-play', 'Vowel Play: A Vision Quest', '2026-06-13T13:00:00-07:00', '2026-06-13T14:00:00-07:00', 'panel-room-a', 'fan-experience'),
    description: `The suave but scheming Lilah Morgan has blocked Cordelia's visions and rerouted them to invade the minds of two otherworldly beings, Glorificus and Darla. They just keep seeing and hearing Buffy and Angel quotes on repeat! Glory's Minions will face off against Darla's Muscle to be the first to restore their leader's comfort and sanity by solving the puzzle to complete the quotes. But watch out, Lilah may step out of the Vanna White Room to reveal a few tricks up her sleeve to stop you. Which team will decipher the most visions in Vowel Play: A Vision Quest, a "Wheel of Fortune"-style Fan Experience?

Fan Experience Party Game with Clare Kramer, Julie Benz, and Stephanie Romanov.`,
    heroImage: '/images/fan-experiences/vowel-play.avif',
  },
  { ...csvEvent('sat-amy', 'Amy Acker', '2026-06-13T13:30:00-07:00', '2026-06-13T14:00:00-07:00', 'photo-op-room', 'photo-op'), heroImage: '/images/photo-ops/amy-acker.jpg' },
  csvEvent('sat-j-august-autograph-afternoon', 'J. August Richards', '2026-06-13T13:30:00-07:00', '2026-06-13T14:30:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-beauty-and-the-beasts', 'Beauty and the Beasts', '2026-06-13T14:00:00-07:00', '2026-06-13T14:45:00-07:00', 'main-auditorium', 'panel'),
  csvEvent('sat-panel-by-panel', 'Panel by Panel: Navigating Buffy in the Comics Medium', '2026-06-13T14:00:00-07:00', '2026-06-13T14:45:00-07:00', 'panel-room-b', 'panel'),
  {
    ...csvEvent('sat-lets-get-crazy-clare', 'Let\'s Get Crazy (Clare Kramer)', '2026-06-13T14:00:00-07:00', '2026-06-13T14:30:00-07:00', 'panel-room-a', 'photo-op'),
    description: `A completely original Brain Suck-themed photo experience designed just for HellmouthCon. This custom setup has never been offered at any convention, anywhere.

Specialty Tableau Photo with Clare Kramer.

$85 | Limited to 30 each day`,
    heroImage: '/images/specialty-tableaux/lets-get-crazy.jpg',
  },
  { ...csvEvent('sat-charisma-photo', 'Charisma Carpenter', '2026-06-13T14:00:00-07:00', '2026-06-13T14:30:00-07:00', 'photo-op-room', 'photo-op'), heroImage: '/images/photo-ops/charisma-carpenter.jpg' },
  {
    ...csvEvent('sat-is-this-seat-taken', 'Is This Seat Taken? (Clare Kramer, Amber Benson)', '2026-06-13T14:30:00-07:00', '2026-06-13T15:00:00-07:00', 'panel-room-a', 'photo-op'),
    description: `A one-of-a-kind pairing of Tara and Glory, brought together for the first time ever. Created exclusively for HellmouthCon and never offered at any other event.

Specialty Tableau Photo with Clare Kramer and Amber Benson.`,
    heroImage: '/images/specialty-tableaux/is-this-seat-taken.jpg',
  },
  csvEvent('sat-amy-autograph-afternoon', 'Amy Acker', '2026-06-13T14:30:00-07:00', '2026-06-13T15:30:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-julie-autograph-afternoon', 'Julie Benz', '2026-06-13T14:30:00-07:00', '2026-06-13T15:30:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-larry-autograph-afternoon', 'Larry Bagby', '2026-06-13T14:30:00-07:00', '2026-06-13T15:30:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-iyari-autograph-afternoon', 'Iyari Limon', '2026-06-13T14:30:00-07:00', '2026-06-13T15:30:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-clare-chats-w-friends', 'Friends of the Buffyverse!', '2026-06-13T15:15:00-07:00', '2026-06-13T16:00:00-07:00', 'main-auditorium', 'panel'),
  csvEvent('sat-international-buffy-day', 'International Buffy Day', '2026-06-13T15:00:00-07:00', '2026-06-13T16:00:00-07:00', 'panel-room-b', 'panel'),
  {
    ...csvEvent('sat-poetry-for-demons', 'Poetry for Demons', '2026-06-13T15:00:00-07:00', '2026-06-13T16:00:00-07:00', 'panel-room-a', 'fan-experience'),
    description: `After Sunnydale collapsed, Clem and Groo got a job team-teaching English to demons… obviously. You're a demon enrolled in their class, and today's topic: Episode Titles! Your instructors know better than anyone that the world likes its demons monosyllabic, so no two syllable words are allowed! And if he hears one, your teacher just might express some disappointment through the universal language of punishment. This "Poetry for Neanderthals"-inspired Fan Experience will be a class act.

Fan Experience Party Game with James C Leary and Mark Lutz.`,
    heroImage: '/images/fan-experiences/poetry-for-demons.avif',
  },
  csvEvent('sat-wicca-club', 'Wicca Club', '2026-06-13T15:00:00-07:00', '2026-06-13T16:45:00-07:00', 'secondary-courtyard', 'meetup'),
  { ...csvEvent('sat-larry-photo', 'Larry Bagby', '2026-06-13T15:30:00-07:00', '2026-06-13T16:00:00-07:00', 'photo-op-room', 'photo-op'), heroImage: '/images/photo-ops/larry-bagby.jpg' },
  csvEvent('sat-doug-autograph-afternoon', 'Doug Jones', '2026-06-13T15:00:00-07:00', '2026-06-13T16:00:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-stephanie-autograph-late', 'Stephanie Romanov', '2026-06-13T15:30:00-07:00', '2026-06-13T17:00:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-neurodivergence-in-buffyverse', `"What Is Your Childhood Trauma?" Neurodivergence, Neurodiversity, and Neurodisability in the Buffyverse`, '2026-06-13T16:00:00-07:00', '2026-06-13T16:45:00-07:00', 'panel-room-b', 'panel'),
  csvEvent('sat-amber-autograph-late', 'Amber Benson', '2026-06-13T16:00:00-07:00', '2026-06-13T17:00:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-charisma-autograph-late', 'Charisma Carpenter', '2026-06-13T16:00:00-07:00', '2026-06-13T17:00:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-mark-autograph-late', 'Mark Lutz', '2026-06-13T16:00:00-07:00', '2026-06-13T17:00:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-james-autograph-late', 'James Leary', '2026-06-13T16:00:00-07:00', '2026-06-13T17:00:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-raven-autograph-late', 'Raven Belasco', '2026-06-13T16:00:00-07:00', '2026-06-13T17:00:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-watchers-academy', 'Watchers Academy: A Chronicle of the Slayer Lineage', '2026-06-13T16:00:00-07:00', '2026-06-13T17:00:00-07:00', 'secondary-courtyard', 'meetup'),
  {
    ...csvEvent('sat-letters-from-los-angeles', 'Letters from Los Angeles: Demonic Spelling Bee', '2026-06-13T16:30:00-07:00', '2026-06-13T17:30:00-07:00', 'panel-room-a', 'fan-experience'),
    description: `Thesulac. Kleynach. Krevlorsnwath. Skip.

Consult your Nyazian Scrolls, something BIG is coming and you're going to have to tackle it one letter at a time! Team Fred faces off against Team Gunn to save the world in the Demon Spelling Bee to end all spelling bees. The power was inside you the whole time. Also the vowels. Study up on your demon names, prophecy authors, and magical words (Thaumogenesis, anyone?) to prepare for this other-word-ly "Scrabble"-inspired Fan Experience.

Fan Experience Party Game with Amy Acker and J August Richards.`,
    heroImage: '/images/fan-experiences/letters-from-los-angeles.avif',
  },
  csvEvent('sat-once-more-with-feeling-parody', 'Once More with Feeling a Live Musical Parody', '2026-06-13T17:00:00-07:00', '2026-06-13T18:00:00-07:00', 'main-auditorium', 'panel'),
  csvEvent('sat-sunnydale-high-gsa', 'Sunnydale High GSA Mixer', '2026-06-13T17:00:00-07:00', '2026-06-13T18:00:00-07:00', 'secondary-courtyard', 'mixer'),
  csvEvent('sat-draculas-covenant', "Dracula's Covenant: The Taste of Eternity", '2026-06-13T18:00:00-07:00', '2026-06-13T19:00:00-07:00', 'secondary-courtyard', 'meetup'),
  csvEvent('sat-idiots-lantern', `The Idiot's Lantern- Sketch Comedy that Slays`, '2026-06-13T19:00:00-07:00', '2026-06-13T20:00:00-07:00', 'panel-room-b', 'panel'),
  csvEvent('sat-get-down-with-your-bad-self', 'Get Down with Your Bad Self', '2026-06-13T19:30:00-07:00', '2026-06-13T21:30:00-07:00', 'outdoor-stage', 'mixer'),
  csvEvent('sat-songs-from-the-playbook', 'Songs from the Playbook', '2026-06-13T20:00:00-07:00', '2026-06-13T20:30:00-07:00', 'outdoor-stage', 'meetup'),
];

const sundayCsvEvents: ScheduleEvent[] = [
  {
    ...sundayCsvEvent('sun-yes-please-diner', 'Yes Please (Amy Acker, J. August Richards)', '2026-06-14T09:30:00-07:00', '2026-06-14T10:00:00-07:00', 'photo-op-room', 'photo-op'),
    description: `Fred and Gunn's romance remains one of Angel's sweetest stories — complete with whipped cream! Pose like you're sharing breakfast at a diner booth with Amy Acker and J. August Richards in a scene inspired by the quiet moments that fans can never have too many of (like Fred with pancakes).

Specialty Tableau Photo with Amy Acker and J August Richards.`,
    heroImage: '/images/specialty-tableaux/yes-please.jpg',
  },
  sundayCsvEvent('sun-doug-jones', 'Q&A with Doug Jones', '2026-06-14T10:00:00-07:00', '2026-06-14T10:45:00-07:00', 'main-auditorium', 'panel'),
  sundayCsvEvent('sun-cosplay-and-sfx-beginners', 'Cosplay and SFX for Beginners', '2026-06-14T10:00:00-07:00', '2026-06-14T10:45:00-07:00', 'panel-room-b', 'workshop'),
  {
    ...sundayCsvEvent('sun-you-need-this-more-than-i-do', 'You Need This More Than I Do (Charisma Carpenter, Emma Caulfield)', '2026-06-14T10:00:00-07:00', '2026-06-14T10:30:00-07:00', 'school-courtyard', 'photo-op'),
    description: `What would you do if you found yourself between Cordelia and Anya in the Sunnydale courtyard and they offer you the famous vengeance amulet? Featuring a replica of Anyanka's amulet and two fan-favorite stars, this photo will be out of this world!

Specialty Tableau Photo with Charisma Carpenter and Emma Caulfield.

$185 | Limited to 30`,
    heroImage: '/images/specialty-tableaux/you-need-this-more-than-i-do.jpg',
  },
  {
    ...sundayCsvEvent('sun-some-of-the-kids-at-my-camp', 'Some of the Kids at my Camp Put it Together For Me (J. August Richards)', '2026-06-14T10:00:00-07:00', '2026-06-14T10:30:00-07:00', 'photo-op-room', 'photo-op'),
    description: `Get your hands on the actual hubcap axe used on camera by Gunn in Angel, the homemade weapon he carried through the demon-infested streets of Los Angeles. Stand against the forces of evil alongside J. August Richards with one of the most recognizable weapons in the Buffyverse — generously supplied by the legend himself.

Specialty Tableau Photo with J August Richards.

$85 | Limited to 30`,
    heroImage: '/images/specialty-tableaux/some-of-the-kids-at-camp-put-it-together-for-me.jpg',
  },
  {
    ...sundayCsvEvent('sun-hang-with-me-and-mine', 'Hang with Me and Mine (Amber Benson, Charisma Carpenter, Clare Kramer, Emma Caulfield, Iyari Limon, James C Leary, Larry Bagby)', '2026-06-14T10:30:00-07:00', '2026-06-14T11:00:00-07:00', 'school-courtyard', 'photo-op'),
    description: `Take your place in the iconic Sunnydale High courtyard alongside Amber Benson, Charisma Carpenter, Clare Kramer, Emma Caulfield, Iyari Limon, James C Leary, and Larry Bagby for a cast photo inspired by one of Cordelia's most memorable invitations. Share the frame with an incredible lineup of Buffy faves in a photo that can only happen at HellmouthCon.

Specialty Tableau Cast Photo with Amber Benson, Charisma Carpenter, Clare Kramer, Emma Caulfield, Iyari Limon, James C Leary, and Larry Bagby.

$480 | Limited to 15`,
    heroImage: '/images/specialty-tableaux/hang-with-me-and-mine.jpg',
  },
  { ...sundayCsvEvent('sun-amy-acker', 'Amy Acker', '2026-06-14T10:30:00-07:00', '2026-06-14T11:00:00-07:00', 'photo-op-room', 'photo-op'), heroImage: '/images/photo-ops/amy-acker.jpg' },
  sundayCsvEvent('sun-stephanie-autograph-morning', 'Stephanie Romanov', '2026-06-14T10:00:00-07:00', '2026-06-14T11:00:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-mark-autograph-morning', 'Mark Lutz', '2026-06-14T10:00:00-07:00', '2026-06-14T11:00:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-hold-you-so-tight', 'Love and Robots', '2026-06-14T11:00:00-07:00', '2026-06-14T11:45:00-07:00', 'main-auditorium', 'panel'),
  sundayCsvEvent('sun-watchers-academy', 'Watchers Academy: Demons of the Hellmouth', '2026-06-14T11:00:00-07:00', '2026-06-14T11:45:00-07:00', 'panel-room-b', 'panel'),
  sundayCsvEvent('sun-breaking-boundaries', 'Breaking Boundaries - Celebrating BIPOC Legacies at Sunnydale High', '2026-06-14T11:00:00-07:00', '2026-06-14T12:00:00-07:00', 'secondary-courtyard', 'meetup'),
  { ...sundayCsvEvent('sun-julie-benz', 'Julie Benz', '2026-06-14T11:00:00-07:00', '2026-06-14T11:30:00-07:00', 'photo-op-room', 'photo-op'), heroImage: '/images/photo-ops/julie-benz.jpg' },
  sundayCsvEvent('sun-j-august-autograph-midday', 'J. August Richards', '2026-06-14T11:00:00-07:00', '2026-06-14T12:30:00-07:00', 'autograph-alley', 'autograph'),
  { ...sundayCsvEvent('sun-stephanie-photo', 'Stephanie Romanov', '2026-06-14T11:30:00-07:00', '2026-06-14T12:00:00-07:00', 'photo-op-room', 'photo-op'), heroImage: '/images/photo-ops/stephanie-romanov.jpg' },
  sundayCsvEvent('sun-turning-your-passion', 'Turning Your Passion into a Paying Gig', '2026-06-14T12:00:00-07:00', '2026-06-14T12:45:00-07:00', 'main-auditorium', 'panel'),
  sundayCsvEvent('sun-slaying-real-life', 'Slaying Real-Life Demons: Mental Health with Buffy & Beyond - a Live Podcast Recording', '2026-06-14T12:00:00-07:00', '2026-06-14T12:45:00-07:00', 'panel-room-b', 'panel'),
  {
    ...sundayCsvEvent('sun-muffin-i-cooked-them-myself-cast-brunch', 'Muffin? I Cooked Them Myself!: Buffy Cast Brunch', '2026-06-14T11:00:00-07:00', '2026-06-14T12:30:00-07:00', 'panel-room-a', 'fan-experience'),
    description: `Join 7 of our Sunnydale alum from Buffy the Vampire Slayer for MUFFIN? I COOKED THEM MYSELF!, a fang-tastic and unforgettable themed catered brunch on Sunday morning. Our heroes and villains will rotate from table to table in the tradition of our popular Villains Breakfast.

Fan Experience Brunch with Amber Benson, Clare Kramer, Doug Jones, Emma Caulfield, James C Leary, Larry Bagby, and Iyari Limon.`,
    heroImage: '/images/fan-experiences/muffin.avif',
  },
  sundayCsvEvent('sun-corp-dance', 'The Core Dance Crew Live', '2026-06-14T12:00:00-07:00', '2026-06-14T12:20:00-07:00', 'outdoor-stage', 'meetup'),
  { ...sundayCsvEvent('sun-mark-photo', 'Mark Lutz', '2026-06-14T12:00:00-07:00', '2026-06-14T12:30:00-07:00', 'photo-op-room', 'photo-op'), heroImage: '/images/photo-ops/mark-lutz.jpg' },
  sundayCsvEvent('sun-julie-autograph-midday', 'Julie Benz', '2026-06-14T12:00:00-07:00', '2026-06-14T13:00:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-d-hoffrans-fold', "D'Hoffran's Fold: Curses, Chaos, and Career Vengeance", '2026-06-14T12:00:00-07:00', '2026-06-14T13:00:00-07:00', 'secondary-courtyard', 'workshop'),
  {
    ...sundayCsvEvent('sun-you-rock-clem', 'You Rock! (James C Leary)', '2026-06-14T12:30:00-07:00', '2026-06-14T13:00:00-07:00', 'panel-room-a', 'photo-op'),
    description: `Hop into a red VW Bug with Clem himself and pose like you're going for a joyride with one of the most lovable dudes in Sunnydale. Complete with Clem makeup and a sendup to his iconic Beetle, this playful photo is pure fan-service in the best possible way.

Specialty Tableau Photo with James C Leary.

$85 | Limited to 30`,
    heroImage: '/images/specialty-tableaux/you-rock.jpg',
  },
  sundayCsvEvent('sun-amy-autograph', 'Amy Acker', '2026-06-14T12:00:00-07:00', '2026-06-14T13:00:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-rabbits-skin-conditions', `Rabbits, Skin Conditions and School Spirit: Sunnydale's Most Unexpected MVP's`, '2026-06-14T13:00:00-07:00', '2026-06-14T13:45:00-07:00', 'main-auditorium', 'panel'),
  sundayCsvEvent('sun-what-would-buffy-do', 'What Would Buffy Do? Why We Need Buffy the Vampire Slayer More Than Ever', '2026-06-14T13:00:00-07:00', '2026-06-14T13:45:00-07:00', 'panel-room-b', 'panel'),
  {
    ...sundayCsvEvent('sun-cant-even', "Can't Even Shout: A Pictionary Game of Sunnydale Locations", '2026-06-14T13:00:00-07:00', '2026-06-14T14:00:00-07:00', 'panel-room-a', 'fan-experience'),
    description: `The citizens of Sunnydale are fleeing The Gentlemen, but they don't have their voices! Each player will get a chance to sketch the Sunnydale location they are fleeing to (as randomly drawn) while their teammates write their best guesses on the white boards hanging around their necks. Those who get it right take one step closer to Tara and to safety. Those who don't are forced to stand still until the next round… as The Lead Gentleman advances. Who will make it all the way to safety, and whose heart will end up in a jar? This "Pictionary"-meets-"Red-Rover"-style Fan Experience will be a SCREAM.

Fan Experience Party Game with Amber Benson and Doug Jones.`,
    heroImage: '/images/fan-experiences/cant-even-shout.avif',
  },
  { ...sundayCsvEvent('sun-charisma-photo', 'Charisma Carpenter', '2026-06-14T13:00:00-07:00', '2026-06-14T13:30:00-07:00', 'photo-op-room', 'photo-op'), heroImage: '/images/photo-ops/charisma-carpenter.jpg' },
  sundayCsvEvent('sun-clare-autograph', 'Clare Kramer', '2026-06-14T13:00:00-07:00', '2026-06-14T14:00:00-07:00', 'autograph-alley', 'autograph'),
  { ...sundayCsvEvent('sun-iyari-photo', 'Iyari Limon', '2026-06-14T13:30:00-07:00', '2026-06-14T14:00:00-07:00', 'photo-op-room', 'photo-op'), heroImage: '/images/photo-ops/iyari-limon.jpg' },
  sundayCsvEvent('sun-raven-autograph-afternoon', 'Raven Belasco', '2026-06-14T13:00:00-07:00', '2026-06-14T14:00:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-sapphic-stories', `Under Their Spell: Sunnydale's Sapphic Stories`, '2026-06-14T14:00:00-07:00', '2026-06-14T15:00:00-07:00', 'secondary-courtyard', 'meetup'),
  sundayCsvEvent('sun-that-old-gang', 'That Old Gang of Mine', '2026-06-14T14:00:00-07:00', '2026-06-14T14:45:00-07:00', 'main-auditorium', 'panel'),
  sundayCsvEvent('sun-emma-autograph-afternoon', 'Emma Caulfield', '2026-06-14T14:00:00-07:00', '2026-06-14T14:45:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-iyari-autograph-afternoon', 'Iyari Limon', '2026-06-14T14:00:00-07:00', '2026-06-14T15:00:00-07:00', 'autograph-alley', 'autograph'),
  {
    ...sundayCsvEvent('sun-bunny-wrksp', 'They Might Take Yours (Doug Jones)', '2026-06-14T14:30:00-07:00', '2026-06-14T15:00:00-07:00', 'photo-op-room', 'photo-op'),
    description: `Inspired by one of Buffy's most haunting episodes, this eerie tableau places you alongside the very gentlemanly Doug Jones. Featuring a preserved heart in a jar and an homage to the looming Sunnydale clocktower, this chilling photo will cut right to the heart.

Specialty Tableau Photo with Doug Jones.

$95 | Limited to 30 each day`,
    heroImage: '/images/specialty-tableaux/they-might-take-yours.jpg',
  },
  {
    ...sundayCsvEvent('sun-lets-get-crazy-clare', 'Let\'s Get Crazy (Clare Kramer)', '2026-06-14T14:30:00-07:00', '2026-06-14T15:00:00-07:00', 'panel-room-a', 'photo-op'),
    description: `A completely original Brain Suck-themed photo experience designed just for HellmouthCon. This custom setup has never been offered at any convention, anywhere.

Specialty Tableau Photo with Clare Kramer.

$85 | Limited to 30 each day`,
    heroImage: '/images/specialty-tableaux/lets-get-crazy.jpg',
  },
  sundayCsvEvent('sun-nerd-best', 'Watch the Watcher: A Live Crossover Event with Nerd Best Friends and Whitney Hathcock', '2026-06-14T15:00:00-07:00', '2026-06-14T15:45:00-07:00', 'panel-room-b', 'panel'),
  {
    ...sundayCsvEvent('sun-is-this-seat-taken', 'Is This Seat Taken? (Clare Kramer, Amber Benson)', '2026-06-14T15:00:00-07:00', '2026-06-14T15:30:00-07:00', 'panel-room-a', 'photo-op'),
    description: `A one-of-a-kind pairing of Tara and Glory, brought together for the first time ever. Created exclusively for HellmouthCon and never offered at any other event.

Specialty Tableau Photo with Clare Kramer and Amber Benson.`,
    heroImage: '/images/specialty-tableaux/is-this-seat-taken.jpg',
  },
  sundayCsvEvent('sun-amy-autograph-late', 'Amy Acker', '2026-06-14T15:00:00-07:00', '2026-06-14T16:00:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-the-bronze-sophie-cooper', 'The Bronze: Sophie Cooper', '2026-06-14T15:00:00-07:00', '2026-06-14T16:00:00-07:00', 'outdoor-stage', 'meetup'),
  sundayCsvEvent('sun-doug-autograph-late', 'Doug Jones', '2026-06-14T15:00:00-07:00', '2026-06-14T16:00:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-stephanie-autograph-late', 'Stephanie Romanov', '2026-06-14T15:00:00-07:00', '2026-06-14T16:00:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-james-autograph-late', 'James Leary', '2026-06-14T15:00:00-07:00', '2026-06-14T16:00:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-julie-autograph-late', 'Julie Benz', '2026-06-14T15:00:00-07:00', '2026-06-14T16:30:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-larry-autograph-late', 'Larry Bagby', '2026-06-14T15:00:00-07:00', '2026-06-14T16:30:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-youre-just-a', `You're Just a Girl`, '2026-06-14T15:45:00-07:00', '2026-06-14T16:25:00-07:00', 'main-auditorium', 'panel'),
  {
    ...sundayCsvEvent('sun-hall-pass-to-the-hellmouth-walking-tour', 'Hall Pass to the Hellmouth: Walking Tour', '2026-06-14T15:00:00-07:00', '2026-06-14T16:00:00-07:00', 'outdoor-stage', 'fan-experience'),
    description: `Wish Granted!

Back by popular demand, this time with a new twist! Cordy and Anya are getting together to guide you through their favorite high school memories in this walking tour of Sunnydale High filming locations with dynamic duo Charisma Carpenter and Emma Caulfield. Steep yourself in Buffy history as you follow along and listen to stories from their shooting days.

Fan Experience Walking Tour with Charisma Carpenter and Emma Caulfield.`,
    heroImage: '/images/fan-experiences/hall-pass-to-the-hellmouth.avif',
  },
  sundayCsvEvent('sun-amber-autograph-late', 'Amber Benson', '2026-06-14T15:30:00-07:00', '2026-06-14T16:30:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-j-august-autograph-late', 'J. August Richards', '2026-06-14T15:30:00-07:00', '2026-06-14T16:30:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-mark-autograph-late', 'Mark Lutz', '2026-06-14T15:30:00-07:00', '2026-06-14T16:30:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-charisma-autograph-closing', 'Charisma Carpenter', '2026-06-14T16:00:00-07:00', '2026-06-14T17:00:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-closing-ceremonies', 'Closing Ceremonies', '2026-06-14T16:30:00-07:00', '2026-06-14T17:00:00-07:00', 'main-auditorium', 'panel'),
];

export const events: ScheduleEvent[] = [...saturdayCsvEvents, ...sundayCsvEvents];

