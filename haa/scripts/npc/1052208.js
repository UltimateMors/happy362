﻿importPackage(Packages.handling.channel);
importPackage(java.text);
importPackage(Packages.handling.cashshop);
importPackage(Packages.handling.channel.handler);
importPackage(Packages.handling.cashshop.handler);
importPackage(java.text);
importPackage(java.lang);
importPackage(Packages.tools.packet);

function start()
{
	status = -1;
	action(1, 0, 0);
} 

function action(mode, type, selection)
{
bannedhair = [42960,42670,42830,42810,42820,42840,42850,42560,42530,42540,42550,42570,42600,42580,42590,42610,42620,42860,42920,42870,42910,42880,42890,42900,42630,42640,42650,42660,42930,42950,425951];
	if (mode == -1) {
		cm.dispose();
		return;
	}
	if(mode != 1)
	{
		cm.dispose();
		return;
	}
	else
	{
		status++;
	}


   if (status == 0) {
      var msg = "#fs11##fc0xFF000000#코디를 하고싶은거야? 내가 이쁘게 꾸며줄게! 골라봐.\r\n\r\n";
      msg += "#L0##fUI/UIWindow4.img/pointShop/100658/iconShop##fc0xFF6600CC# 검색(헤어/성형) #fc0xFF000000#을 이용하겠습니다.\r\n";
      msg += "#L1##fUI/UIWindow4.img/pointShop/100658/iconShop##fc0xFF6600CC# 헤어 관련#fc0xFF000000#을 이용하겠습니다.\r\n";
      msg += "#L2##fUI/UIWindow4.img/pointShop/100658/iconShop##fc0xFF990033# 성형 관련#fc0xFF000000#을 이용하겠습니다.\r\n";
      msg += "#L3##fUI/UIWindow4.img/pointShop/100658/iconShop##fc0xFFFF3300# 캐릭터 컬러변경#fc0xFF000000#을 이용하겠습니다.#l\r\n";
      msg += "#L7##fUI/UIWindow4.img/pointShop/100658/iconShop##fc0xFF009933# 치장 상점#fc0xFF000000#을 이용하겠습니다.#l\r\n\r\n";
      msg += "#Cgray##fs11#――――――――――――――――――――――――――――――――――――――――#fc0xFF000000#\r\n";
      msg += "#L4##fUI/UIWindow4.img/pointShop/100658/iconShop##fc0xFF006699# 기타 (해외캐시,성전환,RGB변경)#fc0xFF000000#를 이용하겠습니다.\r\n";
      msg += "#L6##fUI/UIWindow4.img/pointShop/100658/iconShop##fc0xFF3300CC# 해외 헤어#fc0xFF000000#를 이용하겠습니다.\r\n";
      msg += "#L5##fUI/UIWindow4.img/pointShop/100658/iconShop##fc0xFF990066# 검색 캐시#fc0xFF000000#를 이용하겠습니다.\r\n";
      cm.sendSimple(msg);

   } else if (status ==1) {
      codyList = [];
      gColor = !cm.getPlayer().getGender() ? "#fs11##d여성" : "#fs11##b남성";
      seld = selection;
      selStr = "";
      switch (seld) {
		 case 0:
			cm.dispose();
			cm.openNpcCustom(cm.getClient(), 1052208, "searchhairface");
			return;
		 break;
         case 1:
            selStr += "#e#r[캐릭터 헤어 변경하기]#b#n\r\n";
            selStr += "#L1##fs11# 헤어 리스트 A#l\r\n#L2# 헤어 리스트 B#l\r\n";
            selStr += "#L3# 헤어 리스트 C#l\r\n#L4# 헤어 리스트 D#l \r\n#L5# 헤어 리스트 E#l#k";
		if (cm.getPlayer().getAndroid() != null) {
            		
            selStr += "\r\n\r\n#e#r#fs12#[안드로이드 헤어 변경하기]#k#b#n\r\n";
            selStr += "#L12##fs11# 헤어 리스트 A#l\r\n#L13# 헤어 리스트 B#l\r\n";
            selStr += "#L14# 헤어 리스트 C#l\r\n#L15# 헤어 리스트 D (최신 헤어)#l\r\n";
            selStr += "#L16# 헤어 리스트 E#l";
            		
		}
         break;
         case 2:
            selStr += "#e#r[캐릭터 성형]#b#n\r\n";
            selStr += "#e #n#L6##fs11#성형 리스트 A#l\r\n#L7# 성형 리스트 B#l\r\n#b#L8# 성형 리스트 C#l\r\n";
		if (cm.getPlayer().getAndroid() != null) {
            		
            		selStr += "\r\n\r\n#e#r#fs12#[안드로이드 성형]#k#b#n\r\n#fs11#";
            		selStr += "#e #n#L16# 성형 리스트 A#l#L17# 성형 리스트 B #e#r(최신 성형)#l\r\n";
		}
         break;
         case 3:
            selStr += "#e#r[캐릭터 COLOR]\r\n#n ※주의 : 렌즈색은 #b컬러 렌즈 쿠폰#r으로만 변경 할 수 있습니다.#b#n\r\n";
            selStr += "#fs11##L40# 일반 염색#n하기\r\n#l";
            selStr += "#L21# 믹스 염색#n\r\n#l";
            selStr += "#L9# 피부색#n 변경하기#l#k\r\n ";
		if (cm.getPlayer().getAndroid() != null) {
            		
            		selStr += "\r\n\r\n#e#r[안드로이드 COLOR]#b#n\r\n";
            		selStr += "#L19# #b#e안드로이드#n#b 일반 염색#n하기\r\n#l";
            		selStr += "#L18# #b#e안드로이드#n#b 렌즈색#n 변경하기\r\n#l";
            		selStr += "#L20# #b#e안드로이드#n#b 피부색#n 변경하기#l#b\r\n";
		}
         break;
         case 4:
            selStr += "#fs11##fc0xFF000000#해외의 다양한 캐시를 만나보라구!#b#n\r\n";
            selStr += "#L10# "+gColor+"#n으로 성전환하기#l#b\r\n\r\n";
            selStr += "#L23# 해외캐시#n 이용하기#l\r\n";
            //selStr += "#L29# 스페셜 헤어#n 이용하기#l\r\n";
            //selStr += "#L98##fMap/MapHelper.img/minimap/party# 알쏭 달쏭 믹렌#n 이용하기#l\r\n";
            selStr += "#L988# RGB 변경#n 이용하기#l\r\n";

         break;
         case 5:
			cm.dispose();
			cm.openNpcCustom(cm.getClient(), 1052208, "Itemsearch");
			return;
         break;
         case 6:
			cm.dispose();
			cm.openNpcCustom(cm.getClient(), 1052208, "globalcash");
			return;
         break;
         case 7:
			cm.dispose();
			cm.openShop(11);
			return;
         break;
      }
      /*
      if (cm.getPlayer().getAndroid() != null) {
         selStr += "\r\n\r\n#e#r              [ 안드로이드 ]             　#b#n\r\n";
         selStr += "\r\n\r\n#e#r[헤어 변경하기]　　　　　[성형 및 렌즈 변경]#b#n\r\n";
         selStr += "#L12#헤어 A#l#L14#헤어 C#l　　　　#e #n#L16#얼굴 A#l#L17#얼굴 B#l\r\n";
         selStr += "#L13#헤어 B#l#L15#헤어 D#l　　　　#e #n#L18#렌즈색#n 변경하기#l\r\n";
         selStr += "#L19##e일반 염색#n하기#l　　　　    #L20##e피부색#n 변경하기#l#b\r\n";
      }
      */
      cm.sendSimpleS(selStr, 4);
   }
	else if(status == 2)
	{
if (selection == 8 || selection == 21) {
for (i=0; i<bannedhair.length; i++) {
if (cm.getPlayer().getHair() == bannedhair[i]) {
cm.sendOk("해당 헤어는 염색이 불가능 합니다.");
cm.dispose();
return;
}
}
}
		SEL_00 = selection;
		Gender = cm.getPlayer().getGender();


		switch(SEL_00) {
			case 12:
			case 14:
			case 13:
			case 15:
			case 19:
			case 16:
			case 17:
			case 18:
			case 20: {
				if(cm.getPlayer().getAndroid().getGender() == 1) {
					Gender = 1;
				} else {
					Gender = 0;
				}
				break;
			}
		}
		if(SEL_00 == 11)
		{
			cm.dispose();
			cm.openNpc(1012117);
			return;
		}

		if (SEL_00 == 21) {
			cm.dispose();
			cm.openNpc(1052239);
			return;
		}
		if (SEL_00 == 22) {
			cm.dispose();
			cm.openShop(11);
			return;
		}
		if (SEL_00 == 23) {
			cm.dispose();
			cm.openNpcCustom(cm.getClient(), 1052208, "globalcashItem");
			return;
		}
		if (SEL_00 == 28) {
			cm.dispose();
			cm.openNpc(2001);
			return;
		}
		if (SEL_00 == 29) {
			cm.dispose();
			cm.openNpc(9330005);
			return;
		}
		if (SEL_00 == 98) {
			cm.dispose();
			cm.openShop(16);
			return;
		}

		if (SEL_00 == 30) {
			cm.dispose();
			cm.openNpc(9000226);
			return;
		}
                if (SEL_00 == 24) {
			cm.dispose();
			cm.openNpcCustom(cm.getClient(), 3004329, "Itemsearch");
			return;
		}
                if (SEL_00 == 31) {
			cm.dispose();
			cm.openNpcCustom(cm.getClient(), 9070003, "Itemsearch");
			return;
		}
		if(SEL_00 == 10)
		{
			if(cm.getPlayer().getJob() == 10112)
			{
				cm.sendOkS("제로 직업군은 성전환을 할 수 없습니다.", 4);
				cm.dispose();
				return;
			}
			cm.sendYesNoS("#e"+gColor+"#n#k으로 성전환을 하시겠습니까? 더 이상 해당 성별에 맞는 장비를 착용할 수 없습니다.", 4);
		}

		Beauty = SEL_00 < 2 ? "#e헤어#n를" : SEL_00 == 2 ? "#e얼굴#n을" : "#e색깔#n을"; 
		selStr = "#fn돋움##fc0xFFFFFFFF#지금의 "+Beauty+" 전혀 새로운 스타일로 바꿔 줄 수 있지. 지금 모습이 지겨워 졌다면 바꾸고 싶은 헤어를 천천히 고민해 봐";
		switch(SEL_00)
		{

			// 헤어 리스트 시작
			case 1: // 헤어1
			case 12: // 헤어1
			if(!Gender)
			codyList = [30000, 30020, 30030, 30040, 30050, 30060, 30100, 30110, 30120, 30130, 30140, 30150, 30160, 30170, 30180, 30190, 30200, 30210, 30220, 30230, 30240, 30250, 30260, 30270, 30280, 30290, 30300, 30310, 30320, 30330, 30340, 30350, 30360, 30370, 30400, 30410, 30420, 30440, 30450, 30460, 30470, 30480, 30490, 30510, 30520, 30530, 30540, 30560, 30570, 30590, 30610, 30620, 30630, 30640, 30650, 30660, 30670, 30680, 30700, 30710, 30730, 30760, 30770, 30790, 30800, 30810, 30820, 30830, 30840, 30850, 30860, 30870, 30880, 30910, 30930, 30940, 30950, 33030, 33060, 33070, 33080, 33090, 33110, 33120, 33130, 33150, 33170, 33180, 33190, 33210, 33220, 33250, 33260, 33270, 33280, 33310, 33330, 33350, 33360];

			else
			codyList = [31000, 31010, 31020, 31030, 31040, 31050, 31060, 31070, 31080, 31090, 31100, 31110, 31120, 31130, 31140, 31150, 31160, 31170, 31180, 31190, 31200, 31210, 31220, 31230, 31240, 31250, 31260, 31270, 31280, 31290, 31300, 31310, 31320, 31330, 31340, 31410, 31420, 31440, 31450, 31460, 31470, 31480, 31490, 31510, 31520, 31530, 31540, 31550, 31560, 31590, 31610, 31620, 31630, 31640, 31650, 31670, 31680, 31690, 31700, 31710, 31720, 31740, 31750, 31780, 31790, 31800, 31810, 31820, 31840, 31850, 31860, 31880, 31890];
			break;

			case 2: // 헤어2
			case 13: // 헤어2
			if(!Gender)
			codyList = [33380, 33390, 33400, 33410, 33430, 33440, 33450, 33460, 33480, 33500, 33510, 33520, 33530, 33550, 33580, 33590, 33600, 33610, 33620, 33630, 33640, 33660, 33670, 33680, 33690, 33700, 33710, 33720, 33730, 33740, 33750, 33760, 33770, 33780, 33790, 33800, 33810, 33820, 33830, 33930, 33940, 33950, 33960, 33990, 35000, 35010, 35020, 35030, 35040, 35050, 35060, 35070, 35080, 35090, 35100, 35150, 35180, 35190, 35200, 35210, 35250, 35260, 35280, 35290, 35300, 35310, 35330, 35350, 35360, 35420, 35430, 35440, 35460, 35470, 35480, 35490, 35500, 35510, 35520, 35530, 35540, 35550, 35560, 35570, 35600, 35620, 35630, 35640, 35650, 35660, 35680, 35690, 35710, 35720, 35780, 35790, 35950, 35960];

			else
			codyList = [31920, 31930, 31940, 31950, 31990, 34040, 34070, 34080, 34090, 34100, 34110, 34120, 34130, 34140, 34150, 34160, 34170, 34180, 34190, 34210, 34220, 34230, 34240, 34250, 34260, 34270, 34310, 34320, 34330, 34340, 34360, 34370, 34380, 34400, 34410, 34420, 34430, 34440, 34450, 34470, 34480, 34490, 34510, 34540, 34560, 34590, 34600, 34610, 34620, 34630, 34640, 34660, 34670, 34680, 34690, 34700, 34710, 34720, 34730, 34740, 34750, 34760, 34770, 34780, 34790, 34800, 34810, 34820, 34830, 34840, 34850, 34860, 34870, 34880, 34900, 34910, 34940, 34950, 34960, 34970];
			break;

			case 3: // 헤어3
			case 14: // 헤어3
			if(!Gender)
			codyList = [36010, 36020, 36030, 36040, 36050, 36070, 36080, 36090, 36100, 36130, 36140, 36150, 36160, 36170, 36180, 36190, 36200, 36210, 36220, 36230, 36240, 36250, 36300, 36310, 36330, 36340, 36350, 36380, 36390, 36400, 36410, 36420, 36430, 36440, 36450, 36460, 36470, 36480, 36510, 36520, 36530, 36560, 36570, 36580, 36590, 36620, 36630, 36640, 36650, 36670, 36680, 36690, 36700, 36710, 36720, 36730, 36740, 36750, 36760, 36770, 36780, 36790, 36800, 36810, 36820, 36830, 36840, 36850, 36860, 36900, 36910, 36920, 36940, 36950, 36980, 36990];

			else
			codyList = [37000, 37010, 37020, 37030, 37040, 37060, 37070, 37080, 37090, 37100, 37110, 37120, 37130, 37140, 37190, 37210, 37220, 37230, 37240, 37250, 37260, 37280, 37300, 37310, 37320, 37340, 37370, 37380, 37400, 37450, 37460, 37490, 37500, 37510, 37520, 37530, 37560, 37570, 37580, 37610, 37620, 37630, 37640, 37650, 37660, 37670, 37680, 37690, 37700, 37710, 37720, 37730, 37740, 37750, 37760, 37770, 37780, 37790, 37800, 37810, 37820, 37830, 37840, 37850, 37860, 37880, 37910, 37920, 37940, 37950, 37960, 37970, 37980, 37990, 38000, 38010, 38020, 38030, 38040, 38050, 38060, 38070, 38090, 38100, 38110, 38120, 38130, 38270, 38280, 38290, 38300, 38310, 38380, 38390, 38400, 38410, 38420, 38430, 38440, 38460, 38470, 38490, 38520, 38540, 38550, 38560, 38570, 38580, 38590, 38600, 38610, 38620, 38630, 38640, 38650];
			break;

			case 4: // 헤어4
			case 15: // 헤어4
			if(!Gender)
			codyList = [40000 , 40010, 40020, 40050, 40060, 40090, 40100, 40120, 40250, 40260, 40270, 40280, 40290, 40300, 40310, 40320, 40330, 40390, 40400, 40410, 40420, 40440, 40450, 40470, 40480, 40490, 40500, 40510, 40570, 40580, 40600, 40610, 40640, 40660, 40670, 40690, 40720, 40740, 40810, 40820, 41060, 41070, 40930, 43020, 43140, 43150, 43180, 40780, 40770, 43290, 43300, 43310, 43320, 43350, 40650, 40710, 43580, 43570, 43330, 43667, 43610, 43620, 43700, 43750, 43750, 43760, 43770, 43780, 43810, 43910, 45000, 45010, 45060, 45040, 45050, 43820, 43900, 45090, 46030, 46060, 46070, 46080, 46090, 45220, 45230, 45150, 45100, 34910, 45110, 45150, 46060, 45160, 45110, 46330, 46320, 46310, 46340, 46350, 46420, 46430, 46440, 46450, 46460, 46480, 46490, 46500, 46510, 46520, 46530, 46560, 46570, 46590, 48850, 48840, 46810, 46790, 46770, 46830, 46840, 46870, 46780, 46890, 46860];
                        
			else
			codyList = [38660, 38670, 38680, 38690, 38700, 38730, 38740, 38750, 38760, 38800, 38810, 38820, 38840, 38880, 38910, 38940, 39090, 41080, 41090, 41100, 41110, 41120, 41150, 41160, 41200, 41220, 41340, 41350, 41360, 41370, 41380, 41390, 41400, 41440, 41470, 41480, 41490, 41510, 41520, 41560, 41570, 41590, 41600, 41700, 44500, 44530, 41870, 44650, 44770, 44850, 44780, 44790, 44802, 44900, 41940, 44830, 44840, 44940, 44950, 47000, 47040, 47020, 47010, 47030, 47070, 47090, 47310, 47270, 47280, 47320, 47330, 47350, 47370, 47360, 47340, 48020, 48050, 48060, 48070, 48080, 47530, 47540, 47460, 47430, 47400, 47400, 47430, 47460, 41140, 46220, 48210, 48320, 48340, 48330, 48350, 48360, 48370, 48380 ,48410, 48650, 48570, 48580, 48640, 48650, 48660, 48730, 48740, 48770, 48780, 48790, 48810];
			break;


			case 5: // 헤어5
			case 16: // 헤어5
			if(!Gender)
			codyList = [46870, 46880, 46890, 46900, 46940, 46970, 46980, 47260, 60100, 60120, 60200, 60300, 60310];

			else
			codyList = [47560, 47570, 47580, 47590, 47600, 47610, 47620, 47630, 47640, 47650, 47660, 47670, 47680, 47690, 47700, 47710, 47720, 47730, 47740, 47750, 47760, 47770, 47780, 47790, 47800, 48020, 48050, 48060, 48070, 48080, 48130, 48140, 48210, 48220, 48320, 48330, 48340, 48350, 48360, 48370, 48380, 48410, 48430, 48450, 48480, 48490, 48500, 48510, 48520, 48530, 48540, 48550, 48560, 48570, 48580, 48640, 48650, 48660, 48840, 48850, 48900, 48960, 48970, 48990, 60000, 60060, 60070, 60080, 60090, 60110, 60130, 60140, 60150, 60160, 60170, 60180, 60190, 60210, 60220, 60230, 60240, 60250, 60260, 60270, 60280, 60290, 60320, 60330, 60340, 61050, 61060, 61070, 61080, 61090, 61100, 61110, 61120, 61130, 61140, 61150, 61160, 61170, 61180, 61190, 61200, 61210, 61220, 61230, 61240, 61250, 61260, 61270, 61280, 61290, 61300, 61310, 61320, 61330, 61340, 61350, 61360, 61370, 61380];
			break;

                                         // 헤어 리스트 끝


			case 6: // 얼굴1
			case 16: // 헤어2
			if(!Gender)
		        codyList = [20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20011, 20012, 20013, 20014, 20015, 20016, 20017, 20018, 20020, 20021, 20022, 20025, 20027, 20028, 20029, 20030, 20031, 20032, 20036, 20037, 20040, 20043, 20044, 20045, 20046, 20047, 20048, 20049, 20050, 20051, 20052, 20053, 20055, 20056, 20057, 20058, 20059, 20060, 20061, 20062, 20063, 20064, 20065, 20066, 20067, 20068, 20069, 20070, 20074, 20075, 20076, 20077, 20080, 20081, 20082, 20083, 20084, 20085, 20086, 20087, 20088, 20089, 20090, 20093, 20094, 20095, 20097, 20098, 20099, 20110, 23000, 23001, 23002, 23003, 23005, 23006, 23008, 23010, 23011, 23012];

			else
			codyList = [21002, 21003, 21004, 21005, 21006, 21007, 21008, 21009, 21010, 21011, 21012, 21013, 21014, 21015, 21016, 21017, 21020, 21021, 21023, 21024, 21026, 21027, 21028, 21029, 21030, 21031, 21033, 21036, 21038, 21041, 21042, 21043, 21044, 21045, 21048, 21050, 21052, 21053, 21056, 21058, 21059, 21061, 21062, 21063, 21065, 21073, 21074, 21075, 21077, 21078, 21079, 21080, 21081, 21082, 21083, 21084, 21085, 21089, 21090, 21091, 21092, 21093, 21094, 21095, 21096, 21097, 21098, 24002, 24003, 24004];
			break;

			case 7: // 얼굴2
			case 17: // 헤어2
			if(!Gender)
			codyList = [23015, 23016, 23017, 23018, 23019, 23020, 23023, 23024, 23025, 23026, 23027, 23028, 23029, 23031, 23032, 23033, 23035, 23038, 23039, 23040, 23041, 23042, 23043, 23044, 23053, 23054, 23056, 23057, 23060, 23061, 23062, 23063, 23067, 23068, 23069, 23072, 23073, 23074, 23075, 23079, 23080, 23081, 23082, 23083, 23084, 23085, 23086, 23087, 23088, 23089, 23090, 23091, 23092, 23095, 23096, 23097, 23099, 24061, 24098, 25006, 25007, 25011, 25014, 25016, 25017, 25021, 25022, 25023, 25024, 25025, 25027, 25033, 25058, 25057, 25049, 25053, 25029, 25020, 25043, 25044, 25063, 25062, 25050, 25080, 25079, 25083, 25055, 25085, 25088, 25089, 25091, 25073, 25075, 25084, 25099, 27010, 27011, 27038, 27039, 25093, 27008, 27006, 27022, 27006, 27008, 27037, 27052, 27064, 27065, 27066, 27069,27070,27073,27076,27077,27078,27079,27080,27081,27082,27083,27084,27085,27086, 27087, 27092, 27098];

			else
			codyList = [24007, 24008, 24011, 24012, 24014, 24015, 24018, 24020, 24021, 24022, 24023, 24027, 24031, 24035, 24037, 24038, 24039, 24041, 24050, 24055, 24058, 24060, 24067, 24068, 24071, 24072, 24073, 24077, 24080, 24081, 24084, 24087, 24088, 24091, 24097, 24099, 25000, 25008, 25015, 26003, 26004, 26005, 26009, 26014, 26017, 26022, 26023, 26027, 26028, 26029, 26030, 26031, 26032, 26062, 26061, 26053, 26056, 26034, 26026, 26046, 26067, 26066, 26054, 26086, 26085, 25155, 26089, 26091, 26094, 26095, 26097, 28011, 26076, 26079, 28013, 26096, 28016, 28017, 28044, 26099, 28014, 28008, 28027, 28008, 28014 , 28043, 28057, 28070, 28071, 28072, 28075,28076,28078,28079,28082,28085,28086,28087,28088,28089,28090,28091,28092,28093,28094,28095,28096, 28099, 28108, 28109, 28110, 28111, 28112, 28113, 28114, 28115, 28116, 28117, 28123];

			break;

			case 8: // 얼굴3
			case 18: // 얼굴3
			if(!Gender)
			codyList = [27106, 27107, 27108, 27109, 27110, 27111, 27117, 27118, 27119, 27120, 27122, 27125, 27135, 27137, 27138, 27139, 27144, 27145, 27152, 27164, 27165, 27166, 27167, 27169, 27170, 27173, 27174, 27176, 27177, 27178, 27179, 27180, 27181, 27182, 27183, 27185, 27186, 27187, 27189, 27192, 27196, 27198];

			else
			codyList = [28124, 28130, 28141, 28143, 28144, 28149, 28150, 28156, 28157, 28170, 28171, 28172, 28173, 28175, 28176, 28178, 28179, 28182, 28183, 28185, 28186, 28187, 28188, 28189, 28190, 28191, 28192, 28193, 28194, 28195, 28196, 28197, 28199, 28208, 28209, 28210, 28211, 28212, 28213, 28214, 28215, 28216, 28217, 28223, 28224, 28225, 28227, 28230, 28241, 28243, 28244, 28249, 28250, 28256, 28257, 28270, 28271, 28272, 28273, 28275, 28276, 28278, 28279, 28282, 28283, 28285, 28286, 28287, 28288, 28289, 28290, 28291];
			break;


			case 7:
			case 18: // 헤어2
			for(i = 0; i < 8; i++)
			codyList.push(Math.floor((SEL_00 >= 12 ? cm.getPlayer().getAndroid().getFace() : cm.isAngelicBuster() ? cm.getPlayer().getDressup() ? cm.getPlayer().getSecondFace() : cm.getPlayer().getFace() : cm.getPlayer().getFace()) / 1000) * 1000 + ((SEL_00 >= 12 ? cm.getPlayer().getAndroid().getFace() : cm.isAngelicBuster() ? cm.getPlayer().getDressup() ? cm.getPlayer().getSecondFace() : cm.getPlayer().getFace() : cm.getPlayer().getFace()) % 100) + i * 100);
			break;

			case 40:
			cm.openNpcCustom(cm.getClient(), 1052208, "염색");
			return;
         break;
			case 19: // 헤어2
			for(i = 0; i < 8; i++)
			codyList.push(Math.floor((SEL_00 >= 12 ? cm.getPlayer().getAndroid().getHair() : cm.isAngelicBuster() ? cm.getPlayer().getDressup() ? cm.getPlayer().getSecondHair() : cm.getPlayer().getHair() : cm.getPlayer().getHair()) / 10) * 10 + i);
			break;

			case 9:
			case 20: // 피부
			codyList = [0, 1, 2, 3, 4, 9, 10, 11, 12, 13, 15, 16, 18, 19, 24, 25, 26, 27];
			break;

			default:
			break;
		}
		if(SEL_00 < 10) {
		cm.sendStyle(selStr, codyList);
		} else if (SEL_00 == 988) {
			cm.sendGetNumber("#fs11#변경을 원하는 #r색상값#k을 입력하면 돼\r\n기존 칼라는 #d'0'#k 이야 (0 ~ 1000)", 0, 0, 1000);
		} else if(SEL_00 >= 12) {
                cm.askAvatarAndroid(selStr, codyList);
		}
	}

	else if(status == 3)
	{
		if(SEL_00 == 10)
		{
			if(!Gender)
			{
				cm.getPlayer().setHair(31002);
				cm.getPlayer().setFace(21700);
				cm.getPlayer().setGender(1);
			}
			else
			{
				cm.getPlayer().setHair(30000);
				cm.getPlayer().setFace(20100);
				cm.getPlayer().setGender(0);
			}
			cm.dispose();
			cm.fakeRelog();
			cm.updateChar();
			return;
		}
		if(SEL_00 == 988) {
			cm.getPlayer().setKeyValue(100229, "hue", selection);
			cm.dispose();
			cm.fakeRelog();
			cm.updateChar();
			cm.sendOk("변경을 완료했어! 확인해봐");
			return;
		}
		newItem = selection & 0xFF;
		if (SEL_00 >= 12) {
			switch(SEL_00)
			{
				case 12:
				case 13:
				case 14:
				case 15:
				case 19:
					cm.setHairAndroid(codyList[newItem]);
					break;
				
				case 16:
				case 17:
				case 18:
					cm.setFaceAndroid(codyList[newItem]);
					break;
				
				case 20:
					cm.setSkinAndroid(codyList[newItem]);
					break;
				
			}
			cm.dispose();
			return;
		}
		if (cm.isAngelicBuster()) {
				cm.sendNext("#fs11#어떤 모습을 스타일링 하시겠어요?\r\n\r\n#b#L1#변신전의 모습을 바꾼다#l\r\n#L2#변신후의 모습을 바꾼다#l#k");
		} else {
			if(cm.isZero() && Gender)
			{
				switch(SEL_00)
				{
					case 8:
					cm.getPlayer().setSecondBaseColor(-1);
					cm.getPlayer().setSecondAddColor(0);
					cm.getPlayer().setSecondBaseProb(0);
					case 1:
					case 2:
					case 3:
					case 4:
					cm.setZeroSecondHair(codyList[newItem]);
					break;

					case 5:
					case 6:
					case 7:
					cm.setZeroSecondFace(codyList[newItem]);
					break;

					case 9:
					cm.setZeroSecondSkin(codyList[newItem]);
					break;
				}
			}
			else
			{
				if (SEL_00 == 8) {
					cm.getPlayer().setBaseColor(-1);
					cm.getPlayer().setAddColor(0);
					cm.getPlayer().setBaseProb(0);
				}
				cm.setAvatar(4000000, codyList[newItem]);
			}
			cm.dispose();
			cm.updateChar();
		}
	} else if (status == 4) {
		if (selection == 1) {
			cm.setAvatar(4000000, codyList[newItem]);
		} else if (selection == 2) {
			switch(SEL_00)
			{
				case 8:
				cm.getPlayer().setSecondBaseColor(-1);
				cm.getPlayer().setSecondAddColor(0);
				cm.getPlayer().setSecondBaseProb(0);
				case 1:
				case 2:
				case 3:
				case 4:
				cm.setAngelicSecondHair(codyList[newItem]);
				break;

				case 5:
				case 6:
				case 7:
				cm.setAngelicSecondFace(codyList[newItem]);
				break;

				case 9:
				cm.setAngelicSecondSkin(codyList[newItem]);
				break;
			}
		}
		cm.dispose();
		cm.updateChar();
	}
		if (selection == 58) {
			cm.dispose();
			cm.openNpc(2001);
}
}
