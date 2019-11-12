let main = document.querySelector('body');
let para01 = document.createElement('p');
let para02 = document.createElement('p');

para01.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor pellentesque ex, a semper mauris molestie in. Duis ultrices pretium tellus non aliquam. Nulla facilisi. Vivamus ut dolor ac eros blandit tempus eu at nisi. Integer vel lacinia nunc. Vivamus commodo dignissim aliquam. Donec ac neque varius, convallis urna vitae, mollis diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras dui eros, euismod commodo mollis id, posuere a ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In faucibus fringilla lectus vel dapibus. Nam ipsum velit, tempus finibus dictum id, tincidunt non nibh. Sed varius mauris nec ipsum placerat vulputate. Aenean nibh augue, sollicitudin vel magna sit amet, faucibus porttitor ipsum. Duis tristique turpis sed ligula vestibulum convallis.'

para02.textContent = 'Duis rhoncus elit in consequat placerat. Maecenas molestie tristique aliquet. Cras sem nibh, gravida ac finibus ac, fringilla eget erat. Integer congue ante nec velit vulputate fringilla. Aliquam vitae fermentum risus. Donec quam dolor, elementum at facilisis ultricies, scelerisque et nisl. Integer at urna quam. Donec quis eros efficitur elit pharetra convallis a nec lacus. Aliquam blandit, erat nec tristique cursus, arcu sem consequat sem, eu luctus mi felis nec lectus. Vivamus eu tristique augue, ac condimentum est. Phasellus nibh nulla, porttitor id eros at, ullamcorper dignissim ligula. Praesent vitae cursus nibh. Fusce non gravida elit, et varius orci.'

main.style.margin = '20px';
main.style.textAlign='justify';
main.style.backgroundColor='black';
main.style.color='grey';
para02.style.border='1px solid white';
para02.style.padding='10px';
para02.style.backgroundColor='grey';
para02.style.color='black';
para02.style.textAlign='left';
para02.style.width='50vw';

main.appendChild(para01);
main.appendChild(para02);

