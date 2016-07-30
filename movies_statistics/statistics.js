google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
            ['Movie', 'Rating']
            ,['Man on a Ledge (2012)', 6.6]
            ,['The Raid 2: Berandal (2014)', 8.0]
            ,['The Revenant (2015)', 8.1]
            ,['The Grand Budapest Hotel (2014)', 8.1]
            ,['Flight (2012)', 7.3]
            ,['City of God (2002)', 8.7]
            ,['World War Z (2013)', 7.0]
            ,['13 Hours: The Secret Soldiers of Benghazi (2016)', 7.4]
            ,['Triple 9 (2016)', 6.3]
            ,['Air Force One (1997)', 6.4]
            ,['Spy Game (2001)', 7.0]
            ,['The Hunger Games: Mockingjay - Part 2 (2015)', 6.6]
            ,['Captain America: Civil War (2016)', 8.3]
            ,['Everest (2015)', 7.1]
            ,['Spotlight (2015)', 8.1]
            ,['White House Down (2013)', 6.4]
            ,['Olympus Has Fallen (2013)', 6.5]
            ,['Ride Along (2014)', 6.2]
            ,['Truth (2015)', 6.8]
            ,['The Brooke Ellison Story (TV Movie 2004)', 7.2]
            ,['Now You See Me (2013)', 7.3]
            ,['Steve Jobs (2015)', 7.3]
            ,['The Martian (2015)', 8.1]
            ,['The Hateful Eight (2015)', 7.9]
            ,['Legend (2015)', 7.0]
            ,['Pawn Sacrifice (2014)', 7.0]
            ,['Gravity (2013)', 7.8]
            ,['Big (1988)', 7.3]
            ,['Cast Away (2000)', 7.7]
            ,['The Godfather: Part II (1974)', 9.0]
            ,['Max (2015)', 6.8]
            ,['The Big Short (2015)', 7.8]
            ,['Transporter 3 (2008)', 6.1]
            ,['Transporter 2 (2005)', 6.3]
            ,['The Transporter (2002)', 6.8]
            ,['The Prestige (2006)', 8.5]
            ,['Deadpool (2016)', 8.4]
            ,['Black Mass (2015)', 7.0]
            ,['The Intern (2015)', 7.2]
            ,['Spooks: The Greater Good (2015)', 6.3]
            ,['The Godfather (1972)', 9.2]
            ,['Borat (2006)', 7.3]
            ,['Munich (2005)', 7.6]
            ,['The Last King of Scotland (2006)', 7.7]
            ,['Rush Hour 2 (2001)', 6.6]
            ,['Saints and Soldiers: The Void (2014)', 5.1]
            ,['Point Break (1991)', 7.2]
            ,['District 9 (2009)', 8.0]
            ,['Cop Car (2015)', 6.2]
            ,['Walk of Shame (2014)', 6.0]
            ,['Snatch. (2000)', 8.3]
            ,['Little Boy (2015)', 7.4]
            ,['Rollerball (2002)', 2.9]
            ,['The Saint (1997)', 6.2]
            ,['Red Army (2014)', 7.7]
            ,['Fed Up (2014)', 7.7]
            ,['Dodgeball: A True Underdog Story (2004)', 6.7]
            ,['Rollerball (1975)', 6.6]
            ,['The Debt (2010)', 6.9]
            ,['Zero Dark Thirty (2012)', 7.4]
            ,['Act of Valor (2012)', 6.5]
            ,['Shame (2011)', 7.3]
            ,['Inside Man (2006)', 7.6]
            ,['21 (2008)', 6.8]
            ,['Eagle Eye (2008)', 6.6]
            ,['S.W.A.T. (2003)', 6.0]
            ,['Phone Booth (2002)', 7.1]
            ,['16 Blocks (2006)', 6.6]
            ,['The Age of Adaline (2015)', 7.2]
            ,['Bad Teacher (2011)', 5.7]
            ,['Deuce Bigalow: European Gigolo (2005)', 4.6]
            ,['Truth (2015)', 6.2]
            ,['Sicario (2015)', 8.0]
            ,['Ant-Man (2015)', 7.5]
            ,['Bad Boys (1995)', 6.8]
            ,['The Fast and the Furious: Tokyo Drift (2006)', 6.0]
            ,['Babel (2006)', 7.5]
            ,['Killing Them Softly (2012)', 6.2]
            ,['The Score (2001)', 6.8]
            ,['Bad Boys II (2003)', 6.5]
            ,['Defiance (2008)', 7.2]
            ,['Citizenfour (2014)', 8.1]
            ,['Licence to Kill (1989)', 6.6]
            ,['A View to a Kill (1985)', 6.3]
            ,['For Your Eyes Only (1981)', 6.8]
            ,['Moonraker (1979)', 6.3]
            ,['Diamonds Are Forever (1971)', 6.7]
            ,['On Her Majesty\'s Secret Service (1969)', 6.8]
            ,['Thunderball (1965)', 7.0]
            ,['Goldfinger (1964)', 7.8]
            ,['From Russia with Love (1963)', 7.5]
            ,['The Bridge on the River Kwai (1957)', 8.2]
            ,['Saints and Soldiers: War Pigs (2015)', 4.0]
            ,['The Walk (2015)', 7.6]
            ,['Bridge of Spies (2015)', 8.0]
            ,['Thick as Thieves (2009)', 6.0]
            ,['Lucky Number Slevin (2006)', 7.8]
            ,['Spare Parts (2015)', 7.2]
            ,['Into the Storm (2014)', 5.8]
            ,['No Escape (2015)', 6.8]
            ,['Maze Runner: The Scorch Trials (2015)', 6.6]
            ,['Due Date (2010)', 6.6]
            ,['Die Another Day (2002)', 6.1]
            ,['The Transporter Refueled (2015)', 4.9]
            ,['The Way Back (2010)', 7.3]
            ,['Octopussy (1983)', 6.6]
            ,['Vacation (2015)', 6.2]
            ,['Self/less (2015)', 6.5]
            ,['Interview with a Hitman (2012)', 6.4]
            ,['Mission: Impossible - Rogue Nation (2015)', 7.6]
            ,['Ice Age: Dawn of the Dinosaurs (2009)', 7.0]
            ,['Kung Fu Panda 2 (2011)', 7.3]
            ,['Ice Age (2002)', 7.6]
            ,['Spectre (2015)', 7.5]
            ,['Ted 2 (2015)', 6.5]
            ,['Spy (2015)', 7.2]
            ,['Minions (2015)', 6.5]
            ,['Experimenter (2015)', 6.7]
            ,['Saving Private Ryan (1998)', 8.6]
            ,['Edge of Tomorrow (2014)', 7.9]
            ,['The Shawshank Redemption (1994)', 9.3]
            ,['Office Space (1999)', 7.8]
            ,['The Boy in the Striped Pyjamas (2008)', 7.8]
            ,['Pearl Harbor (2001)', 6.0]
            ,['V for Vendetta (2005)', 8.2]
            ,['Wild Card (2015)', 5.6]
            ,['Valkyrie (2008)', 7.1]
            ,['The Signal (2014)', 6.1]
            ,['Whiplash (2014)', 8.5]
            ,['Taken (2008)', 7.9]
            ,['Salting the Battlefield (TV Movie 2014)', 6.6]
            ,['Hercules (2014)', 6.1]
            ,['Iron Man 3 (2013)', 7.3]
            ,['Tracers (2015)', 5.6]
            ,['Unfinished Business (2015)', 5.4]
            ,['Iron Man (2008)', 7.9]
            ,['Iron Man 2 (2010)', 7.0]
            ,['Assassins Tale (2013)', 4.4]
            ,['Transcendence (2014)', 6.3]
            ,['Narcopolis (2015)', 4.3]
            ,['Paper Towns (2015)', 6.5]
            ,['Pitch Perfect 2 (2015)', 6.6]
            ,['Home (2015)', 6.7]
            ,['Captain America: The First Avenger (2011)', 6.8]
            ,['Public Enemies (2009)', 7.0]
            ,['Johnny English Reborn (2011)', 6.3]
            ,['Johnny English (2003)', 6.1]
            ,['Mission: Impossible - Ghost Protocol (2011)', 7.4]
            ,['Angels & Demons (2009)', 6.7]
            ,['Pirates of the Caribbean: The Curse of the Black Pearl (2003)', 8.1]
            ,['Pirates of the Caribbean: At World\'s End (2007)', 7.1]
            ,['Pirates of the Caribbean: On Stranger Tides (2011)', 6.7]
            ,['Inside Job (2010)', 8.3]
            ,['Der Untergang (2004)', 8.3]
            ,['Parker (2013)', 6.2]
            ,['Safe (2012)', 6.5]
            ,['Entourage (2015)', 6.8]
            ,['Southpaw (2015)', 7.6]
            ,['Hitman (2007)', 6.3]
            ,['Pixels (2015)', 5.7]
            ,['The Riot Club (2014)', 6.0]
            ,['Harry Potter and the Deathly Hallows: Part 2 (2011)', 8.1]
            ,['Home Alone: The Holiday Heist (TV Movie 2012)', 3.8]
            ,['Home Alone 4 (TV Movie 2002)', 2.4]
            ,['Home Alone 3 (1997)', 4.2]
            ,['Home Alone 2: Lost in New York (1992)', 6.5]
            ,['Home Alone (1990)', 7.4]
            ,['Charlie and the Chocolate Factory (2005)', 6.7]
            ,['Harry Potter and the Half-Blood Prince (2009)', 7.5]
            ,['Harry Potter and the Goblet of Fire (2005)', 7.6]
            ,['Harry Potter and the Order of the Phoenix (2007)', 7.5]
            ,['Harry Potter and the Deathly Hallows: Part 1 (2010)', 7.7]
            ,['Harry Potter and the Prisoner of Azkaban (2004)', 7.8]
            ,['Harry Potter and the Chamber of Secrets (2002)', 7.4]
            ,['Selma (2014)', 7.5]
            ,['Let\'s Be Cops (2014)', 6.5]
            ,['Pitch Perfect (2012)', 7.2]
            ,['Child 44 (2015)', 6.4]
            ,['Transformers: Age of Extinction (2014)', 5.8]
            ,['Dope (2015)', 7.4]
            ,['Air (2015)', 5.1]
            ,['Speed (1994)', 7.2]
            ,['Gone in Sixty Seconds (2000)', 6.5]
            ,['The Rock (1996)', 7.4]
            ,['Con Air (1997)', 6.8]
            ,['Face/Off (1997)', 7.3]
            ,['Project T (2015)', 6.5]
            ,['Salt (2010)', 6.4]
            ,['The Curious Case of Benjamin Button (2008)', 7.8]
            ,['The Social Network (2010)', 7.8]
            ,['Operator (2015)', 4.3]
            ,['The Pacifier (2005)', 5.5]
            ,['Amistad (1997)', 7.2]
            ,['The Adjustment Bureau (2011)', 7.1]
            ,['Dying of the Light (2014)', 4.3]
            ,['The Butler (2013)', 7.1]
            ,['The Terminal (2004)', 7.3]
            ,['Horrible Bosses (2011)', 6.9]
            ,['The Da Vinci Code (2006)', 6.5]
            ,['In Time (2011)', 6.7]
            ,['The Blind Side (2009)', 7.7]
            ,['Stretch (2014)', 6.5]
            ,['John Doe: Vigilante (2014)', 6.6]
            ,['Vice (2015)', 4.1]
            ,['Jack Ryan: Shadow Recruit (2014)', 6.2]
            ,['Camp X-Ray (2014)', 7.0]
            ,['The Hangover (2009)', 7.8]
            ,['Catch Me If You Can (2002)', 8.0]
            ,['\'71 (2014)', 7.2]
            ,['The Water Diviner (2014)', 7.1]
            ,['Two Night Stand (2014)', 6.4]
            ,['The Expendables 3 (2014)', 6.1]
            ,['Furious 6 (2013)', 7.2]
            ,['Sex Tape (2014)', 5.1]
            ,['Non-Stop (2014)', 7.0]
            ,['Paddington (2014)', 7.2]
            ,['The Cobbler (2014)', 5.8]
            ,['Black Hawk Down (2001)', 7.7]
            ,['Lawrence of Arabia (1962)', 8.4]
            ,['The Hurt Locker (2008)', 7.6]
            ,['Men in Black 3 (2012)', 6.9]
            ,['I, Robot (2004)', 7.1]
            ,['I Am Legend (2007)', 7.2]
            ,['Sherlock Holmes (2009)', 7.6]
            ,['The Gambler (2014)', 6.0]
            ,['Snowpiercer (2013)', 7.0]
            ,['The Dictator (2012)', 6.4]
            ,['The Judge (2014)', 7.4]
            ,['A Million Ways to Die in the West (2014)', 6.1]
            ,['Skyfall (2012)', 7.8]
            ,['The Monuments Men (2014)', 6.1]
            ,['Yes Man (2008)', 6.8]
            ,['The 40 Year Old Virgin (2005)', 7.2]
            ,['Source Code (2011)', 7.5]
            ,['Kung Fu Panda (2008)', 7.6]
            ,['Green Zone (2010)', 6.9]
            ,['Haywire (2011)', 5.8]
            ,['Sherlock Holmes: A Game of Shadows (2011)', 7.5]
            ,['Taken 2 (2012)', 6.3]
            ,["Forrest Gump (1994)", 8.8]
            ,["Gladiator (2000)", 8.5]
            ,["Taken 3 (2014)", 6.0]
            ,["John Wick (2014)", 7.2]
            ,["Dracula Untold (2014)", 6.3]
            ,["Fury (2014)", 7.6]
            ,["The Maze Runner (2014)", 6.8]
            ,["Interstellar (2014)", 8.7]
            ,["The Equalizer (2014)", 7.2]
            ,["The Hunger Games: Mockingjay - Part 1 (2014)", 6.8]
            ,["Horrible Bosses 2 (2014)", 6.3]
            ,["Samba (2014)", 6.7]
            ,["Nightcrawler (2014)", 7.9]
            ,["A Walk Among the Tombstones (2014)", 6.5]
            ,["Exodus: Gods and Kings (2014)", 6.1]
            ,["Unbroken (2014)", 7.2]
            ,["The Imitation Game (2014)", 8.1]
            ,["Dumb and Dumber To (2014)", 5.8]
            ,["Night at the Museum: Secret of the Tomb (2014)", 6.3]
            ,["Kingsman: The Secret Service (2014)", 7.8]
            ,["Blackhat (2015)", 5.4]
            ,["Jupiter Ascending (2015)", 5.4]
            ,["Focus (2015)", 6.6]
            ,["Good People (2014)", 5.5]
            ,["Michiel de Ruyter (2015)", 7.2]
            ,["American Sniper (2014)", 7.3]
            ,["Titanic (1997)", 7.7]
            ,["Avatar (2009)", 7.9]
            ,["The Avengers (2012)", 8.1]
            ,["Jurassic World (2015)", 7.2]
            ,["Pirates of the Caribbean: Dead Man's Chest (2006)", 7.3]
            ,["Harry Potter and the Sorcerer's Stone (2001)", 7.5]
            ,["San Andreas (2015)", 6.2]
            ,["Avengers: Age of Ultron (2015)", 7.7]
            ,["Mad Max: Fury Road (2015)", 8.2]
            ,["Insurgent (2015)", 6.4]
            ,["Get Hard (2015)", 6.1]
            ,["Run All Night (2015)", 6.6]
            ,["Furious 7 (2015)", 7.4]
            ,["Ex Machina (2015)", 7.7]
            ,["X+Y (2014)", 7.2]
            ,["Big Hero 6 (2014)", 7.9]
            ,["Gone Girl (2014)", 8.2]
            ,["Guardians of the Galaxy (2014)", 8.1]
            ,["True Story (2015)", 6.3]
            ,["Fifty Shades of Grey (2015)", 4.2]
            ,["The Theory of Everything (2014)", 7.7]
            ,["Boyhood (2014)", 8.0]
            ,["Battleship (2012)", 5.9]
            ,["Good Kill (2014)", 6.3]
            ,["The Gunman (2015)", 5.8]
            ,["Last Knights (2015)", 6.2]
            ,["Lone Survivor (2013)", 7.6]
            ,["Survivor (2015)", 5.6]
            ,["Chappie (2015)", 6.9]
            ,["Divergent (2014)", 6.8]
            ,["3 Days to Kill (2014)", 6.2]
            ,["A Night in Old Mexico (2013)", 5.7]
            ,["Bad Neighbours (2014)", 6.4]
            ,["Deadfall (2012)", 6.3]
            ,["Escape Plan (2013)", 6.8]
            ,["Homefront (2013)", 6.5]
            ,["Last Vegas (2013)", 6.7]
            ,["Looper (2012)", 7.5]
            ,["Maidentrip (2013)", 7.6]
            ,["Malavita (2013)", 6.3]
            ,["Need for Speed (2014)", 6.6]
            ,["Planet of the Apes (2001)", 5.7]
            ,["Ted (2012)", 7.0]
            ,["The Hunger Games (2012)", 7.3]
            ,["The Hunger Games: Catching Fire (2013)", 7.6]
            ,["The Lego Movie (2014)", 7.8]
            ,["The Mechanic (2011)", 6.6]
            ,["Total Recall (2012)", 6.3]
            ,["Unknown (2011)", 6.9]
            ,["The Man from U.N.C.L.E. (2015)", 7.6]
            ,["Hitman: Agent 47 (2015)", 5.8]
            ,["The Green Mile (1999)", 8.5]
            ,["Ocean's Eleven (2001)", 7.8]
            ,["Ocean's Twelve (2004)", 6.4]
            ,["Ocean's Thirteen (2007)", 6.9]
            ,["The Intouchables (2011)", 8.6]
            ,["The Interview (2014)", 6.7]
            ,["The Italian Job (2003)", 7.0]
            ,["Casino Royale (2006)", 8.0]
            ,["Quantum of Solace (2008)", 6.7]
            ,["Troy (2004)", 7.2]
            ,["300 (2006)", 7.8]
            ,["300: Rise of an Empire (2014)", 6.3]
            ,["The Bourne Identity (2002)", 7.9]
            ,["The Bourne Supremacy (2004)", 7.8]
            ,["The Bourne Ultimatum (2007)", 8.1]
            ,["Captain America: The Winter Soldier (2014)", 7.8]
            ,["The Purge (2013)", 5.6]
            ,["The Purge: Anarchy (2014)", 6.5]
            ,["Life of Pi (2012)", 8.0]
            ,["Das Boot (1981)", 8.4]
            ,["Inception (2010)", 8.8]
            ,["One Flew Over the Cuckoo's Nest (1975)", 8.7]
            ,["12 Years a Slave (2013)", 8.1]
            ,["The King's Speech (2010)", 8.1]
            ,["Django Unchained (2012)", 8.5]
            ,["Inglourious Basterds (2009)", 8.3]
            ,["The Wolf of Wall Street (2013)", 8.2]
            ,["Godzilla (2014)", 6.5]
            ,["21 Jump Street (2012)", 7.2]
            ,["22 Jump Street (2014)", 7.1]
            ,["Lucy (2014)", 6.4]
            ,["Despicable Me 2 (2013)", 7.5]
            ,["Limitless (2011)", 7.4]
            ,["Ast&#233;rix: Le domaine des dieux (2014)", 7.0]
            ,["Wild Card (2015)", 5.6]
                        ]);
    var options = {
        title:          'Rating of movies',
        legend:         {position: 'none' },
        height:         500,
        chartArea:      {width: '100%'},
        hAxis:          {title: '', textPosition: 'out'},
        vAxis:          {title: '', textPosition: 'in'},
        histogram:      {hideBucketItems: true, bucketSize: 0.5},
    };

    var chart = new google.visualization.Histogram(document.getElementById('chart_div'));
    chart.draw(data, options);
}
