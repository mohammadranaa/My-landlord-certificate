import { cn } from "@/lib/utils";
import type { ElementType, HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  /** HTML element to render. Defaults to `div`. */
  as?: ElementType;
}

/**
 * Consistent page-width wrapper. Max 7xl, auto-centred, responsive padding.
 * @example
 *   <Container>
 *     <p>Content stays within brand max-width</p>
 *   </Container>
 */
export function Container({ as: Tag = "div", className, ...props }: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}
