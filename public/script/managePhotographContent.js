const gallery = document.getElementById('mediaGallery');
const photographerName = document.getElementById('photographerName');
const photographerDesc = document.getElementById('photographerDesc');
const photographerTags = document.getElementById('photographerTags');
const photographerProfilePhoto = document.getElementById('photographerProfilePhoto');
const photographerLikes = document.getElementById('photographerLikes');
const photographerPrice = document.getElementById('photographerPrice');
const selectOrder_roll = document.getElementById('selectedOrder');

const urlParams = new URLSearchParams(window.location.search);
const photographerID = urlParams.get('id');

let selectedOrder;
let modalMediaIndex = 0;

async function getAsync() 
{
  let response = await fetch(`https://kaemy.github.io/PerrigueyFanny_6_22012021//public/data/FishEyeData.json`);
  let data = await response.json()
  return data;
}