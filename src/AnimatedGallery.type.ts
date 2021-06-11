import { ReactElement } from 'react';


export type animatedGalleryProps = {
    /**
     * Provides Data to the component
     */
    imageUrls: Array<any>;

    /**
    * Provides custom loader to component
    */
    renderLoader?: ReactElement;

    /**
     * Set the size of the thump nail to square proprtion.
     */

    imageSize?: number;

    /**
     * Set the sapcing between thump nail
     */
    spacing?: number;

    /**
    * Set the border width for thump nail
    */
    thumpBorderWidth?: number;


    /**
    * Set the border color for thump nail 
    */
    thumpBorderColor?: string;


    /**
    * Set the border color for thump nail 
    */
    disablefullScreen?: boolean;



};
