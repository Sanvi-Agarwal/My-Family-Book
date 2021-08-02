   var updatedImages = ["https://i.postimg.cc/DJbMp8Lt/Family-Book.jpg", "https://i.postimg.cc/zHZPs8k3/great-grandfather.jpg", "https://i.postimg.cc/Ff66xjdy/Grandparents.jpg", "https://i.postimg.cc/HV0fCcRm/Father.png", "https://i.postimg.cc/G4qV40bS/mother.jpg", "https://i.postimg.cc/QHZRPk6S/bro.jpg", "https://i.postimg.cc/SnyHQQbM/Me.jpg", "https://i.postimg.cc/kVGZ8j4M/whole-family.jpg"];
   var names = ["Family Book", "Great GrandFather", "GrandParents", "Father", "Mother", "Brother", "Me", "Family"];
   var i = 0;
   var numbers_of_family_photo_in_array = 6;

   function update() {
       i++;
       document.getElementById("family_photo").src = updatedImages[i];
       document.getElementById("family_name").innerHTML = names[i];
       if (i > numbers_of_family_photo_in_array) {
           i = 0;
       }
   }
