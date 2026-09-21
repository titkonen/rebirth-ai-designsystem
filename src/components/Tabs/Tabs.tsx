import { Children, cloneElement, isValidElement, useState, type ButtonHTMLAttributes, type HTMLAttributes, type MouseEvent, type ReactNode } from "react";

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	defaultSelected?: number;
	onSelectedChange?: (index: number) => void;
}

export function Tabs({ children, defaultSelected, onSelectedChange, ...props }: TabsProps) {
	const tabChildren = Children.toArray(children);
	const initialSelected = defaultSelected ?? tabChildren.findIndex(child => isValidElement(child) && child.type === Tab && child.props.selected);
	const [selectedIndex, setSelectedIndex] = useState(initialSelected >= 0 ? initialSelected : 0);

	const renderedChildren = tabChildren.map((child, index) => {
		if (!isValidElement(child) || child.type !== Tab) return child;
		const childOnClick = child.props.onClick;
		return cloneElement(child, {
			selected: selectedIndex === index,
			onClick: (event: MouseEvent<HTMLButtonElement>) => {
				childOnClick?.(event);
				if (event.defaultPrevented) return;
				setSelectedIndex(index);
				onSelectedChange?.(index);
			},
		});
	});

	return <div className="rb-tabs" role="tablist" {...props}>{renderedChildren}</div>;
}

export interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> { selected?: boolean; }
export function Tab({ selected = false, className = "", ...props }: TabProps) { return <button className={`rb-tab ${className}`.trim()} role="tab" aria-selected={selected} tabIndex={selected ? 0 : -1} {...props} />; }
