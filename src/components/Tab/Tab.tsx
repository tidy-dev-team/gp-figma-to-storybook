import { useEffect, useState } from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { themeGray, shared } from '../../theme/tokens';

export type TabProps = {
  /** Tab label text */
  label: string;
  /** Whether this tab is active (selected) */
  active: boolean;
  /** Show the red status indicator dot */
  showIndicator: boolean;
  /** Called when the tab is clicked */
  onClick?: () => void;
};

const INDICATOR_COLOR = '#ff555f';
const INACTIVE_BORDER = '#e8e8e8';

export function Tab({ label, active, showIndicator, onClick }: TabProps) {
  const [isActive, setIsActive] = useState(active);
  const [hasIndicator, setHasIndicator] = useState(showIndicator);

  useEffect(() => { setIsActive(active); }, [active]);
  useEffect(() => { setHasIndicator(showIndicator); }, [showIndicator]);

  return (
    <div
      style={{
        width: 136,
        borderBottom: `2px solid ${isActive ? themeGray.accentColor : INACTIVE_BORDER}`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <Button
        fillMode="flat"
        onClick={() => { setIsActive(true); onClick?.(); }}
        style={{
          width: '100%',
          fontFamily: shared.fontFamily,
          fontSize: shared.fontSizeSm,
          fontWeight: isActive ? 500 : shared.fontWeightRegular,
          lineHeight: shared.lineHeight,
          color: isActive ? themeGray.accentColor : themeGray.mainColor,
          padding: '6px 8px',
        }}
      >
        {/* Inner flex span needed because KendoReact wraps all children in a single
            k-button-text span — gap/flex on the Button itself only affects that one wrapper,
            not the elements inside it. */}
        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
          {label}
          {hasIndicator && (
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: INDICATOR_COLOR,
                flexShrink: 0,
              }}
            />
          )}
        </span>
      </Button>
    </div>
  );
}
