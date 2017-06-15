var fullItemList = [
  {id:200, name:'Estus Flask', type:'item', amount:0, locations:{
    'undeadAsylum':[
      {type:'[Gift]', where:'Oscar of Astora'},
      {type:'[Drop]', where:'Oscar of Astora (100%)'}]
  }},
  {id:106, name:'Orange Guidance Soapstone', type:'item', amount:0, locations:{
    'undeadBurg':[
      {type:'[Buy]', where:'Undead Male Merchant'},
      {type:'[Drop]', where:'Undead Male Merchant (100%)'}]
  }},
  {id:100, name:'White Sign Soapstone', type:'item', amount:0, locations:{
    'undeadParish':[
      {type:'[Gift]', where:'Solaire of Astora'},
      {type:'[Drop]', where:'Solaire of Astora (100%)'}]
  }},
  {id:375, name:'Sunlight Medal', type:'item', amount:0, locations:{
    'firelinkShrine':[{type:'[Gift]', where:'Lautrec of Carim'}],
    'anorLondo':[{type:'[Chest]', where:'On the room next to Solaire\'s Bonfire'}],
    'demonsRuins':[{type:'[Drop]', where:'Chaos bug (3%)'}],
    'multiplayer':[{type:'[Covenant]', where:'Beat a boss as/with a golden phantom'}]
  }},
  {id:101, name:'Red Sign Soapstone', type:'item', amount:0, locations:{
    'paintedWorldOfAriamis':[{type:'[Corpse]', where:'At the top of the stairs on the central tower'}]
  }},
  {id:102, name:'Red Eye Orb', type:'item', amount:0, locations:{
    'theAbyss':[{type:'[Covenant]', where:'Rank Darkwraith covenant up to +1'}]
  }},
  {id:111, name:'Cracked Red Eye Orb', type:'item', amount:0, locations:{
    'firelinkShrine':[{type:'[Chest]', where:'Under the elevator to Undead Parish'}],
    'newLondoRuins':[{type:'[Corpse]', where:'On the bottom of new Londo, on a corpse hanging over a well'}],
    'theAbyss':[{type:'[Buy]', where:'Darkstalker Kaathe'}]
  }},
  {id:113, name:'Blue Eye Orb', type:'item', amount:0, locations:{
    'anorLondo':[{type:'[Covenant]', where:'Join the Blade of the Darkmoon covenant'}]
  }},
  {id:374, name:'Souvenir of Reprisal', type:'item', amount:0, locations:{
    'undeadAsylum':[{type:'[Snuggly]', where:'Trade with Pendant'}],
    'anorLondo':[{type:'[Drop]', where:'Lautrec of Carim (100%)'}],
    'paintedWorldOfAriamis':[{type:'[Drop]', where:'Crow Demon (6%)'}],
    'multiplayer':[{type:'[Covenant]', where:'Kill Darkwraith members as a Blade of the Darkmoon'}]
  }},
  {id:115, name:'Black Eye Orb', type:'item', amount:0, locations:{
    'firelinkShrine':[{type:'[Corpse]', where:'Near the firekeeper cell'}]
  }},
//  {id:116, name:'Black Eye Orb', type:'item', amount:0, locations:{}},
  {id:114, name:'Dragon Eye', type:'item', amount:0, locations:{
    'ashLake':[{type:'[Covenant]', where:'Join the Dragon covenant'}]
  }},
  {id:377, name:'Dragon Head Stone', type:'item', amount:0, locations:{
    'ashLake':[{type:'[Covenant]', where:'Join the Dragon covenant'}]
  }},
  {id:378, name:'Dragon Torso Stone', type:'item', amount:0, locations:{
    'ashLake':[{type:'[Covenant]', where:'Rank Dragon covenant up to +2'}]
  }},
  {id:109, name:'Eye of Death', type:'item', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Patches'}],
    'depths':[{type:'[Drop]', where:'Basilisk (6%)'}],
    'theGreatHollow':[{type:'[Drop]', where:'Basilisk (6%)'}],
    'ashLake':[{type:'[Drop]', where:'Basilisk (6%)'}],
    'theCatacombs':[{type:'[Corpse]', where:'Behind the Titanite Demon'}],
    'tombOfTheGiants':[{type:'[Corpse]', where:'Near the ladder where there is both normal and archer giant Skeleton'}]
  }},
  {id:103, name:'Black Separation Crystal', type:'item', amount:0, locations:{
    'start':[{type:'', where:'Every class'}]
  }},
  {id:118, name:'Purple Coward\'s Crystal', type:'item', amount:0, locations:{
    'oolacileTownship':[{type:'[Gift]', where:'Enter Battle of Stoicism'}]
  }},
  {id:108, name:'Book of the Guilty', type:'item', amount:0, locations:{
    'undeadParish':[
      {type:'[Buy]', where:'Oswald of Carim'},
      {type:'[Drop]', where:'Oswald of Carim (100%)'}]
  }},
  {id:373, name:'Indictment', type:'item', amount:0, locations:{
    'undeadParish':[{type:'[Buy]', where:'Oswald of Carim'}]
  }},
  {id:112, name:'Servant Roster', type:'item', amount:0, locations:{
    'quelaagDomain':[{type:'[Buy]', where:'Eingyi'}]
  }},
  {id:260, name:'Green Blossom', type:'item', amount:0, locations:{
    'darkrootGarden':[{type:'[Drop]', where:'Frog-Ray (40%)'}],
    'senFortress':[{type:'[Buy]', where:'Crestfallen Merchant'}],
    'royalWood':[{type:'[Buy]', where:'Marvelous Chester'}]
  }},
  {id:230, name:'Elizabeth\'s Mushroom', type:'item', amount:0, locations:{
    'oolacileSanctuary':[
      {type:'[Gift]', where:'Elizabeth'},
      {type:'[Drop]', where:'Elizabeth (100%)'}],
    'royalWood':[{type:'[Corpse]', where:'After the second bridge, hidden in a small passageway'}]
  }},
  {id:270, name:'Bloodred Moss Clump', type:'item', amount:0, locations:{
    'undeadBurg':[{type:'[Buy]', where:'Undead Female Merchant'}],
    'darkrootGarden':[{type:'[Drop]', where:'Demonic Foliage (20%)'}],
    'royalWood':[{type:'[Drop]', where:'Wooden Scarecrow (8%)'}]
  }},
  {id:271, name:'Purple Moss Clump', type:'item', amount:0, locations:{
    'undeadBurg':[{type:'[Buy]', where:'Undead Female Merchant'}],
    'darkrootGarden':[{type:'[Drop]', where:'Demonic Foliage (20%)'}],
    'blighttown':[{type:'[Drop]', where:'Blowdart Sniper (100%)'}],
    'royalWood':[{type:'[Drop]', where:'Wooden Scarecrow (8%)'}]
  }},
  {id:272, name:'Blooming Purple Moss Clump', type:'item', amount:0, locations:{
    'undeadBurg':[{type:'[Buy]', where:'Undead Female Merchant'}],
    'darkrootGarden':[{type:'[Drop]', where:'Demonic Foliage (5%)'}],
    'blighttown':[{type:'[Drop]', where:'Blowdart Sniper (10%)'}],
    'royalWood':[
      {type:'[Drop]', where:'Wooden Scarecrow (8%)'},
      {type:'[Buy]', where:'Marvelous Chester'}]
  }},
  {id:274, name:'Purging Stone', type:'item', amount:0, locations:{
    'undeadAsylum':[{type:'[Snuggly]', where:'Trade with Cracked Red Eye Orb'}],
    'undeadBurg':[{type:'[Buy]', where:'Undead Female Merchant'}],
    'undeadParish':[{type:'[Buy]', where:'Oswald of Carim'}],
    'ashLake':[{type:'[Drop]', where:'Giant Clam (10%)'}],
    'crystalCave':[{type:'[Drop]', where:'Giant Clam (10%)'}]
  }},
  {id:275, name:'Egg Vermifuge', type:'item', amount:0, locations:{
    'darkrootGarden':[{type:'[Drop]', where:'Tree Lizard (10%)'}],
    'quelaagDomain':[
      {type:'[Drop]', where:'Egg burdened (5%)'},
      {type:'[Drop]', where:'Eingyi (100%)'},
      {type:'[Buy]', where:'Eingyi'},
      {type:'[Gift]', where:'Eingyi'}],
    'paintedWorldOfAriamis':[{type:'[Corpse]', where:'On the attic where there is a lot of Engorged Zombies'}],
    'demonsRuins':[{type:'[Drop]', where:'Egg burdened (5%)'}]
  }},
  {id:240, name:'Divine Blessing', type:'item', amount:0, locations:{
    'undeadAsylum':[{type:'[Snuggly]', where:'Trade with Ring of the Sun Princess'}],
    'firelinkShrine':[{type:'[Buy]', where:'Patches'}],
    'undeadParish':[{type:'[Buy]', where:'Reah of Thorolund'}],
    'darkrootGarden':[{type:'[Covenant]', where:'Kill one invader as a Forest Hunter'}],
    'senFortress':[{type:'[Chest]', where:'Inside the tower guarded by Undead Prince Ricard'}],
    'lostIzalith':[{type:'[Corpse]', where:'Just before entering Lost Izalith, behind a big root'}],
    'start':[{type:'', where:'Starting gift'}]
  }},
  {id:292, name:'Firebomb', type:'item', amount:0, locations:{
    'firelinkShrine':[{type:'[Corpse]', where:'On the rightmost passageway from the bonfire'}],
    'undeadBurg':[
      {type:'[Buy]', where:'Undead Male Merchant'},
      {type:'[Drop]', where:'Hollow Warrior (12%)'}]
  }},
  {id:297, name:'Black Firebomb', type:'item', amount:0, locations:{
    'undeadBurg':[{type:'[Chest]', where:'In one of the house after the first bonfire'}],
    'senFortress':[{type:'[Buy]', where:'Crestfallen Merchant'}],
    'royalWood':[{type:'[Buy]', where:'Marvelous Chester'}],
    'start':[{type:'', where:'Starting gift'}]
  }},
  {id:290, name:'Throwing Knife', type:'item', amount:0, locations:{
    'undeadBurg':[
      {type:'[Buy]', where:'Undead Male Merchant'},
      {type:'[Corpse]', where:'On a roof near the Undead Male Merchant'}],
    'anorLondo':[{type:'[Drop]', where:'Painting Guardian (15%)'}]
  }},
  {id:291, name:'Poison Throwing Knife', type:'item', amount:0, locations:{
    'undeadBurg':[{type:'[Buy]', where:'Undead Female Merchant'}]
  }},
  {id:293, name:'Dung Pie', type:'item', amount:0, locations:{
    'undeadBurg':[{type:'[Buy]', where:'Undead Female Merchant'}],
    'blighttown':[{type:'[Drop]', where:'Infested Barbarian (50%)'}],
    'oolacileTownship':[{type:'[Buy]', where:'Hawkeye Gough'}]
  }},
  {id:280, name:'Repair Powder', type:'item', amount:0, locations:{
    'undeadBurg':[{type:'[Buy]', where:'Undead Female Merchant'}],
    'royalWood':[{type:'[Buy]', where:'Elizabeth'}]
  }},
  {id:310, name:'Charcoal Pine Resin', type:'item', amount:0, locations:{
    'undeadBurg':[{type:'[Buy]', where:'Undead Female Merchant'}]
  }},
  {id:311, name:'Gold Pine Resin', type:'item', amount:0, locations:{
    'undeadBurg':[
      {type:'[Buy]', where:'Domhnall of Zena'},
      {type:'[Chest]', where:'Inside the house where the Residence Key is needed'}],
    'darkrootGarden':[
      {type:'[Drop]', where:'Mushroom Child (5%)'},
      {type:'[Drop]', where:'Mushroom Parent (100%)'}],
    'depths':[{type:'[Buy]', where:'Domhnall of Zena'}],
    'oolacileSanctuary':[{type:'[Buy]', where:'Elizabeth'}]
  }},
  {id:313, name:'Rotten Pine Resin', type:'item', amount:0, locations:{
    'undeadBurg':[{type:'[Buy]', where:'Undead Female Merchant'}]
  }},
  {id:296, name:'Lloyd\'s Talisman', type:'item', amount:0, locations:{
    'firelinkShrine':[{type:'[Chest]', where:'Under the elevator to Undead Parish'}],
    'undeadBurg':[{type:'[Buy]', where:'Undead Male Merchant'}],
    'royalWood':[{type:'[Buy]', where:'Marvelous Chester'}]
  }},
  {id:294, name:'Alluring Skull', type:'item', amount:0, locations:{
    'undeadBurg':[{type:'[Buy]', where:'Undead Female Merchant'}],
    'undeadParish':[{type:'[Corpse]', where:'Where the two Crossbow Undead Soldier are, above the Fang Boar'}],
    'royalWood':[{type:'[Buy]', where:'Marvelous Chester'}]
  }},
  {id:312, name:'Transient Curse', type:'item', amount:0, locations:{
    'undeadBurg':[{type:'[Buy]', where:'Undead Female Merchant'}],
    'newLondoRuins':[
      {type:'[Buy]', where:'Ingward'},
      {type:'[Corpse]', where:'Four different locations at the beginning of the level'},
      {type:'[Drop]', where:'Ghost (5%)'}]
  }},
  {id:330, name:'Homeward Bone', type:'item', amount:0, locations:{
    'firelinkShrine':[{type:'[Chest]', where:'Under the elevator to Undead Parish'}],
    'undeadBurg':[{type:'[Buy]', where:'Undead Female Merchant'}],
    'undeadParish':[{type:'[Buy]', where:'Oswald of Carim'}],
    'theCatacombs':[{type:'[Buy]', where:'Vamos'}],
    'oolacileTownship':[{type:'[Buy]', where:'Hawkeye Gough'}],
    'royalWood':[{type:'[Buy]', where:'Marvelous Chester'}],
    'special':[{type:'[Drop]', where:'Most bosses (100%)'}]
  }},
  {id:370, name:'Prism Stone', type:'item', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Patches'}],
    'undeadBurg':[{type:'[Buy]', where:'Undead Female Merchant'}],
    'theDukeArchives':[{type:'[Chest]', where:'Beneath the staircase that leads to the Duke\'s Archives'}],
    'oolacileTownship':[{type:'[Buy]', where:'Hawkeye Gough'}]
  }},
  {id:510, name:'Hello Carving', type:'item', amount:0, locations:{
    'oolacileTownship':[{type:'[Buy]', where:'Hawkeye Gough'}]
  }},
  {id:511, name:'Thank You Carving', type:'item', amount:0, locations:{
    'oolacileTownship':[{type:'[Buy]', where:'Hawkeye Gough'}]
  }},
  {id:512, name:'Very Good! Carving', type:'item', amount:0, locations:{
    'oolacileTownship':[{type:'[Drop]', where:'Mimic (100%)'}]
  }},
  {id:513, name:'I\'m Sorry Carving', type:'item', amount:0, locations:{
    'oolacileTownship':[{type:'[Drop]', where:'Bloathead Sorcerer (100%)'}]
  }},
  {id:514, name:'Help Me! Carving', type:'item', amount:0, locations:{
    'chasmOfTheAbyss':[{type:'[Corpse]', where:'On a dead end with multiple Humanity Phantom'}]
  }},
  {id:371, name:'Binoculars', type:'item', amount:0, locations:{
    'start':[{type:'', where:'Starting gift'}],
    'firelinkShrine':[{type:'[Corpse]', where:'On the far end of the firelinkShrine graveyard'}]
  }},
  {id:400, name:'Soul of a Lost Undead', type:'item', amount:0, locations:{
    'undeadAsylum':[{type:'[Corpse]', where:''}],
    'firelinkShrine':[{type:'[Corpse]', where:''}],
    'undeadBurg':[{type:'[Corpse]', where:''}],
    'blighttown':[{type:'[Drop]', where:'Infested Ghoul (20%)'}]
  }},
  {id:401, name:'Large Soul of a Lost Undead', type:'item', amount:0, locations:{
    'firelinkShrine':[{type:'[Corpse]', where:''}],
    'undeadBurg':[{type:'[Corpse]', where:''}],
    'undeadParish':[{type:'[Corpse]', where:''}],
    'blighttown':[{type:'[Drop]', where:'Infested Ghoul (10%)'}]
  }},
  {id:402, name:'Soul of a Nameless Soldier', type:'item', amount:0, locations:{
    'depths':[{type:'[Corpse]', where:''}],
    'blighttown':[{type:'[Drop]', where:'Infested Ghoul (5%)'}],
    'newLondoRuins':[{type:'[Corpse]', where:''}]
  }},
  {id:403, name:'Large Soul of a Nameless Soldier', type:'item', amount:0, locations:{
    'undeadParish':[{type:'[Corpse]', where:''}],
    'darkrootGarden':[{type:'[Corpse]', where:''}],
    'darkrootBasin':[{type:'[Corpse]', where:''}],
    'depths':[{type:'[Corpse]', where:''}],
    'blighttown':[{type:'[Corpse]', where:''}],
    'theGreatHollow':[{type:'[Corpse]', where:''}],
    'valleyOfDrakes':[{type:'[Corpse]', where:''}],
    'theCatacombs':[{type:'[Corpse]', where:''}],
    'newLondoRuins':[{type:'[Corpse]', where:''}]
  }},
  {id:404, name:'Soul of a Proud Knight', type:'item', amount:0, locations:{
    'darkrootGarden':[{type:'[Corpse]', where:''}],
    'blighttown':[{type:'[Corpse]', where:''}],
    'valleyOfDrakes':[{type:'[Corpse]', where:'Near the Undead Dragon'}],
    'theCatacombs':[{type:'[Corpse]', where:''}],
    'newLondoRuins':[{type:'[Corpse]', where:''}],
    'demonsRuins':[{type:'[Corpse]', where:''}]
  }},
  {id:405, name:'Large Soul of a Proud Knight', type:'item', amount:0, locations:{
    'senFortress':[
      {type:'[Corpse]', where:'On top of the ladder out of the tar pit'},
      {type:'[Corpse]', where:'By the Serpent Mage overlooking the indoor boulder-path'}],
    'blighttown':[{type:'[Corpse]', where:'3 different locations in the poison swamp'}],
    'tombOfTheGiants':[
      {type:'[Corpse]', where:'In Patches\'s trap pit'},
      {type:'[Corpse]', where:'On the path back to Catacombs'},
      {type:'[Corpse]', where:'Just after descending the first slide ramp'}],
    'newLondoRuins':[{type:'[Corpse]', where:'4 different locations in the water drained area'}],
    'demonsRuins':[{type:'[Corpse]', where:'Close to the 10 Taurus Demon, in lava'}]
  }},
  {id:406, name:'Soul of a Brave Warrior', type:'item', amount:0, locations:{
    'darkrootGarden':[{type:'[Corpse]', where:'Close to the Basin long ladders'}],
    'senFortress':[
      {type:'[Corpse]', where:'In the first room of the fortress'},
      {type:'[Corpse]', where:'Near a Titanite Demon'}],
    'tombOfTheGiants':[
      {type:'[Corpse]', where:'In the Giant Skeleton party room'},
      {type:'[Corpse]', where:'Behind the Giant Skeleton Archer near the second bonfire'},
      {type:'[Corpse]', where:'Near the end of the darkened area'}],
    'theDukeArchives':[
      {type:'[Corpse]', where:'Under the staircase behind the first Channeler'},
      {type:'[Corpse]', where:'Inside a locked cell'}],
    'newLondoRuins':[{type:'[Corpse]', where:'After the Darkwraiths\'s camp,<br>up to where the Very Large Ember is'}],
    'demonsRuins':[
      {type:'[Corpse]', where:'Next the lone Capra Demon before Demon Firesage'},
      {type:'[Corpse]', where:'In the Izalith shortcut path, on a branch'},
      {type:'[Corpse]', where:'After Demon Firesage, behind three Demonic Statues'},
      {type:'[Corpse]', where:'Before the Centipede Demon, on a ledge next to the branches'}],
    'lostIzalith':[
      {type:'[Corpse]', where:'At the start of the magma area'},
      {type:'[Corpse]', where:'Near the central structure'},
      {type:'[Corpse]', where:'In the poison pool with the Chaos Eater'}]
  }},
  {id:407, name:'Large Soul of a Brave Warrior', type:'item', amount:0, locations:{
    'darkrootGarden':[{type:'[Corpse]', where:'In the Great Feline area'}],
    'senFortress':[{type:'[Corpse]', where:'On the rooftop near the bonfire'}],
    'theDukeArchives':[{type:'[Corpse]', where:'In a locked cell'}],
    'lostIzalith':[{type:'[Corpse]', where:'Under the staircase with the Chaos Eater on it'}]
  }},
  {id:408, name:'Soul of a Hero', type:'item', amount:0, locations:{
    'senFortress':[{type:'[Corpse]', where:'In a cage near Big Hat Logan'}],
    'anorLondo':[
      {type:'[Corpse]', where:'On the balcony above the Titanite Demon'},
      {type:'[Corpse]', where:'At the end of the corridor guarded by one Silver Knight Archer'}],
    'tombOfTheGiants':[{type:'[Corpse]', where:'In the Pinwheel Servant room'}],
    'theDukeArchives':[{type:'[Corpse]', where:'Past the invisble bridge'}],
    'lostIzalith':[{type:'[Corpse]', where:'Just after the magma lake'}],
    'oolacileTownship':[{type:'[Corpse]', where:'In the abyss-infected part, before the chasm'}],
    'royalWood':[{type:'[Corpse]', where:'In Kalameet battleground area'}],
    'chasmOfTheAbyss':[{type:'[Corpse]', where:'In the room just before Manus'}]
  }},
  {id:409, name:'Soul of a Great Hero', type:'item', amount:0, locations:{
    'theDukeArchives':[{type:'[Corpse]', where:'In the room where Seath killed you'}],
    'lostIzalith':[{type:'[Corpse]', where:'Inside the first tower in the Dragon Butt zone'}]
  }},
  {id:390, name:'Fire Keeper Soul', type:'item', amount:0, locations:{
    'anorLondo':[{type:'[Drop]', where:'Darkmoon Knightess (100%)'}]
  }},
  {id:391, name:'Fire Keeper Soul', type:'item', amount:0, locations:{
    'quelaagDomain':[{type:'[Drop]', where:'Quelaag\'s Sister (100%)'}]
  }},
  {id:392, name:'Fire Keeper Soul', type:'item', amount:0, locations:{
    'anorLondo':[{type:'[Drop]', where:'Lautrec of Carim (100%)'}]
  }},
  {id:393, name:'Fire Keeper Soul', type:'item', amount:0, locations:{
    'undeadParish':[{type:'[Corpse]', where:'On the altar inside the parish'}],
    'newLondoRuins':[{type:'[Corpse]', where:'Near the ruins after crossing the wood bridge'}],
    'blighttown':[{type:'[Corpse]', where:'On a dead-end with lots of Blowdart Snipers'}],
    'theDukeArchives':[{type:'[Corpse]', where:'Where Big Hat Logan is emprisonned'}]
  }},
  {id:705, name:'Soul of the Moonlight Butterfly', type:'item', amount:0, locations:{
    'darkrootGarden':[{type:'[Drop]', where:'Moonlight Butterfly (100%)'}]
  }},
  {id:700, name:'Soul of Quelaag', type:'item', amount:0, locations:{
    'quelaagDomain':[{type:'[Drop]', where:'Chaos Witch Quelaag (100%)'}]
  }},
  {id:703, name:'Core of an Iron Golem', type:'item', amount:0, locations:{
    'senFortress':[{type:'[Drop]', where:'Iron Golem (100%)'}]
  }},
  {id:704, name:'Soul of Ornstein', type:'item', amount:0, locations:{
    'anorLondo':[{type:'[Drop]', where:'Dragonslayer Ornstein (100% if killed last)'}]
  }},
  {id:706, name:'Soul of Smough', type:'item', amount:0, locations:{
    'anorLondo':[{type:'[Drop]', where:'Executioner Smough (100% if killed last)'}]
  }},
  {id:701, name:'Soul of Sif', type:'item', amount:0, locations:{
    'darkrootGarden':[{type:'[Drop]', where:'Great Grey Wolf Sif (100%)'}]
  }},
  {id:708, name:'Soul of Gwyndolin', type:'item', amount:0, locations:{
    'anorLondo':[{type:'[Drop]', where:'Dark Sun Gwyndolin (100%)'}]
  }},
  {id:707, name:'Soul of Priscilla', type:'item', amount:0, locations:{
    'paintedWorldOfAriamis':[{type:'[Drop]', where:'Crossbreed Priscilla (100%)'}]
  }},
  {id:709, name:'Guardian Soul', type:'item', amount:0, locations:{
    'oolacileSanctuary':[{type:'[Drop]', where:'Sanctuary Guardian (100% only first Guardian)'}]
  }},
  {id:710, name:'Soul of Artorias', type:'item', amount:0, locations:{
    'oolacileTownship':[{type:'[Drop]', where:'Artorias of the Abyss (100%)'}]
  }},
  {id:711, name:'Soul of Manus', type:'item', amount:0, locations:{
    'chasmOfTheAbyss':[{type:'[Drop]', where:'Manus, Father of the Abyss (100%)'}]
  }},
  {id:702, name:'Soul of Gwyn, Lord of Cinder', type:'item', amount:0, locations:{
    'kilnOfTheFirstFlame':[{type:'[Drop]', where:'Gwyn, Lord of Cinder (100%)'}]
  }},
  {id:500, name:'Humanity', type:'item', amount:0, locations:{
    'firelinkShrine':[{type:'[Corpse]', where:'On the well just by the bonfire'}],
    'undeadBurg':[
      {type:'[Drop]', where:'Undead Rat (5%)'},
      {type:'[Corpse]', where:'On top of the roof of the aqueduct'}],
    'undeadParish':[
      {type:'[Drop]', where:'Undead Rat (5%)'},
      {type:'[Corpse]', where:'First floor of the parish, near where Lautrec is being held captive'}],
    'depths':[
      {type:'[Drop]', where:'Undead Rat(small) (3%)'},
      {type:'[Drop]', where:'Undead Rat(big) (5%)'},
      {type:'[Corpse]', where:'In the sewer with the Basilisks'}],
    'valleyOfDrakes':[{type:'[Corpse]', where:'Near the first lone wyvern, in a small alcove'}],
    'paintedWorldOfAriamis':[{type:'[Drop]', where:'Snow Rat (5%)'}],
    'tombOfTheGiants':[
      {type:'[Corpse]', where:'At the bottom right of the last slide'},
      {type:'[Drop]', where:'Baby Skeleton (2%)'}],
    'theDukeArchives':[{type:'[Drop]', where:'Pisaca (4%)'}],
    'crystalCave':[{type:'[Corpse]', where:'Past the first golem, after walking an invisible path'}],
    'chasmOfTheAbyss':[
      {type:'[Drop]', where:'Humanity Phantom(small) (4.44%)'},
      {type:'[Drop]', where:'Humanity Phantom(medium) (8%)'},
      {type:'[Drop]', where:'Humanity Phantom(big) (9.09%)'}],
    'special':[
      {type:'[Drop]', where:'Most bosses (100%)'},
      {type:'[Drop]', where:'Most NPCs (100%)'}]
  }},
  {id:501, name:'Twin Humanities', type:'item', amount:0, locations:{
    'undeadBurg':[{type:'[Corpse]', where:'In the back of Lower Undead Burg, where all the Torch Zombies are'}],
    'undeadParish':[{type:'[Drop]', where:'Bell Gargoyles (100%)'}],
    'darkrootGarden':[{type:'[Drop]', where:'Forest Hunter Archer (100%)'}],
    'depths':[{type:'[Drop]', where:'Gaping Dragon (100%)'}],
    'blighttown':[{type:'[Chest]', where:'Behind the fake wall that leads to the Great Hollow'}],
    'quelaagDomain':[{type:'[Drop]', where:'Chaos Witch Quelaag (100%)'}],
    'lostIzalith':[{type:'[Corpse]', where:'Near the hidden bonfire, on top of the structure'}],
    'chasmOfTheAbyss':[
      {type:'[Drop]', where:'Humanity Phantom(small) (1.11%)'},
      {type:'[Drop]', where:'Humanity Phantom(medium) (2%)'},
      {type:'[Drop]', where:'Humanity Phantom(big) (4.55%)'}],
    'start':[{type:'', where:'Starting gift'}]
  }},
  {id:376, name:'Pendant', type:'item', amount:0, locations:{
    'undeadParish':[{type:'[Corpse]', where:'Petrus must kill Reah'}],
    'darkrootGarden':[{type:'[Covenant]', where:'Forest Hunter:Reward (5%)'}],
    'start':[{type:'', where:'Starting gift'}]
  }},
  {id:220, name:'Silver Pendant', type:'item', amount:0, locations:{
    'oolacileTownship':[{type:'[Corpse]', where:'Inside a hidden room where a developer message say to use light'}]
  }},
  {id:380, name:'Rubbish', type:'item', amount:0, locations:{
    'undeadBurg':[{type:'[Corpse]', where:'Before the first fog door, going to the lower area of undead Burg'}],
    'darkrootGarden':[{type:'[Covenant]', where:'Forest Hunter:Reward (5%)'}],
    'oolacileTownship':[{type:'[Corpse]', where:'Past the Mimic, inside the house with 2 Bloathead Sorcerers and 5 Bloathead'}]
  }},
  {id:381, name:'Copper Coin', type:'item', amount:0, locations:{
    'firelinkShrine':[{type:'[Gift]', where:'Petrus of Thorolund'}]
  }},
  {id:382, name:'Silver Coin', type:'item', amount:0, locations:{
    'anorLondo':[{type:'[Drop]', where:'Mimic (100%)'}]
  }},
  {id:383, name:'Gold Coin', type:'item', amount:0, locations:{
    'anorLondo':[{type:'[Drop]', where:'Mimic (100%)'}],
    'paintedWorldOfAriamis':[{type:'[Corpse]', where:'inside the Annex, tricky jump to wrecked floor'}],
    'royalWood':[{type:'[Corpse]', where:'On a cliff in the last part of the Royal Wood'}]
  }},
  {id:117, name:'Darksign', type:'item', amount:0, locations:{
    'start':[{type:'', where:'Every class'}]
  }},
  {id:385, name:'Dried Finger', type:'item', amount:0, locations:{
    'paintedWorldOfAriamis':[{type:'[Corpse]', where:'On top of the first tower, drop onto the balcony'}]
  }},
  {id:1000, name:'Titanite Shard', type:'material', amount:0, locations:{
    'undeadAsylum':[{type:'[Drop]', where:'Hollow Soldier (1.6%)'}],
    'firelinkShrine': [
      {type:'[Frampt]', where:'Trade with Large Titanite Shard'},
      {type:'[Frampt]', where:'Trade with Green Titanite Shard'}],
    'undeadBurg':[{type:'[Drop]', where:'Hollow Soldier (1.6%)'}],
    'undeadParish':[
      {type:'[Buy]', where:'Andre of Astora'},
      {type:'[Drop]', where:'Hollow Soldier (1.6%)'},
      {type:'[Drop]', where:'Balder Knight (8%)'},
      {type:'[Drop]', where:'Berenike Knight (100%)'}],
    'darkrootGarden':[{type:'[Covenant]', where:'Forest Hunter:Reward (10%)'}],
    'senFortress':[
      {type:'[Buy]', where:'Crestfallen Merchant'},
      {type:'[Drop]', where:'Balder Knight (22.73%)'}],
    'anorLondo':[{type:'[Buy]', where:'Giant Blacksmith'}],
    'theCatacombs':[{type:'[Buy]', where:'Vamos'}]
  }},
  {id:1010, name:'Large Titanite Shard', type:'material', amount:0, locations:{
    'firelinkShrine': [{type:'[Frampt]', where:'Trade with Titanite Chunk'}],
    'darkrootGarden':[{type:'[Covenant]', where:'Forest Hunter:Reward (25%)'}],
    'darkrootBasin':[{type:'[Drop]', where:'Crystal Lizard (25%)'}],
    'depths':[{type:'[Drop]', where:'Slime (2%)'}],
    'blighttown':[{type:'[Drop]', where:'Giant Leech (5.15%)'}],
    'theGreatHollow':[{type:'[Drop]', where:'Crystal Lizard (20%)'}],
    'senFortress':[
      {type:'[Buy]', where:'Crestfallen Merchant'},
      {type:'[Drop]', where:'Balder Knight (2%)'},
      {type:'[Drop]', where:'Berenike Knight (25%)'}],
    'anorLondo':[{type:'[Buy]', where:'Giant Blacksmith'}],
    'paintedWorldOfAriamis':[{type:'[Drop]', where:'Berenike Knight (100%)'}],
    'oolacileTownship':[
      {type:'[Buy]', where:'Hawkeye Gough'},
      {type:'[Drop]', where:'Bloathead (6%)'}]
  }},
  {id:1030, name:'Titanite Chunk', type:'material', amount:0, locations:{
    'undeadAsylum':[{type:'[Snuggly]', where:'Trade with Rubbish'}],
    'firelinkShrine': [{type:'[Frampt]', where:'Trade with Titanite Slab'}],
    'undeadBurg':[{type:'[Drop]', where:'Sword Black Knight (100%)'}],
    'undeadParish':[{type:'[Drop]', where:'Greatsword Black Knight (100%)'}],
    'darkrootGarden':[{type:'[Covenant]', where:'Forest Hunter:Reward (10%)'}],
    'darkrootBasin':[{type:'[Drop]', where:'Crystal Lizard (50%)'}],
    'theGreatHollow':[{type:'[Drop]', where:'Crystal Lizard (10%)'}],
    'senFortress':[{type:'[Drop]', where:'Giant (100%)'}],
    'anorLondo':[{type:'[Drop]', where:'Royal Sentinel (8%)'}],
    'newLondoRuins':[{type:'[Drop]', where:'Darkwraith (8.79%)'}],
    'kilnOfTheFirstFlame':[{type:'[Drop]', where:'Sword Black Knight (100%)'}]
  }},
  {id:1070, name:'Titanite Slab', type:'material', amount:0, locations:{
    'undeadAsylum':[{type:'[Drop]', where:'Stray Demon (100%)'}],
    'theGreatHollow':[{type:'[Drop]', where:'Crystal Lizard (10%)'}],
    'ashLake':[{type:'[Gift]', where:'Sieglinde of Catarina'}],
    'newLondoRuins':[{type:'[Drop]', where:'Darkwraith (0.21%)'}],
    'royalWood':[{type:'[Chest]', where:'Behind the waterfall in Kalameet battleground'}]
  }},
  {id:1020, name:'Green Titanite Shard', type:'material', amount:0, locations:{
    'firelinkShrine': [
      {type:'[Frampt]', where:'Trade with Blue Titanite Chunk'},
      {type:'[Frampt]', where:'Trade with White Titanite Chunk'},
      {type:'[Frampt]', where:'Trade with Red Titanite Chunk'}],
    'darkrootGarden':[{type:'[Covenant]', where:'Forest Hunter:Reward (25%)'}],
    'depths':[{type:'[Drop]', where:'Slime (2%)'}],
    'blighttown':[
      {type:'[Drop]', where:'Giant Leech (2.06%)'},
      {type:'[Corpse]', where:'Below the ramp leading to the Great Hollow'}],
    'senFortress':[{type:'[Buy]', where:'Crestfallen Merchant'}],
    'anorLondo':[{type:'[Buy]', where:'Giant Blacksmith'}],
    'theCatacombs':[{type:'[Corpse]', where:'Just before meeting Vamos'}],
    'newLondoRuins':[{type:'[Corpse]', where:'Between Ingward building and the seal building'}],
    'demonsRuins':[
      {type:'[Corpse]', where:'Left of the staircase after the final Capra Demon'},
      {type:'[Corpse]', where:'Go right when facing the Centipede Demon'},
      {type:'[Drop]', where:'Burrowing Rockworm (30.57%)'}],
    'lostIzalith': [{type:'[Corpse]', where:'In the poison pool with the Chaos Eaters'}],
    'oolacileTownship':[
      {type:'[Buy]', where:'Hawkeye Gough'},
      {type:'[Drop]', where:'Bloathead Sorcerer (6%)'}]
  }},
  {id:1040, name:'Blue Titanite Chunk', type:'material', amount:0, locations:{
    'firelinkShrine': [{type:'[Frampt]', where:'Trade with Blue Titanite Slab'}],
    'darkrootGarden':[{type:'[Covenant]', where:'Forest Hunter:Reward (10%)'}],
    'darkrootBasin':[
      {type:'[Drop]', where:'Halberd Black Knight (100%)'},
      {type:'[Drop]', where:'Crystal Golem (8%)'}],
    'theGreatHollow':[{type:'[Drop]', where:'Crystal Lizard (10%)'}],
    'theDukeArchives':[{type:'[Drop]', where:'Crystal Golem (8%)'}],
    'crystalCave':[
      {type:'[Drop]', where:'Crystal Golem (8%)'},
      {type:'[Drop]', where:'Moonlight Butterfly (10.3%)'},
      {type:'[Drop]', where:'Crystal Lizard (50%)'}],
    'kilnOfTheFirstFlame':[{type:'[Drop]', where:'Halberd Black Knight (100%)'}]
  }},
  {id:1080, name:'Blue Titanite Slab', type:'material', amount:0, locations:{
    'crystalCave':[
      {type:'[Corpse]', where:'After the first Crystal Golem, drop inside the cave and navigate through the invisible path'},
      {type:'[Drop]', where:'Moonlight Butterfly (0.2%)'}],
    'royalWood':[{type:'[Chest]', where:'In a puddle guarded by 3 Guardians'}]
  }},
  {id:1060, name:'Red Titanite Chunk', type:'material', amount:0, locations:{
    'undeadAsylum':[
      {type:'[Snuggly]', where:'Trade with Pyromancy Flame (unupgraded)'},
      {type:'[Drop]', where:'Sword Black Knight (100%)'}
    ],
    'firelinkShrine': [{type:'[Frampt]', where:'Trade with Red Titanite Slab'}],
    'theGreatHollow' :[
      {type:'[Corpse]', where:'Near the top of the area'},
      {type:'[Corpse]', where:'On a branch above the Basilisks'}],
    'demonsRuins':[
      {type:'[Drop]', where:'Chaos Bug (0.5%)'},
      {type:'[Drop]', where:'Burrowing Rockworm (5%)'}],
    'lostIzalith':[
      {type:'[Corpse]', where:'In the poison pool with the Chaos Eaters'},
      {type:'[Drop]', where:'Chaos Eater (10%)'}],
    'kilnOfTheFirstFlame':[{type:'[Drop]', where:'Greatsword Black Knight (100%)'}]
  }},
  {id:1100, name:'Red Titanite Slab', type:'material', amount:0, locations:{
    'undeadAsylum':[{type:'[Snuggly]', where:'Trade with Ascended Pyromancy Flame (unupgraded)'}],
    'lostIzalith':[
      {type:'[Chest]', where:'In the poison pool with the Chaos Eaters'},
      {type:'[Drop]', where:'Chaos Eater (0.3%)'}]
  }},
  {id:1050, name:'White Titanite Chunk', type:'material', amount:0, locations:{
    'undeadAsylum':[{type:'[Snuggly]', where:'Trade with Sunlight Medal'}],
    'firelinkShrine': [{type:'[Frampt]', where:'Trade with White Titanite Slab'}],
    'darkrootGarden':[{type:'[Covenant]', where:'Forest Hunter:Reward (10%)'}],
    'tombOfTheGiants':[
      {type:'[Drop]', where:'Bone Tower (5%)'},
      {type:'[Drop]', where:'Pinwheel Servant (10.3%)'},
      {type:'[Drop]', where:'Halberd Black Knight (100%)'}],
    'lostIzalith':[{type:'[Drop]', where:'Chaos Eater (0.2%)'}],
    'kilnOfTheFirstFlame':[{type:'[Drop]', where:'Axe Black Knight (100%)'}]
  }},
  {id:1090, name:'White Titanite Slab', type:'material', amount:0, locations:{
    'tombOfTheGiants':[
      {type:'[Corpse]', where:'On the far back on the Pinwheel Servant room'},
      {type:'[Drop]', where:'Pinwheel Servant (0.2%)'}],
    'chasmOfTheAbyss':[{type:'[Corpse]', where:'At the end of a tunnel near Manus'}]
  }},
  {id:1130, name:'Twinkling Titanite', type:'material', amount:0, locations:{
    'undeadAsylum':[
      {type:'[Snuggly]', where:'Trade with Bloodred Moss Clump'},
      {type:'[Snuggly]', where:'Trade with Purple Moss Clump'},
      {type:'[Snuggly]', where:'Trade with Blooming Purple Moss Clump'}],
    'darkrootBasin':[{type:'[Drop]', where:'Crystal Lizard (100%)'}],
    'theGreatHollow':[{type:'[Drop]', where:'Crystal Lizard (100%)'}],
    'ashLake':[{type:'[Drop]', where:'Giant Clam (30%)'}],
    'anorLondo':[
      {type:'[Buy]', where:'Giant Blacksmith'},
      {type:'[Chest]', where:'Guarded by two Sentinels left of the first bonfire'}],
    'theCatacombs':[{type:'[Drop]', where:'Crystal Lizard (100%)'}],
    'theDukeArchives':[{type:'[Drop]', where:'Crystal Lizard (100%)'}],
    'crystalCave':[{type:'[Drop]', where:'Giant Clam (20%)'}],
    'lostIzalith':[{type:'[Drop]', where:'Crystal Lizard (100%)'}],
    'royalWood':[{type:'[Drop]', where:'Guardian (20%)'}]
  }},
  {id:1120, name:'Demon Titanite', type:'material', amount:0, locations:{
    'undeadAsylum':[
      {type:'[Snuggly]', where:'Trade with Dung Pie'},
      {type:'[Snuggly]', where:'Trade with Prism Stone'}],
    'undeadParish':[{type:'[Drop]', where:'Titanite Demon (100%)'}],
    'senFortress':[{type:'[Drop]', where:'Titanite Demon (100%)'}],
    'anorLondo':[
      {type:'[Chest]', where:'At the bottom of the first elevator'},
      {type:'[Chest]', where:'Guarded by two Sentinels right of the first bonfire'},
      {type:'[Chest]', where:'In the room with three Silver Knights'},
      {type:'[Drop]', where:'Titanite Demon (100%)'}],
    'theCatacombs':[{type:'[Drop]', where:'Titanite Demon (100%)'}],
    'lostIzalith':[{type:'[Drop]', where:'Titanite Demon (100%)'}]
  }},
  {id:1110, name:'Dragon Scale', type:'material', amount:0, locations:{
    'undeadAsylum':[{type:'[Snuggly]', where:'Trade with Egg Vermifuge'}],
    'darkrootBasin':[{type:'[Drop]', where:'Hydra (100%)'}],
    'blighttown':[{type:'[Chest]', where:'In the pool behind the second bonfire'}],
    'ashLake':[
      {type:'[Corpse]', where:'3 different locations on the beach'},
      {type:'[Drop]', where:'Hydra (100%)'}],
    'valleyOfDrakes':[
      {type:'[Drop]', where:'Blue Drake (5%)'},
      {type:'[Drop]', where:'Undead Dragon (100%)'}],
    'paintedWorldOfAriamis':[{type:'[Drop]', where:'Undead Dragon (100%)'}],
    'multiplayer':[{type:'[Covenant]', where:'Win as/against a member of the Dragon Covenant'}]
  }},
  {id:2510, name:'Lordvessel', type:'key_item', amount:0, locations:{
    'anorLondo':[{type:'[Gift]', where:'Gwynevere, Princess of Sunlight'}]
  }},
  {id:2500, name:'Lord Soul', type:'key_item', amount:0, locations:{
    'tombOfTheGiants':[{type:'[Drop]', where:'Gravelord Nito (100%)'}]
  }},
  {id:2501, name:'Lord Soul', type:'key_item', amount:0, locations:{
    'lostIzalith':[{type:'[Drop]', where:'Bed of Chaos (100%)'}]
  }},
  {id:2502, name:'Bequeathed Lord Soul Shard', type:'key_item', amount:0, locations:{
    'theAbyss':[{type:'[Drop]', where:'Four Kings (100%)'}]
  }},
  {id:2503, name:'Bequeathed Lord Soul Shard', type:'key_item', amount:0, locations:{
    'crystalCave':[{type:'[Drop]', where:'Seath the Scaleless (100%)'}]
  }},
  {id:800, name:'Large Ember', type:'key_item', amount:0, locations:{
    'depths':[{type:'[Chest]', where:'Near the Butcher\'s table'}]
  }},
  {id:801, name:'Very Large Ember', type:'key_item', amount:0, locations:{
    'newLondoRuins':[{type:'[Chest]', where:'Inside the Darkwraith camp, long corridor leading to it'}]
  }},
  {id:802, name:'Crystal Ember', type:'key_item', amount:0, locations:{
    'theDukeArchives':[{type:'[Chest]', where:'In the room before the Duke\'s Garden'}]
  }},
  {id:812, name:'Large Flame Ember', type:'key_item', amount:0, locations:{
    'demonsRuins':[{type:'[Chest]', where:'Just before facing Demon Firesage, on the corridor with tons of Burrowing Rockworm'}]
  }},
  {id:813, name:'Chaos Flame Ember', type:'key_item', amount:0, locations:{
    'demonsRuins':[{type:'[Corpse]', where:'Inside the lava, close to where the 10 Taurus Demon were'}]
  }},
  {id:806, name:'Large Magic Ember', type:'key_item', amount:0, locations:{
    'theDukeArchives':[{type:'[Chest]', where:'Inside the room where Seath killed you the first time'}]
  }},
  {id:807, name:'Enchanted Ember', type:'key_item', amount:0, locations:{
    'darkrootGarden':[{type:'[Chest]', where:'In the Mushroom zone, in a puddle guarded by two Mushroom Parent'}]
  }},
  {id:808, name:'Divine Ember', type:'key_item', amount:0, locations:{
    'darkrootGarden':[{type:'[Corpse]', where:'After beating the Moonlight Butterfly, follow the only path'}]
  }},
  {id:809, name:'Large Divine Ember', type:'key_item', amount:0, locations:{
    'tombOfTheGiants':[{type:'[Chest]', where:'In the Giant Skeleton party room'}]
  }},
  {id:810, name:'Dark Ember', type:'key_item', amount:0, locations:{
    'paintedWorldOfAriamis':[{type:'[Chest]', where:'Inside the Annex, in the courtyard'}]
  }},
  {id:2602, name:'Repairbox', type:'key_item', amount:0, locations:{
    'undeadBurg':[{type:'[Buy]', where:'Undead Male Merchant'}],
    'undeadParish':[{type:'[Buy]', where:'Andre of Astora'}]
  }},
  {id:2600, name:'Weapon Smithbox', type:'key_item', amount:0, locations:{
    'undeadParish':[{type:'[Buy]', where:'Andre of Astora'}]
  }},
  {id:2601, name:'Armor Smithbox', type:'key_item', amount:0, locations:{
    'undeadParish':[{type:'[Buy]', where:'Andre of Astora'}]
  }},
  {id:2608, name:'Bottomless Box', type:'key_item', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}],
    'undeadBurg':[{type:'[Buy]', where:'Undead Male Merchant'}],
    'depths':[{type:'[Buy]', where:'Domhnall of Zena'}]
  }},
  {id:2607, name:'Rite of Kindling', type:'key_item', amount:0, locations:{
    'theCatacombs':[{type:'[Drop]', where:'Pinwheel (100%)'}]
  }},
  {id:384, name:'Peculiar Doll', type:'key_item', amount:0, locations:{
    'undeadAsylum':[{type:'[Corpse]', where:'In your cell at the beginning (revisited)'}]
  }},
  {id:2520, name:'Broken Pendant', type:'key_item', amount:0, locations:{
    'theDukeArchives':[{type:'[Drop]', where:'Crystal Golem (100% first golem)'}]
  }},
  {id:2100, name:'Master Key', type:'key_item', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}],
    'depths':[{type:'[Buy]', where:'Domhnall of Zena'}],
    'start':[
      {type:'', where:'Starting gift'},
      {type:'', where:'Thief class'}]
  }},
  {id:2002, name:'Crest of Artorias', type:'key_item', amount:0, locations:{
    'undeadParish':[
      {type:'[Buy]', where:'Andre of Astora'},
      {type:'[Drop]', where:'Andre of Astora (100%)'}]
  }},
  {id:2010, name:'Dungeon Cell Key', type:'key_item', amount:0, locations:{
    'undeadAsylum':[{type:'[Corpse]', where:'In your cell at the beginning'}]
  }},
  {id:2012, name:'Undead Asylum F2 East Key', type:'key_item', amount:0, locations:{
    'undeadAsylum':[
      {type:'[Gift]', where:'Oscar of Astora'},
      {type:'[Drop]', where:'Oscar of Astora (100%)'}]
  }},
  {id:2016, name:'Undead Asylum F2 West Key', type:'key_item', amount:0, locations:{
    'firelinkShrine':[{type:'[Corpse]', where:'On top of a roof'}]
  }},
  {id:2011, name:'Big Pilgrim\'s Key', type:'key_item', amount:0, locations:{
    'undeadAsylum':[
      {type:'[Drop]', where:'Asylum Demon (100% on 2nd encounter)'},
      {type:'[Gift]', where:'Oscar of Astora (if Asylum Demon killed on 1st encounter)'},
      {type:'[Drop]', where:'Oscar, Knight of Astora (100% if Asylum Demon killed on 1st encounter)'}]
  }},
  {id:2021, name:'Residence Key', type:'key_item', amount:0, locations:{
    'undeadBurg':[
      {type:'[Buy]', where:'Undead Male Merchant'},
      {type:'[Drop]', where:'Undead Male Merchant (100%)'}]
  }},
  {id:2017, name:'Mystery Key', type:'key_item', amount:0, locations:{
    'undeadParish':[{type:'[Corpse]', where:'Found after beating the Fang Boar down the staircase'}]
  }},
  {id:2001, name:'Basement Key', type:'key_item', amount:0, locations:{
    'undeadParish':[{type:'[Corpse]', where:'Next to the lever that open the grate to the Fang Boar zone'}]
  }},
  {id:2014, name:'Key to Depths', type:'key_item', amount:0, locations:{
    'undeadBurg':[{type:'[Drop]', where:'Capra Demon (100%)'}]
  }},
  {id:2019, name:'Watchtower Basement Key', type:'key_item', amount:0, locations:{
    'darkrootGarden':[{type:'[Corpse]', where:'After beating the Moonlight Butterfly, follow the only path'}]
  }},
  {id:2018, name:'Sewer Chamber Key', type:'key_item', amount:0, locations:{
    'depths':[{type:'[Corpse]', where:'In the Giant Undead Rat room'}]
  }},
  {id:2007, name:'Blighttown Key', type:'key_item', amount:0, locations:{
    'depths':[{type:'[Drop]', where:'Gaping Dragon (100%)'}]
  }},
  {id:2008, name:'Key to New Londo Ruins', type:'key_item', amount:0, locations:{
    'blighttown':[{type:'[Chest]', where:'Near Valley Of Drakes\'s shortcut'}]
  }},
  {id:2013, name:'Key to the Seal', type:'key_item', amount:0, locations:{
    'newLondoRuins':[
      {type:'[Gift]', where:'Ingward'},
      {type:'[Drop]', where:'Ingward (100%)'}]
  }},
  {id:2003, name:'Cage Key', type:'key_item', amount:0, locations:{
    'senFortress':[{type:'[Chest]', where:'Below the Crestfallen Merchant'}]
  }},
  {id:2004, name:'Archive Tower Cell Key', type:'key_item', amount:0, locations:{
    'theDukeArchives':[{type:'[Drop]', where:'Serpent Soldier (100%)'}]
  }},
  {id:2020, name:'Archive Tower Extra Key', type:'key_item', amount:0, locations:{
    'theDukeArchives':[{type:'[Corpse]', where:'Inside one of the cell'}]
  }},
  {id:2006, name:'Archive Tower Giant Cell Key', type:'key_item', amount:0, locations:{
    'theDukeArchives':[{type:'[Chest]', where:'Near the exit to the Crystal Cave'}]
  }},
  {id:2005, name:'Archive Tower Giant Door Key', type:'key_item', amount:0, locations:{
    'theDukeArchives':[{type:'[Chest]', where:'Behind the gramophone'}]
  }},
  {id:2009, name:'Annex Key', type:'key_item', amount:0, locations:{
    'paintedWorldOfAriamis':[{type:'[Chest]', where:'In the sewers, behind an illusory wall'}]
  }},
  //  {id:2015, name:'Lift Chamber Key', type:'key_item', amount:0, locations:{}},
  {id:2022, name:'Crest Key', type:'key_item', amount:0, locations:{
    'oolacileTownship':[{type:'[Drop]', where:'Mimic (100%)'}]
  }},
  {id:3000, name:'Sorcery:Soul Arrow', type:'magic', amount:0, locations:{
    'firelinkShrine':[
      {type:'[Buy]', where:'Griggs of Vinheim'},
      {type:'[Buy]', where:'Big Hat Logan'}],
    'theDukeArchives':[{type:'[Buy]', where:'Big Hat Logan'}],
    'newLondoRuins':[{type:'[Buy]', where:'Rickert of Vinheim'}],
    'start':[{type:'', where:'Sorcerer class'}]
  }},
  {id:3010, name:'Sorcery:Great Soul Arrow', type:'magic', amount:0, locations:{
    'firelinkShrine':[
      {type:'[Buy]', where:'Griggs of Vinheim'},
      {type:'[Buy]', where:'Big Hat Logan'}],
    'theDukeArchives':[{type:'[Buy]', where:'Big Hat Logan'}]
  }},
  {id:3020, name:'Sorcery:Heavy Soul Arrow', type:'magic', amount:0, locations:{
    'firelinkShrine':[
      {type:'[Buy]', where:'Griggs of Vinheim'},
      {type:'[Buy]', where:'Big Hat Logan'}],
    'theDukeArchives':[{type:'[Buy]', where:'Big Hat Logan'}],
    'newLondoRuins':[{type:'[Buy]', where:'Rickert of Vinheim'}]
  }},
  {id:3030, name:'Sorcery:Great Heavy Soul Arrow', type:'magic', amount:0, locations:{
    'firelinkShrine':[
      {type:'[Buy]', where:'Griggs of Vinheim'},
      {type:'[Buy]', where:'Big Hat Logan'}],
    'theDukeArchives':[{type:'[Buy]', where:'Big Hat Logan'}]
  }},
  {id:3040, name:'Sorcery:Homing Soulmass', type:'magic', amount:0, locations:{
    'firelinkShrine':[
      {type:'[Buy]', where:'Griggs of Vinheim'},
      {type:'[Buy]', where:'Big Hat Logan'}],
    'theDukeArchives':[{type:'[Buy]', where:'Big Hat Logan'}]
  }},
  {id:3050, name:'Sorcery:Homing Crystal Soulmass', type:'magic', amount:0, locations:{
    'theDukeArchives':[{type:'[Buy]', where:'Big Hat Logan'}]
  }},
  {id:3060, name:'Sorcery:Soul Spear', type:'magic', amount:0, locations:{
    'firelinkShrine':[
      {type:'[Buy]', where:'Griggs of Vinheim'},
      {type:'[Buy]', where:'Big Hat Logan'}],
    'theDukeArchives':[{type:'[Buy]', where:'Big Hat Logan'}]
  }},
  {id:3070, name:'Sorcery:Crystal Soul Spear', type:'magic', amount:0, locations:{
    'theDukeArchives':[{type:'[Buy]', where:'Big Hat Logan'}]
  }},
  {id:3700, name:'Sorcery:White Dragon Breath', type:'magic', amount:0, locations:{
    'theDukeArchives':[{type:'[Drop]', where:'Big Hat Logan'}]
  }},
  {id:3100, name:'Sorcery:Magic Weapon', type:'magic', amount:0, locations:{
    'firelinkShrine':[
      {type:'[Buy]', where:'Griggs of Vinheim'},
      {type:'[Buy]', where:'Big Hat Logan'}],
    'theDukeArchives':[{type:'[Buy]', where:'Big Hat Logan'}]
  }},
  {id:3110, name:'Sorcery:Great Magic Weapon', type:'magic', amount:0, locations:{
    'anorLondo':[{type:'[Corpse]', where:'Drop the chandelier on the painting room'}]
  }},
  {id:3120, name:'Sorcery:Crystal Magic Weapon', type:'magic', amount:0, locations:{
    'theDukeArchives':[{type:'[Buy]', where:'Big Hat Logan'}]
  }},
  {id:3300, name:'Sorcery:Magic Shield', type:'magic', amount:0, locations:{
    'firelinkShrine':[
      {type:'[Buy]', where:'Griggs of Vinheim'},
      {type:'[Buy]', where:'Big Hat Logan'}],
    'theDukeArchives':[{type:'[Buy]', where:'Big Hat Logan'}]
  }},
  {id:3310, name:'Sorcery:Strong Magic Shield', type:'magic', amount:0, locations:{
    'theDukeArchives':[{type:'[Chest]', where:'At the highest floor next to the Channeler'}]
  }},
  {id:3520, name:'Sorcery:Aural Decoy', type:'magic', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Griggs of Vinheim'}]
  }},
  {id:3510, name:'Sorcery:Hush', type:'magic', amount:0, locations:{
    'firelinkShrine':[{type:'[Drop]', where:'Griggs of Vinheim (100%)'}],
    'senFortress':[
      {type:'[Corpse]', where:'On the second set of rolling boulder, jump midway to access a hidden area'},
      {type:'[Drop]', where:'Griggs of Vinheim (100%)'}]
  }},
  {id:3540, name:'Sorcery:Fall Control', type:'magic', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Griggs of Vinheim (100%)'}]
  }},
  {id:3400, name:'Sorcery:Hidden Weapon', type:'magic', amount:0, locations:{
    'darkrootBasin':[{type:'[Buy]', where:'Dusk of Oolacile'}],
    'oolacileSanctuary':[{type:'[Buy]', where:'Elizabeth'}]
  }},
  {id:3410, name:'Sorcery:Hidden Body', type:'magic', amount:0, locations:{
    'darkrootBasin':[{type:'[Buy]', where:'Dusk of Oolacile'}],
    'oolacileSanctuary':[{type:'[Buy]', where:'Elizabeth'}]
  }},
  {id:3530, name:'Sorcery:Repair', type:'magic', amount:0, locations:{
    'darkrootBasin':[{type:'[Buy]', where:'Dusk of Oolacile'}],
    'oolacileSanctuary':[{type:'[Buy]', where:'Elizabeth'}]
  }},
  {id:3500, name:'Sorcery:Cast Light', type:'magic', amount:0, locations:{
    'darkrootBasin':[{type:'[Buy]', where:'Dusk of Oolacile'}],
    'oolacileSanctuary':[{type:'[Buy]', where:'Elizabeth'}]
  }},
  {id:3550, name:'Sorcery:Chameleon', type:'magic', amount:0, locations:{
    'darkrootBasin':[{type:'[Buy]', where:'Dusk of Oolacile'}],
    'oolacileSanctuary':[{type:'[Buy]', where:'Elizabeth'}]
  }},
  {id:3610, name:'Sorcery:Remedy', type:'magic', amount:0, locations:{
    'blighttown':[{type:'[Chest]', where:'Near the elevator close to the Valley of Drakes shortcut'}]
  }},
  {id:3600, name:'Sorcery:Resist Curse', type:'magic', amount:0, locations:{
    'newLondoRuins':[{type:'[Buy]', where:'Ingward'}]
  }},
  {id:3710, name:'Sorcery:Dark Orb', type:'magic', amount:0, locations:{
    'oolacileTownship':[{type:'[Chest]', where:'Guarded by two Bloathead Sorcerer'}]
  }},
  {id:3720, name:'Sorcery:Dark Bead', type:'magic', amount:0, locations:{
    'chasmOfTheAbyss':[{type:'[Corpse]', where:'Behing a Bloathead Sorcerer'}]
  }},
  {id:3730, name:'Sorcery:Dark Fog', type:'magic', amount:0, locations:{
    'oolacileTownship':[{type:'[Corpse]', where:'From a high platform inside the house leading to Chasm Of The Abyss'}]
  }},
  {id:3740, name:'Sorcery:Pursuers', type:'magic', amount:0, locations:{
    'undeadAsylum':[{type:'[Snuggly]', where:'Trade with Soul of Manus'}]
  }},
  {id:4000, name:'Pyromancy:Fireball', type:'magic', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Laurentius of the Great Swamp'}],
    'blighttown':[{type:'[Buy]', where:'Quelana of Izalith'}],
    'start':[{type:'', where:'Pyromancer'}]
  }},
  {id:4010, name:'Pyromancy:Fire Orb', type:'magic', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Laurentius of the Great Swamp'}],
    'blighttown':[{type:'[Buy]', where:'Quelana of Izalith'}]
  }},
  {id:4020, name:'Pyromancy:Great Fireball', type:'magic', amount:0, locations:{
    'blighttown':[{type:'[Buy]', where:'Quelana of Izalith'}]
  }},
  {id:4500, name:'Pyromancy:Great Chaos Fireball', type:'magic', amount:0, locations:{
    'quelaagDomain':[{type:'[Covenant]', where:'Join the Chaos Servant covenant'}]
  }},
  {id:4030, name:'Pyromancy:Firestorm', type:'magic', amount:0, locations:{
    'blighttown':[{type:'[Buy]', where:'Quelana of Izalith'}]
  }},
  {id:4040, name:'Pyromancy:Fire Tempest', type:'magic', amount:0, locations:{
    'blighttown':[
      {type:'[Gift]', where:'Quelana of Izalith'},
      {type:'[Drop]', where:'Quelana of Izalith (100%)'}]
  }},
  {id:4510, name:'Pyromancy:Chaos Storm', type:'magic', amount:0, locations:{
    'quelaagDomain':[{type:'[Covenant]', where:'Rank Chaos Servant covenant up to +2'}]
  }},
  {id:4100, name:'Pyromancy:Combustion', type:'magic', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Laurentius of the Great Swamp'}],
    'blighttown':[{type:'[Buy]', where:'Quelana of Izalith'}]
  }},
  {id:4110, name:'Pyromancy:Great Combustion', type:'magic', amount:0, locations:{
    'blighttown':[{type:'[Buy]', where:'Quelana of Izalith'}]
  }},
  {id:4050, name:'Pyromancy:Fire Surge', type:'magic', amount:0, locations:{
    'paintedWorldOfAriamis':[{type:'[Drop]', where:'Engorged Zombie (100%)'}]
  }},
  {id:4060, name:'Pyromancy:Fire Whip', type:'magic', amount:0, locations:{
    'blighttown':[{type:'[Buy]', where:'Quelana of Izalith'}]
  }},
  {id:4520, name:'Pyromancy:Chaos Fire Whip', type:'magic', amount:0, locations:{
    'lostIzalith':[{type:'[Chest]', where:'Before the Bed of Chaos, guarded by a Chaos Eater'}]
  }},
  {id:4200, name:'Pyromancy:Poison Mist', type:'magic', amount:0, locations:{
    'quelaagDomain':[{type:'[Buy]', where:'Eingyi'}],
    'blighttown':[{type:'[Corpse]', where:'Left of the second bonfire, in the poison swamp'}]
  }},
  {id:4210, name:'Pyromancy:Toxic Mist', type:'magic', amount:0, locations:{
    'quelaagDomain':[{type:'[Buy]', where:'Eingyi'}]
  }},
  {id:4220, name:'Pyromancy:Acid Surge', type:'magic', amount:0, locations:{
    'paintedWorldOfAriamis':[{type:'[Corpse]', where:'In the graveyard'}]
  }},
  {id:4310, name:'Pyromancy:Flash Sweat', type:'magic', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Laurentius of the Great Swamp'}]
  }},
  {id:4300, name:'Pyromancy:Iron Flesh', type:'magic', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Laurentius of the Great Swamp'}]
  }},
  {id:4400, name:'Pyromancy:Power Within', type:'magic', amount:0, locations:{
    'blighttown':[{type:'[Corpse]', where:'Behind the Parasite Wall Hugger'}]
  }},
  {id:4360, name:'Pyromancy:Undead Rapport', type:'magic', amount:0, locations:{
    'blighttown':[{type:'[Buy]', where:'Quelana of Izalith'}]
  }},
  {id:4530, name:'Pyromancy:Black Flame', type:'magic', amount:0, locations:{
    'chasmOfTheAbyss':[{type:'[Corpse]', where:'After Sif, to the right, guarded by three Humanity Phantom'}]
  }},
  {id:5000, name:'Miracle:Heal', type:'magic', amount:0, locations:{
    'firelinkShrine':[
      {type:'[Buy]', where:'Petrus of Thorolund'},
      {type:'[Buy]', where:'Patches'}],
    'undeadParish':[{type:'[Buy]', where:'Reah of Thorolund'}],
    'start':[{type:'', where:'Cleric class'}]
  }},
  {id:5020, name:'Miracle:Great Heal Excerpt', type:'magic', amount:0, locations:{
    'firelinkShrine':[
      {type:'[Buy]', where:'Petrus of Thorolund'},
      {type:'[Buy]', where:'Patches'}],
    'undeadParish':[{type:'[Buy]', where:'Reah of Thorolund'}]
  }},
  {id:5010, name:'Miracle:Great Heal', type:'magic', amount:0, locations:{
    'undeadParish':[{type:'[Buy]', where:'Reah of Thorolund'}]
  }},
  {id:5030, name:'Miracle:Soothing Sunlight', type:'magic', amount:0, locations:{
    'theDukeArchives':[{type:'[Drop]', where:'Pisaca (100%)'}]
  }},
  {id:5040, name:'Miracle:Replenishment', type:'magic', amount:0, locations:{
    'tombOfTheGiants':[{type:'[Gift]', where:'Reah of Thorolund'}]
  }},
  {id:5050, name:'Miracle:Bountiful Sunlight', type:'magic', amount:0, locations:{
    'theDukeArchives':[{type:'[Drop]', where:'Pisaca (100%)'}]
  }},
  {id:5300, name:'Miracle:Force', type:'magic', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Petrus of Thorolund'}],
    'undeadParish':[{type:'[Buy]', where:'Reah of Thorolund'}]
  }},
  {id:5310, name:'Miracle:Wrath of the Gods', type:'magic', amount:0, locations:{
    'undeadParish':[{type:'[Buy]', where:'Reah of Thorolund'}]
  }},
  {id:5320, name:'Miracle:Emit Force', type:'magic', amount:0, locations:{
    'firelinkShrine':[{type:'[Gift]', where:'Siegmeyer of Catarina'}]
  }},
  {id:5600, name:'Miracle:Magic Barrier', type:'magic', amount:0, locations:{
    'undeadParish':[{type:'[Buy]', where:'Reah of Thorolund'}]
  }},
  {id:5610, name:'Miracle:Great Magic Barrier', type:'magic', amount:0, locations:{
    'ashLake':[{type:'[Corpse]', where:'Inside the central hollow tree'}]
  }},
  {id:5210, name:'Miracle:Homeward', type:'magic', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Petrus of Thorolund'}],
    'undeadParish':[{type:'[Buy]', where:'Reah of Thorolund'}]
  }},
  //  {id:5200, name:'Miracle:Escape Death', type:'magic', amount:0, locations:{}},
  {id:5400, name:'Miracle:Seek Guidance', type:'magic', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Petrus of Thorolund'}],
    'undeadParish':[{type:'[Buy]', where:'Reah of Thorolund'}]
  }},
  {id:5700, name:'Miracle:Karmic Justice', type:'magic', amount:0, locations:{
    'undeadParish':[{type:'[Buy]', where:'Oswald of Carim'}]
  }},
  {id:5810, name:'Miracle:Vow of Silence', type:'magic', amount:0, locations:{
    'paintedWorldOfAriamis':[{type:'[Corpse]', where:'On top of the Annex'}]
  }},
  {id:5800, name:'Miracle:Tranquil Walk of Peace', type:'magic', amount:0, locations:{
    'theCatacombs':[{type:'[Corpse]', where:'Access a tomb by the breakable stone wall, then at the end, <br>break the right wall to uncover the secret passage'}]
  }},
  {id:5500, name:'Miracle:Lightning Spear', type:'magic', amount:0, locations:{
    'undeadParish':[{type:'[Covenant]', where:'Join the Warrior of Sunlight covenant'}]
  }},
  {id:5510, name:'Miracle:Great Lightning Spear', type:'magic', amount:0, locations:{
    'undeadParish':[{type:'[Covenant]', where:'Rank the Warrior of Sunlight covenant up to +1'}]
  }},
  {id:5520, name:'Miracle:Sunlight Spear', type:'magic', amount:0, locations:{
    'undeadParish':[{type:'[Craft]', where:'As a Warrior of the Sunlight covenant, craft with Soul of Gwyn at the sunlight altar'}]
  }},
  {id:5900, name:'Miracle:Sunlight Blade', type:'magic', amount:0, locations:{
    'anorLondo':[{type:'[Chest]', where:'Inside Lord Gwyn\'s Tomb, after beating Gwyndolin'}]
  }},
  {id:5910, name:'Miracle:Darkmoon Blade', type:'magic', amount:0, locations:{
    'anorLondo':[{type:'[Covenant]', where:'Rank the Blade of the Darkmoon up to +1'}]
  }},
  {id:5100, name:'Miracle:Gravelord Sword Dance', type:'magic', amount:0, locations:{
    'tombOfTheGiants':[{type:'[Covenant]', where:'Join the Gravelord Servant covenant'}]
  }},
  {id:5110, name:'Miracle:Gravelord Greatsword Dance', type:'magic', amount:0, locations:{
    'tombOfTheGiants':[{type:'[Covenant]', where:'Rank the Gravelord Servant covenant up to +1'}]
  }},
  {id:100000, name:'Dagger', type:'weapon', amount:0, locations:{
    'undeadBurg':[{type:'[Buy]', where:'Undead Male Merchant'}],
    'start':[{type:'', where:'Sorcerer class'}]
  }},
  {id:101000, name:'Parrying Dagger', type:'weapon', amount:0, locations:{
    'newLondoRuins':[{type:'[Corpse]', where:'At the first stairwheel'}]
  }},
  {id:103000, name:'Bandit\'s Knife', type:'weapon', amount:0, locations:{
    'undeadBurg':[{type:'[Drop]', where:'Hollow Thief (2%)'}],
    'start':[{type:'', where:'Thief class'}]
  }},
  {id:102000, name:'Ghost Blade', type:'weapon', amount:0, locations:{
    'newLondoRuins':[{type:'[Drop]', where:'Banshee (1%)'}]
  }},
  {id:9011000, name:'Dark Silver Tracer', type:'weapon', amount:0, locations:{
    'oolacileTownship':[
      {type:'[Gift]', where:'Trade with Lord\'s Blade Ciaran with Soul of Artorias'},
      {type:'[Drop]', where:'Lord\'s Blade Ciaran (100%)'}]
  }},
  {id:104000, name:'Priscilla\'s Dagger', type:'weapon', amount:0, locations:{
    'paintedWorldOfAriamis':[{type:'[Tail]', where:'Crossbreed Priscilla'}]
  }},
  {id:200000, name:'Shortsword', type:'weapon', amount:0, locations:{
    'undeadBurg':[
      {type:'[Buy]', where:'Undead Male Merchant'},
      {type:'[Drop]', where:'Hollow Warrior (2%)'}],
    'start':[{type:'', where:'Hunter class'}]
  }},
  {id:201000, name:'Longsword', type:'weapon', amount:0, locations:{
    'undeadAsylum':[{type:'[Drop]', where:'Hollow Soldier (2%)'}],
    'undeadBurg':[{type:'[Drop]', where:'Hollow Soldier (2%)'}],
    'undeadParish':[
      {type:'[Drop]', where:'Hollow Soldier (2%)'},
      {type:'[Buy]', where:'Andre of Astora'}],
    'start':[{type:'', where:'Warrior class'}]
  }},
  {id:202000, name:'Broadsword', type:'weapon', amount:0, locations:{
    'undeadParish':[{type:'[Buy]', where:'Andre of Astora'}],
    'start':[{type:'', where:'Knight class'}]
  }},
  {id:204000, name:'Balder Side Sword', type:'weapon', amount:0, locations:{
    'undeadParish':[{type:'[Drop]', where:'Balder Knight (1%)'}],
    'senFortress':[{type:'[Drop]', where:'Balder Knight (1%)'}]
  }},
  {id:206000, name:'Sunlight Straight Sword', type:'weapon', amount:0, locations:{
    'undeadParish':[{type:'[Drop]', where:'Solaire of Astora (100%)'}],
    'anorLondo':[{type:'[Drop]', where:'Solaire of Astora (100%)'}],
    'demonsRuins':[{type:'[Drop]', where:'Solaire of Astora (100%)'}],
    'lostIzalith':[{type:'[Drop]', where:'Solaire of Astora (100%)'}]
  }},
  {id:210000, name:'Darksword', type:'weapon', amount:0, locations:{
    'theAbyss':[{type:'[Covenant]', where:'Rank the Darkwraith covenant up to +2'}]
  }},
  {id:207000, name:'Barbed Straight Sword', type:'weapon', amount:0, locations:{
    'depths':[{type:'[Drop]', where:'Kirk, Knight of Thorns (33%)'}],
    'demonsRuins':[{type:'[Drop]', where:'Kirk, Knight of Thorns (33%)'}],
    'lostIzalith':[{type:'[Drop]', where:'Kirk, Knight of Thorns (33%)'}]
  }},
  {id:205000, name:'Crystal Straight Sword', type:'weapon', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}],
    'depths':[{type:'[Buy]', where:'Domhnall of Zena'}],
    'theDukeArchives':[{type:'[Drop]', where:'Undead Crystal Soldier (3%)'}]
  }},
  {id:208000, name:'Silv. Knight Str. Sword', type:'weapon', amount:0, locations:{
    'anorLondo':[{type:'[Drop]', where:'Silver Knight (2%)'}]
  }},
  {id:209000, name:'Astora\'s Straight Sword', type:'weapon', amount:0, locations:{
    'valleyOfDrakes':[{type:'[Corpse]', where:'Near the Undead Dragon'}]
  }},
  {id:211000, name:'Drake Sword', type:'weapon', amount:0, locations:{
    'undeadParish':[{type:'[Tail]', where:'Hellkite Dragon'}]
  }},
  {id:203000, name:'Broken Straight Sword', type:'weapon', amount:0, locations:{
    'undeadAsylum':[{type:'[Drop]', where:'Zombie (2%)'}],
    'paintedWorldOfAriamis':[{type:'[Drop]', where:'Zombie (2%)'}],
    'blighttown':[{type:'[Drop]', where:'Infested Ghoul (2%)'}]
  }},
  {id:212000, name:'Straight Sword Hilt', type:'weapon', amount:0, locations:{
    'start':[{type:'', where:'Every class'}]
  }},
  {id:300000, name:'Bastard Sword', type:'weapon', amount:0, locations:{
    'undeadParish':[{type:'[Buy]', where:'Andre of Astora'}]
  }},
  {id:301000, name:'Claymore', type:'weapon', amount:0, locations:{
    'undeadBurg':[{type:'[Corpse]', where:'On Hellkite Dragon bridge'}]
  }},
  {id:302000, name:'Man-serpent Greatsword', type:'weapon', amount:0, locations:{
    'senFortress':[{type:'[Drop]', where:'Serpent Soldier (2%)'}],
    'paintedWorldOfAriamis':[{type:'[Drop]', where:'Serpent Soldier (2%)'}]
  }},
  {id:303000, name:'Flamberge', type:'weapon', amount:0, locations:{
    'senFortress':[{type:'[Drop]', where:'Serpent Mage (2%)'}],
    'blighttown':[{type:'[Buy]', where:'Shiva of the East'}],
    'paintedWorldOfAriamis':[{type:'[Drop]', where:'Serpent Mage (2%)'}]
  }},
  {id:304000, name:'Crystal Greatsword', type:'weapon', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}],
    'depths':[{type:'[Buy]', where:'Domhnall of Zena'}]
  }},
  {id:310000, name:'Black Knight Sword', type:'weapon', amount:0, locations:{
    'undeadAsylum':[{type:'[Drop]', where:'Sword Black Knight (20%)'}],
    'undeadBurg':[{type:'[Drop]', where:'Sword Black Knight (20%)'}],
    'kilnOfTheFirstFlame':[{type:'[Drop]', where:'Sword Black Knight (20%)'}]
  }},
  {id:306000, name:'Stone Greatsword', type:'weapon', amount:0, locations:{
    'darkrootGarden':[{type:'[Drop]', where:'Stone Knight (2%)'}],
    'blighttown':[{type:'[Buy]', where:'Shiva of the East'}]
  }},
  {id:311000, name:'Greatsword of Artorias', type:'weapon', amount:0, locations:{
    'anorLondo':[
      {type:'[Craft]', where:'Straight Sword Hilt+10 + Soul of Sif'},
      {type:'[Craft]', where:'Broken Straight Sword+10 + Soul of Sif'}]
  }},
  {id:307000, name:'Greatsword of Artorias', type:'weapon', amount:0, locations:{
    'anorLondo':[{type:'[Craft]', where:'Any (Great)Sword+10 + Soul of Sif'}]
  }},
  {id:9012000, name:'Abyss Greatsword', type:'weapon', amount:0, locations:{
    'anorLondo':[{type:'[Craft]', where:'Any (Great)Sword+10 + Soul of Artorias'}]
  }},
  {id:314000, name:'Great Lord Greatsword', type:'weapon', amount:0, locations:{
    'anorLondo':[{type:'[Craft]', where:'Any (Great)Sword+10 + Soul of Gwyn'}]
  }},
  {id:309000, name:'Moonlight Greatsword', type:'weapon', amount:0, locations:{
    'anorLondo':[{type:'[Tail]', where:'Seath the Scaleless'}]
  }},
  {id:9020000, name:'Obsidian Greatsword', type:'weapon', amount:0, locations:{
    'royalWood':[{type:'[Tail]', where:'Black Dragon Kalameet'}]
  }},
  {id:351000, name:'Greatsword', type:'weapon', amount:0, locations:{
    'undeadParish':[{type:'[Drop]', where:'Berenike Knight (2%)'}],
    'senFortress':[{type:'[Buy]', where:'Crestfallen Merchant'}],
    'anorLondo':[{type:'[Corpse]', where:'Bottom-Left of the painting room'}],
    'paintedWorldOfAriamis':[{type:'[Drop]', where:'Berenike Knight (2%)'}]
  }},
  {id:350000, name:'Zweihander', type:'weapon', amount:0, locations:{
    'firelinkShrine':[{type:'[Corpse]', where:'At the graveyard'}]
  }},
  {id:352000, name:'Demon Great Machete', type:'weapon', amount:0, locations:{
    'undeadBurg':[{type:'[Drop]', where:'Capra Demon (5%)'}],
    'blighttown':[{type:'[Buy]', where:'Shiva of the East'}],
    'demonsRuins':[{type:'[Drop]', where:'Capra Demon (5%)'}]
  }},
  {id:355000, name:'Black Knight Greatsword', type:'weapon', amount:0, locations:{
    'undeadParish':[{type:'[Drop]', where:'Greatsword Black Knight (20%)'}],
    'kilnOfTheFirstFlame':[{type:'[Drop]', where:'Greatsword Black Knight (20%)'}]
  }},
  {id:354000, name:'Dragon Greatsword', type:'weapon', amount:0, locations:{
    'ashLake':[{type:'[Tail]', where:'Everlasting Dragon'}]
  }},
  {id:400000, name:'Scimitar', type:'weapon', amount:0, locations:{
    'firelinkShrine':[{type:'[Drop]', where:'Skeleton (2%)'}],
    'undeadBurg':[{type:'[Buy]', where:'Undead Male Merchant'}],
    'theCatacombs':[{type:'[Drop]', where:'Skeleton (2%)'}],
    'start':[{type:'', where:'Wanderer'}]
  }},
  {id:401000, name:'Falchion', type:'weapon', amount:0, locations:{
    'firelinkShrine':[{type:'[Drop]', where:'Skeleton (2%)'}],
    'blighttown':[{type:'[Corpse]', where:'At the bottom of the \'village\', guarded by a Blowdart Sniper'}],
    'theCatacombs':[{type:'[Drop]', where:'Skeleton (2%)'}],
    'theDukeArchives':[{type:'[Drop]', where:'Mimic (100%)'}]
  }},
  {id:402000, name:'Shotel', type:'weapon', amount:0, locations:{
    'senFortress':[{type:'[Corpse]', where:'Next to Siegmeyer of Catarina'}],
    'blighttown':[{type:'[Buy]', where:'Shiva of the East'}]
  }},
  {id:405000, name:'Painting Guardian Sword', type:'weapon', amount:0, locations:{
    'anorLondo':[{type:'[Drop]', where:'Painting Guardian (2%)'}]
  }},
  {id:403000, name:'Jagged Ghost Blade', type:'weapon', amount:0, locations:{
    'newLondoRuins':[{type:'[Drop]', where:'Ghost (1%)'}]
  }},
  {id:9010000, name:'Gold Tracer', type:'weapon', amount:0, locations:{
    'oolacileTownship':[
      {type:'[Gift]', where:'Trade with Lord\'s Blade Ciaran with Soul of Artorias'},
      {type:'[Drop]', where:'Lord\'s Blade Ciaran (100%)'}]
  }},
  {id:406000, name:'Quelaag\'s Furysword', type:'weapon', amount:0, locations:{
    'anorLondo':[{type:'[Craft]', where:'Any Curvedsword+10 + Soul of Quelaag'}]
  }},
  {id:451000, name:'Murakumo', type:'weapon', amount:0, locations:{
    'firelinkShrine':[{type:'[Drop]', where:'Giant Skeleton (2%)'}],
    'darkrootGarden':[{type:'[Drop]', where:'Shiva of the East (100%)'}],
    'blighttown':[{type:'[Drop]', where:'Shiva of the East (100%)'}],
    'theCatacombs':[{type:'[Drop]', where:'Giant Skeleton (2%)'}],
    'tombOfTheGiants':[{type:'[Drop]', where:'Giant Skeleton (2%)'}]
  }},
  {id:450000, name:'Server', type:'weapon', amount:0, locations:{
    'blighttown':[{type:'[Corpse]', where:'In the poison swamp guarded by three Leechs'}]
  }},
  {id:453000, name:'Gravelord Sword', type:'weapon', amount:0, locations:{
    'tombOfTheGiants':[{type:'[Covenant]', where:'Join the Gravelord Servant covenant'}]
  }},
  {id:500000, name:'Uchigatana', type:'weapon', amount:0, locations:{
    'undeadBurg':[{type:'[Drop]', where:'Undead Male Merchant (100%)'}],
    'blighttown':[{type:'[Buy]', where:'Shiva of the East'}]
  }},
  {id:502000, name:'Iaito', type:'weapon', amount:0, locations:{
    'blighttown':[{type:'[Corpse]', where:'On a roof of one of the wooden structure coming from the Depths'}]
  }},
  {id:501000, name:'Washing Pole', type:'weapon', amount:0, locations:{
    'blighttown':[{type:'[Buy]', where:'Shiva of the East'}]
  }},
  {id:503000, name:'Chaos Blade', type:'weapon', amount:0, locations:{
    'anorLondo':[{type:'[Craft]', where:'Any Katana+10 + Soul of Quelaag'}]
  }},
  {id:600000, name:'Mail Breaker', type:'weapon', amount:0, locations:{
    'undeadBurg':[{type:'[Corpse]', where:'In a house in Lower Undead Burg'}]
  }},
  {id:601000, name:'Rapier', type:'weapon', amount:0, locations:{
    'undeadBurg':[{type:'[Buy]', where:'Undead Male Merchant'}],
    'undeadParish':[{type:'[Drop]', where:'Balder Knight (2%)'}],
    'senFortress':[{type:'[Drop]', where:'Balder Knight (2%)'}]
  }},
  {id:602000, name:'Estoc', type:'weapon', amount:0, locations:{
    'newLondoRuins':[{type:'[Corpse]', where:'At the beginning of the Ruins, after the first bridge'}]
  }},
  {id:604000, name:'Ricard\'s Rapier', type:'weapon', amount:0, locations:{
    'senFortress':[{type:'[Drop]', where:'Undead Prince Ricard (100%)'}]
  }},
  {id:603000, name:'Velka\'s Rapier', type:'weapon', amount:0, locations:{
    'paintedWorldOfAriamis':[{type:'[Corpse]', where:'inside the Annex'}]
  }},
  {id:700000, name:'Hand Axe', type:'weapon', amount:0, locations:{
    'undeadBurg':[{type:'[Buy]', where:'Undead Male Merchant'}],
    'start':[{type:'', where:'Pyromancer class'}]
  }},
  {id:701000, name:'Battle Axe', type:'weapon', amount:0, locations:{
    'undeadBurg':[{type:'[Drop]', where:'Hollow Warrior (2%)'}],
    'undeadParish':[{type:'[Buy]', where:'Andre of Astora'}],
    'start':[{type:'', where:'Bandit class'}]
  }},
  {id:703000, name:'Butcher Knife', type:'weapon', amount:0, locations:{
    'blighttown':[{type:'[Drop]', where:'Maneater Mildred (100%)'}]
  }},
  {id:705000, name:'Gargoyle Tail Axe', type:'weapon', amount:0, locations:{
    'undeadParish':[{type:'[Tail]', where:'Bell Gargoyles'}],
    'anorLondo':[{type:'[Tail]', where:'Gargoyle'}]
  }},
  {id:702000, name:'Crescent Axe', type:'weapon', amount:0, locations:{
    'firelinkShrine':[
      {type:'[Drop]', where:'Patches (100%)'},
      {type:'[Buy]', where:'Patches'}],
    'theCatacombs':[{type:'[Drop]', where:'Patches (100%)'}],
    'tombOfTheGiants':[{type:'[Drop]', where:'Patches (100%)'}]
  }},
  {id:704000, name:'Golem Axe', type:'weapon', amount:0, locations:{
    'anorLondo':[{type:'[Craft]', where:'Any Axe+10 + Core of an Iron Golem'}]
  }},
  {id:750000, name:'Greataxe', type:'weapon', amount:0, locations:{
    'undeadParish':[{type:'[Drop]', where:'Berenike Knight (2%)'}],
    'depths':[{type:'[Corpse]', where:'Close to the bonfire, guarded by rats'}],
    'senFortress':[
      {type:'[Buy]', where:'Crestfallen Merchant'},
      {type:'[Drop]', where:'Berenike Knight (2%)'}],
    'paintedWorldOfAriamis':[{type:'[Drop]', where:'Berenike Knight (2%)'}]
  }},
  {id:751000, name:'Demon\'s Greataxe', type:'weapon', amount:0, locations:{
    'undeadBurg':[{type:'[Drop]', where:'Taurus Demon (5%)'}],
    'blighttown':[{type:'[Buy]', where:'Shiva of the East'}],
    'demonsRuins':[{type:'[Drop]', where:'Taurus Demon (5%)'}]
  }},
  {id:9015000, name:'Stone Greataxe', type:'weapon', amount:0, locations:{
    'royalWood':[{type:'[Drop]', where:'Guardian (2%)'}]
  }},
  {id:753000, name:'Black Knight Greataxe', type:'weapon', amount:0, locations:{
    'kilnOfTheFirstFlame':[{type:'[Drop]', where:'Axe Black Knight (20%)'}]
  }},
  {id:752000, name:'Dragon King Greataxe', type:'weapon', amount:0, locations:{
    'depths':[{type:'[Tail]', where:'Gaping Dragon'}]
  }},
  {id:800000, name:'Club', type:'weapon', amount:0, locations:{
    'undeadBurg':[{type:'[Buy]', where:'Undead Male Merchant'}],
    'start':[{type:'', where:'Deprived class'}]
  }},
  {id:809000, name:'Reinforced Club', type:'weapon', amount:0, locations:{
    'undeadBurg':[{type:'[Buy]', where:'Undead Male Merchant'}]
  }},
  {id:811000, name:'Blacksmith Giant Hammer', type:'weapon', amount:0, locations:{
    'anorLondo':[{type:'[Drop]', where:'Giant Blacksmith (100%)'}]
  }},
  {id:801000, name:'Mace', type:'weapon', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Patches'}],
    'theCatacombs':[{type:'[Corpse]', where:'In the Bonewheel zone, drop from above'}],
    'start':[{type:'', where:'Cleric class'}]
  }},
  {id:802000, name:'Morning Star', type:'weapon', amount:0, locations:{
    'firelinkShrine':[{type:'[Chest]', where:'Under the elevator to Undead Parish'}]
  }},
  {id:803000, name:'Warpick', type:'weapon', amount:0, locations:{
    'undeadParish':[{type:'[Buy]', where:'Andre of Astora'}]
  }},
  {id:804000, name:'Pickaxe', type:'weapon', amount:0, locations:{
    'blighttown':[{type:'[Drop]', where:'Infested Barbarian (5%)'}]
  }},
  {id:810000, name:'Blacksmith Hammer', type:'weapon', amount:0, locations:{
    'undeadParish':[{type:'[Drop]', where:'Andre of Astora (100%)'}]
  }},
  {id:812000, name:'Hammer of Vamos', type:'weapon', amount:0, locations:{
    'theCatacombs':[{type:'[Drop]', where:'Vamos (100%)'}]
  }},
  {id:855000, name:'Large Club', type:'weapon', amount:0, locations:{
    'blighttown':[{type:'[Drop]', where:'Infested Barbarian (2%)'}]
  }},
  {id:850000, name:'Great Club', type:'weapon', amount:0, locations:{
    'blighttown':[{type:'[Corpse]', where:'Just before Quelaag Domain, where the Boulder Barbarians are'}]
  }},
  {id:852000, name:'Demon\'s Great Hammer', type:'weapon', amount:0, locations:{
    'undeadAsylum':[
      {type:'[Snuggly]', where:'Trade with Sack'},
      {type:'[Drop]', where:'Asylum Demon (100% on 1st encounter)'}]
  }},
  {id:851000, name:'Grant', type:'weapon', amount:0, locations:{
    'tombOfTheGiants':[{type:'[Drop]', where:'Paladin Leeroy (100%)'}]
  }},
  {id:854000, name:'Dragon Tooth', type:'weapon', amount:0, locations:{
    'anorLondo':[{type:'[Chest]', where:'Behind an illusory wall in a fireplace'}]
  }},
  {id:856000, name:'Smough\'s Hammer', type:'weapon', amount:0, locations:{
    'anorLondo':[{type:'[Craft]', where:'Any Hammer/Club+10 + Soul of Smough'}]
  }},
  {id:1000000, name:'Spear', type:'weapon', amount:0, locations:{
    'undeadBurg':[{type:'[Buy]', where:'Undead Male Merchant'}],
    'undeadParish':[{type:'[Drop]', where:'Undead Soldier (2%)'}],
    'paintedWorldOfAriamis':[{type:'[Drop]', where:'Phalanx (1%)'}]
  }},
  {id:1001000, name:'Winged Spear', type:'weapon', amount:0, locations:{
    'firelinkShrine':[{type:'[Corpse]', where:'In the graveyard'}]
  }},
  {id:1002000, name:'Partizan', type:'weapon', amount:0, locations:{
    'darkrootGarden':[{type:'[Corpse]', where:'Guarded by a tree lizard'}]
  }},
  {id:9016000, name:'Four-Pronged Prow', type:'weapon', amount:0, locations:{
    'royalWood':[{type:'[Drop]', where:'Wooden Scarecrow (1%)'}]
  }},
  {id:1050000, name:'Pike', type:'weapon', amount:0, locations:{
    'undeadParish':[{type:'[Buy]', where:'Andre of Astora'}]
  }},
  {id:1004000, name:'Channeler\'s Trident', type:'weapon', amount:0, locations:{
    'undeadParish':[{type:'[Drop]', where:'Channeler (1%)'}],
    'depths':[{type:'[Drop]', where:'Channeler (1%)'}],
    'theDukeArchives':[{type:'[Drop]', where:'Channeler (1%)'}]
  }},
  {id:1003000, name:'Demon\'s Spear', type:'weapon', amount:0, locations:{
    'blighttown':[{type:'[Buy]', where:'Shiva of the East'}],
    'anorLondo':[{type:'[Drop]', where:'Batwing Demon (2%)'}]
  }},
  {id:1006000, name:'Silver Knight Spear', type:'weapon', amount:0, locations:{
    'anorLondo':[{type:'[Drop]', where:'Silver Knight (2%)'}]
  }},
  {id:1052000, name:'Moonlight Butterfly Horn', type:'weapon', amount:0, locations:{
    'anorLondo':[{type:'[Craft]', where:'Any Spear/Trust+10 + Soul of the Moonlight Butterfly'}]
  }},
  {id:1051000, name:'Dragonslayer Spear', type:'weapon', amount:0, locations:{
    'anorLondo':[{type:'[Craft]', where:'Any Spear/Trust+10 + Soul of Ornstein'}]
  }},
  {id:1100000, name:'Halberd', type:'weapon', amount:0, locations:{
    'undeadParish':[{type:'[Corpse]', where:'Left of the front door of the Parish'}],
    'anorLondo':[{type:'[Drop]', where:'Mimic (100%)'}]
  }},
  {id:1106000, name:'Lucerne ', type:'weapon', amount:0, locations:{
    'theCatacombs':[{type:'[Corpse]', where:'Past the second Necromancer, in an optional chamber'}]
  }},
  {id:1107000, name:'Scythe', type:'weapon', amount:0, locations:{
    'senFortress':[{type:'[Corpse]', where:'In the pit with the Titanite Demon'}]
  }},
  {id:1103000, name:'Gargoyle\'s Halberd', type:'weapon', amount:0, locations:{
    'undeadParish':[{type:'[Drop]', where:'Bell Gargoyles (3%)'}],
    'anorLondo':[{type:'[Drop]', where:'Gargoyle (3% -> 100% if last)'}]
  }},
  {id:1101000, name:'Giant\'s Halberd', type:'weapon', amount:0, locations:{
    'anorLondo':[
      {type:'[Buy]', where:'Giant Blacksmith'},
      {type:'[Drop]', where:'Sentinel (2%)'},
      {type:'[Drop]', where:'Royal Sentinel (2%)'}]
  }},
  {id:1102000, name:'Titanite Catch Pole', type:'weapon', amount:0, locations:{
    'undeadParish':[{type:'[Drop]', where:'Titanite Demon (2% -> 100% if 8th killed)'}],
    'anorLondo':[{type:'[Drop]', where:'Titanite Demon (2% -> 100% if 8th killed)'}],
    'senFortress':[{type:'[Drop]', where:'Titanite Demon (2% -> 100% if 8th killed)'}],
    'theCatacombs':[{type:'[Drop]', where:'Titanite Demon (2% -> 100% if 8th killed)'}],
    'lostIzalith':[{type:'[Drop]', where:'Titanite Demon (2% -> 100% if 8th killed)'}]
  }},
  {id:1105000, name:'Black Knight Halberd', type:'weapon', amount:0, locations:{
    'darkrootBasin':[{type:'[Drop]', where:'Halberd Black Knight (20%)'}],
    'kilnOfTheFirstFlame':[{type:'[Drop]', where:'Halberd Black Knight (20%)'}]
  }},
  {id:1150000, name:'Great Scythe', type:'weapon', amount:0, locations:{
    'theCatacombs':[{type:'[Corpse]', where:'Jump from the last bridge to the right<br>(the one where Patches tries to kill you)'}]
  }},
  {id:1151000, name:'Lifehunt Scythe', type:'weapon', amount:0, locations:{
    'anorLondo':[{type:'[Craft]', where:'Any Halberd/Whip+10 + Soul of Priscilla'}]
  }},
  {id:1600000, name:'Whip', type:'weapon', amount:0, locations:{
    'blighttown':[{type:'[Corpse]', where:'Near the Parasite Wall Hugger'}]
  }},
  {id:1601000, name:'Notched Whip', type:'weapon', amount:0, locations:{
    'paintedWorldOfAriamis':[{type:'[Drop]', where:'Xanthous King Jeremiah (100%)'}]
  }},
  {id:9019000, name:'Guardian Tail', type:'weapon', amount:0, locations:{
    'oolacileSanctuary':[{type:'[Tail]', where:'Sanctuary Guardian'}]
  }},
//  {id:900000, name:'Fists', type:'weapon', amount:0, locations:{}},
  {id:901000, name:'Caestus', type:'weapon', amount:0, locations:{
    'undeadParish':[{type:'[Buy]', where:'Andre of Astora'}]
  }},
  {id:902000, name:'Claw', type:'weapon', amount:0, locations:{
    'blighttown':[{type:'[Buy]', where:'Shiva of the East'}]
  }},
  {id:903000, name:'Dragon Bone Fist', type:'weapon', amount:0, locations:{
    'anorLondo':[{type:'[Craft]', where:'Any Fist+10 + Core of an Iron Golem'}]
  }},
  {id:904000, name:'Dark Hand', type:'weapon', amount:0, locations:{
    'newLondoRuins':[{type:'[Drop]', where:'Darkwraith (1%)'}],
    'theAbyss':[{type:'[Covenant]', where:'Join the Darkwraith covenant'}]
  }},
  {id:1200000, name:'Short Bow', type:'weapon', amount:0, locations:{
    'undeadBurg':[{type:'[Buy]', where:'Undead Male Merchant'}],
    'start':[{type:'', where:'Hunter'}]
  }},
  {id:1204000, name:'Composite Bow', type:'weapon', amount:0, locations:{
    'newLondoRuins':[{type:'[Corpse]', where:'Near the staircase to the seal'}]
  }},
  {id:1201000, name:'Longbow', type:'weapon', amount:0, locations:{
    'darkrootBasin':[{type:'[Corpse]', where:'Just after the Crystal Lizard'}],
    'tombOfTheGiants':[{type:'[Drop]', where:'Giant Skeleton (1%)'}],
    'theDukeArchives':[{type:'[Drop]', where:'Undead Crystal Soldier (2%)'}]
  }},
  {id:1202000, name:'Black Bow of Pharis', type:'weapon', amount:0, locations:{
    'darkrootGarden':[{type:'[Drop]', where:'Forest Hunter Archer (100%)'}]
  }},
  {id:1203000, name:'Dragonslayer Greatbow', type:'weapon', amount:0, locations:{
    'anorLondo':[{type:'[Corpse]', where:'Through the broken glass from the hall before the Londo Bros'}]
  }},
  {id:9021000, name:'Gough\'s Great Bow', type:'weapon', amount:0, locations:{
    'oolacileTownship':[
      {type:'[Gift]', where:'Hawkeye Gough'},
      {type:'[Drop]', where:'Hawkeye Gough (100%)'}]
  }},
  {id:1205000, name:'Darkmoon Bow', type:'weapon', amount:0, locations:{
    'anorLondo':[{type:'[Craft]', where:'Any Bow+10 + Soul of Gwyndolin'}]
  }},
  {id:1250000, name:'Light Crossbow', type:'weapon', amount:0, locations:{
    'undeadBurg':[
      {type:'[Corpse]', where:'At the start of the area, need a tricky jump'},
      {type:'[Drop]', where:'Hollow Soldier (2%)'}],
    'undeadParish':[{type:'[Drop]', where:'Hollow Soldier (2%)'}],
    'senFortress':[{type:'[Drop]', where:'Balder Knight (2%)'}]
  }},
  {id:1251000, name:'Heavy Crossbow', type:'weapon', amount:0, locations:{
    'depths':[{type:'[Corpse]', where:'On the balcony overlooking the Gaping Dragon\'s area'}]
  }},
  {id:1253000, name:'Sniper Crossbow', type:'weapon', amount:0, locations:{
    'senFortress':[{type:'[Corpse]', where:'Miss your jump to go to the Crestfallen Merchant'}]
  }},
  {id:1252000, name:'Avelyn', type:'weapon', amount:0, locations:{
    'theDukeArchives':[{type:'[Chest]', where:'On top of one of the bookshelves'}]
  }},
  {id:1300000, name:'Sorcerer\'s Catalyst', type:'weapon', amount:0, locations:{
    'undeadBurg':[{type:'[Corpse]', where:'Just next to where Griggs of Vinheim is held captive'}],
    'firelinkShrine':[{type:'[Buy]', where:'Griggs of Vinheim'}],
    'newLondoRuins':[{type:'[Buy]', where:'Rickert of Vinheim'}],
    'start':[{type:'', where:'Sorcerer'}]
  }},
  {id:1301000, name:'Beatrice\'s Catalyst', type:'weapon', amount:0, locations:{
    'valleyOfDrakes':[{type:'[Corpse]', where:'At one end of the Valley after killing the Four Kings'}]
  }},
  {id:1303000, name:'Logan\'s Catalyst', type:'weapon', amount:0, locations:{
    'theDukeArchives':[{type:'[Chest]', where:'Where Logan sold his magic, after killing him in Seath\'s room'}]
  }},
  {id:1305000, name:'Oolacile Ivory Catalyst', type:'weapon', amount:0, locations:{
    'darkrootBasin':[{type:'[Buy]', where:'Dusk of Oolacile'}],
    'oolacileSanctuary':[{type:'[Buy]', where:'Elizabeth'}]
  }},
  {id:9018000, name:'Oolacile Catalyst', type:'weapon', amount:0, locations:{
    'oolacileTownship':[{type:'[Drop]', where:'Bloathead Sorcerer (0.5%)'}]
  }},
  {id:1307000, name:'Demon\'s Catalyst', type:'weapon', amount:0, locations:{
    'demonsRuins':[{type:'[Drop]', where:'Demon Firesage (100%)'}]
  }},
  {id:1308000, name:'Izalith Catalyst', type:'weapon', amount:0, locations:{
    'lostIzalith':[{type:'[Drop]', where:'Daughter of Chaos (100%)'}]
  }},
  {id:1302000, name:'Tin Banishment Catalyst', type:'weapon', amount:0, locations:{
    'blighttown':[{type:'[Corpse]', where:'Near the Blowdart Snipers area'}]
  }},
  {id:1306000, name:'Tin Crystallization Ctlyst.', type:'weapon', amount:0, locations:{
    'theDukeArchives':[{type:'[Drop]', where:'Big Hat Logan (100%)'}]
  }},
  {id:1304000, name:'Tin Darkmoon Catalyst', type:'weapon', amount:0, locations:{
    'anorLondo':[{type:'[Craft]', where:'Any Catalyst+10 + Soul of Gwyndolin'}]
  }},
  {id:9017000, name:'Manus Catalyst', type:'weapon', amount:0, locations:{
    'anorLondo':[{type:'[Craft]', where:'Any Catalyst+10 + Soul of Manus'}]
  }},
  {id:1330000, name:'Pyromancy Flame', type:'weapon', amount:0, locations:{
    'firelinkShrine':[{type:'[Gift]', where:'Laurentius of the Great Swamp'}],
    'blighttown':[{type:'[Gift]', where:'Eingyi'}],
    'start':[{type:'', where:'Pyromancer'}]
  }},
  {id:1332000, name:'Pyromancy Flame (Ascended)', type:'weapon', amount:0, locations:{
    'blighttown':[{type:'[Craft]', where:'Upgrade from Pyromancy Flame+10 with Quelana'}]
  }},
  {id:1360000, name:'Talisman', type:'weapon', amount:0, locations:{
    'firelinkShrine':[
      {type:'[Chest]', where:'Under the elevator to Undead Parish'},
      {type:'[Buy]', where:'Petrus of Thorolund'}],
    'undeadParish':[{type:'[Buy]', where:'Reah of Thorolund'}]
  }},
  {id:1361000, name:'Canvas Talisman', type:'weapon', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Patches'}],
    'start':[{type:'', where:'Cleric class'}]
  }},
  {id:1362000, name:'Thorolund Talisman', type:'weapon', amount:0, locations:{
    'firelinkShrine':[
      {type:'[Buy]', where:'Petrus of Thorolund'},
      {type:'[Buy]', where:'Patches'}]
  }},
  {id:1363000, name:'Ivory Talisman', type:'weapon', amount:0, locations:{
    'firelinkShrine':[{type:'[Drop]', where:'Petrus of Thorolund (100%)'}],
    'undeadParish':[{type:'[Drop]', where:'Reah of Thorolund (100%)'}],
    'tombOfTheGiants':[{type:'[Drop]', where:'Reah of Thorolund (100%)'}],
    'theDukeArchives':[{type:'[Drop]', where:'Reah of Thorolund (100%)'}]
  }},
  {id:1365000, name:'Sunlight Talisman', type:'weapon', amount:0, locations:{
    'undeadParish':[{type:'[Drop]', where:'Solaire of Astora (100%)'}],
    'anorLondo':[{type:'[Drop]', where:'Solaire of Astora (100%)'}],
    'demonsRuins':[{type:'[Drop]', where:'Solaire of Astora (100%)'}],
    'lostIzalith':[{type:'[Drop]', where:'Solaire of Astora (100%)'}]
  }},
  {id:1366000, name:'Darkmoon Talisman', type:'weapon', amount:0, locations:{
    'anorLondo':[{type:'[Covenant]', where:'Rank the Blade of the Darkmoon covenant up to +1'}]
  }},
  {id:1367000, name:'Velka\'s Talisman', type:'weapon', amount:0, locations:{
    'undeadParish':[{type:'[Buy]', where:'Oswald of Carim'}]
  }},
  {id:1396000, name:'Skull Lantern', type:'weapon', amount:0, locations:{
    'theCatacombs':[{type:'[Drop]', where:'Necromancer (2% -> 100% if last)'}],
    'tombOfTheGiants':[{type:'[Corpse]', where:'In the pit where Patches pushes you'}]
  }},
  {id:1460000, name:'Warrior\'s Round Shield', type:'weapon', amount:0, locations:{
    'undeadBurg':[{type:'[Buy]', where:'Undead Male Merchant'}]
  }},
  {id:1410000, name:'Caduceus Round Shield', type:'weapon', amount:0, locations:{
    'firelinkShrine':[{type:'[Corpse]', where:'In the graveyard'}]
  }},
  {id:9000000, name:'Effigy Shield', type:'weapon', amount:0, locations:{
    'tombOfTheGiants':[{type:'[Corpse]', where:'Near the Halberd Black Knight'}]
  }},
  {id:1476000, name:'Red and White Round Shield', type:'weapon', amount:0, locations:{
    'firelinkShrine':[{type:'[Drop]', where:'Skeleton (1%)'}],
    'theCatacombs':[{type:'[Drop]', where:'Skeleton (1%)'}]
  }},
  {id:1406000, name:'Cracked Round Shield', type:'weapon', amount:0, locations:{
    'undeadBurg':[{type:'[Drop]', where:'Hollow Warrior (1%)'}],
    'start':[{type:'', where:'Pyromancer class'}]
  }},
  {id:1409000, name:'Plank Shield', type:'weapon', amount:0, locations:{
    'blighttown':[{type:'[Corpse]', where:'Just before the entrance to the Great Hollow'}],
    'start':[{type:'', where:'Deprived class'}]
  }},
  {id:1403000, name:'Small Leather Shield', type:'weapon', amount:0, locations:{
    'undeadBurg':[{type:'[Buy]', where:'Undead Male Merchant'}],
    'start':[{type:'', where:'Sorcerer'}]
  }},
  {id:1408000, name:'Leather Shield', type:'weapon', amount:0, locations:{
    'undeadBurg':[{type:'[Buy]', where:'Undead Male Merchant'}],
    'start':[{type:'', where:'Wanderer'}]
  }},
  {id:1405000, name:'Buckler', type:'weapon', amount:0, locations:{
    'undeadBurg':[{type:'[Buy]', where:'Undead Male Merchant'}],
    'undeadParish':[{type:'[Drop]', where:'Balder Knight (1%)'}],
    'senFortress':[{type:'[Drop]', where:'Balder Knight (1%)'}]
  }},
  {id:1404000, name:'Target Shield', type:'weapon', amount:0, locations:{
    'undeadBurg':[
      {type:'[Corpse]', where:'In a room just before the Capra Demon'},
      {type:'[Drop]', where:'Hollow Thief (1%)'}],
    'start':[{type:'', where:'Thief class'}]
  }},
  {id:1411000, name:'Crystal Ring Shield', type:'weapon', amount:0, locations:{
    'anorLondo':[{type:'[Craft]', where:'Any Shield+10 + Soul of the Moonlight Butterfly'}]
  }},
  {id:1400000, name:'East-West Shield', type:'weapon', amount:0, locations:{
    'undeadBurg':[{type:'[Buy]', where:'Undead Male Merchant'}],
    'start':[{type:'', where:'Cleric class'}]
  }},
  {id:1401000, name:'Wooden Shield', type:'weapon', amount:0, locations:{
    'undeadBurg':[{type:'[Corpse]', where:'From the first bonfire, in the house under the Crossbow Hollow Soldier'}]
  }},
  {id:1402000, name:'Large Leather Shield', type:'weapon', amount:0, locations:{
    'undeadParish':[{type:'[Buy]', where:'Andre of Astora'}],
    'paintedWorldOfAriamis':[{type:'[Drop]', where:'Phalanx (1%)'}],
    'start':[{type:'', where:'Hunter class'}]
  }},
  {id:1450000, name:'Heater Shield', type:'weapon', amount:0, locations:{
    'undeadBurg':[{type:'[Buy]', where:'Undead Male Merchant'}],
    'start':[{type:'', where:'Warrior class'}]
  }},
  {id:1452000, name:'Tower Kite Shield', type:'weapon', amount:0, locations:{
    'undeadParish':[{type:'[Buy]', where:'Andre of Astora'}],
    'start':[{type:'', where:'Knight class'}]
  }},
  {id:1477000, name:'Caduceus Kite Shield', type:'weapon', amount:0, locations:{
    'undeadParish':[{type:'[Buy]', where:'Andre of Astora'}],
    'theDukeArchives':[{type:'[Drop]', where:'Undead Crystal Soldier (2%)'}]
  }},
  {id:1454000, name:'Hollow Soldier Shield', type:'weapon', amount:0, locations:{
    'undeadBurg':[{type:'[Drop]', where:'Hollow Soldier (1%)'}],
    'undeadParish':[{type:'[Drop]', where:'Hollow Soldier (1%)'}]
  }},
  {id:1451000, name:'Knight Shield', type:'weapon', amount:0, locations:{
    'undeadParish':[{type:'[Corpse]', where:'Before accessing the Parish, on a side tower guarded by a Balder Knight'}],
    'theDukeArchives':[{type:'[Drop]', where:'Mimic (100%)'}]
  }},
  {id:9001000, name:'Sanctus', type:'weapon', amount:0, locations:{
    'tombOfTheGiants':[{type:'[Drop]', where:'Paladin Leeroy (100%)'}]
  }},
  {id:1455000, name:'Balder Shield', type:'weapon', amount:0, locations:{
    'undeadParish':[{type:'[Drop]', where:'Balder Knight (1%)'}],
    'senFortress':[
      {type:'[Buy]', where:'Crestfallen Merchant'},
      {type:'[Drop]', where:'Balder Knight (1%)'}]
  }},
  {id:1462000, name:'Spider Shield', type:'weapon', amount:0, locations:{
    'depths':[{type:'[Corpse]', where:'Above the Giant Undead Rat'}],
    'valleyOfDrakes':[{type:'[Corpse]', where:'On the bridge with all the Blue Drake'}],
    'start':[{type:'', where:'Bandit class'}]
  }},
  {id:1453000, name:'Grass Crest Shield', type:'weapon', amount:0, locations:{
    'darkrootBasin':[{type:'[Corpse]', where:'Near the Halberd Black Knight'}]
  }},
  {id:9002000, name:'Bloodshield', type:'weapon', amount:0, locations:{
    'paintedWorldOfAriamis':[{type:'[Corpse]', where:'Near the Undead Dragon'}]
  }},
  {id:1461000, name:'Iron Round Shield', type:'weapon', amount:0, locations:{
    'darkrootGarden':[{type:'[Drop]', where:'Shiva of the East (100%)'}],
    'blighttown':[{type:'[Drop]', where:'Shiva of the East (100%)'}]
  }},
  {id:1472000, name:'Sunlight Shield', type:'weapon', amount:0, locations:{
    'undeadParish':[{type:'[Drop]', where:'Solaire of Astora (100%)'}],
    'anorLondo':[{type:'[Drop]', where:'Solaire of Astora (100%)'}],
    'demonsRuins':[{type:'[Drop]', where:'Solaire of Astora (100%)'}],
    'lostIzalith':[{type:'[Drop]', where:'Solaire of Astora (100%)'}]
  }},
  {id:1475000, name:'Pierce Shield', type:'weapon', amount:0, locations:{
    'blighttown':[{type:'[Gift]', where:'Siegmeyer of Catarina'}]
  }},
  {id:1470000, name:'Spiked Shield', type:'weapon', amount:0, locations:{
    'depths':[{type:'[Drop]', where:'Kirk, Knight of Thorns (33%)'}],
    'demonsRuins':[{type:'[Drop]', where:'Kirk, Knight of Thorns (33%)'}],
    'lostIzalith':[{type:'[Drop]', where:'Kirk, Knight of Thorns (33%)'}]
  }},
  {id:1478000, name:'Gargoyle\'s Shield', type:'weapon', amount:0, locations:{
    'undeadParish':[{type:'[Drop]', where:'Bell Gargoyles (3%)'}],
    'anorLondo':[{type:'[Drop]', where:'Gargoyle (3% -> 100% if last)'}]
  }},
  {id:1471000, name:'Crystal Shield', type:'weapon', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}],
    'depths':[{type:'[Buy]', where:'Domhnall of Zena'}]
  }},
  {id:1456000, name:'Crest Shield', type:'weapon', amount:0, locations:{
    'undeadAsylum':[{type:'[Drop]', where:'Oscar of Astora (100% when revisit)'}]
  }},
  {id:1457000, name:'Dragon Crest Shield', type:'weapon', amount:0, locations:{
    'valleyOfDrakes':[{type:'[Corpse]', where:'Near the Undead Dragon'}]
  }},
  {id:1473000, name:'Silver Knight Shield', type:'weapon', amount:0, locations:{
    'anorLondo':[{type:'[Drop]', where:'Silver Knight (1%)'}]
  }},
  {id:1474000, name:'Black Knight Shield', type:'weapon', amount:0, locations:{
    'undeadAsylum':[{type:'[Drop]', where:'Black Knight (5%)'}],
    'undeadBurg':[{type:'[Drop]', where:'Black Knight (5%)'}],
    'undeadParish':[{type:'[Drop]', where:'Black Knight (5%)'}],
    'darkrootBasin':[{type:'[Drop]', where:'Black Knight (5%)'}],
    'tombOfTheGiants':[{type:'[Drop]', where:'Black Knight (5%)'}],
    'kilnOfTheFirstFlame':[{type:'[Drop]', where:'Black Knight (5%)'}]
  }},
  {id:1500000, name:'Eagle Shield', type:'weapon', amount:0, locations:{
    'blighttown':[{type:'[Corpse]', where:'Close to the first bonfire'}]
  }},
  {id:1501000, name:'Tower Shield', type:'weapon', amount:0, locations:{
    'undeadParish':[{type:'[Drop]', where:'Berenike Knight (2%)'}],
    'senFortress':[
      {type:'[Buy]', where:'Crestfallen Merchant'},
      {type:'[Drop]', where:'Berenike Knight (2%)'}],
    'paintedWorldOfAriamis':[{type:'[Drop]', where:'Berenike Knight (2%)'}]
  }},
  {id:9003000, name:'Black Iron Greatshield', type:'weapon', amount:0, locations:{
    'anorLondo':[{type:'[Corpse]', where:'Bottom-Left of the painting room'}]
  }},
  {id:1502000, name:'Giant Shield', type:'weapon', amount:0, locations:{
    'anorLondo':[
      {type:'[Buy]', where:'Giant Blacksmith'},
      {type:'[Drop]', where:'Sentinel (1%)'},
      {type:'[Drop]', where:'Royal Sentinel (1%)'}]
  }},
  {id:1506000, name:'Bonewheel Shield', type:'weapon', amount:0, locations:{
    'theCatacombs':[{type:'[Drop]', where:'Bonewheel Skeleton (2%)'}],
    'paintedWorldOfAriamis':[{type:'[Drop]', where:'Bonewheel Skeleton (2%)'}]
  }},
  {id:1503000, name:'Stone Greatshield', type:'weapon', amount:0, locations:{
    'darkrootGarden':[{type:'[Drop]', where:'Stone Knight (2%)'}]
  }},
  {id:1505000, name:'Havel\'s Greatshield', type:'weapon', amount:0, locations:{
    'anorLondo':[{type:'[Chest]', where:'Behind an illusory wall in a fireplace'}]
  }},
  {id:1507000, name:'Greatshield of Artorias', type:'weapon', amount:0, locations:{
    'anorLondo':[{type:'[Craft]', where:'Any Shield+10 + Soul of Sif'}]
  }},
  {id:9014000, name:'Cleansing Greatshield', type:'weapon', amount:0, locations:{
    'chasmOfTheAbyss':[{type:'[Gift]', where:'Sif'}]
  }},
  {id:2006000, name:'Wooden Arrow', type:'ammunition', amount:0, locations:{
    'undeadParish':[{type:'[Buy]', where:'Andre of Astora'}],
    'undeadBurg':[
      {type:'[Buy]', where:'Undead Male Merchant'},
      {type:'[Buy]', where:'Undead Female Merchant'}]
  }},
  {id:2000000, name:'Standard Arrow', type:'ammunition', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}],
    'undeadBurg':[
      {type:'[Buy]', where:'Undead Male Merchant'},
      {type:'[Buy]', where:'Undead Female Merchant'}],
    'undeadParish':[{type:'[Buy]', where:'Andre of Astora'}],
    'depths':[{type:'[Buy]', where:'Domhnall of Zena'}],
    'senFortress':[{type:'[Buy]', where:'Crestfallen Merchant'}],
    'anorLondo':[{type:'[Buy]', where:'Giant Blacksmith'}],
    'theCatacombs':[{type:'[Buy]', where:'Vamos'}],
    'royalWood':[{type:'[Buy]', where:'Marvelous Chester'}]
  }},
  {id:2001000, name:'Large Arrow', type:'ammunition', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}],
    'undeadBurg':[
      {type:'[Buy]', where:'Undead Male Merchant'},
      {type:'[Buy]', where:'Undead Female Merchant'}],
    'undeadParish':[{type:'[Buy]', where:'Andre of Astora'}],
    'depths':[{type:'[Buy]', where:'Domhnall of Zena'}],
    'senFortress':[{type:'[Buy]', where:'Crestfallen Merchant'}],
    'anorLondo':[{type:'[Buy]', where:'Giant Blacksmith'}],
    'theCatacombs':[{type:'[Buy]', where:'Vamos'}],
    'newLondoRuins':[{type:'[Corpse]', where:'Near the staircase to the seal'}],
    'royalWood':[{type:'[Buy]', where:'Marvelous Chester'}]
  }},
  {id:2002000, name:'Feather Arrow', type:'ammunition', amount:0, locations:{
    'darkrootBasin':[{type:'[Corpse]', where:'Just after the Crystal Lizard'}],
    'senFortress':[{type:'[Buy]', where:'Crestfallen Merchant'}],
    'anorLondo':[{type:'[Buy]', where:'Giant Blacksmith'}],
    'royalWood':[{type:'[Buy]', where:'Marvelous Chester'}]
  }},
  {id:2003000, name:'Fire Arrow', type:'ammunition', amount:0, locations:{
    'undeadBurg':[{type:'[Buy]', where:'Undead Female Merchant'}]
  }},
  {id:2004000, name:'Poison Arrow', type:'ammunition', amount:0, locations:{
    'undeadBurg':[{type:'[Buy]', where:'Undead Female Merchant'}]
  }},
  {id:2005000, name:'Moonlight Arrow', type:'ammunition', amount:0, locations:{
    'anorLondo':[{type:'[Buy]', where:'Giant Blacksmith'}]
  }},
  {id:2007000, name:'Dragonslayer Arrow', type:'ammunition', amount:0, locations:{
    'anorLondo':[{type:'[Buy]', where:'Giant Blacksmith'}]
  }},
  {id:2008000, name:'Gough\'s Great Arrow', type:'ammunition', amount:0, locations:{
    'royalWood':[
      {type:'[Corpse]', where:'On a cliff overlooking Kalameet battleground'},
      {type:'[Corpse]', where:'At the far end of Kalameet battleground'}],
    'oolacileTownship':[{type:'[Buy]', where:'Hawkeye Gough'}]
  }},
  {id:2103000, name:'Wood Bolt', type:'ammunition', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}],
    'undeadBurg':[
      {type:'[Buy]', where:'Undead Male Merchant'},
      {type:'[Buy]', where:'Undead Female Merchant'}],
    'undeadParish':[{type:'[Buy]', where:'Andre of Astora'}],
    'depths':[{type:'[Buy]', where:'Domhnall of Zena'}],
    'theCatacombs':[{type:'[Buy]', where:'Vamos'}]
  }},
  {id:2100000, name:'Standard Bolt', type:'ammunition', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}],
    'undeadBurg':[
      {type:'[Buy]', where:'Undead Male Merchant'},
      {type:'[Buy]', where:'Undead Female Merchant'}],
    'undeadParish':[{type:'[Buy]', where:'Andre of Astora'}],
    'depths':[{type:'[Buy]', where:'Domhnall of Zena'}],
    'senFortress':[{type:'[Buy]', where:'Crestfallen Merchant'}],
    'anorLondo':[{type:'[Buy]', where:'Giant Blacksmith'}],
    'theCatacombs':[{type:'[Buy]', where:'Vamos'}]
  }},
  {id:2101000, name:'Heavy Bolt', type:'ammunition', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}],
    'undeadBurg':[
      {type:'[Buy]', where:'Undead Male Merchant'},
      {type:'[Buy]', where:'Undead Female Merchant'}],
    'undeadParish':[{type:'[Buy]', where:'Andre of Astora'}],
    'depths':[{type:'[Buy]', where:'Domhnall of Zena'}],
    'senFortress':[{type:'[Buy]', where:'Crestfallen Merchant'}],
    'anorLondo':[{type:'[Buy]', where:'Giant Blacksmith'}],
    'theCatacombs':[{type:'[Buy]', where:'Vamos'}],
    'royalWood':[{type:'[Buy]', where:'Marvelous Chester'}]
  }},
  {id:2102000, name:'Sniper Bolt', type:'ammunition', amount:0, locations:{
    'senFortress':[{type:'[Buy]', where:'Crestfallen Merchant'}],
    'anorLondo':[{type:'[Buy]', where:'Giant Blacksmith'}],
    'royalWood':[{type:'[Buy]', where:'Marvelous Chester'}]
  }},
  {id:2104000, name:'Lightning Bolt', type:'ammunition', amount:0, locations:{
    'anorLondo':[{type:'[Buy]', where:'Giant Blacksmith'}]
  }},
  {id:210000, name:'Standard Helm', type:'armor', amount:0, locations:{
    'depths':[{type:'[Corpse]', where:'In the Gaping Dragon\'s area'}],
    'start':[{type:'', where:'Warrior class'}]
  }},
  {id:211000, name:'Hard Leather Armor', type:'armor', amount:0, locations:{
    'depths':[{type:'[Corpse]', where:'In the Gaping Dragon\'s area'}],
    'start':[{type:'', where:'Warrior class'}]
  }},
  {id:212000, name:'Hard Leather Gauntlets', type:'armor', amount:0, locations:{
    'depths':[{type:'[Corpse]', where:'In the Gaping Dragon\'s area'}],
    'start':[{type:'', where:'Warrior class'}]
  }},
  {id:213000, name:'Hard Leather Boots', type:'armor', amount:0, locations:{
    'depths':[{type:'[Corpse]', where:'In the Gaping Dragon\'s area'}],
    'start':[{type:'', where:'Warrior class'}]
  }},
  {id:170000, name:'Chain Helm', type:'armor', amount:0, locations:{
    'undeadBurg':[{type:'[Buy]', where:'Undead Male Merchant'}],
    'oolacileTownship':[{type:'[Drop]', where:'Chained Prisoner (20%)'}]
  }},
  {id:171000, name:'Chain Armor', type:'armor', amount:0, locations:{
    'undeadBurg':[{type:'[Buy]', where:'Undead Male Merchant'}],
    'oolacileTownship':[{type:'[Drop]', where:'Chained Prisoner (20%)'}]
  }},
  {id:172000, name:'Leather Gauntlets', type:'armor', amount:0, locations:{
    'undeadBurg':[{type:'[Buy]', where:'Undead Male Merchant'}],
    'oolacileTownship':[{type:'[Drop]', where:'Chained Prisoner (20%)'}]
  }},
  {id:173000, name:'Chain Leggings', type:'armor', amount:0, locations:{
    'undeadBurg':[{type:'[Buy]', where:'Undead Male Merchant'}],
    'oolacileTownship':[{type:'[Drop]', where:'Chained Prisoner (20%)'}]
  }},
  {id:390000, name:'Knight Helm', type:'armor', amount:0, locations:{
    'darkrootBasin':[{type:'[Corpse]', where:'In front of the Hydra'}],
    'start':[{type:'', where:'Knight class'}]
  }},
  {id:391000, name:'Knight Armor', type:'armor', amount:0, locations:{
    'darkrootBasin':[{type:'[Corpse]', where:'In front of the Hydra'}],
    'start':[{type:'', where:'Knight class'}]
  }},
  {id:392000, name:'Knight Gauntlets', type:'armor', amount:0, locations:{
    'darkrootBasin':[{type:'[Corpse]', where:'In front of the Hydra'}],
    'start':[{type:'', where:'Knight class'}]
  }},
  {id:393000, name:'Knight Leggings', type:'armor', amount:0, locations:{
    'darkrootBasin':[{type:'[Corpse]', where:'In front of the Hydra'}],
    'start':[{type:'', where:'Knight class'}]
  }},
  {id:350000, name:'Elite Knight Helm', type:'armor', amount:0, locations:{
    'darkrootGarden':[{type:'[Corpse]', where:'Near the fog gate of the Moonlight Butterfly'}]
  }},
  {id:351000, name:'Elite Knight Armor', type:'armor', amount:0, locations:{
    'darkrootGarden':[{type:'[Corpse]', where:'Near the fog gate of the Moonlight Butterfly'}]
  }},
  {id:352000, name:'Elite Knight Gauntlets', type:'armor', amount:0, locations:{
    'darkrootGarden':[{type:'[Corpse]', where:'Near the fog gate of the Moonlight Butterfly'}]
  }},
  {id:353000, name:'Elite Knight Leggings', type:'armor', amount:0, locations:{
    'darkrootGarden':[{type:'[Corpse]', where:'Near the fog gate of the Moonlight Butterfly'}]
  }},
  {id:360000, name:'Wanderer Hood', type:'armor', amount:0, locations:{
    'blighttown':[{type:'[Corpse]', where:'At the bottom of the \'village\', guarded by a Blowdart Sniper'}],
    'start':[{type:'', where:'Wanderer class'}]
  }},
  {id:361000, name:'Wanderer Coat', type:'armor', amount:0, locations:{
    'blighttown':[{type:'[Corpse]', where:'At the bottom of the \'village\', guarded by a Blowdart Sniper'}],
    'start':[{type:'', where:'Wanderer class'}]
  }},
  {id:362000, name:'Wanderer Manchette', type:'armor', amount:0, locations:{
    'blighttown':[{type:'[Corpse]', where:'At the bottom of the \'village\', guarded by a Blowdart Sniper'}],
    'start':[{type:'', where:'Wanderer class'}]
  }},
  {id:363000, name:'Wanderer Boots', type:'armor', amount:0, locations:{
    'blighttown':[{type:'[Corpse]', where:'At the bottom of the \'village\', guarded by a Blowdart Sniper'}],
    'start':[{type:'', where:'Wanderer class'}]
  }},
  {id:300000, name:'Thief Mask', type:'armor', amount:0, locations:{
    'undeadBurg':[{type:'[Corpse]', where:'Inside one of the house in Lower Undead Burg'}],
    'start':[{type:'', where:'Thief class'}]
  }},
  {id:301000, name:'Black Leather Armor', type:'armor', amount:0, locations:{
    'undeadBurg':[{type:'[Corpse]', where:'Inside one of the house in Lower Undead Burg'}],
    'start':[{type:'', where:'Thief class'}]
  }},
  {id:302000, name:'Black Leather Gloves', type:'armor', amount:0, locations:{
    'undeadBurg':[{type:'[Corpse]', where:'Inside one of the house in Lower Undead Burg'}],
    'start':[{type:'', where:'Thief class'}]
  }},
  {id:303000, name:'Black Leather Boots', type:'armor', amount:0, locations:{
    'undeadBurg':[{type:'[Corpse]', where:'Inside one of the house in Lower Undead Burg'}],
    'start':[{type:'', where:'Thief class'}]
  }},
  {id:50000, name:'Brigand Hood', type:'armor', amount:0, locations:{
    'valleyOfDrakes':[{type:'[Corpse]', where:'On the bridge with all the Blue Drake'}],
    'start':[{type:'', where:'Bandit class'}]
  }},
  {id:51000, name:'Brigand Armor', type:'armor', amount:0, locations:{
    'valleyOfDrakes':[{type:'[Corpse]', where:'On the bridge with all the Blue Drake'}],
    'start':[{type:'', where:'Bandit class'}]
  }},
  {id:52000, name:'Brigand Gauntlets', type:'armor', amount:0, locations:{
    'valleyOfDrakes':[{type:'[Corpse]', where:'On the bridge with all the Blue Drake'}],
    'start':[{type:'', where:'Bandit class'}]
  }},
  {id:53000, name:'Brigand Trousers', type:'armor', amount:0, locations:{
    'valleyOfDrakes':[{type:'[Corpse]', where:'On the bridge with all the Blue Drake'}],
    'start':[{type:'', where:'Bandit class'}]
  }},
  {id:241000, name:'Leather Armor', type:'armor', amount:0, locations:{
    'darkrootBasin':[{type:'[Corpse]', where:'Just after the Crystal Lizard'}],
    'start':[{type:'', where:'Hunter class'}]
  }},
  {id:242000, name:'Leather Gloves', type:'armor', amount:0, locations:{
    'darkrootBasin':[{type:'[Corpse]', where:'Just after the Crystal Lizard'}],
    'start':[{type:'', where:'Hunter class'}]
  }},
  {id:243000, name:'Leather Boots', type:'armor', amount:0, locations:{
    'darkrootBasin':[{type:'[Corpse]', where:'Just after the Crystal Lizard'}],
    'start':[{type:'', where:'Hunter class'}]
  }},
  {id:220000, name:'Sorcerer Hat', type:'armor', amount:0, locations:{
    'undeadBurg':[{type:'[Corpse]', where:'Just after the Crystal Lizard'}],
    'start':[{type:'', where:'Sorcerer class'}]
  }},
  {id:221000, name:'Sorcerer Cloak', type:'armor', amount:0, locations:{
    'undeadBurg':[{type:'[Corpse]', where:'Just next to where Griggs of Vinheim is held captive'}],
    'start':[{type:'', where:'Sorcerer class'}]
  }},
  {id:222000, name:'Sorcerer Gauntlets', type:'armor', amount:0, locations:{
    'undeadBurg':[{type:'[Corpse]', where:'Just next to where Griggs of Vinheim is held captive'}],
    'start':[{type:'', where:'Sorcerer class'}]
  }},
  {id:223000, name:'Sorcerer Boots', type:'armor', amount:0, locations:{
    'undeadBurg':[{type:'[Corpse]', where:'Just next to where Griggs of Vinheim is held captive'}],
    'start':[{type:'', where:'Sorcerer class'}]
  }},
  {id:640000, name:'Black Sorcerer Hat', type:'armor', amount:0, locations:{
    'senFortress':[{type:'[Corpse]', where:'On the second set of rolling boulder, jump midway to access a hidden area'}]
  }},
  {id:641000, name:'Black Sorcerer Cloak', type:'armor', amount:0, locations:{
    'senFortress':[{type:'[Corpse]', where:'On the second set of rolling boulder, jump midway to access a hidden area'}]
  }},
  {id:642000, name:'Black Sorcerer Gauntlets', type:'armor', amount:0, locations:{
    'senFortress':[{type:'[Corpse]', where:'On the second set of rolling boulder, jump midway to access a hidden area'}]
  }},
  {id:643000, name:'Black Sorcerer Boots', type:'armor', amount:0, locations:{
    'senFortress':[{type:'[Corpse]', where:'On the second set of rolling boulder, jump midway to access a hidden area'}]
  }},
  //  {id:370000, name:'Mage Smith Hat', type:'armor', amount:0, locations:{}},
  //  {id:371000, name:'Mage Smith Coat', type:'armor', amount:0, locations:{}},
  //  {id:372000, name:'Mage Smith Gauntlets', type:'armor', amount:0, locations:{}},
  //  {id:373000, name:'Mage Smith Boots', type:'armor', amount:0, locations:{}},
  {id:230000, name:'Tattered Cloth Hood', type:'armor', amount:0, locations:{
    'blighttown':[{type:'[Corpse]', where:'Left of the second bonfire, in the poison swamp'}],
    'start':[{type:'', where:'Pyromancer'}]
  }},
  {id:231000, name:'Tattered Cloth Robe', type:'armor', amount:0, locations:{
    'blighttown':[{type:'[Corpse]', where:'Left of the second bonfire, in the poison swamp'}],
    'start':[{type:'', where:'Pyromancer'}]
  }},
  {id:232000, name:'Tattered Cloth Manchette', type:'armor', amount:0, locations:{
    'blighttown':[{type:'[Corpse]', where:'Left of the second bonfire, in the poison swamp'}],
    'start':[{type:'', where:'Pyromancer'}]
  }},
  {id:233000, name:'Heavy Boots', type:'armor', amount:0, locations:{
    'blighttown':[{type:'[Corpse]', where:'Left of the second bonfire, in the poison swamp'}],
    'start':[{type:'', where:'Pyromancer'}]
  }},
  {id:310000, name:'Priest\'s Hat', type:'armor', amount:0, locations:{
    'theCatacombs':[{type:'[Corpse]', where:'In the Bonewheel zone, drop from above'}]
  }},
  {id:311000, name:'Holy Robe', type:'armor', amount:0, locations:{
    'theCatacombs':[{type:'[Corpse]', where:'In the Bonewheel zone, drop from above'}],
    'start':[{type:'', where:'Cleric class'}]
  }},
  {id:312000, name:'Traveling Gloves', type:'armor', amount:0, locations:{
    'theCatacombs':[{type:'[Corpse]', where:'In the Bonewheel zone, drop from above'}],
    'start':[{type:'', where:'Cleric class'}]
  }},
  {id:313000, name:'Holy Trousers', type:'armor', amount:0, locations:{
    'theCatacombs':[{type:'[Corpse]', where:'In the Bonewheel zone, drop from above'}],
    'start':[{type:'', where:'Cleric class'}]
  }},
  {id:180000, name:'Cleric Helm', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Patches'}]
  }},
  {id:181000, name:'Cleric Armor', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Patches'}]
  }},
  {id:182000, name:'Cleric Gauntlets', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Patches'}]
  }},
  {id:183000, name:'Cleric Leggings', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Patches'}]
  }},
  //  {id:650000, name:'Elite Cleric Helm', type:'armor', amount:0, locations:{}},
  //  {id:651000, name:'Elite Cleric Armor', type:'armor', amount:0, locations:{}},
  //  {id:652000, name:'Elite Cleric Gauntlets', type:'armor', amount:0, locations:{}},
  //  {id:653000, name:'Elite Cleric Leggings', type:'armor', amount:0, locations:{}},
  {id:160000, name:'Iron Helm', type:'armor', amount:0, locations:{
    'undeadParish':[{type:'[Drop]', where:'Solaire of Astora (100%)'}],
    'anorLondo':[{type:'[Drop]', where:'Solaire of Astora (100%)'}],
    'demonsRuins':[{type:'[Drop]', where:'Solaire of Astora (100%)'}],
    'lostIzalith':[{type:'[Drop]', where:'Solaire of Astora (100%)'}]
  }},
  {id:161000, name:'Armor of the Sun', type:'armor', amount:0, locations:{
    'undeadParish':[{type:'[Drop]', where:'Solaire of Astora (100%)'}],
    'anorLondo':[{type:'[Drop]', where:'Solaire of Astora (100%)'}],
    'demonsRuins':[{type:'[Drop]', where:'Solaire of Astora (100%)'}],
    'lostIzalith':[{type:'[Drop]', where:'Solaire of Astora (100%)'}]
  }},
  {id:162000, name:'Iron Bracelet', type:'armor', amount:0, locations:{
    'undeadParish':[{type:'[Drop]', where:'Solaire of Astora (100%)'}],
    'anorLondo':[{type:'[Drop]', where:'Solaire of Astora (100%)'}],
    'demonsRuins':[{type:'[Drop]', where:'Solaire of Astora (100%)'}],
    'lostIzalith':[{type:'[Drop]', where:'Solaire of Astora (100%)'}]
  }},
  {id:163000, name:'Iron Leggings', type:'armor', amount:0, locations:{
    'undeadParish':[{type:'[Drop]', where:'Solaire of Astora (100%)'}],
    'anorLondo':[{type:'[Drop]', where:'Solaire of Astora (100%)'}],
    'demonsRuins':[{type:'[Drop]', where:'Solaire of Astora (100%)'}],
    'lostIzalith':[{type:'[Drop]', where:'Solaire of Astora (100%)'}]
  }},
  {id:70000, name:'Black Iron Helm', type:'armor', amount:0, locations:{
    'anorLondo':[{type:'[Corpse]', where:'Bottom-Left of the painting room'}]
  }},
  {id:71000, name:'Black Iron Armor', type:'armor', amount:0, locations:{
    'anorLondo':[{type:'[Corpse]', where:'Bottom-Left of the painting room'}]
  }},
  {id:72000, name:'Black Iron Gauntlets', type:'armor', amount:0, locations:{
    'anorLondo':[{type:'[Corpse]', where:'Bottom-Left of the painting room'}]
  }},
  {id:73000, name:'Black Iron Leggings', type:'armor', amount:0, locations:{
    'anorLondo':[{type:'[Corpse]', where:'Bottom-Left of the painting room'}]
  }},
  {id:110000, name:'Helm of the Wise', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}],
    'depths':[{type:'[Buy]', where:'Domhnall of Zena'}]
  }},
  {id:111000, name:'Armor of the Glorious', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}],
    'depths':[{type:'[Buy]', where:'Domhnall of Zena'}]
  }},
  {id:112000, name:'Gauntlets of the Vanquisher', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}],
    'depths':[{type:'[Buy]', where:'Domhnall of Zena'}]
  }},
  {id:113000, name:'Boots of the Explorer', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}],
    'depths':[{type:'[Buy]', where:'Domhnall of Zena'}]
  }},
  {id:10000, name:'Catarina Helm', type:'armor', amount:0, locations:{
    'senFortress':[{type:'[Buy]', where:'Crestfallen Merchant'}]
  }},
  {id:11000, name:'Catarina Armor', type:'armor', amount:0, locations:{
    'senFortress':[{type:'[Buy]', where:'Crestfallen Merchant'}]
  }},
  {id:12000, name:'Catarina Gauntlets', type:'armor', amount:0, locations:{
    'senFortress':[{type:'[Buy]', where:'Crestfallen Merchant'}]
  }},
  {id:13000, name:'Catarina Leggings', type:'armor', amount:0, locations:{
    'senFortress':[{type:'[Buy]', where:'Crestfallen Merchant'}]
  }},
  {id:130000, name:'Crystalline Helm', type:'armor', amount:0, locations:{
    'theDukeArchives':[{type:'[Corpse]', where:'In the Duke\'s Garden, just before the Crystal Cave'}]
  }},
  {id:131000, name:'Crystalline Armor', type:'armor', amount:0, locations:{
    'theDukeArchives':[{type:'[Corpse]', where:'In the Duke\'s Garden, just before the Crystal Cave'}]
  }},
  {id:132000, name:'Crystalline Gauntlets', type:'armor', amount:0, locations:{
    'theDukeArchives':[{type:'[Corpse]', where:'In the Duke\'s Garden, just before the Crystal Cave'}]
  }},
  {id:133000, name:'Crystalline Leggings', type:'armor', amount:0, locations:{
    'theDukeArchives':[{type:'[Corpse]', where:'In the Duke\'s Garden, just before the Crystal Cave'}]
  }},
  {id:450000, name:'Brass Helm', type:'armor', amount:0, locations:{
    'anorLondo':[{type:'[Chest]', where:'Inside Lord Gwyn\'s Tomb, after beating Gwyndolin'}]
  }},
  {id:451000, name:'Brass Armor', type:'armor', amount:0, locations:{
    'anorLondo':[{type:'[Chest]', where:'Inside Lord Gwyn\'s Tomb, after beating Gwyndolin'}]
  }},
  {id:452000, name:'Brass Gauntlets', type:'armor', amount:0, locations:{
    'anorLondo':[{type:'[Chest]', where:'Inside Lord Gwyn\'s Tomb, after beating Gwyndolin'}]
  }},
  {id:453000, name:'Brass Leggings', type:'armor', amount:0, locations:{
    'anorLondo':[{type:'[Chest]', where:'Inside Lord Gwyn\'s Tomb, after beating Gwyndolin'}]
  }},
  {id:240000, name:'Pharis\'s Hat', type:'armor', amount:0, locations:{
    'darkrootGarden':[{type:'[Drop]', where:'Forest Hunter Archer (100%)'}]
  }},
  {id:380000, name:'Big Hat', type:'armor', amount:0, locations:{
    'theDukeArchives':[{type:'[Chest]', where:'Big Hat Logan (100%)'}]
  }},
  {id:381000, name:'Sage Robe', type:'armor', amount:0, locations:{
    'theDukeArchives':[{type:'[Drop]', where:'Big Hat Logan (100%)'}]
  }},
  {id:382000, name:'Traveling Gloves', type:'armor', amount:0, locations:{
    'theDukeArchives':[{type:'[Drop]', where:'Big Hat Logan (100%)'}]
  }},
  {id:383000, name:'Traveling Boots', type:'armor', amount:0, locations:{
    'theDukeArchives':[{type:'[Drop]', where:'Big Hat Logan (100%)'}]
  }},
  {id:140000, name:'Mask of the Sealer', type:'armor', amount:0, locations:{
    'blighttown':[{type:'[Corpse]', where:'Near the elevator close to the Valley of Drakes shortcut'}]
  }},
  {id:141000, name:'Crimson Robe', type:'armor', amount:0, locations:{
    'blighttown':[{type:'[Corpse]', where:'Near the elevator close to the Valley of Drakes shortcut'}]
  }},
  {id:142000, name:'Crimson Gloves', type:'armor', amount:0, locations:{
    'blighttown':[{type:'[Corpse]', where:'Near the elevator close to the Valley of Drakes shortcut'}]
  }},
  {id:143000, name:'Crimson Waistcloth', type:'armor', amount:0, locations:{
    'blighttown':[{type:'[Corpse]', where:'Near the elevator close to the Valley of Drakes shortcut'}]
  }},
  {id:340000, name:'Witch Hat', type:'armor', amount:0, locations:{
    'valleyOfDrakes':[{type:'[Corpse]', where:'At one end of the Valley after killing the Four Kings'}]
  }},
  {id:341000, name:'Witch Cloak', type:'armor', amount:0, locations:{
    'valleyOfDrakes':[{type:'[Corpse]', where:'At one end of the Valley after killing the Four Kings'}]
  }},
  {id:342000, name:'Witch Gloves', type:'armor', amount:0, locations:{
    'valleyOfDrakes':[{type:'[Corpse]', where:'At one end of the Valley after killing the Four Kings'}]
  }},
  {id:343000, name:'Witch Skirt', type:'armor', amount:0, locations:{
    'valleyOfDrakes':[{type:'[Corpse]', where:'At one end of the Valley after killing the Four Kings'}]
  }},
  {id:330000, name:'Crown of Dusk', type:'armor', amount:0, locations:{
    'darkrootBasin':[{type:'[Corpse]', where:'At the very end of the basin, even after Manus portal'}]
  }},
  {id:331000, name:'Antiquated Dress', type:'armor', amount:0, locations:{
    'darkrootBasin':[{type:'[Corpse]', where:'At the very end of the basin, even after Manus portal'}]
  }},
  {id:332000, name:'Antiquated Gloves', type:'armor', amount:0, locations:{
    'darkrootBasin':[{type:'[Corpse]', where:'At the very end of the basin, even after Manus portal'}]
  }},
  {id:333000, name:'Antiquated Skirt', type:'armor', amount:0, locations:{
    'darkrootBasin':[{type:'[Corpse]', where:'At the very end of the basin, even after Manus portal'}]
  }},
  {id:460000, name:'Gold-Hemmed Black Hood', type:'armor', amount:0, locations:{
    'demonsRuins':[{type:'[Corpse]', where:'On an altar facing the Ceaseless Discharge'}]
  }},
  {id:461000, name:'Gold-Hemmed Black Cloak', type:'armor', amount:0, locations:{
    'demonsRuins':[{type:'[Corpse]', where:'On an altar facing the Ceaseless Discharge'}]
  }},
  {id:462000, name:'Gold-Hemmed Black Gloves', type:'armor', amount:0, locations:{
    'demonsRuins':[{type:'[Corpse]', where:'On an altar facing the Ceaseless Discharge'}]
  }},
  {id:463000, name:'Gold-Hemmed Black Skirt', type:'armor', amount:0, locations:{
    'demonsRuins':[{type:'[Corpse]', where:'On an altar facing the Ceaseless Discharge'}]
  }},
  {id:150000, name:'Mask of Velka', type:'armor', amount:0, locations:{
    'paintedWorldOfAriamis':[{type:'[Corpse]', where:'On top of the Annex'}]
  }},
  {id:151000, name:'Black Cleric Robe', type:'armor', amount:0, locations:{
    'paintedWorldOfAriamis':[{type:'[Corpse]', where:'On top of the Annex'}]
  }},
  {id:152000, name:'Black Manchette', type:'armor', amount:0, locations:{
    'paintedWorldOfAriamis':[{type:'[Corpse]', where:'On top of the Annex'}]
  }},
  {id:153000, name:'Black Tights', type:'armor', amount:0, locations:{
    'paintedWorldOfAriamis':[{type:'[Corpse]', where:'On top of the Annex'}]
  }},
  {id:700000, name:'Snickering Top Hat', type:'armor', amount:0, locations:{
    'royalWood':[{type:'[Drop]', where:'Marvelous Chester'}]
  }},
  {id:701000, name:'Chester\'s Long Coat', type:'armor', amount:0, locations:{
    'royalWood':[{type:'[Drop]', where:'Marvelous Chester'}]
  }},
  {id:702000, name:'Chester\'s Gloves', type:'armor', amount:0, locations:{
    'royalWood':[{type:'[Drop]', where:'Marvelous Chester'}]
  }},
  {id:703000, name:'Chester\'s Trousers', type:'armor', amount:0, locations:{
    'royalWood':[{type:'[Drop]', where:'Marvelous Chester'}]
  }},
  {id:410000, name:'Maiden Hood', type:'armor', amount:0, locations:{
    'theDukeArchives':[{type:'[Corpse]', where:'In one of the cell, close to where you fight Reah'}]
  }},
  {id:411000, name:'Maiden Robe', type:'armor', amount:0, locations:{
    'theDukeArchives':[{type:'[Corpse]', where:'In one of the cell, close to where you fight Reah'}]
  }},
  {id:412000, name:'Maiden Gloves', type:'armor', amount:0, locations:{
    'theDukeArchives':[{type:'[Corpse]', where:'In one of the cell, close to where you fight Reah'}]
  }},
  {id:413000, name:'Maiden Skirt', type:'armor', amount:0, locations:{
    'theDukeArchives':[{type:'[Corpse]', where:'In one of the cell, close to where you fight Reah'}]
  }},
  {id:400000, name:'Dingy Hood', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Corpse]', where:'Near the firekeeper cell'}]
  }},
  {id:401000, name:'Dingy Robe', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Corpse]', where:'Near the firekeeper cell'}]
  }},
  {id:402000, name:'Dingy Gloves', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Corpse]', where:'Near the firekeeper cell'}]
  }},
  {id:403000, name:'Blood-Stained Skirt', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Corpse]', where:'Near the firekeeper cell'}]
  }},
  {id:280000, name:'Eastern Helm', type:'armor', amount:0, locations:{
    'darkrootGarden':[{type:'[Corpse]', where:'Behind Crest of Artorias\'s door, near a cliff'}]
  }},
  {id:281000, name:'Eastern Armor', type:'armor', amount:0, locations:{
    'darkrootGarden':[{type:'[Corpse]', where:'Behind Crest of Artorias\'s door, near a cliff'}]
  }},
  {id:282000, name:'Eastern Gauntlets', type:'armor', amount:0, locations:{
    'darkrootGarden':[{type:'[Corpse]', where:'Behind Crest of Artorias\'s door, near a cliff'}]
  }},
  {id:283000, name:'Eastern Leggings', type:'armor', amount:0, locations:{
    'darkrootGarden':[{type:'[Corpse]', where:'Behind Crest of Artorias\'s door, near a cliff'}]
  }},
  {id:60000, name:'Shadow Mask', type:'armor', amount:0, locations:{
    'blighttown':[{type:'[Corpse]', where:'Close the depths entrypoint'}]
  }},
  {id:61000, name:'Shadow Garb', type:'armor', amount:0, locations:{
    'blighttown':[{type:'[Corpse]', where:'Close the depths entrypoint'}]
  }},
  {id:62000, name:'Shadow Gauntlets', type:'armor', amount:0, locations:{
    'blighttown':[{type:'[Corpse]', where:'Close the depths entrypoint'}]
  }},
  {id:63000, name:'Shadow Leggings', type:'armor', amount:0, locations:{
    'blighttown':[{type:'[Corpse]', where:'Close the depths entrypoint'}]
  }},
  {id:520000, name:'Hollow Warrior Helm', type:'armor', amount:0, locations:{
    'undeadBurg':[{type:'[Drop]', where:'Hollow Warrior (1%)'}]
  }},
  {id:521000, name:'Hollow Warrior Armor', type:'armor', amount:0, locations:{
    'undeadBurg':[{type:'[Drop]', where:'Hollow Warrior (1%)'}]
  }},
  {id:523000, name:'Hollow Warrior Waistcloth', type:'armor', amount:0, locations:{
    'undeadBurg':[{type:'[Drop]', where:'Hollow Warrior (1%)'}]
  }},
  {id:480000, name:'Hollow Soldier Helm', type:'armor', amount:0, locations:{
    'undeadAsylum':[{type:'[Drop]', where:'Hollow Soldier (1%)'}],
    'undeadBurg':[{type:'[Drop]', where:'Hollow Soldier (1%)'}],
    'undeadParish':[{type:'[Drop]', where:'Hollow Soldier (1%)'}]
  }},
  {id:481000, name:'Hollow Soldier Armor', type:'armor', amount:0, locations:{
    'undeadAsylum':[{type:'[Drop]', where:'Hollow Soldier (1%)'}],
    'undeadBurg':[{type:'[Drop]', where:'Hollow Soldier (1%)'}],
    'undeadParish':[{type:'[Drop]', where:'Hollow Soldier (1%)'}]
  }},
  {id:483000, name:'Hollow Soldier Waistcloth', type:'armor', amount:0, locations:{
    'undeadAsylum':[{type:'[Drop]', where:'Hollow Soldier (1%)'}],
    'undeadBurg':[{type:'[Drop]', where:'Hollow Soldier (1%)'}],
    'undeadParish':[{type:'[Drop]', where:'Hollow Soldier (1%)'}]
  }},
  {id:510000, name:'Balder Helm', type:'armor', amount:0, locations:{
    'undeadParish':[{type:'[Drop]', where:'Balder Knight (1%)'}],
    'senFortress':[
      {type:'[Buy]', where:'Crestfallen Merchant'},
      {type:'[Drop]', where:'Balder Knight (1%)'}]
  }},
  {id:511000, name:'Balder Armor', type:'armor', amount:0, locations:{
    'undeadParish':[{type:'[Drop]', where:'Balder Knight (1%)'}],
    'senFortress':[
      {type:'[Buy]', where:'Crestfallen Merchant'},
      {type:'[Drop]', where:'Balder Knight (1%)'}]
  }},
  {id:512000, name:'Balder Gauntlets', type:'armor', amount:0, locations:{
    'undeadParish':[{type:'[Drop]', where:'Balder Knight (1%)'}],
    'senFortress':[
      {type:'[Buy]', where:'Crestfallen Merchant'},
      {type:'[Drop]', where:'Balder Knight (1%)'}]
  }},
  {id:513000, name:'Balder Leggings', type:'armor', amount:0, locations:{
    'undeadParish':[{type:'[Drop]', where:'Balder Knight (1%)'}],
    'senFortress':[
      {type:'[Buy]', where:'Crestfallen Merchant'},
      {type:'[Drop]', where:'Balder Knight (1%)'}]
  }},
  {id:490000, name:'Steel Helm', type:'armor', amount:0, locations:{
    'undeadParish':[{type:'[Drop]', where:'Berenike Knight (1%)'}],
    'senFortress':[
      {type:'[Buy]', where:'Crestfallen Merchant'},
      {type:'[Drop]', where:'Berenike Knight (1%)'}],
    'paintedWorldOfAriamis':[{type:'[Drop]', where:'Berenike Knight (1%)'}]
  }},
  {id:491000, name:'Steel Armor', type:'armor', amount:0, locations:{
    'undeadParish':[{type:'[Drop]', where:'Berenike Knight (1%)'}],
    'senFortress':[
      {type:'[Buy]', where:'Crestfallen Merchant'},
      {type:'[Drop]', where:'Berenike Knight (1%)'}],
    'paintedWorldOfAriamis':[{type:'[Drop]', where:'Berenike Knight (1%)'}]
  }},
  {id:492000, name:'Steel Gauntlets', type:'armor', amount:0, locations:{
    'undeadParish':[{type:'[Drop]', where:'Berenike Knight (1%)'}],
    'senFortress':[
      {type:'[Buy]', where:'Crestfallen Merchant'},
      {type:'[Drop]', where:'Berenike Knight (1%)'}],
    'paintedWorldOfAriamis':[{type:'[Drop]', where:'Berenike Knight (1%)'}]
  }},
  {id:493000, name:'Steel Leggings', type:'armor', amount:0, locations:{
    'undeadParish':[{type:'[Drop]', where:'Berenike Knight (1%)'}],
    'senFortress':[
      {type:'[Buy]', where:'Crestfallen Merchant'},
      {type:'[Drop]', where:'Berenike Knight (1%)'}],
    'paintedWorldOfAriamis':[{type:'[Drop]', where:'Berenike Knight (1%)'}]
  }},
  {id:500000, name:'Hollow Thief\'s Hood', type:'armor', amount:0, locations:{
    'undeadBurg':[{type:'[Drop]', where:'Hollow Thief (1%)'}]
  }},
  {id:501000, name:'Hollow Thief\'s Leather Armor', type:'armor', amount:0, locations:{
    'undeadBurg':[{type:'[Drop]', where:'Hollow Thief (1%)'}]
  }},
  {id:503000, name:'Hollow Thief\'s Tights', type:'armor', amount:0, locations:{
    'undeadBurg':[{type:'[Drop]', where:'Hollow Thief (1%)'}]
  }},
  {id:420000, name:'Silver Knight Helm', type:'armor', amount:0, locations:{
    'anorLondo':[{type:'[Chest]', where:'Guarded by two Silver Knight in the trophy room'}]
  }},
  {id:421000, name:'Silver Knight Armor', type:'armor', amount:0, locations:{
    'anorLondo':[{type:'[Chest]', where:'Guarded by two Silver Knight in the trophy room'}]
  }},
  {id:422000, name:'Silver Knight Gauntlets', type:'armor', amount:0, locations:{
    'anorLondo':[{type:'[Chest]', where:'Guarded by two Silver Knight in the trophy room'}]
  }},
  {id:423000, name:'Silver Knight Leggings', type:'armor', amount:0, locations:{
    'anorLondo':[{type:'[Chest]', where:'Guarded by two Silver Knight in the trophy room'}]
  }},
  {id:320000, name:'Black Knight Helm', type:'armor', amount:0, locations:{
    'kilnOfTheFirstFlame':[{type:'[Corpse]', where:'On the bridges to the right'}]
  }},
  {id:321000, name:'Black Knight Armor', type:'armor', amount:0, locations:{
    'kilnOfTheFirstFlame':[{type:'[Corpse]', where:'On the bridges to the right'}]
  }},
  {id:322000, name:'Black Knight Gauntlets', type:'armor', amount:0, locations:{
    'kilnOfTheFirstFlame':[{type:'[Corpse]', where:'On the bridges to the right'}]
  }},
  {id:323000, name:'Black Knight Leggings', type:'armor', amount:0, locations:{
    'kilnOfTheFirstFlame':[{type:'[Corpse]', where:'On the bridges to the right'}]
  }},
  {id:530000, name:'Giant Helm', type:'armor', amount:0, locations:{
    'anorLondo':[{type:'[Buy]', where:'Giant Blacksmith'}]
  }},
  {id:531000, name:'Giant Armor', type:'armor', amount:0, locations:{
    'anorLondo':[{type:'[Buy]', where:'Giant Blacksmith'}]
  }},
  {id:532000, name:'Giant Gauntlets', type:'armor', amount:0, locations:{
    'anorLondo':[{type:'[Buy]', where:'Giant Blacksmith'}]
  }},
  {id:533000, name:'Giant Leggings', type:'armor', amount:0, locations:{
    'anorLondo':[{type:'[Buy]', where:'Giant Blacksmith'}]
  }},
  {id:90000, name:'Six-Eyed Helm of the Channelers', type:'armor', amount:0, locations:{
    'theDukeArchives':[{type:'[Chest]', where:'Near the end of the Duke\'s Archives'}]
  }},
  {id:91000, name:'Robe of the Channelers', type:'armor', amount:0, locations:{
    'theDukeArchives':[{type:'[Chest]', where:'Near the end of the Duke\'s Archives'}]
  }},
  {id:92000, name:'Gauntlets of the Channelers', type:'armor', amount:0, locations:{
    'theDukeArchives':[{type:'[Chest]', where:'Near the end of the Duke\'s Archives'}]
  }},
  {id:93000, name:'Waistcloth of the Channelers', type:'armor', amount:0, locations:{
    'theDukeArchives':[{type:'[Chest]', where:'Near the end of the Duke\'s Archives'}]
  }},
  {id:250000, name:'Painting Guardian Hood', type:'armor', amount:0, locations:{
    'paintedWorldOfAriamis':[{type:'[Chest]', where:'In a room with two Snow Rats'}]
  }},
  {id:251000, name:'Painting Guardian Robe', type:'armor', amount:0, locations:{
    'paintedWorldOfAriamis':[{type:'[Chest]', where:'In a room with two Snow Rats'}]
  }},
  {id:252000, name:'Painting Guardian Gloves', type:'armor', amount:0, locations:{
    'paintedWorldOfAriamis':[{type:'[Chest]', where:'In a room with two Snow Rats'}]
  }},
  {id:253000, name:'Painting Guardian Waistcloth', type:'armor', amount:0, locations:{
    'paintedWorldOfAriamis':[{type:'[Chest]', where:'In a room with two Snow Rats'}]
  }},
  {id:620000, name:'Fang Boar Helm', type:'armor', amount:0, locations:{
    'undeadParish':[{type:'[Drop]', where:'Fang Boar (20%)'}],
    'theDukeArchives':[{type:'[Drop]', where:'Fang Boar (25%)'}]
  }},
  {id:630000, name:'Gargoyle Helm', type:'armor', amount:0, locations:{
    'undeadParish':[{type:'[Drop]', where:'Bell Gargoyles (3%)'}],
    'anorLondo':[{type:'[Drop]', where:'Gargoyle (3% -> 100% if last)'}]
  }},
  {id:470000, name:'Golem Helm', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}]
  }},
  {id:471000, name:'Golem Armor', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}]
  }},
  {id:472000, name:'Golem Gauntlets', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}]
  }},
  {id:473000, name:'Golem Leggings', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}]
  }},
  {id:80000, name:'Smough\'s Helm', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}]
  }},
  {id:81000, name:'Smough\'s Armor', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}]
  }},
  {id:82000, name:'Smough\'s Gauntlets', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}]
  }},
  {id:83000, name:'Smough\'s Leggings', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}]
  }},
  {id:270000, name:'Ornstein\'s Helm', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}]
  }},
  {id:271000, name:'Ornstein\'s Armor', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}]
  }},
  {id:272000, name:'Ornstein\'s Gauntlets', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}]
  }},
  {id:273000, name:'Ornstein\'s Leggings', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}]
  }},
  {id:660000, name:'Helm of Artorias', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}]
  }},
  {id:661000, name:'Armor of Artorias', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}]
  }},
  {id:662000, name:'Gauntlets of Artorias', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}]
  }},
  {id:663000, name:'Leggings of Artorias', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}]
  }},
  {id:680000, name:'Gough\'s Helm', type:'armor', amount:0, locations:{
    'oolacileTownship':[{type:'[Drop]', where:'Hawkeye Gough (100%)'}]
  }},
  {id:681000, name:'Gough\'s Armor', type:'armor', amount:0, locations:{
    'oolacileTownship':[{type:'[Drop]', where:'Hawkeye Gough (100%)'}]
  }},
  {id:682000, name:'Gough\'s Gauntlets', type:'armor', amount:0, locations:{
    'oolacileTownship':[{type:'[Drop]', where:'Hawkeye Gough (100%)'}]
  }},
  {id:683000, name:'Gough\'s Leggings', type:'armor', amount:0, locations:{
    'oolacileTownship':[{type:'[Drop]', where:'Hawkeye Gough (100%)'}]
  }},
  {id:670000, name:'Porcelain Mask', type:'armor', amount:0, locations:{
    'oolacileTownship':[{type:'[Drop]', where:'Lord\'s Blade Ciaran (100%)'}]
  }},
  {id:671000, name:'Lord\'s Blade Robe', type:'armor', amount:0, locations:{
    'oolacileTownship':[{type:'[Drop]', where:'Lord\'s Blade Ciaran (100%)'}]
  }},
  {id:672000, name:'Lord\'s Blade Gloves', type:'armor', amount:0, locations:{
    'oolacileTownship':[{type:'[Drop]', where:'Lord\'s Blade Ciaran (100%)'}]
  }},
  {id:673000, name:'Lord\'s Blade Waistcloth', type:'armor', amount:0, locations:{
    'oolacileTownship':[{type:'[Drop]', where:'Lord\'s Blade Ciaran (100%)'}]
  }},
  {id:540000, name:'Crown of the Dark Sun', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}]
  }},
  {id:541000, name:'Moonlight Robe', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}]
  }},
  {id:542000, name:'Moonlight Gloves', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}]
  }},
  {id:543000, name:'Moonlight Waistcloth', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}]
  }},
  {id:550000, name:'Crown of the Great Lord', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}]
  }},
  {id:551000, name:'Robe of the Great Lord', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}]
  }},
  {id:552000, name:'Bracelet of the Great Lord', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}]
  }},
  {id:553000, name:'Anklet of the Great Lord', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Domhnall of Zena'}]
  }},
  {id:40000, name:'Dark Mask', type:'armor', amount:0, locations:{
    'theAbyss':[{type:'[Covenant]', where:'Rank the Darkwraith covenant up to +2'}]
  }},
  {id:41000, name:'Dark Armor', type:'armor', amount:0, locations:{
    'theAbyss':[{type:'[Covenant]', where:'Rank the Darkwraith covenant up to +2'}]
  }},
  {id:42000, name:'Dark Gauntlets', type:'armor', amount:0, locations:{
    'theAbyss':[{type:'[Covenant]', where:'Rank the Darkwraith covenant up to +2'}]
  }},
  {id:43000, name:'Dark Leggings', type:'armor', amount:0, locations:{
    'theAbyss':[{type:'[Covenant]', where:'Rank the Darkwraith covenant up to +2'}]
  }},
  {id:200000, name:'Helm of Thorns', type:'armor', amount:0, locations:{
    'quelaagDomain':[{type:'[Corpse]', where:'After beating Kirk three times, near the Izalith\'s shortcut'}]
  }},
  {id:201000, name:'Armor of Thorns', type:'armor', amount:0, locations:{
    'quelaagDomain':[{type:'[Corpse]', where:'After beating Kirk three times, near the Izalith\'s shortcut'}]
  }},
  {id:202000, name:'Gauntlets of Thorns', type:'armor', amount:0, locations:{
    'quelaagDomain':[{type:'[Corpse]', where:'After beating Kirk three times, near the Izalith\'s shortcut'}]
  }},
  {id:203000, name:'Leggings of Thorns', type:'armor', amount:0, locations:{
    'quelaagDomain':[{type:'[Corpse]', where:'After beating Kirk three times, near the Izalith\'s shortcut'}]
  }},
  {id:100000, name:'Helm of Favor', type:'armor', amount:0, locations:{
    'anorLondo':[{type:'[Corpse]', where:'After beating Lautrec using the Black Eye Orb, in Gwynevere\'s room'}]
  }},
  {id:101000, name:'Embraced Armor of Favor', type:'armor', amount:0, locations:{
    'anorLondo':[{type:'[Corpse]', where:'After beating Lautrec using the Black Eye Orb, in Gwynevere\'s room'}]
  }},
  {id:102000, name:'Gauntlets of Favor', type:'armor', amount:0, locations:{
    'anorLondo':[{type:'[Corpse]', where:'After beating Lautrec using the Black Eye Orb, in Gwynevere\'s room'}]
  }},
  {id:103000, name:'Leggings of Favor', type:'armor', amount:0, locations:{
    'anorLondo':[{type:'[Corpse]', where:'After beating Lautrec using the Black Eye Orb, in Gwynevere\'s room'}]
  }},
  {id:20000, name:'Paladin Helm', type:'armor', amount:0, locations:{
    'tombOfTheGiants':[{type:'[Corpse]', where:'After beating Leeroy, inside Nito\'s grave'}]
  }},
  {id:21000, name:'Paladin Armor', type:'armor', amount:0, locations:{
    'tombOfTheGiants':[{type:'[Corpse]', where:'After beating Leeroy, inside Nito\'s grave'}]
  }},
  {id:22000, name:'Paladin Gauntlets', type:'armor', amount:0, locations:{
    'tombOfTheGiants':[{type:'[Corpse]', where:'After beating Leeroy, inside Nito\'s grave'}]
  }},
  {id:23000, name:'Paladin Leggings', type:'armor', amount:0, locations:{
    'tombOfTheGiants':[{type:'[Corpse]', where:'After beating Leeroy, inside Nito\'s grave'}]
  }},
  {id:120000, name:'Stone Helm', type:'armor', amount:0, locations:{
    'darkrootGarden':[{type:'[Chest]', where:'Under the bridge past Alvina'}]
  }},
  {id:121000, name:'Stone Armor', type:'armor', amount:0, locations:{
    'darkrootGarden':[{type:'[Chest]', where:'Under the bridge past Alvina'}]
  }},
  {id:122000, name:'Stone Gauntlets', type:'armor', amount:0, locations:{
    'darkrootGarden':[{type:'[Chest]', where:'Under the bridge past Alvina'}]
  }},
  {id:123000, name:'Stone Leggings', type:'armor', amount:0, locations:{
    'darkrootGarden':[{type:'[Chest]', where:'Under the bridge past Alvina'}]
  }},
  {id:690000, name:'Guardian Helm', type:'armor', amount:0, locations:{
    'royalWood':[{type:'[Corpse]', where:'Towards the edge of the map, west of Oolacile Sanctuary'}]
  }},
  {id:691000, name:'Guardian Armor', type:'armor', amount:0, locations:{
    'royalWood':[{type:'[Corpse]', where:'In the last part of the woods, where Guardian are patroling'}]
  }},
  {id:692000, name:'Guardian Gauntlets', type:'armor', amount:0, locations:{
    'royalWood':[{type:'[Corpse]', where:'In the first ruins you find, up the stairs'}]
  }},
  {id:693000, name:'Guardian Leggings', type:'armor', amount:0, locations:{
    'royalWood':[{type:'[Corpse]', where:'Just before the bridge where you meet Kalameet'}]
  }},
  {id:440000, name:'Havel\'s Helm', type:'armor', amount:0, locations:{
    'anorLondo':[{type:'[Chest]', where:'Behind an illusory wall in a fireplace'}]
  }},
  {id:441000, name:'Havel\'s Armor', type:'armor', amount:0, locations:{
    'anorLondo':[{type:'[Chest]', where:'Behind an illusory wall in a fireplace'}]
  }},
  {id:442000, name:'Havel\'s Gauntlets', type:'armor', amount:0, locations:{
    'anorLondo':[{type:'[Chest]', where:'Behind an illusory wall in a fireplace'}]
  }},
  {id:443000, name:'Havel\'s Leggings', type:'armor', amount:0, locations:{
    'anorLondo':[{type:'[Chest]', where:'Behind an illusory wall in a fireplace'}]
  }},
  {id:290000, name:'Xanthous Crown', type:'armor', amount:0, locations:{
    'paintedWorldOfAriamis':[{type:'[Corpse]', where:'After beating Xanthous, Behind Crossbreed Priscilla'}]
  }},
  {id:291000, name:'Xanthous Overcoat', type:'armor', amount:0, locations:{
    'paintedWorldOfAriamis':[{type:'[Corpse]', where:'After beating Xanthous, Behind Crossbreed Priscilla'}]
  }},
  {id:292000, name:'Xanthous Gloves', type:'armor', amount:0, locations:{
    'paintedWorldOfAriamis':[{type:'[Corpse]', where:'After beating Xanthous, Behind Crossbreed Priscilla'}]
  }},
  {id:293000, name:'Xanthous Waistcloth', type:'armor', amount:0, locations:{
    'paintedWorldOfAriamis':[{type:'[Corpse]', where:'After beating Xanthous, Behind Crossbreed Priscilla'}]
  }},
  {id:590000, name:'Mask of the Father', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Patches'}],
    'theCatacombs':[{type:'[Drop]', where:'Pinwheel (33%)'}],
    'tombOfTheGiants':[{type:'[Drop]', where:'Pinwheel Servant (2%)'}]
  }},
  {id:600000, name:'Mask of the Mother', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Patches'}],
    'theCatacombs':[{type:'[Drop]', where:'Pinwheel (33%)'}],
    'tombOfTheGiants':[{type:'[Drop]', where:'Pinwheel Servant (2%)'}]
  }},
  {id:610000, name:'Mask of the Child', type:'armor', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Patches'}],
    'theCatacombs':[{type:'[Drop]', where:'Pinwheel (34%)'}],
    'tombOfTheGiants':[{type:'[Drop]', where:'Pinwheel Servant (2%)'}]
  }},
  {id:580000, name:'Royal Helm', type:'armor', amount:0, locations:{
    'theCatacombs':[{type:'[Drop]', where:'Vamos (100%)'}]
  }},
  {id:560000, name:'Sack', type:'armor', amount:0, locations:{
    'theCatacombs':[{type:'[Drop]', where:'Butcher (10% -> 100% if last)'}]
  }},
  {id:190000, name:'Sunlight Maggot', type:'armor', amount:0, locations:{
    'demonsRuins':[
      {type:'[Drop]', where:'Red-Eyed Chaos Bug (100%)'},
      {type:'[Drop]', where:'Solaire of Astora (100%)'}]
  }},
  {id:570000, name:'Symbol of Avarice', type:'armor', amount:0, locations:{
    'senFortress':[{type:'[Drop]', where:'Mimic (0.1% -> 100% if last)'}],
    'anorLondo':[{type:'[Drop]', where:'Mimic (0.1% -> 100% if last)'}],
    'theDukeArchives':[{type:'[Drop]', where:'Mimic (0.1% -> 100% if last)'}]
  }},
  {id:710000, name:'Bloated Head', type:'armor', amount:0, locations:{
    'oolacileTownship':[{type:'[Drop]', where:'Bloathead (0.5%)'}]
  }},
  {id:720000, name:'Bloated Sorcerer Head', type:'armor', amount:0, locations:{
    'oolacileTownship':[{type:'[Drop]', where:'Bloathead Sorcerer (0.5%)'}]
  }},
  {id:111, name:'Tiny Being\'s Ring', type:'ring', amount:0, locations:{
    'anorLondo':[{type:'[Gift]', where:'Siegmeyer of Catarina'}],
    'start':[{type:'', where:'Starting gift'}]
  }},
  {id:104, name:'Cloranthy Ring', type:'ring', amount:0, locations:{
    'theGreatHollow':[{type:'[Corpse]', where:'Jump inside the tree'}]
  }},
  {id:100, name:'Havel\'s Ring', type:'ring', amount:0, locations:{
    'darkrootBasin':[{type:'[Drop]', where:'Havel the Rock (100%)'}]
  }},
  {id:120, name:'Ring of Steel Protection', type:'ring', amount:0, locations:{
    'senFortress':[{type:'[Chest]', where:'On top of the stairs where the first boulder drop'}]
  }},
  {id:107, name:'Spell Stoneplate Ring', type:'ring', amount:0, locations:{
    'senFortress':[{type:'[Buy]', where:'Crestfallen Merchant'}]
  }},
  {id:105, name:'Flame Stoneplate Ring', type:'ring', amount:0, locations:{
    'senFortress':[{type:'[Corpse]', where:'Outdoor after the two Balder Knight'}]
  }},
  {id:106, name:'Thunder Stoneplate Ring', type:'ring', amount:0, locations:{
    'senFortress':[{type:'[Buy]', where:'Crestfallen Merchant'}]
  }},
  {id:108, name:'Speckled Stoneplate Ring', type:'ring', amount:0, locations:{
    'senFortress':[{type:'[Corpse]', where:'Siegmeyer of Catarina'}],
    'lostIzalith':[{type:'[Gift]', where:'Siegmeyer of Catarina'}]
  }},
  {id:109, name:'Bloodbite Ring', type:'ring', amount:0, locations:{
    'undeadParish':[{type:'[Buy]', where:'Oswald of Carim'}]
  }},
  {id:110, name:'Poisonbite Ring', type:'ring', amount:0, locations:{
    'undeadParish':[{type:'[Buy]', where:'Oswald of Carim'}]
  }},
  {id:113, name:'Cursebite Ring', type:'ring', amount:0, locations:{
    'newLondoRuins':[{type:'[Corpse]', where:'Close to Ingward, guarded by a Ghost'}]
  }},
  {id:101, name:'Red Tearstone Ring', type:'ring', amount:0, locations:{
    'valleyOfDrakes':[{type:'[Corpse]', where:'Up the ladder where ther is 3 Blue Drakes'}]
  }},
  {id:147, name:'Blue Tearstone Ring', type:'ring', amount:0, locations:{
    'undeadBurg':[{type:'[Chest]', where:'Behind the Black Knight'}]
  }},
  {id:126, name:'Ring of Sacrifice', type:'ring', amount:0, locations:{
    'undeadAsylum':[{type:'[Snuggly]', where:'Trade with Humanity'}],
    'firelinkShrine':[{type:'[Corpse]', where:'Where Domhnall of Zena is Located, under the acqueduct'}],
    'undeadParish':[{type:'[Buy]', where:'Oswald of Carim'}]
  }},
  {id:127, name:'Rare Ring of Sacrifice', type:'ring', amount:0, locations:{
    'undeadAsylum':[{type:'[Snuggly]', where:'Trade with Twin Humanities'}],
    'senFortress':[{type:'[Corpse]', where:'Inside the tower guarded by Undead Prince Ricard'}],
    'newLondoRuins':[{type:'[Corpse]', where:'On Ingward\'s roof'}]
  }},
  {id:115, name:'Bellowing Dragoncrest Ring', type:'ring', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Griggs of Vinheim'}]
  }},
  {id:141, name:'Lingering Dragoncrest Ring', type:'ring', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Griggs of Vinheim'}]
  }},
  {id:123, name:'Slumbering Dragoncrest Ring', type:'ring', amount:0, locations:{
    'firelinkShrine':[{type:'[Buy]', where:'Griggs of Vinheim'}],
    'senFortress':[{type:'[Corpse]', where:'On the second set of rolling boulder, jump midway to access a hidden area'}]
  }},
  {id:116, name:'Dusk Crown Ring', type:'ring', amount:0, locations:{
    'darkrootBasin':[{type:'[Drop]', where:'Hydra (100%)'}]
  }},
  {id:114, name:'White Seance Ring', type:'ring', amount:0, locations:{
    'theDukeArchives':[{type:'[Corpse]', where:'From the exit of the prison, jump on the pathway'}]
  }},
  {id:149, name:'Darkmoon Seance Ring', type:'ring', amount:0, locations:{
    'theCatacombs':[{type:'[Corpse]', where:'Access a tomb by the breakable stone wall, then go to the end of the tomb'}]
  }},
  {id:148, name:'Ring of the Sun\'s Firstborn', type:'ring', amount:0, locations:{
    'anorLondo':[{type:'[Corpse]', where:'At Gwyndolin bonfire'}]
  }},
  {id:102, name:'Darkmoon Blade Covenant Ring', type:'ring', amount:0, locations:{
    'anorLondo':[{type:'[Covenant]', where:'Join the Blade of the Darkmoon covenant'}]
  }},
  {id:130, name:'Ring of the Sun Princess', type:'ring', amount:0, locations:{
    'anorLondo':[{type:'[Covenant]', where:'Join the Princess\'s Guard covenant'}]
  }},
  {id:144, name:'Leo Ring', type:'ring', amount:0, locations:{
    'anorLondo':[{type:'[Drop]', where:'Ornstein (100% if killed 2nd)'}]
  }},
  {id:146, name:'Wolf Ring', type:'ring', amount:0, locations:{
    'darkrootGarden':[{type:'[Corpse]', where:'At the end of the area where the Frog-Rays are'}]
  }},
  {id:119, name:'Hawk Ring', type:'ring', amount:0, locations:{
    'anorLondo':[{type:'[Chest]', where:'Just near the Giant Blacksmith'}]
  }},
  {id:117, name:'Hornet Ring', type:'ring', amount:0, locations:{
    'darkrootGarden':[{type:'[Corpse]', where:'On Artorias tomb, guarded by Sif'}]
  }},
  {id:145, name:'East Wood Grain Ring', type:'ring', amount:0, locations:{
    'blighttown':[{type:'[Buy]', where:'Shiva of the East'}]
  }},
  {id:128, name:'Dark Wood Grain Ring', type:'ring', amount:0, locations:{
    'darkrootGarden':[{type:'[Drop]', where:'Shiva\'s Bodyguard (100%)'}],
    'blighttown':[{type:'[Drop]', where:'Shiva\'s Bodyguard (100%)'}]
  }},
  {id:125, name:'Rusted Iron Ring', type:'ring', amount:0, locations:{
    'undeadAsylum':[{type:'[Corpse]', where:'Behind the door which open only with F2 West Key'}]
  }},
  {id:121, name:'Covetous Gold Serpent Ring', type:'ring', amount:0, locations:{
    'senFortress':[{type:'[Corpse]', where:'Down the boulder path, let it destroy the wall at the end of the road'}]
  }},
  {id:122, name:'Covetous Silver Serpent Ring', type:'ring', amount:0, locations:{
    'tombOfTheGiants':[{type:'[Corpse]', where:'Jump down from the corpse next to the Giant Skeleton Archer'}]
  }},
  {id:138, name:'Covenant of Artorias', type:'ring', amount:0, locations:{
    'darkrootGarden':[{type:'[Drop]', where:'Great Grey Wolf Sif (100%)'}]
  }},
  {id:139, name:'Orange Charred Ring', type:'ring', amount:0, locations:{
    'lostIzalith':[{type:'[Drop]', where:'Centipede Demon (100%)'}]
  }},
  {id:137, name:'Old Witch\'s Ring', type:'ring', amount:0, locations:{
    'undeadAsylum':[{type:'[Snuggly]', where:'Trade with Sunlight Maggot'}],
    'start':[{type:'', where:'Starting gift'}]
  }},
  {id:103, name:'Cat Covenant Ring', type:'ring', amount:0, locations:{
    'darkrootGarden':[{type:'[Covenant]', where:'Join the Forest Hunters covenant'}]
  }},
  {id:124, name:'Ring of Fog', type:'ring', amount:0, locations:{
    'undeadAsylum':[{type:'[Snuggly]', where:'Trade with Skull Lantern'}],
    'darkrootGarden':[{type:'[Covenant]', where:'Kill three invaders as a Forest Hunter'}]
  }},
  {id:143, name:'Ring of Favor and Protection', type:'ring', amount:0, locations:{
    'undeadAsylum':[{type:'[Snuggly]', where:'Trade with Xanthous Crown'}],
    'firelinkShrine':[{type:'[Drop]', where:'Lautrec of Carim (100%)'}],
    'undeadParish':[{type:'[Drop]', where:'Lautrec of Carim (100%)'}],
    'anorLondo':[{type:'[Drop]', where:'Lautrec of Carim (100%)'}]
  }},
  {id:142, name:'Ring of the Evil Eye', type:'ring', amount:0, locations:{
    'depths':[{type:'[Corpse]', where:'On the sewer with Basilisks'}]
  }},
  {id:150, name:'Calamity Ring', type:'ring', amount:0, locations:{
    'royalWood':[{type:'[Drop]', where:'Black Dragon Kalameet (100%)'}]
  }}
];
