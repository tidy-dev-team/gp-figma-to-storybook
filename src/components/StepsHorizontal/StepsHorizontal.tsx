import { useEffect, useState } from 'react';

// Design tokens (from DESIGN.md)
const t = {
  // Step states — token: step-done-background / step-now-background / step-next-background
  doneBg: '#00aecf',          // light-blue/600
  nowBg: '#97dcea',           // light-blue/400
  nowBorder: '#00aecf',       // light-blue/600 / accent-color
  nextBg: '#f1f3f5',          // step-next-background
  nextBorder: '#d0d5dd',      // gray/300 / step-next-border
  connectorColor: '#d0d5dd',  // gray/300 / step-next-border
  // Label colors — token: accent-color / table-cell-light-color
  labelNow: '#00aecf',        // accent-color (ThemeBlue)
  labelOther: '#667085',      // table-cell-light-color (gray/500)
  fontFamily: 'Rubik, sans-serif',
  fontSize: 14,
  lineHeight: '20px',
};

export type StepStatus = 'done' | 'now' | 'next';

export type Step = {
  label: string;
  status: StepStatus;
};

export type StepsHorizontalProps = {
  /** Ordered list of steps with their status */
  steps: Step[];
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
      <div style={{ ...base, backgroundColor: t.doneBg }}>
        <svg width="7" height="6" viewBox="0 0 7 6" fill="none">
          <path d="M1 3L2.8 5L6 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }

  if (status === 'now') {
    return (
      <div style={{ ...base, backgroundColor: t.nowBg, border: `2px solid ${t.nowBorder}` }}>
        <div style={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: t.nowBorder }} />
      </div>
    );
  }

  return (
    <div style={{ ...base, backgroundColor: t.nextBg, border: `2px solid ${t.nextBorder}` }}>
      <div style={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: t.nextBorder }} />
    </div>
  );
}

function getLabelStyle(status: StepStatus): React.CSSProperties {
  return {
    fontFamily: t.fontFamily,
    fontSize: t.fontSize,
    fontWeight: 400,
    lineHeight: t.lineHeight,
    color: status === 'now' ? t.labelNow : t.labelOther,
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
      {/* Row 1: Bullet + label for each step */}
      {items.map((step, i) => (
        <div
          key={`label-${i}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            gridRow: 1,
            gridColumn: i + 1,
          }}
        >
          <BulletIcon status={step.status} />
          <span style={getLabelStyle(step.status)}>{step.label}</span>
        </div>
      ))}

      {/* Row 2: Short vertical drop below each bullet */}
      {items.map((_, i) => (
        <div key={`vbar-${i}`} style={{ gridRow: 2, gridColumn: i + 1 }}>
          <div
            style={{
              width: 2,
              height: 7,
              backgroundColor: t.connectorColor,
              marginLeft: 5,
              borderRadius: '1px 1px 0 0',
            }}
          />
        </div>
      ))}

      {/* Row 3: Horizontal connector segments */}
      {items.map((_, i) => {
        const isFirst = i === 0;
        const isLast = i === n - 1;

        return (
          <div
            key={`hline-${i}`}
            style={{ gridRow: 3, gridColumn: i + 1, display: 'flex' }}
          >
            {isLast ? (
              // Terminal cap at end of last step
              <div style={{ width: 7, height: 2, backgroundColor: t.connectorColor }} />
            ) : isFirst ? (
              // First step: starts from bullet center (5px in)
              <div
                style={{ marginLeft: 5, flex: 1, height: 2, backgroundColor: t.connectorColor }}
              />
            ) : (
              // Middle steps: full width
              <div style={{ flex: 1, height: 2, backgroundColor: t.connectorColor }} />
            )}
          </div>
        );
      })}
    </div>
  );
}
