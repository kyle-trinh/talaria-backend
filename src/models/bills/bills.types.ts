import { Document, Model } from "mongoose";
import { MoneyType } from "../../types";

export interface IBill {
  createdAt: number;
  updatedAt?: number;
  usdVndRate: number;
  status: string;
  shippingRateToVn: MoneyType;
  customTax?: number;
  moneyReceived: number;
  totalBillUsd: number;
  actBillCost: number;
  actCharge: number;
  commission: number;
  paymentReceipt?: string;
  notes?: string;
  customer: string;
  items: string[];
  affiliate: string;
}

export interface IBillDocument extends IBill, Document {}

export interface IBillModel extends Model<IBillDocument> {}
