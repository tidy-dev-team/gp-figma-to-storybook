import { useState, useEffect } from 'react';
import { RadioButton, RadioButtonChangeEvent } from '@progress/kendo-react-inputs';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { DatePicker, DatePickerChangeEvent } from '@progress/kendo-react-dateinputs';
import { themeBlue, shared } from '../../theme/tokens';

export type FilterMode = 'savings' | 'benchmarking' | 'report';

export type FilterWithRadioProps = {
  /** Which filter row is currently active */
  activeFilter: FilterMode;
  /** Options for the category dropdown */
  categoryOptions: string[];
  /** Options for the supplier dropdown (visible in Benchmarking mode only) */
  supplierOptions: string[];
  /** Initial date shown in Report mode */
  defaultDate: Date;
};

export function FilterWithRadio({
  activeFilter,
  categoryOptions,
  supplierOptions,
  defaultDate,
}: FilterWithRadioProps) {
  const [mode, setMode] = useState<FilterMode>(activeFilter);
  const [category, setCategory] = useState<string>(categoryOptions[0]);
  const [supplier, setSupplier] = useState<string>(supplierOptions[0]);
  const [date, setDate] = useState<Date | null>(defaultDate);

  useEffect(() => { setMode(activeFilter); }, [activeFilter]);
  useEffect(() => { setCategory(categoryOptions[0]); }, [categoryOptions]);
  useEffect(() => { setSupplier(supplierOptions[0]); }, [supplierOptions]);
  useEffect(() => { setDate(defaultDate); }, [defaultDate]);

  const rowStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#e3e7ef',  // filter-row-background (ThemeBlue)
    borderRadius: shared.radiusLg,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 4,
    marginBottom: 4,
    minHeight: 38,
  };

  const labelStyle: React.CSSProperties = {
    width: 184,
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    fontFamily: shared.fontFamily,
    fontSize: shared.fontSizeXs,
    lineHeight: shared.lineHeight,
    color: themeBlue.mainColor,
  };

  const inputWrapStyle: React.CSSProperties = {
    minWidth: 130,
    flexShrink: 0,
  };

  const inlineLabelStyle: React.CSSProperties = {
    fontFamily: shared.fontFamily,
    fontSize: shared.fontSizeXs,
    color: themeBlue.mainColor,
    whiteSpace: 'nowrap',
    flexShrink: 0,
  };

  const dropdownStyle: React.CSSProperties = {
    fontSize: shared.fontSizeXs,
    fontFamily: shared.fontFamily,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: 'fit-content' }}>

      {/* Row 1 — Potential Savings Summary */}
      <div style={rowStyle}>
        <div style={labelStyle}>
          <RadioButton
            name="filter-mode"
            value="savings"
            checked={mode === 'savings'}
            onChange={(e: RadioButtonChangeEvent) => { if (e.value) setMode('savings'); }}
            label="Potential Savings Summary"
          />
        </div>
        {mode === 'savings' && (
          <div style={inputWrapStyle}>
            <DropDownList
              data={categoryOptions}
              value={category}
              onChange={(e: DropDownListChangeEvent) => setCategory(e.value)}
              style={dropdownStyle}
            />
          </div>
        )}
      </div>

      {/* Row 2 — Item Benchmarking */}
      <div style={rowStyle}>
        <div style={labelStyle}>
          <RadioButton
            name="filter-mode"
            value="benchmarking"
            checked={mode === 'benchmarking'}
            onChange={(e: RadioButtonChangeEvent) => { if (e.value) setMode('benchmarking'); }}
            label="Item Benchmarking"
          />
        </div>
        {mode === 'benchmarking' && (
          <>
            <div style={inputWrapStyle}>
              <DropDownList
                data={categoryOptions}
                value={category}
                onChange={(e: DropDownListChangeEvent) => setCategory(e.value)}
                style={dropdownStyle}
              />
            </div>
            <div style={inputWrapStyle}>
              <DropDownList
                data={supplierOptions}
                value={supplier}
                onChange={(e: DropDownListChangeEvent) => setSupplier(e.value)}
                style={dropdownStyle}
              />
            </div>
          </>
        )}
      </div>

      {/* Row 3 — Report */}
      <div style={rowStyle}>
        <div style={labelStyle}>
          <RadioButton
            name="filter-mode"
            value="report"
            checked={mode === 'report'}
            onChange={(e: RadioButtonChangeEvent) => { if (e.value) setMode('report'); }}
            label="Report"
          />
        </div>
        {mode === 'report' && (
          <>
            <div style={inputWrapStyle}>
              <DropDownList
                data={categoryOptions}
                value={category}
                onChange={(e: DropDownListChangeEvent) => setCategory(e.value)}
                style={dropdownStyle}
              />
            </div>
            <span style={inlineLabelStyle}>ending on</span>
            <div style={inputWrapStyle}>
              <DatePicker
                value={date}
                format="d.M.yyyy"
                onChange={(e: DatePickerChangeEvent) => setDate(e.value)}
                style={dropdownStyle}
              />
            </div>
          </>
        )}
      </div>

    </div>
  );
}
