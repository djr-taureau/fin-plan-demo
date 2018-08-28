import { ngRouterLink } from '@lifeworks/common';

export type NavigationItems = Array<NavigationItem>;
export interface NavigationItem {
	display?: string;
	order: number;
	icon?: string;
	location?: ngRouterLink;
	children?: NavigationItem[];
	action?: string;
}
