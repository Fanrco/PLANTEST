plantinfoarray=[];
plantradius=[];
plantbuy=[];
plantprice=[];

function populateInfo(){
    plantinfoarray["carrot"]="Carrots are a delicious staple of many gardens. They can be grown during moderate temperatures and can be very close together. You only need to give your carrots 2 inches of water a week.";
    
    plantinfoarray["broccoli"]="Broccoli grows best when started indoors then transplanted into outdoor gardens. Broccoli thrives under wet conditions and should be watered in small amounts frequently. Broccoli only needs a foot of space to grow.";

    plantinfoarray["cauliflower"]="Cauliflower is a versatile sun-loving plant typically planted in the spring. They require 1.5 inches of water per week and need 1.5 feet to healthily grow.";
    
    plantinfoarray["garlic"]="Garlic is grown in cloves around 6 inches apart. They are best grown in Fall or Winter and does not require a lot of water. Garlic needs 0.5 inches of water a week.";
    
    plantinfoarray["celery"]="Celery can be planted from seeds or from stalks, they grow anytime of year and love water! They need 1.5 inches of water weekly so they do not get extra stringy.";
    
    plantinfoarray["lettuce"]="Lettuce should be planted in a sunny spot during 40 degree Fahrenheit temperatures. It can be grown 6 inches from other plants. should be watered twice a week.";
    
    plantinfoarray["rosebush"]="Rose Bushes are great, sun-loving, easy plants for anyone to grow. They can be started from seeds but are typically bought from pots and should be planted in spring, summer, or fall. Roses should be 3 feet from other plants and should receive a lot of water infrequently (2 times a week)";
    
    plantinfoarray["snapdragon"]="Snapdragons are extremely easy to grow indoors and be transplanted into gardens! They are typically planted in late winter and only require about 6 inches of room to grow. They require very little water and should only be watered once a week.";
    
    plantinfoarray["beet"]="Beets are sun-loving plants that do not require a lot to grow. They are planted in early spring, only require 3 inches of space, and only need to be watered once a week.";
    
    plantinfoarray["daffodil"]="Daffodils are planted so the pointy part of the bulb is facing up. They are planted in the summer or fall so they can sprout in the spring. They can be planted in clumps but prefer 3 inches of space. They require an inch of water per week.";
    
    plantradius["carrot"]=6;
    
    plantradius["broccoli"]=12;

    plantradius["cauliflower"]=18;
    
    plantradius["garlic"]=6;
    
    plantradius["celery"]=6;
    
    plantradius["lettuce"]=6;
    
    plantradius["rosebush"]=36;
    
    plantradius["snapdragon"]=6;
    
    plantradius["beet"]=6;
    
    plantradius["daffodil"]=6;
    
    plantbuy["carrot"]='https://www.amazon.com/600-Tendersweet-Carrot-Seeds-SE03/dp/B083R6PMBG';
    
    plantbuy["broccoli"]='https://www.amazon.com/Broccoli-Calabrese-Heirloom-Seeds-Non/dp/B00OIBQRYA';

    plantbuy["cauliflower"]='https://www.amazon.com/LEANO-Cauliflower-Delicious-Vegetable-Heirloom/dp/B086RZMM4Z';
    
    plantbuy["garlic"]='https://www.amazon.com/CANHOT-Seeds-100pcs-Organic-Vegetable/dp/B07Y7YFV87';
    
    plantbuy["celery"]='https://www.amazon.com/Gardening-Graveolens-Eatable-Balcony-Vegetable/dp/B086C6ZYXQ';
    
    plantbuy["lettuce"]='https://www.amazon.com/OldLadyRenee-500-Lettuce-Buttercrunch-Seeds/dp/B06XJNCLP';
    
    plantbuy["rosebush"]='https://www.amazon.com/Mustard-Ketchup-Rose-Bush-Seeds/dp/B07KVXKWBD';
    
    plantbuy["snapdragon"]='https://www.amazon.com/2000-Giant-Tetra-Snapdragon-Seeds/dp/B00L4HKBXE';
    
    plantbuy["beet"]='https://www.amazon.com/Detroit-Dark-Red-Beet-Seeds/dp/B009ZKW7N4';
    
    plantbuy["daffodil"]='https://www.amazon.com/Caiuet-Daffodils-Seeds-Multicolored-Garden/dp/B07SQ64NYW';
    
    plantprice["carrot"]=3;
    
    plantprice["broccoli"]=3;

    plantprice["cauliflower"]=3.5;
    
    plantprice["garlic"]=3;
    
    plantprice["celery"]=1;
    
    plantprice["lettuce"]=3;
    
    plantprice["rosebush"]=5;
    
    plantprice["snapdragon"]=2.5;
    
    plantprice["beet"]=5.5;
    
    plantprice["daffodil"]=3;
    
}

function selectCarrot(){
    selplant="carrot";
    document.getElementById("infotext").innerHTML="Carrots are a delicious staple of many gardens. They can be grown during moderate temperatures and can be very close together. You only need to give your carrots 2 inches of water a week."
}

function selectBroccoli(){
    selplant="broccoli";
    document.getElementById("infotext").innerHTML="Broccoli grows best when started indoors then transplanted into outdoor gardens. Broccoli thrives under wet conditions and should be watered in small amounts frequently. Broccoli only needs a foot of space to grow."
}

function selectCauliflower(){
    selplant="cauliflower";
    document.getElementById("infotext").innerHTML="Cauliflower is a versatile sun-loving plant typically planted in the spring. They require 1.5 inches of water per week and need 1.5 feet to healthily grow."
}

function selectGarlic(){
    selplant="garlic";
    document.getElementById("infotext").innerHTML="Garlic is grown in cloves around 6 inches apart. They are best grown in Fall or Winter and does not require a lot of water. Garlic needs 0.5 inches of water a week."
}

function selectCelery(){
    selplant="celery";
    document.getElementById("infotext").innerHTML="Celery can be planted from seeds or from stalks, they grow anytime of year and love water! They need 1.5 inches of water weekly so they do not get extra stringy."
}

function selectLettuce(){
    selplant="lettuce";
    document.getElementById("infotext").innerHTML="Lettuce should be planted in a sunny spot during 40 degree Fahrenheit temperatures. It can be grown 6 inches from other plants. should be watered twice a week."
}

function selectRosebush(){
    selplant="rosebush";
    document.getElementById("infotext").innerHTML="Rose Bushes are great, sun-loving, easy plants for anyone to grow. They can be started from seeds but are typically bought from pots and should be planted in spring, summer, or fall. Roses should be 3 feet from other plants and should receive a lot of water infrequently (2 times a week)"
}

function selectBeet(){
    selplant="beet";
    document.getElementById("infotext").innerHTML="Beets are sun-loving plants that do not require a lot to grow. They are planted in early spring, only require 3 inches of space, and only need to be watered once a week."
}

function selectSnapdragon(){
    selplant="snapdragon";
    document.getElementById("infotext").innerHTML="Snapdragons are extremely easy to grow indoors and be transplanted into gardens! They are typically planted in late winter and only require about 6 inches of room to grow. They require very little water and should only be watered once a week."
}

function selectDaffodil(){
    selplant="daffodil";
    document.getElementById("infotext").innerHTML="Daffodils are planted so the pointy part of the bulb is facing up. They are planted in the summer or fall so they can sprout in the spring. They can be planted in clumps but prefer 3 inches of space. They require an inch of water per week."
}