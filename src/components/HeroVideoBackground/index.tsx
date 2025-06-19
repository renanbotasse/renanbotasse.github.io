'use client';

import { StyledHeroVideo } from './styles';

export function HeroVideoBackground() {

    return (
        <StyledHeroVideo
            autoPlay
            muted
            loop
            playsInline
            src="/vecteezy_polygon-cyberpunk-sci-fi-background_1807028.mp4"
        />
    );
}
