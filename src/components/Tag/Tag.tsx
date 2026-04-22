import { useEffect, useState } from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { SvgIcon } from '@progress/kendo-react-common';
import { xIcon } from '@progress/kendo-svg-icons';
import { shared } from '../../theme/tokens';

export type TagColor = 'red' | 'orange' | 'purple' | 'blue' | 'green';
export type TagVariant = 'subtle' | 'colored';
export type TagShape = 'square' | 'rounded';
export type TagSize = 'md' | 'sm' | 'xs';

export type TagProps = {
  /** Tag label */
  label: string;
  /** Semantic color of the tag */
  color?: TagColor;
  /** subtle = gray bg/border; colored = tinted bg + color border */
  variant?: TagVariant;
  /** square = 8px radius; rounded = 24px radius */
  shape?: TagShape;
  /** md / sm / xs */
  size?: TagSize;
  /** Show red status dot on the left */
  showDot?: boolean;
  /** Show secondary info text to the right of the label */
  showInfo?: boolean;
  /** Text shown when showInfo is true */
  infoText?: string;
  /** Show a delete × icon on the right */
  showDelete?: boolean;
  /** Called when the delete icon is clicked */
  onDelete?: () => void;
};

const DOT_COLOR = '#ff555f';

const INFO_COLOR = '#15223f';

type ColorTokens = {
  text: string;
  subtleBg: string;
  subtleBorder: string;
  coloredBg: string;
  coloredBorder: string;
};

const COLOR_MAP: Record<TagColor, ColorTokens> = {
  red:    { text: '#f9343f', subtleBg: '#f9fafb', subtleBorder: '#eaecf0', coloredBg: '#ffebec', coloredBorder: '#f9343f' },
  orange: { text: '#f79009', subtleBg: '#f9fafb', subtleBorder: '#eaecf0', coloredBg: '#fff9eb', coloredBorder: '#f79009' },
  purple: { text: '#7a5af8', subtleBg: '#f9fafb', subtleBorder: '#eaecf0', coloredBg: '#ebe9fe', coloredBorder: '#7a5af8' },
  blue:   { text: '#1190a8', subtleBg: '#f9fafb', subtleBorder: '#eaecf0', coloredBg: '#e3fbfe', coloredBorder: '#1190a8' },
  green:  { text: '#16b364', subtleBg: '#f9fafb', subtleBorder: '#eaecf0', coloredBg: '#edfcf2', coloredBorder: '#16b364' },
};

const SIZE_MAP: Record<TagSize, { fontSize: number; lineHeight: string; paddingY: number }> = {
  xs: { fontSize: 12, lineHeight: '18px', paddingY: 2 },
  sm: { fontSize: 14, lineHeight: '20px', paddingY: 2 },
  md: { fontSize: 14, lineHeight: '20px', paddingY: 6 },
};

export function Tag({
  label,
  color = 'red',
  variant = 'subtle',
  shape = 'square',
  size = 'md',
  showDot = false,
  showInfo = false,
  infoText = 'info',
  showDelete = false,
  onDelete,
}: TagProps) {
  const [lbl, setLbl] = useState(label);
  const [clr, setClr] = useState(color);
  const [vrnt, setVrnt] = useState(variant);
  const [shp, setShp] = useState(shape);
  const [sz, setSz] = useState(size);
  const [hasDot, setHasDot] = useState(showDot);
  const [hasInfo, setHasInfo] = useState(showInfo);
  const [info, setInfo] = useState(infoText);
  const [hasDelete, setHasDelete] = useState(showDelete);

  useEffect(() => { setLbl(label); }, [label]);
  useEffect(() => { setClr(color); }, [color]);
  useEffect(() => { setVrnt(variant); }, [variant]);
  useEffect(() => { setShp(shape); }, [shape]);
  useEffect(() => { setSz(size); }, [size]);
  useEffect(() => { setHasDot(showDot); }, [showDot]);
  useEffect(() => { setHasInfo(showInfo); }, [showInfo]);
  useEffect(() => { setInfo(infoText); }, [infoText]);
  useEffect(() => { setHasDelete(showDelete); }, [showDelete]);

  const tokens = COLOR_MAP[clr];
  const sizing = SIZE_MAP[sz];
  const bg = vrnt === 'subtle' ? tokens.subtleBg : tokens.coloredBg;
  const border = vrnt === 'subtle' ? tokens.subtleBorder : tokens.coloredBorder;
  const radius = shp === 'rounded' ? 24 : 8;

  const textStyle: React.CSSProperties = {
    fontFamily: shared.fontFamily,
    fontSize: sizing.fontSize,
    fontWeight: shared.fontWeightRegular,
    lineHeight: sizing.lineHeight,
    whiteSpace: 'nowrap',
  };

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        backgroundColor: bg,
        border: `1px solid ${border}`,
        borderRadius: radius,
        paddingTop: sizing.paddingY,
        paddingBottom: sizing.paddingY,
        paddingLeft: 10,
        paddingRight: hasDelete ? 4 : 10,
      }}
    >
      {hasDot && (
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: DOT_COLOR,
            flexShrink: 0,
          }}
        />
      )}
      <span style={{ ...textStyle, color: tokens.text }}>{lbl}</span>
      {hasInfo && (
        <span style={{ ...textStyle, color: INFO_COLOR }}>{info}</span>
      )}
      {hasDelete && (
        <Button
          fillMode="flat"
          onClick={onDelete}
          style={{
            padding: 0,
            minWidth: 16,
            width: 16,
            height: 16,
            color: tokens.text,
            flexShrink: 0,
          }}
        >
          <SvgIcon icon={xIcon} size="xsmall" />
        </Button>
      )}
    </div>
  );
}
