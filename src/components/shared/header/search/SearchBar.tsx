import { colors } from '@/styles/colorPalette'
import styled from '@emotion/styled'
import Icon from '../../icon'
import { fonts } from '@/styles/fonts'
import { useEffect, useRef, useState } from 'react'

function SearchBar() {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName
      const isEditable =
        tag === 'INPUT' || tag === 'TEXTAREA' || (e.target as HTMLElement)?.isContentEditable

      if (isEditable) return

      if (e.key === '/') {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <SearchBarContainer>
      <Icon name="IcSearch" />
      <SearchInput
        placeholder="Search tokens"
        ref={inputRef}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            inputRef.current?.blur()
          }
        }}
      />
      {!isFocused && <Shortcut>/</Shortcut>}
    </SearchBarContainer>
  )
}

export default SearchBar

const SearchBarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  max-width: 400px;
  height: 40px;
  width: 100%;
  border-radius: 20px;
  padding: 8px 16px;
  background-color: ${colors.surface2};
  border: 1px solid ${colors.surface3};

  &:hover {
    background-color: ${colors.surface1Hovered};
  }

  &:focus-within {
    background-color: ${colors.surface1};
  }
`

const SearchInput = styled.input`
  height: 22px;
  padding: 0 8px;
  color: ${colors.color};
  font-size: ${fonts.size.small};
  line-height: ${fonts.lineHeight.small};
  flex: 1;

  &::placeholder {
    color: ${colors.neutral2};
  }
`

const Shortcut = styled.div`
  background-color: ${colors.surface3};
  color: ${colors.neutral2};
  padding: 0px 8px;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  backdrop-filter: blur(60px);
`
