import React from "react";
import useWallets from "./useWallets";
import {Select} from "antd";

interface Props {
  onChange?: (value: number) => void;
  value?: number;
  required?: boolean;
}

const WalletSelect: React.FC<Props> = ({onChange, value, required}) => {
  const wallets = useWallets();

  // default to be first value
  if (wallets[0] && !value && onChange) {
    onChange(wallets[0].id)
  }

  return <Select defaultActiveFirstOption onChange={onChange} value={value} aria-required={required}>
    {wallets.map((wallet) => {
      return <Select.Option key={wallet.id} value={wallet.id}>{wallet.name}</Select.Option>
    })}
  </Select>
};


export default WalletSelect;