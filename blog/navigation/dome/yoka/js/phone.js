/*phone ����*/
//jquery
$(function(){//���ĵ�������Ϻ�ִ�еĴ���
	//alert($('#phoneWrap li').length);
	//mouseover(function(){}) ��껬��
	
	$('#phoneWrap li').hover(function(){
		//$(this) ��ǰ�����li
		//find('') �ڵ�ǰli����ȥ���� class������ phone
		//Ȼ��ı�css�е�bottom���Ե�ֵΪ0;
		//animate()
		//json {aaa:222,bbb:333}
		//animate({},500,function(){})
		//animate({Ҫ�ı��css},ʱ��,�ص�����)
		//�ص����� ����ִ�����ֻ�в�ִ�еĺ���
		

		$(this).find('.phone').animate({bottom:0},500);
		$(this).find('.phone-bg').animate({opacity:0.2},500);
		$(this).find('.mark').css({'display':'block'});
	
	},function(){//��껬��
		$(this).find('.phone').animate({bottom:'-20px'},500);
		$(this).find('.phone-bg').animate({opacity:1},500);
		$(this).find('.mark').css({'display':'none'});
	
	})


})