import {RefObject, useEffect, useState} from 'react';

function useMouseHover(ref: RefObject<HTMLElement>) {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    useEffect(() => {
        const node = ref.current;
        if (node) {
            node.addEventListener('mouseenter', handleMouseEnter);
            node.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                node.removeEventListener('mouseenter', handleMouseEnter);
                node.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, [ref]);

    return isHovering;
}

export default useMouseHover;
