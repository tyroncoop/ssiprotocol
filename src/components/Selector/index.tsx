import { useEffect, useState } from 'react'
import Image from 'next/image'
import Select, { components } from 'react-select'
import styles from './styles.module.scss'
import upDown from '../../assets/up_down_arrow.svg'

function Selector({
    option,
    onChange,
    loading,
    defaultValue,
    placeholder,
    menuPlacement,
    searchable,
    type,
    isMulti,
}: {
    option: any
    onChange: any
    loading?: boolean
    defaultValue?: any
    placeholder?: string
    menuPlacement?: string
    searchable?: boolean
    type?: string
    isMulti?: boolean
}) {
    const primaryColor = '#FFFF32'
    const [option_, setOption_] = useState<any>(option)

    let menuPlacement_: any = 'bottom'
    if (menuPlacement) {
        menuPlacement_ = menuPlacement
    }

    let searchable_: any = true
    if (searchable !== undefined) {
        searchable_ = searchable
    }

    let isMulti_: any = false
    if (isMulti !== undefined) {
        isMulti_ = isMulti
    }

    const customStylesLang = {
        control: (provided, state) => ({
            ...provided,
            minHeight: '40px',
            height: '40px',
            boxShadow: state.isFocused ? null : null,
            fontSize: '11px',
            borderRadius: '5px',
        }),

        valueContainer: (provided, state) => ({
            ...provided,
            height: '40px',
            padding: '0 6px',
            textAlign: 'center',
        }),
        input: (provided, state) => ({
            ...provided,
            margin: '0px',
            color: '#fff',
        }),
        placeholder: (provided, state) => ({
            ...provided,
            color: '#fff',
        }),
        indicatorSeparator: (state) => ({
            display: 'none',
        }),
        indicatorsContainer: (provided, state) => ({
            ...provided,
            height: '40px',
        }),
        option: (provided, { isSelected }) => ({
            ...provided,
            color: isSelected ? '#000' : '#fff',
            fontSize: '10px',
        }),
    }

    const customStylesLangMobile = {
        control: (provided, state) => ({
            ...provided,
            minHeight: '20px',
            height: '20px',
            boxShadow: state.isFocused ? null : null,
            fontSize: '7px',
            borderRadius: '5px',
        }),
        valueContainer: (provided, state) => ({
            ...provided,
            height: '20px',
            padding: '0px',
            textAlign: 'center',
            marginTop: '-2px',
        }),
        input: (provided, state) => ({
            ...provided,
            margin: '0px',
        }),
        placeholder: (provided, state) => ({
            ...provided,
            color: '#fff',
        }),
        indicatorSeparator: (state) => ({
            display: 'none',
        }),
        indicatorsContainer: (provided, state) => ({
            ...provided,
            height: '20px',
            justifyContent: 'flex-end',
            width: '10px',
        }),
        dropdownIndicator: (provided, state) => ({
            ...provided,
            height: '20px',
            width: '20px',
            padding: '0px',
            paddingTop: '4px',
        }),
        indicatorSelect: (provided, state) => ({
            ...provided,
            height: '20px',
        }),
        option: (provided, { isSelected }) => ({
            ...provided,
            color: isSelected ? '#000' : '#fff',
            fontSize: '5px',
            height: '20px',
        }),
    }

    const DropdownIndicator = (props) => {
        return (
            <components.DropdownIndicator {...props}>
                <Image src={upDown} alt="arrow" />
            </components.DropdownIndicator>
        )
    }

    const DropdownIndicatorMobile = (props) => {
        return (
            <components.DropdownIndicator {...props}>
                <Image width={10} src={upDown} alt="arrow" />
            </components.DropdownIndicator>
        )
    }

    return (
        <>
            <div className={styles.langDesktop}>
                <Select
                    components={{ DropdownIndicator }}
                    menuPlacement={menuPlacement_}
                    styles={customStylesLang}
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        colors: {
                            ...theme.colors,
                            primary25: 'rgb(182, 182, 182)',
                            primary: primaryColor,
                            primary75: primaryColor,
                            neutral0: '#000',
                            neutral80: '#fff',
                        },
                    })}
                    className="basic-single"
                    classNamePrefix="select"
                    placeholder={placeholder}
                    isLoading={loading}
                    isClearable={false}
                    isSearchable={false}
                    options={option_}
                    onChange={(e: any) => onChange(e?.value ? e.value : '')}
                    value={
                        defaultValue !== undefined
                            ? {
                                  label: option_?.find(
                                      (v) => v.value === defaultValue
                                  )?.label,
                                  value: defaultValue,
                              }
                            : undefined
                    }
                />
            </div>
            <div className={styles.langMobile}>
                <Select
                    components={{
                        DropdownIndicator: DropdownIndicatorMobile,
                    }}
                    menuPlacement={menuPlacement_}
                    styles={customStylesLangMobile}
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        colors: {
                            ...theme.colors,
                            primary25: 'rgb(182, 182, 182)',
                            primary: primaryColor,
                            primary75: primaryColor,
                            neutral0: '#000',
                            neutral80: '#fff',
                        },
                    })}
                    className="basic-single"
                    classNamePrefix="select"
                    placeholder={placeholder}
                    isLoading={loading}
                    isClearable={false}
                    isSearchable={false}
                    options={option_}
                    onChange={(e: any) => onChange(e?.value ? e.value : '')}
                    value={
                        defaultValue !== undefined
                            ? {
                                  label: option_?.find(
                                      (v) => v.value === defaultValue
                                  )?.label,
                                  value: defaultValue,
                              }
                            : undefined
                    }
                />
            </div>
        </>
    )
}

export default Selector
