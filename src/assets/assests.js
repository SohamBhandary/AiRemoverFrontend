import logo from "./logo.png";
import video_banner from './home-page-banner.mp4'
import people from "./people.png"
import people_org from "./people_org.png"

export const assets={
    logo,
    video_banner,
    people,
    people_org
}

 export const steps = [
    {
        step: "Step1",
        title: "Select an image",
        description:  ` First, choose the image you want to remove background from by clicking on "Start from a photo". Your image format can be PNG or JPG. We support all image dimensions.`        
        
    },
    {
        step: "Step2",
        title: "Let magic remove the background",
        description: `Our tool automatically removes the background from your image. Next, you can choose a background color. Our most popular options are white and transparent backgrounds, but you can pick any color you like.`
    },

    {
        step: "Step3",
        title: "Download you image",
        description: `After selecting a new background color, download you photo and you're done! You can also save you picture in the Photoroom App by creating an account`
    }
];

export const categories =["People","Product","Animals","Cars","Graphics"]
export const plans = [
    {
        id: "Basic",
        name: "Basic Package",
        price: "499",
        credits: "100 Credits",
        description: "Best for personal use",
        popular: false
    },

    {
        id: "Premium",
        name: "Premium Package",
        price: 899,
        credits: "250 Credits",
        description: "Best for business use",
        popular: true
    }, 

    {
        id: "Ultimate",
        name: "Ultimate Package",
        price: 1499,
        credits: "1000 Credits",
        description: "Best for enterprise use",
        popular: false
    }
];