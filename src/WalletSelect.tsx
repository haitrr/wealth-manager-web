import useWallets from "./useWallets";
import React from "react";
import {Select} from "antd";

interface Props {
  onChange?: (value: number) => void;
  value?: number;
  required?: boolean;
}

const WalletSelect: React.FC<Props> = ({onChange, value, required}) => {
  const wallets = useWallets();
  return <Select defaultActiveFirstOption onChange={onChange} value={value} aria-required={required}>
    {wallets.map((wallet) => {
      return <Select.Option key={wallet.id} value={wallet.id}>{wallet.name}</Select.Option>
    })}
  </Select>
};


export default WalletSelect;