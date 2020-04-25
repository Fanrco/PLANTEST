plantinfoarray=[];

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