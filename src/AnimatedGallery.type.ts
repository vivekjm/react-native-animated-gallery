import { ReactElement } from 'react';

export type animatedGalleryProps = {
    /**
     * Provides Data to the component
     */
    imageUrls: Array<any>;

    /**
     * Provides custom loader to component
     */
    renderLoader?: React.ReactElement | null;

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
     * Disable the fullscreen view of image
     */
    disablefullScreen?: boolean;

    /**
     * Set backgroundColor for the gallery
     */
    backgroundColor?: string;

    /**
     * Called when all rows have been rendered and the list has been scrolled
     * to within onEndReachedThreshold of the bottom.  The native scroll
     * event is provided.
     */

    onEndReached?: () => void;

    /**
   * Reverses the direction of scroll. Uses scale transforms of -1.
   */
    invertThumpDirection?: boolean | null;


    /**
   * Reverses the direction of scroll of gallery. Uses scale transforms of -1.
   */
    invertGalleryDirection?: boolean | null;


}