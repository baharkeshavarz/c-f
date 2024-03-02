"use client"

import { Button, Input, Typography } from "@mui/material"
import React from "react"
import LayoutWrapper from "../layout/layout-wrapper"

interface LoanCalculatorProps {
  t: any
}

const LoanCalculator = ({ t }: LoanCalculatorProps) => {
  return (
    <div className="bg-gray-100">
      <div className="background-light850_dark100">
        <LayoutWrapper>
          <div className="grid w-full grid-cols-1 gap-10 py-10 sm:grid-cols-2">
            <div className="flex-center border-light-800 bg-light-900 flex-col rounded-md border">
              <div className="flex flex-col items-center space-x-1 p-4 sm:flex-row">
                <div className="w-full px-1 text-center sm:w-16">
                  <Typography className="h4-semibold">
                    {t.pages.calculator.amount}
                  </Typography>
                </div>
                <div className="flex-center flex-1 space-x-2">
                  <Button
                    variant="filled"
                    className="flex-center bg-light-800 h-10"
                  >
                    <span className="h4-semibold text-dark100_light900">+</span>
                  </Button>
                  <Input
                    placeholder="10000"
                    value="1500"
                    className="focus:!border-light-800"
                    labelProps={{
                      className: "before:content-none after:content-none"
                    }}
                  />
                  <Button
                    variant="filled"
                    className="flex-center bg-light-800 h-10"
                  >
                    <span className="text-dark100_light900 text-xl">-</span>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center space-x-1 p-4 sm:flex-row">
                <div className="w-full px-1 text-center sm:w-16">
                  <Typography className="h4-semibold">
                    {t.pages.calculator.term}
                  </Typography>
                </div>
                <div className="flex-center flex-1 space-x-2">
                  <Button
                    variant="filled"
                    className="flex-center bg-light-800 h-10"
                  >
                    <span className="h4-semibold text-dark100_light900">+</span>
                  </Button>
                  <Input
                    placeholder="10000"
                    value="12"
                    className="focus:!border-light-800"
                    labelProps={{
                      className: "before:content-none after:content-none"
                    }}
                  />
                  <Button
                    variant="filled"
                    className="flex-center bg-light-800 h-10"
                  >
                    <span className="text-dark100_light900 text-xl">-</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex-center border-light-800 bg-light-900 rounded-md border p-5">
              <div className="grid-cols-col grid w-full gap-5 sm:grid-cols-2">
                <div className="flex-center border-light-700 flex-col rounded-md border-2 p-2">
                  <Typography className="text-light400_light500">
                    {t.pages.calculator.monthlyRepayment}
                  </Typography>
                  <Typography className="h3-bold text-secondary-500 py-2.5">
                    £543.21
                  </Typography>
                  <Typography className="text-light400_light500">
                    {t.pages.calculator.everyMonth}
                  </Typography>
                </div>
                <div className="flex-center border-light-700 flex-col rounded-md border-2 p-2">
                  <Typography className="text-light400_light500">
                    {t.pages.calculator.totalPayable}
                  </Typography>
                  <Typography className="h3-bold text-secondary-500 py-2.5">
                    £13,037.04
                  </Typography>
                  <Typography className="text-light400_light500">
                    {t.pages.calculator.loanRequired}
                  </Typography>
                </div>
                <div className="flex-center border-light-700 flex-col rounded-md border-2 p-2">
                  <Typography className="text-light400_light500">
                    {t.pages.calculator.arp}
                  </Typography>
                  <Typography className="h3-bold text-secondary-500 py-2.5">
                    5.8%
                  </Typography>
                  <Typography className="text-light400_light500 text-center">
                    {t.pages.calculator.detailsEntered}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </LayoutWrapper>
      </div>
    </div>
  )
}

export default LoanCalculator
