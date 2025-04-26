import { Dropdown, Icon } from '@/components/shared'
import { colors } from '@/styles/colorPalette'
import styled from '@emotion/styled'
import SettingDropdown from './SettingDropdown'

function SwapSettingButton() {
  return (
    <SettingContainer>
      <Dropdown
        trigger={
          <SettingIcon>
            <Icon name="IcSetting" color={colors.neutral2} />
          </SettingIcon>
        }
        position="right"
        animation="fade-up"
        minWidth={320}
      >
        <SettingDropdown />
      </Dropdown>
    </SettingContainer>
  )
}

export default SwapSettingButton

const SettingContainer = styled.div`
  position: absolute;
  top: -36px;
  right: 0;
`

const SettingIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
`
