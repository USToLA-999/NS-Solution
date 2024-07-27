import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function DefaultAccordion() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="maincontainer relative overflow-x-clip pb-20 sm:pb-20 bg-blue-50">
      <div className="container sm:container mx-auto md:container md:auto">
        <div className="headlinesboix lg:pt-5 lg:pb-10  flex justify-center">
          <div className="biglines  mt-10">
            <h1 className="fonting mx-auto max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-4xl">
              Frequently Asked Questions?
            </h1>
          </div>
        </div>
        <div className="justify-center  mx-auto mt-5 ">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-2 justify-center ">
            <div className=" justify-center   ">
              <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                  <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    What is e Filing of income tax return (ITR)?
                  </h1>
                </AccordionHeader>
                <AccordionBody className="text-lg">
                  Individuals, except senior citizens, have to mandatorily file
                  the ITR through the online mode which is also known as
                  electronic filing, i.e. e-filing of the income tax return. An
                  income tax return is a form that a person is required to
                  submit to the Income Tax Department. It contains information
                  related to individual’s income and taxes paid, starting from
                  1st April to 31st March of the financial year. There are seven
                  ITR forms prescribed by the Income Tax Department according to
                  the amount of income, income source and the category to which
                  the taxpayer belongs. E-filing of the income tax return can be
                  done through Clear’s e-filing utility in a smooth and simple
                  manner. Clear is a government-authorised portal to carry out
                  e-filing of the returns and hence 100% authenticity and
                  security is maintained.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                  <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    How can you file an income tax return in India?
                  </h1>
                </AccordionHeader>
                <AccordionBody className="text-lg">
                  You can file your income tax returns online, either on the
                  income tax department’s website or with us at www.cleartax.in.
                  Income Tax filing or e-filling is made easy on Cleartax. You
                  can e-file your returns in just 3 minutes without any manual
                  effort. Also, note that the due date to e-file your income tax
                  returns for the assessment year 2022-23 is on or before 31st
                  July 2022.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                  <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    My company deducts TDS. Do I still have to file my ITR?
                  </h1>
                </AccordionHeader>
                <AccordionBody className="text-lg">
                  Yes, deducting TDS and filing a tax return are two separate
                  legal compliances. Income tax should be paid on your taxable
                  income as per the provisions of the Income Tax Act. Whereas,
                  you file a tax return to show that you’ve paid all the tax you
                  needed to pay. The income tax return is also a very useful
                  document when it comes to applying for a loan or visa.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(4)}>
                  <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    Which income tax return should I select for e Filing?
                  </h1>
                </AccordionHeader>
                <AccordionBody className="text-lg">
                  There are seven forms - ITR 1, 2, 3, 4, 5, 6 and 7 notified by
                  the government for different categories of taxpayers. ITR-1 to
                  ITR-4 applies to individuals and HUFs. They can choose the
                  appropriate ITR form based on the income earned and source of
                  income. ITR-5 applies to partnership firms, LLPs, AOP
                  (Association of Persons), BoI (Body of Individuals),
                  Artificial Juridical Person (AJP), Estate of deceased, Estate
                  of insolvent, Business trust and investment fund. All the
                  companies should file ITR-6. It does not apply to companies
                  claiming exemption from income from property held for
                  charitable or religious purposes. Such companies should file
                  ITR-7. If you are e-filing with ClearTax, we automatically
                  decide on the correct income tax return form.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(5)}>
                  <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    How do I pay tax to the government?
                  </h1>
                </AccordionHeader>
                <AccordionBody className="text-lg">
                  You can pay tax to the government directly on the Income Tax
                  Department website using your net-banking account or debit
                  card using challan 280. The payment types for below taxes are
                  as follows-
                  <ol className="mt-3" style={{ listStyleType: "circle" }}>
                    <li className="pt-2">1. Advance Tax- (100) Advance Tax</li>
                    <li className="pt-2">
                      2. Self assessment tax- (300) Self Assessment Tax
                    </li>
                    <li className="pt-2">
                      3. Regular assessment- (400) Tax on Regular Assessment Tax
                    </li>
                  </ol>
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(6)}>
                  <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    I am a salaried individual and don't have a Form 16. How can
                    I file my tax return?
                  </h1>
                </AccordionHeader>
                <AccordionBody className="text-lg">
                  You can still file your tax return on ClearTax without a Form
                  16. You’re just going to need your payslips. Follow the
                  instructions on this guide to e-file without Form 16.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(7)}>
                  <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    What is ITR-V
                  </h1>
                </AccordionHeader>
                <AccordionBody className="text-lg">
                  ITR-V is a 1-page document that you receive after e-filing
                  your income tax return and where e-verification is pending.
                  You can verify your income tax return through offline or
                  online mode. There are various methods of online verification.
                  However, to verify your return offline, you must print, sign
                  and send the ITR-V to the Income Tax Department within 120
                  days from e-filing your tax return.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(8)}>
                  <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    Is it necessary to attach any documents along with the
                    return of income?
                  </h1>
                </AccordionHeader>
                <AccordionBody className="text-lg">
                  ITR return forms are attachment-less forms and, hence, the
                  taxpayer is not required to attach any document (like proof of
                  investment, TDS certificates, etc.) along with the return of
                  income (whether filed manually or filed electronically).
                  However, these documents should be retained by the taxpayer
                  and should be produced before the tax authorities when
                  demanded in situations like assessment, inquiry, etc.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 9} icon={<Icon id={9} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(9)}>
                  <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    If I have paid excess tax, how will it be refunded to me?
                  </h1>
                </AccordionHeader>
                <AccordionBody className="text-lg">
                  You can claim a refund of the excess tax paid by filing your
                  Income-tax return. It will be refunded to you by crediting it
                  to your bank account through ECS transfer. It is important to
                  pre-validate your bank account details before filing your
                  income tax return.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 10} icon={<Icon id={10} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(10)}>
                  <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    Is it necessary to file a return of income when I don’t have
                    any positive income?
                  </h1>
                </AccordionHeader>
                <AccordionBody className="text-lg">
                  You must file your return before the due date, if you have
                  sustained a loss in the financial year and if you want to
                  carry forward it to the subsequent year for adjustment against
                  the subsequent year’s income. Loss can be carried forward only
                  if you have filed the return claiming such loss before the due
                  date. It is always advisable to file ITR even if the person is
                  not mandatorily required to file the ITR according to the
                  Income Tax Act. This is because the ITR return serves as a
                  proof of income statement for various purposes like loan
                  approval, VISA applications, credit card applications, claim
                  income tax refunds and set off and carry forward of losses,
                  etc.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 11} icon={<Icon id={11} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(11)}>
                  <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    Who can file a tax return on ClearTax?
                  </h1>
                </AccordionHeader>
                <AccordionBody className="text-lg">
                  As per section 139(1) of the Income Tax Act, 1961 in the
                  country, individuals whose total income during the previous
                  year exceeds the maximum amount not chargeable to tax, should
                  file their income tax returns (ITR).
                  <ol className="mt-3" style={{ listStyleType: "circle" }}>
                    <li className="pt-2">
                      1. Individuals who have Salary income
                    </li>
                    <li className="pt-2">
                      Individuals who have switched jobs (Multiple Form 16)
                    </li>
                    <li className="pt-2">
                      3. Individuals having Income from Capital Gains (mutual
                      funds & stocks), business/profession, House Property,
                      other income such as Interest, etc.
                    </li>
                    <li className="pt-2">
                      4. Individuals having Foreign Income (Onsite deputation),
                      Foreign Assets, NRI
                    </li>
                  </ol>
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 12} icon={<Icon id={12} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(12)}>
                  <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    What is the penalty for late Income tax e-Filing (ITR)?
                  </h1>
                </AccordionHeader>
                <AccordionBody className="text-lg">
                  Income Tax Act levies penalties for late filing of income tax
                  returns. Under Section 234F, a maximum late fee of Rs 5000 is
                  applicable for filing ITR after due dates. However, there is a
                  relief given to small taxpayers, if the total income does not
                  exceed Rs 5 lakh, the maximum penalty levied for delay will be
                  Rs 1000. Interest penalty on outstanding tax liability Under
                  Section 234A of the Income Tax Act, a taxpayer with
                  outstanding tax liability will have to pay monthly interest of
                  1% on the outstanding tax payable till the belated ITR is
                  filed.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 13} icon={<Icon id={13} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(13)}>
                  <h1 className="max-w-5xl font-display text-2xl  tracking-tight text-slate-900 sm:text-2xl">
                    What are the documents required for filing ITR?
                  </h1>
                </AccordionHeader>
                <AccordionBody className="text-lg">
                  <p>
                    As you already know, PAN and Aadhaar are the most basic and
                    essential documents to file an ITR.
                  </p>
                  <p>
                    Let’s look at the other documents you need to file your ITR.
                  </p>
                  <ol className="mt-3" style={{ listStyleType: "circle" }}>
                    <li className="mt-2">1. <b>Form 16:</b> Form 16 issued by your employer is also known as the Tax Deducted at Source (TDS) certificate. Your employer provides this form after furnishing the information related to the taxes paid on your behalf. In this form, you can view your salary, allowances, and deductions</li>
                    <li className="mt-2">2. <b>Payslips:</b> It is essential to keep the salary slip ready for salaried taxpayers. Your salary slip consists of basic details such as your salary, House Rent Allowance (HRA), Dearness Allowance (DA), Traveling Allowances (TA), tax deducted, statutory deductions, etc. These details are essential to file income tax returns.</li>
                    <li className="mt-2">3. <b>Form 26AS:</b> Form 26AS contains tax-related information such as TDS, advance tax, self-assessment tax, and TCS collected on your PAN. Apart from this, Form 26AS reflects details from Annual Information Return (AIR), which is filed by different entities, if you have invested or spent, mostly high-value transactions.</li>
                    <li className="mt-2">4. <b>Annual Information Statement:</b> Annual information statement consist of comprehensive details of your financial information. It includes the transaction details even where TDS/TCS is not applicable. You can view your savings account interest details, mutual funds transactions, rental income, etc.</li>
                    <li className="mt-2">5. <b>Form 16A/16B/16C:</b> Form 16A consists of whether you have any TDS on interest on fixed deposits, TDS on rental income, TDS on insurance commission, or any other income liable for a tax deduction. Form 16B provides details of TDS if you purchased a property during the previous year. Form 16C consists of TDS deducted on income from renting your plant and machinery</li>
                    <li className="mt-2">6. <b>Interest certificates from banks or post offices:</b> Interest income from a savings bank account, fixed deposit, recurring deposit and post office savings accounts are taxable. Even if your bank does not deduct any TDS as you are well within the TDS limits, you should get the interest certificates to know the total interest earned. If you cannot get interest certificates, make sure your passbook is updated with details of interest income.</li>
                    <li className="mt-2">7. <b>House property details:</b> If you live in a rental property, you’ve to collect the rental receipts and details of your house owner and PAN to claim HRA. If you are residing in your property, write down the property details, ownership %, etc. If you’ve taken a loan for the purchase/construction of the property, don’t forget to obtain the “loan repayment certificate” from your bank or NBFC. This certificate is essential in claiming interest paid under Section 24 and principal repayment under Section 80C.</li>
                    <li className="mt-2">8. <b>Capital gains details:</b> If you sell any property and earn profit from it, you must pay tax on that income. It is necessary to keep the sales deed in your hand if you have sold any property during the previous year. In case you have invested in shares, mutual funds, etc., and sold any during the previous year, you are required to collect a capital gain statement from your broking house. It contains the transaction-wise details of all the short-term capital gains and long-term capital gains.</li>
                    <li className="mt-2">9. <b>Business PL and BS (with schedules):</b> Your business income which is to be reported in your ITR, has to be determined based on the profit and loss account and balance sheet. Hence, if you are doing a business, you should keep the PL and BS in hand to file ITR.</li>
                    <li className="mt-2">10. <b>Other income details:</b> If you have any income, such as
                        <ol>
                            <li>a. Dividend income</li>
                            <li>b. Family pension</li>
                            <li>c. Interest from loans</li>
                            <li>d. Honorarium received</li>
                            <li>e. Tuition fee</li>
                            <li>f. Freelancer income</li>
                            <li>g. Winnings from the lottery, game shows, puzzles etc.</li>
                            <li>You should keep the related documents ready so that you don’t miss submitting these details while filing ITR.</li>
                        </ol>
                    </li>
                    <li className="mt-2">11. <b>Investment proofs:</b> You have to keep the documents related to the following documents to claim deductions under chapter VI-A of the Income Tax Act. These proofs include
                        <ol>
                            <li>a. Contribution to Employees Provident Fund (EPF)</li>
                            <li>b. Contribution to Public Provident Fund (PPF)</li>
                            <li>c. Investments in ELSS schemes</li>
                            <li>d. Life insurance premium payments</li>
                            <li>e. Contribution to National Pension System (NPS)</li>
                            <li>f. Children education expenses</li>
                            <li>g. Health insurance premium</li>
                            <li>h. Interest paid on the educational loan, etc.</li>
                            <li>Apart from the above deductions, if you are eligible for any deductions under sections 80D to 80U, you should keep those documents ready as well!</li>
                        </ol>
                    </li>
                  </ol>
                </AccordionBody>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
