import { Component, Prop, getAssetPath, h } from '@stencil/core';
// import { readFileSync } from 'fs';
// const file = readFileSync('./assets', 'utf-8')

@Component({
    tag: 'my-survey',
    styleUrl: 'mySurvey.css',
    shadow: true,
    assetsDirs: ['assets']
})
export class MySurvey {
    constructor(
    ) {
        this.imgClicked = this.imgClicked.bind(this);
        // 
      }
      dummyData = []
      imgClicked() {
        
    
          for(let i=1; i< 270; i++) {
            const data = `./assets/item_${i}.png`;
            this.dummyData[i]= data;
            console.log('fsft', this.dummyData);
        }
        console.log(this.dummyData);
        // const subcats = getAssetPath[`../assets`];
        // console.log('data ', subcats);
        // Promise.all(subcats.map((url)=> fetch (url))).then((response:any)=>{
        //     return Promise.all(response.map((res: Response)=> res.arrayBuffer())).then((buffers) => {
        //         return buffers;
        //     });
        // }).then((buffers: any)=> {
        //     return Promise.all(buffers.map((buffer: ArrayBuffer) => {
        //         return this.arrayBufferToBase64(buffer);
        //     }));
        // }).then((imagesAsBase64: any) => {
        
        //     // Do something with the base64 strings
        //     window.console.log(imagesAsBase64);
        
        // });
        const layerImages = getAssetPath['../assets'];
console.log('hsfs',layerImages);
Promise.all(layerImages.map((url) => fetch(url))).then((responses: any) => {

    return Promise.all(responses.map((res: Response) => res.arrayBuffer())).then((buffers) => {
        return buffers.map((buffer) => this.arrayBufferToBase64(buffer));
    });

}).then((imagesAsBase64: any) => {

    // Do something with the base64 strings
    window.console.log(imagesAsBase64);

});
       //console.log('sgf',file);
        //   const images = getAssetPath(`./assets/item_${data.category_code}.png`);
        
        // let SubImages = document.querySelectorAll('.img');
        // console.log('data ', SubImages);
        // const subCategoryPath = "new-url"

        // for (let i = 0; i < SubImages.length; i++){
        //   let icons: Record<string, any> = SubImages[i];
        //   icons.addEventListener('click', () => {
        //   icons.frag = subCategoryPath
        //   console.clear();
        //   console.log(icons);
        // })
    //   console.log('vjkfg',evt.currentTarget);
        //}

        //const fs = require('fs');
        // const dir = './www/build/assets';
      //  console.log('fs ', fs);
        // console.log('dir ', dir);
        
        // fs.readdir(dir, (err, files) => {
        //   console.log(files.length);
        // });

      }
      private arrayBufferToBase64(buffer: any) {
        let binary = "";
        const bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b: any) => binary += String.fromCharCode(b));
        // Inside of a web tab
        return window.btoa(binary);
    }
    @Prop() cats = [
        {
            category_code: 99990002,
            category_name: "Furniture"
        },
        {
            category_code: 99990003,
            category_name: "Large Appliances"
        },
        {
            category_code: 99990010,
            category_name: "Small Appliances"
        },
        {
            category_code: 99990009,
            category_name: "Kitchen Items"

        },
        {
            category_code: 99990015,
            category_name: "Smaller/Loose Items"
        },
        {
            category_code: 99990011,
            category_name: "Misc."

        },
        {
            category_code: 99990025,
            category_name: "IT Equipments"
        },
        {
            category_code: 99990048,
            category_name: "Bike"

        },
    ]
  

    render() {
        // for(let i=1; i< 270; i++) {
        //     const data = `./assets/item_${i}.png`;
        //     this.dummyData[i].img = data;
        //     console.log('fsft', this.dummyData);
        // }
        return (
            <div>
                <div class="my-survey-wrapper">
                    <div class="scanbtn">Survey</div>
                </div>
                <div class="main-container">
                {this.cats.map(data => {
                     const imgSrc = getAssetPath(`./assets/item_${data.category_code}.png`);
                    return (
                        <span class="imageDiv">
                            <img  src={imgSrc} onClick={this.imgClicked} class="img"/>
                            <span class="textSize">
                                {data.category_name}
                            </span>
                        </span>
                    )
                })}
                </div>
            </div>
        );
    }
}
