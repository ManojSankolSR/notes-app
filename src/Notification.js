import { Toaster, toast } from 'sonner';
import moment from 'moment';

// navigator.serviceWorker.register('./Notification.js');

export const Checkservice=()=>{
    if ('showTrigger' in Notification.prototype) {
        toast(`Notification Triggers supported ${ Notification.prototype}`);
        console.log(`Notification Triggers supported ${ Notification.prototype}`);
        
    }else{

        toast(`Notification Triggers are Not supported ${ Notification.prototype}`);
        console.log(`Notification Triggers are Not supported ${ Notification.prototype}`);

    }
      
}

export const ScheduleNotification = async (title,tag,timestamp) => {
    // Notification.requestPermission().then((result) => {
    //     if (result === "granted") {
    //       navigator.serviceWorker.ready.then((registration) => {
    //         registration.showNotification("Vibration Sample", {
    //           body: "Buzz! Buzz!",
    //           icon: "../images/touch/chrome-touch-icon-192x192.png",
    //           vibrate: [200, 100, 200, 100, 200, 100, 200],
    //           tag: "vibration-sample",
            
    //         });
    //       });
    //     }
    //   });
    const registration = await navigator.serviceWorker.getRegistration();
    console.log(registration.active);
    const date =moment();
   try {
    await Notification.requestPermission();
    await registration.showNotification(title, {
      tag: tag,
      body: title,
      timestamp: Date.parse(new Date().getTime() + 10 * 1000)

    //   showTrigger: new TimestampTrigger(new Date().getTime() + 10 * 1000)
});
    
   } catch (error) {
    console.log(error);
    
   }

  
}
