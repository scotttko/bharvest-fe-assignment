import { motion } from 'motion/react'
import styled from '@emotion/styled'
import { colors } from '@/styles/colorPalette'
import Icon from '../icon'

interface Props {
  isChecked: boolean
  onSwitch: () => void
  disabled?: boolean
  className?: string
}

function Toggle({ isChecked, onSwitch, disabled = false, className }: Props) {
  return (
    <ToggleButton
      $isChecked={isChecked}
      onClick={onSwitch}
      animate={isChecked ? 'checked' : 'initial'}
      disabled={disabled}
      className={className}
    >
      <SwitchHandle
        $isChecked={isChecked}
        variants={{
          initial: { left: 4 },
          checked: { left: 34 },
        }}
        transition={{ duration: 0.1 }}
      >
        {isChecked && <Icon name="IcCheck" size={14} color={colors.accent1} />}
      </SwitchHandle>
    </ToggleButton>
  )
}

export default Toggle

const ToggleButton = styled(motion.button)<{ $isChecked: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 62px;
  height: 34px;
  border-radius: 40px;
  background: ${({ $isChecked }) => ($isChecked ? colors.accent1 : colors.neutral3)};
  transition: all 0.1s linear;

  &:hover {
    background: ${({ $isChecked }) =>
      $isChecked ? colors.accent1Hovered : colors.neutral3Hovered};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`

const SwitchHandle = styled(motion.div)<{ $isChecked: boolean }>`
  position: absolute;
  background-color: ${({ $isChecked }) => ($isChecked ? colors.white : colors.color)};
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`
