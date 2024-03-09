import { View, Text, ModalProps } from 'react-native'
import React from 'react'
import { Modal } from 'react-native'

type Props = ModalProps & {
    isOpen: boolean

}


export default function SuccessModal({
    isOpen,
    children,
    ...rest
}: Props) {
  return (
        <Modal
        visible={isOpen}
        transparent
        animationType="fade"
        statusBarTranslucent
        {...rest}
        >
            {children}
        </Modal>
  )
}