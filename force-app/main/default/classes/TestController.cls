public with sharing class TestController {
    public TestController() {

    }
    @AuraEnabled(Cacheable=true)
    public static String getName(String inputStr){
        return 'Hello '+inputStr;
    }
    
            
    @AuraEnabled(Cacheable=true)
    public static List<Map<String,Object>> getListData(){
        List<Map<String,Object>> listData=new List<Map<String,Object>>();
        Map<String,Object> m1=new Map<String,Object>();
        m1.put('Id', '1');
        m1.put('Name', 'Acme Industry');
        m1.put('Type', 'Saving');
        m1.put('Phone', '123456789');
        m1.put('Website', 'something.com');
        m1.put('Rating', '1');
        m1.put('AnnualRevenue', '$656,366,363');
        m1.put('dietCSSClass', 'dietCSSClassGreen');
         m1.put('Status', 'FULFILLED');
        
        listData.add(m1);

          Map<String,Object> m2=new Map<String,Object>();
        m2.put('Id', '2');
        m2.put('Name', 'Acme Industry');
        m2.put('Type', 'Saving');
        m2.put('Phone', '6825525644');
        m2.put('Website', 'something.com');
        m2.put('Rating', '1');
        m2.put('AnnualRevenue', '$656,366,363');
        m2.put('dietCSSClass', 'dietCSSClassYello');
         m2.put('Status', 'PARTILLY SHIPED');
        
        listData.add(m2);

          Map<String,Object> m3=new Map<String,Object>();
        m3.put('Id', '3');
        m3.put('Name', 'Baki Industry');
        m3.put('Type', 'Saving');
        m3.put('Phone', '6825525644');
        m3.put('Website', 'something.com');
        m3.put('Rating', '1');
        m3.put('AnnualRevenue', '$656,366,363');
         m3.put('dietCSSClass', 'dietCSSClassGreen');
          m3.put('Status', 'COMPLETED');
        
        listData.add(m3);

          Map<String,Object> m4=new Map<String,Object>();
        m4.put('Id', '4');
        m4.put('Name', 'Hanma Industry');
        m4.put('Type', 'Saving');
        m4.put('Phone', '6825525644');
        m4.put('Website', 'something.com');
        m4.put('Rating', '1');
        m4.put('AnnualRevenue', '$656,366,363');
         m4.put('dietCSSClass', 'dietCSSClassBlue');
          m4.put('Status', 'CONFIRMED');
        
        listData.add(m4);

          Map<String,Object> m5=new Map<String,Object>();
        m5.put('Id', '5');
        m5.put('Name', 'Acme Industry');
        m5.put('Type', 'Saving');
        m5.put('Phone', '6825525644');
        m5.put('Website', 'something.com');
        m5.put('Rating', '1');
        m5.put('AnnualRevenue', '$656,366,363');
                 m5.put('dietCSSClass', 'dietCSSClassBlue');
                  m5.put('Status', 'CONFIRMED');

        
        listData.add(m5);
          Map<String,Object> m6=new Map<String,Object>();
        m6.put('Id', '6');
        m6.put('Name', 'Humana Industry');
        m6.put('Type', 'Saving');
       
        m6.put('Phone', '6825525644');
        m6.put('Website', 'something.com');
        m6.put('Rating', '1');
        m6.put('AnnualRevenue', '$656,366,363');
                 m6.put('dietCSSClass', 'dietCSSClassGreen');
                  m6.put('Status', 'FULFILLED');

        
        listData.add(m6);
          Map<String,Object> m8=new Map<String,Object>();
        m8.put('Id', '8');
        m8.put('Name', 'Acme Industry');
        m8.put('Type', 'Saving');
        m8.put('Phone', '6825525644');
        m8.put('Website', 'something.com');
        m8.put('Rating', '1');
        m8.put('AnnualRevenue', '$656,366,363');
        m8.put('dietCSSClass', 'dietCSSClassBlue');
         m8.put('Status', 'CONFIRMED');

        
        listData.add(m8);

          Map<String,Object> m7=new Map<String,Object>();
        m7.put('Id', '7');
        m7.put('Name', 'Acme Industry');
        m7.put('Type', 'Saving');
        m7.put('Phone', '6825525644');
        m7.put('Website', 'something.com');
        m7.put('Rating', '1');
        m7.put('AnnualRevenue', '$656,366,363');
          m7.put('dietCSSClass', 'dietCSSClassYello');
           m7.put('Status', 'PARTIALLY COMPLETED');
        
        listData.add(m7);
          Map<String,Object> m9=new Map<String,Object>();
        m9.put('Id', '9');
        m9.put('Name', 'Acme Industry');
        m9.put('Type', 'Saving');
        m9.put('Phone', '6825525644');
        m9.put('Website', 'something.com');
        m9.put('Rating', '1');
        m9.put('AnnualRevenue', '$656,366,363');
        m9.put('dietCSSClass', 'dietCSSClassBlue');
         m9.put('Status', 'CONFIRMED');
        listData.add(m9);
          Map<String,Object> m10=new Map<String,Object>();
        m10.put('Id', '10');
        m10.put('Name', 'Acme Industry');
        m10.put('Type', 'Saving');
        m10.put('Phone', '6825525644');
        m10.put('Website', 'something.com');
        m10.put('Rating', '1');
        m10.put('AnnualRevenue', '$656,366,363');
        m10.put('dietCSSClass', 'dietCSSClassBlue');
         m10.put('Status', 'CONFIRMED');
        listData.add(m10);
        return listData;
    }

     @AuraEnabled(Cacheable=true)
    public static List<Map<String,Object>> getListDataType2(){
        List<Map<String,Object>> listData=new List<Map<String,Object>>();
        Map<String,Object> m1=new Map<String,Object>();
        m1.put('ClaimId', '10088743767627');
        m1.put('Name', 'Elizabeth Keen');
        m1.put('SSD', '02/20/2020');
        m1.put('SED', '02/25/2020');
        m1.put('Network', 'In-Network');
        m1.put('dietCSSClass', 'dietCSSClassBlue');
        m1.put('Status', 'Submitted');
        
        listData.add(m1);

          Map<String,Object> m2=new Map<String,Object>();
        m2.put('ClaimId', '10088743767627');
        m2.put('Name', 'John Davis');
        m2.put('SSD', '02/20/2020');
        m2.put('SED', '02/25/2020');
        m2.put('Network', 'In-Network');
        m2.put('dietCSSClass', 'dietCSSClassBlue');
        m2.put('Status', 'Submitted');
       
        listData.add(m2);

          Map<String,Object> m3=new Map<String,Object>();
        m3.put('ClaimId', '10088743767627');
        m3.put('Name', 'Mike Smith');
        m3.put('SSD', '02/20/2020');
        m3.put('SED', '02/25/2020');
        m3.put('Network', 'Out-Of-Network');
        m3.put('dietCSSClass', 'dietCSSClassBlue');
        m3.put('Status', 'Submitted');
        m3.put('dietCSSClass', 'dietCSSClassYello');
        m3.put('Status', 'In-Review');
        
        listData.add(m3);

          Map<String,Object> m4=new Map<String,Object>();
        m4.put('ClaimId', '10088743767627');
        m4.put('Name', 'Kate Winston');
        m4.put('SSD', '02/20/2020');
        m4.put('SED', '02/25/2020');
        m4.put('Network', 'Out-Of-Network');
        m4.put('dietCSSClass', 'dietCSSClassBlue');
        m4.put('Status', 'Submitted');
        m4.put('dietCSSClass', 'dietCSSClassYello');
        m4.put('Status', 'In-Review');
        
        listData.add(m4);

          Map<String,Object> m5=new Map<String,Object>();
         m5.put('ClaimId', '10088743767627');
        m5.put('Name', 'Cris Baker');
        m5.put('SSD', '02/20/2020');
        m5.put('SED', '02/25/2020');
        m5.put('Network', 'Out-Of-Network');
        m5.put('dietCSSClass', 'dietCSSClassBlue');
        m5.put('Status', 'Submitted');
        m5.put('dietCSSClass', 'dietCSSClassYello');
        m5.put('Status', 'In-Review');

        
        listData.add(m5);
          Map<String,Object> m6=new Map<String,Object>();
        m6.put('ClaimId', '10088743767627');
        m6.put('Name', 'Mark Sloan');
        m6.put('SSD', '02/20/2020');
        m6.put('SED', '02/25/2020');
        m6.put('Network', 'Out-Of-Network');
        m6.put('dietCSSClass', 'dietCSSClassBlue');
        m6.put('Status', 'Submitted');
        m6.put('dietCSSClass', 'dietCSSClassYello');
        m6.put('Status', 'In-Review');

        
        listData.add(m6);
          Map<String,Object> m8=new Map<String,Object>();
        m8.put('ClaimId', '10088743767627');
        m8.put('Name', 'Amelia Sloan');
        m8.put('SSD', '02/20/2020');
        m8.put('SED', '02/25/2020');
        m8.put('Network', 'Out-Of-Network');
        m8.put('dietCSSClass', 'dietCSSClassBlue');
        m8.put('Status', 'Submitted');
        m8.put('dietCSSClass', 'dietCSSClassYello');
        m8.put('Status', 'In-Review');

        
        listData.add(m8);

          Map<String,Object> m7=new Map<String,Object>();
        m7.put('ClaimId', '10088743767627');
        m7.put('Name', 'Daniel Wellington');
        m7.put('SSD', '02/20/2020');
        m7.put('SED', '02/25/2020');
        m7.put('Network', 'Out-Of-Network');
        m7.put('dietCSSClass', 'dietCSSClassBlue');
        m7.put('Status', 'Submitted');
        m7.put('dietCSSClass', 'dietCSSClassYello');
        m7.put('Status', 'In-Review');
        
        listData.add(m7);
          Map<String,Object> m9=new Map<String,Object>();
        m9.put('ClaimId', '10088743767627');
        m9.put('Name', 'Maria Woods');
        m9.put('SSD', '02/20/2020');
        m9.put('SED', '02/25/2020');
        m9.put('Network', 'Out-Of-Network');
        m9.put('dietCSSClass', 'dietCSSClassBlue');
        m9.put('Status', 'Submitted');
        m9.put('dietCSSClass', 'dietCSSClassYello');
        m9.put('Status', 'In-Review');
        listData.add(m9);
          Map<String,Object> m10=new Map<String,Object>();
         m10.put('ClaimId', '10088743767627');
        m10.put('Name', 'Becca Williams');
        m10.put('SSD', '02/20/2020');
        m10.put('SED', '02/25/2020');
        m10.put('Network', 'Out-Of-Network');
        m10.put('dietCSSClass', 'dietCSSClassBlue');
        m10.put('Status', 'Submitted');
        m10.put('dietCSSClass', 'dietCSSClassGreen');
        m10.put('Status', 'Approved');
        listData.add(m10);
        return listData;
    }
}