import { View, Text, Pressable, PressableProps } from 'react-native'
import React from 'react'

interface CustomButtonProps extends PressableProps {
    children?: string;
    BgColor?:'primary' | 'secondary' | 'tertiary';
    textColor?:'primary' | 'secondary' | 'tertiary';

    variant?: 'contain' | 'text-only';
    className?: string;
}

const CustomButton = React.forwardRef(({ children='name', BgColor='primary', textColor='primary', variant, className, onPress, onLongPress }:CustomButtonProps, ref: React.Ref<View>) => {

    const btnColor = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary',
    }[BgColor];

    const txtColor = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        tertiary: 'text-tertiary',
    }[textColor];

    if (variant === 'text-only') {
        return(
            <Pressable className={`p-3 ${className}`} onPress={onPress} onLongPress={onLongPress} ref={ref}>
                <Text className={`text-center ${txtColor} font-work-medium`}>
                    {children}
                </Text>
            </Pressable>
        )
    }

  return (

    <Pressable className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className}`} onPress={onPress} onLongPress={onLongPress} ref={ref}>
        <Text className={`text-white text-center font-work-medium`}>
            {children}
        </Text>
    </Pressable>
  )
})

export default CustomButton
