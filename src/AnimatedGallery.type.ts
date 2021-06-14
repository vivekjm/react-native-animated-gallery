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
     * Set the size of the thumb nail to square proprtion.
     */

    imageSize?: number;

    /**
     * Set the sapcing between thumb nail
     */
    spacing?: number;

    /**
     * Set the border width for thumb nail
     */
    thumbBorderWidth?: number;

    /**
     * Set the border color for thumb nail
     */
    thumbBorderColor?: string;

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
    invertThumbDirection?: boolean | null;


    /**
   * Reverses the direction of scroll of gallery. Uses scale transforms of -1.
   */
    invertGalleryDirection?: boolean | null;


}