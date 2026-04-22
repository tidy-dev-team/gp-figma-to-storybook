import { useEffect, useState } from 'react';
import { themeBlue, primitives, shared } from '../../theme/tokens';

export type StepStatus = 'done' | 'now' | 'next';

export type Step = {
  label: string;
  status: StepStatus;
};

export type StepsHorizontalProps = {
  /** Ordered list of steps with their status */
  steps: Step[];
};

const s = {
  doneBg:         themeBlue.accentColor,       // active step done fill
  nowBg:          primitives.lightBlue400,     // active step now fill
  nowBorder:      themeBlue.accentColor,       // active step now border
  nextBg:         primitives.gray100,          // inactive step fill
  nextBorder:     primitives.gray300,          // inactive step border
  connectorColor: primitives.gray300,          // connector line
  labelNow:       themeBlue.accentColor,       // active step label
  labelOther:     themeBlue.iconButtonColor,   // inactive step label
};

function BulletIcon({ status }: { status: StepStatus }) {
  const base: React.CSSProperties = {
    width: 12,
    height: 12,
    borderRadius: '50%',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
  };

  if (status === 'done') {
    return (
      <div style={{ ...base, backgroundColor: s.doneBg }}>
        <svg width="7" height="6" viewBox="0 0 7 6" fill="none">
          <path d="M1 3L2.8 5L6 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }

  if (status === 'now') {
    return (
      <div style={{ ...base, backgroundColor: s.nowBg, border: `2px solid ${s.nowBorder}` }}>
        <div style={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: s.nowBorder }} />
      </div>
    );
  }

  return (
    <div style={{ ...base, backgroundColor: s.nextBg, border: `2px solid ${s.nextBorder}` }}>
      <div style={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: s.nextBorder }} />
    </div>
  );
}

function getLabelStyle(status: StepStatus): React.CSSProperties {
  return {
    fontFamily: shared.fontFamily,
    fontSize: shared.fontSizeSm,
    fontWeight: shared.fontWeightRegular,
    lineHeight: shared.lineHeight,
    color: status === 'now' ? s.labelNow : s.labelOther,
    whiteSpace: 'nowrap',
  };
}

export function StepsHorizontal({ steps }: StepsHorizontalProps) {
  const [items, setItems] = useState<Step[]>(steps);
  useEffect(() => { setItems(steps); }, [steps]);

  const n = items.length;

  return (
    <div
      style={{
        display: 'inline-grid',
        gridTemplateColumns: `repeat(${n}, minmax(120px, auto))`,
        gridTemplateRows: 'auto 7px auto',
      }}
    >
      {items.map((step, i) => (
        <div
          key={`label-${i}`}
          style={{ display: 'flex', alignItems: 'center', gap: 5, gridRow: 1, gridColumn: i + 1 }}
        >
          <BulletIcon status={step.status} />
          <span style={getLabelStyle(step.status)}>{step.label}</span>
        </div>
      ))}

      {items.map((_, i) => (
        <div key={`vbar-${i}`} style={{ gridRow: 2, gridColumn: i + 1 }}>
          <div style={{ width: 2, height: 7, backgroundColor: s.connectorColor, marginLeft: 5, borderRadius: '1px 1px 0 0' }} />
        </div>
      ))}

      {items.map((_, i) => {
        const isFirst = i === 0;
        const isLast = i === n - 1;
        return (
          <div key={`hline-${i}`} style={{ gridRow: 3, gridColumn: i + 1, display: 'flex' }}>
            {isLast ? (
              <div style={{ width: 7, height: 2, backgroundColor: s.connectorColor }} />
            ) : isFirst ? (
              <div style={{ marginLeft: 5, flex: 1, height: 2, backgroundColor: s.connectorColor }} />
            ) : (
              <div style={{ flex: 1, height: 2, backgroundColor: s.connectorColor }} />
            )}
          </div>
        );
      })}
    </div>
  );
}
