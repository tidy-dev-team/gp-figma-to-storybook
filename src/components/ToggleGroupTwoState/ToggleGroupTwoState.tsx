import { useEffect, useState } from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { themeGray, primitives, shared } from '../../theme/tokens';

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

// Background applied to a wrapper div — KendoReact's flat button has
// background:transparent !important which overrides inline styles on the button itself.
function getWrapperStyle(
  side: ToggleGroupSelection,
  active: ToggleGroupSelection,
  variant: ToggleGroupVariant,
): React.CSSProperties {
  const isActive = active === side;
  if (isActive) {
    return {
      borderRadius: shared.radiusLg,
      backgroundColor: variant === 'main' ? themeGray.accentColor : primitives.white,
      boxShadow: shared.shadowSm,
      transition: 'background 0.15s, box-shadow 0.15s',
    };
  }
  return {
    borderRadius: shared.radiusLg,
    backgroundColor: 'transparent',
    transition: 'background 0.15s, box-shadow 0.15s',
  };
}

function getButtonStyle(
  side: ToggleGroupSelection,
  active: ToggleGroupSelection,
  variant: ToggleGroupVariant,
): React.CSSProperties {
  const isActive = active === side;
  return {
    minWidth: 70,
    padding: `${shared.radiusBase}px`,
    fontFamily: shared.fontFamily,
    fontSize: shared.fontSizeSm,
    lineHeight: shared.lineHeight,
    fontWeight: shared.fontWeightRegular,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    color: isActive
      ? (variant === 'main' ? themeGray.checkboxColorChecked : themeGray.mainColor)
      : (variant === 'main' ? themeGray.mainColor : themeGray.titleColor),
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
        backgroundColor: themeGray.buttonSecondaryFillBackground,
        padding: `${shared.radiusSm}px ${shared.radiusBase}px`,
        borderRadius: shared.radiusBase,
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
