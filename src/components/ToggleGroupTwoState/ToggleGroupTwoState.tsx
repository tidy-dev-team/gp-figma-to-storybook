import { useEffect, useState } from 'react';
import { Button } from '@progress/kendo-react-buttons';

// Design tokens (from DESIGN.md)
const t = {
  containerBg: '#f2f6ff',       // token: button-secondary-fill-background
  containerRadius: 4,
  toggleRadius: 8,
  toggleMinWidth: 70,
  togglePaddingY: 4,
  togglePaddingX: 4,
  // Main variant — active
  mainActiveBg: '#00aecf',      // token: accent-color
  mainActiveText: '#ffffff',    // token: checkbox-color-checked
  // Sub variant — active
  subActiveBg: '#ffffff',       // token: basic-white
  subActiveText: '#15223f',     // token: main-color
  // Shared active shadow
  activeShadow: '0px 1px 4px 0px rgba(0,0,0,0.1)',
  // Inactive text
  mainInactiveText: '#15223f',  // token: main-color
  subInactiveText: '#475467',   // token: title-color / gray-600
  fontFamily: 'Rubik, sans-serif',
  fontSize: 14,
  lineHeight: '20px',
};

export type ToggleGroupVariant = 'main' | 'sub';
export type ToggleGroupSelection = 'left' | 'right';

export type ToggleGroupTwoStateProps = {
  /** Label for the left toggle */
  leftLabel: string;
  /** Label for the right toggle */
  rightLabel: string;
  /** Which side is currently selected */
  selected: ToggleGroupSelection;
  /** Main uses accent fill; Sub uses white fill */
  variant: ToggleGroupVariant;
  /** Called when the user clicks a toggle */
  onChange?: (value: ToggleGroupSelection) => void;
};

// Background/shadow applied to a wrapper div — KendoReact's flat button
// has background:transparent !important which beats inline styles on the button itself.
function getWrapperStyle(
  side: ToggleGroupSelection,
  active: ToggleGroupSelection,
  variant: ToggleGroupVariant,
): React.CSSProperties {
  const isActive = active === side;
  const base: React.CSSProperties = {
    borderRadius: t.toggleRadius,
    transition: 'background 0.15s, box-shadow 0.15s',
  };
  if (isActive) {
    return {
      ...base,
      backgroundColor: variant === 'main' ? t.mainActiveBg : t.subActiveBg,
      boxShadow: t.activeShadow,
    };
  }
  return { ...base, backgroundColor: 'transparent' };
}

function getButtonStyle(
  side: ToggleGroupSelection,
  active: ToggleGroupSelection,
  variant: ToggleGroupVariant,
): React.CSSProperties {
  const isActive = active === side;
  return {
    minWidth: t.toggleMinWidth,
    padding: `${t.togglePaddingY}px ${t.togglePaddingX}px`,
    fontFamily: t.fontFamily,
    fontSize: t.fontSize,
    lineHeight: t.lineHeight,
    fontWeight: 400,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    color: isActive
      ? (variant === 'main' ? t.mainActiveText : t.subActiveText)
      : (variant === 'main' ? t.mainInactiveText : t.subInactiveText),
    transition: 'color 0.15s',
  };
}

export function ToggleGroupTwoState({
  leftLabel,
  rightLabel,
  selected,
  variant,
  onChange,
}: ToggleGroupTwoStateProps) {
  const [active, setActive] = useState<ToggleGroupSelection>(selected);

  useEffect(() => { setActive(selected); }, [selected]);

  const handleSelect = (val: ToggleGroupSelection) => {
    setActive(val);
    onChange?.(val);
  };

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: t.containerBg,
        padding: '2px 4px',
        borderRadius: t.containerRadius,
        gap: 0,
      }}
    >
      {(['left', 'right'] as const).map((side) => (
        <div key={side} style={getWrapperStyle(side, active, variant)}>
          <Button
            fillMode="flat"
            style={getButtonStyle(side, active, variant)}
            onClick={() => handleSelect(side)}
          >
            {side === 'left' ? leftLabel : rightLabel}
          </Button>
        </div>
      ))}
    </div>
  );
}
