import { ArrowUturnLeftIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function Regulation() {
  return (
    <div className="bg-white max-1280:mx-2">
      <div className="mx-auto container">
        <div className="uppercase text-base font-bold text-default">
          QUY ĐỊNH DÀNH CHO ỨNG VIÊN
        </div>
        <div>
          <div className="font-bold mb-4">I. Điều Khoản Sử Dụng</div>
          <ul className="list-decimal pl-10 space-y-2 mb-4">
            <li>
              <div className="font-medium mb-2">
                Cam kết khi sử dụng dịch vụ:
              </div>
              <div className="pl-4">
                Khi bạn truy cập vào trang web Topmass.vn, sử dụng các dịch vụ,
                hoặc bất kỳ ứng dụng nào mà Topmass cung cấp (gọi chung là
                &quot;Dịch vụ&quot;), bạn đồng ý tuân thủ và bị ràng buộc bởi
                các Điều Khoản Sử Dụng này (&quot;Điều Khoản&quot;). Những dịch
                vụ này thuộc quyền sở hữu hoặc quản lý của Topmass và các Điều
                Khoản này có thể ảnh hưởng đến quyền lợi và nghĩa vụ pháp lý của
                bạn. Nếu bạn không đồng ý với toàn bộ các Điều Khoản này, bạn
                không được phép truy cập hoặc sử dụng các Dịch vụ. Mọi câu hỏi
                liên quan đến Điều Khoản này, xin vui lòng liên hệ với chúng tôi
                qua email:
                <span className="font-medium">support@topmass.vn</span>.
              </div>
            </li>
            <li>
              <div className="font-medium mb-2">Cập nhật Điều Khoản:</div>
              <div className="pl-4">
                Các Điều Khoản Sử Dụng có thể được cập nhật định kỳ để đáp ứng
                yêu cầu pháp lý hoặc quy định hiện hành, cũng như để đảm bảo sự
                hoạt động hiệu quả của trang web Topmass.vn. Mọi thay đổi sẽ
                được thông báo cho bạn qua thông báo rõ ràng trên trang web.
                Những thay đổi này sẽ áp dụng cho việc sử dụng dịch vụ của
                Topmass.vn
              </div>
            </li>
            <li>
              <div className="font-medium mb-2">Chấp thuận Điều Khoản Mới:</div>
              <div className="pl-4">
                Sau khi nhận được thông báo về những thay đổi trong Điều Khoản
                Sử Dụng, nếu bạn không đồng ý với các điều khoản mới, bạn cần
                ngừng sử dụng trang web Topmass.vn. Tuy nhiên, nếu bạn tiếp tục
                sử dụng trang web này từ ngày có hiệu lực của các Điều Khoản Sử
                Dụng đã được cập nhật, bạn sẽ được xem là đã chấp nhận và đồng ý
                với các điều khoản mới này. Việc chấp thuận có thể được thực
                hiện thông qua thông báo hiển thị trên trang web của chúng tôi.
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <div className="font-bold mb-4">II. Định Nghĩa và Giải Thích</div>
          <ul className="list-decimal pl-10 space-y-2 mb-4">
            <li>
              <div className="font-medium mb-2">Cơ sở dữ liệu Topmass.vn:</div>
              <div className="pl-4">
                Tập hợp toàn bộ các thông tin liên quan đến tin tuyển dụng được
                công bố trên trang web Topmass.vn, cũng như tất cả thông tin của
                Người dùng và các nhà tuyển dụng đã đăng ký trên nền tảng này.
              </div>
            </li>
            <li>
              <div className="font-medium mb-2">
                Cơ sở dữ liệu Hồ sơ Topmass.vn:
              </div>
              <div className="pl-4">
                Là hồ sơ cá nhân của Người dùng được tạo ra và/hoặc lưu trữ
                trong cơ sở dữ liệu của Topmass.vn, phục vụ cho mục đích tìm
                kiếm việc làm hoặc tuyển dụng.
              </div>
            </li>
            <li>
              <div className="font-medium mb-2">Dịch vụ Topmass.vn:</div>
              <div className="pl-4">
                Tất cả các dịch vụ mà Topmass cung cấp cho Người dùng, bao gồm
                nhưng không giới hạn ở các chức năng tìm kiếm việc làm, hỗ trợ
                tuyển dụng, và các dịch vụ liên quan khác.
              </div>
            </li>
            <li>
              <div className="font-medium mb-2">Hồ sơ cá nhân:</div>
              <div className="pl-4">
                Là thông tin và lý lịch cá nhân (CV) mà Người dùng tạo ra và lưu
                trữ trên nền tảng, nhằm phục vụ cho việc giới thiệu bản thân với
                các nhà tuyển dụng.
              </div>
            </li>
            <li>
              <div className="font-medium mb-2">Văn bản:</div>
              <div className="pl-4">
                Bao gồm toàn bộ các loại văn bản xuất hiện trên mọi trang của
                website Topmass.vn, từ tài liệu có tác giả xác định đến các nội
                dung tìm kiếm hướng dẫn và thông tin khác.
              </div>
            </li>
            <li>
              <div className="font-medium mb-2">Bạn:</div>
              <div className="pl-4">
                Là cách gọi ngắn gọn để chỉ Người dùng dịch vụ của Topmass,
                những cá nhân hoặc tổ chức tham gia vào các hoạt động trên nền
                tảng.
              </div>
            </li>
            <li>
              <div className="font-medium mb-2">Người dùng:</div>
              <div className="pl-4">
                Chỉ bất kỳ cá nhân hoặc tổ chức nào tham gia vào việc sử dụng
                bất kỳ dịch vụ nào của trang web Topmass.vn và/hoặc các dịch vụ
                mà Topmass cung cấp.
              </div>
            </li>
            <li>
              <div className="font-medium mb-2">Nội dung Người dùng:</div>
              <div className="pl-4">
                Tất cả các loại thông tin, dữ liệu, văn bản, phần mềm, âm thanh,
                hình ảnh, đồ họa, video, quảng cáo, tin nhắn, hoặc các tài liệu
                khác mà Người dùng gửi, đăng tải hoặc thể hiện trên trang web
                Topmass.vn, nhằm phục vụ các mục đích khác nhau trong quá trình
                sử dụng dịch vụ.
              </div>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-4">III. Đăng Ký Tài Khoản</div>
          <p>
            Để có thể truy cập và sử dụng các dịch vụ mà Topmass cung cấp, bạn
            cần tiến hành đăng ký và tạo một tài khoản theo yêu cầu. Bạn cam kết
            rằng việc sử dụng tài khoản của mình sẽ tuân thủ đầy đủ các quy định
            và điều khoản do Topmass đặt ra.
          </p>
          <p>
            Trong quá trình đăng ký, bạn phải cung cấp thông tin chính xác, đầy
            đủ và cập nhật nhất. Mọi quyền lợi và nghĩa vụ liên quan đến tài
            khoản của bạn sẽ được xác định dựa trên thông tin mà bạn đã cung
            cấp. Do đó, nếu có bất kỳ thông tin nào không đúng hoặc không đầy
            đủ, Topmass sẽ không chịu trách nhiệm về những ảnh hưởng hoặc hạn
            chế đối với quyền lợi của bạn có thể phát sinh từ những thông tin
            sai lệch đó.
          </p>
          <p>
            Chúng tôi khuyến khích bạn thường xuyên kiểm tra và cập nhật thông
            tin tài khoản của mình để đảm bảo mọi thông tin luôn chính xác và
            kịp thời. Việc này sẽ giúp bạn tận dụng tối đa các dịch vụ mà
            Topmass mang lại.
          </p>
        </div>
        <div>
          <div className="font-bold mb-4">
            IV. Mật Khẩu và Bảo Mật Thông Tin
          </div>
          <div className="font-bold mb-2">Quyền của Nhà tuyển dụng:</div>
          <ul className="list-decimal pl-10 space-y-2 mb-4">
            <li>
              Khi bạn đăng ký tài khoản trên trang web Topmass.vn, bạn sẽ được
              yêu cầu tạo một mật khẩu. Để đảm bảo an toàn và tránh gian lận,
              việc giữ bí mật cho mật khẩu là rất quan trọng. Bạn không được
              phép tiết lộ hoặc chia sẻ mật khẩu của mình với bất kỳ ai. Nếu bạn
              nghi ngờ rằng có người khác biết mật khẩu của mình, hãy ngay lập
              tức thông báo cho chúng tôi qua email tại
              <span className="font-medium">support@topmass.vn</span>.
            </li>
            <li>
              Trong trường hợp Topmass.vn có lý do chính đáng để nghi ngờ rằng
              tài khoản của bạn có thể bị xâm phạm hoặc sử dụng sai mục đích,
              chúng tôi có quyền yêu cầu bạn thay đổi mật khẩu hoặc tạm dừng tài
              khoản của bạn cho đến khi tình hình được làm rõ.
            </li>
          </ul>
          <p>
            Nếu bạn quên mật khẩu hoặc phát hiện ra việc sử dụng không đúng cách
            tài khoản của mình trên trang web Topmass.vn, bạn sẽ phải chịu trách
            nhiệm về tất cả các thiệt hại hoặc tổn thất phát sinh từ tình huống
            này. Hơn nữa, bạn cũng có nghĩa vụ bồi thường cho Topmass trong
            trường hợp xảy ra mất mát hoặc thiệt hại liên quan đến tài khoản của
            bạn. Chúng tôi khuyến khích bạn thường xuyên cập nhật và chọn mật
            khẩu mạnh để bảo vệ tài khoản của mình một cách tốt nhất.
          </p>
        </div>
        <div>
          <div className="font-bold mb-4">
            V. Quyền Truy Cập và Thu Thập Thông Tin
          </div>
          <ul className="list-decimal pl-10 space-y-2 mb-4">
            <li>
              <p>
                Khi bạn sử dụng trang web Topmass.vn, bạn đồng ý rằng chúng tôi
                có quyền thu thập các thông tin sau từ bạn (bao gồm cả mọi thay
                đổi hoặc cập nhật có thể xảy ra):
              </p>
              <ul className="list-circle pl-10 space-y-2 mb-4">
                <li>
                  <span className="font-medium">Thông tin cá nhân:</span> Bao
                  gồm nhưng không giới hạn ở tên, số điện thoại, địa chỉ email
                  và các thông tin khác mà bạn cung cấp để tạo tài khoản.
                </li>
                <li>
                  <span className="font-medium">Thông tin chung:</span> Bao gồm
                  các dữ liệu về kinh nghiệm làm việc, định hướng nghề nghiệp,
                  mục tiêu công việc, trình độ năng lực và thu nhập.
                </li>
              </ul>
            </li>
            <li>
              Bạn đồng ý và xác nhận rằng mình hoàn toàn chịu trách nhiệm về
              hình thức, nội dung và độ chính xác của bất kỳ hồ sơ hoặc tài liệu
              nào mà bạn đăng tải trên trang web Topmass.vn. Đồng thời, bạn cũng
              sẽ chịu trách nhiệm cho bất kỳ hậu quả nào phát sinh từ việc đăng
              tải thông tin đó.
            </li>
            <li>
              Topmass có quyền giới thiệu cho bạn các dịch vụ và sản phẩm của
              bên thứ ba dựa trên các thông tin mà bạn đã cung cấp trong quá
              trình đăng ký hoặc vào bất kỳ thời điểm nào sau đó. Các đề xuất
              này có thể được thực hiện bởi Topmass hoặc bởi các bên thứ ba.
            </li>
            <li>
              Chúng tôi có quyền tuân thủ các yêu cầu pháp lý, yêu cầu từ cơ
              quan thực thi pháp luật hoặc cơ quan quản lý có thẩm quyền, bao
              gồm cả việc công bố một số thông tin nhất định của người dùng.
              Ngoài ra, các cơ quan có thẩm quyền có quyền giữ lại bản sao thông
              tin của bạn.
            </li>
            <li>
              Bạn nhận thức rõ rằng tất cả thông tin mà bạn cung cấp, bao gồm
              thông tin cá nhân và hồ sơ tài khoản (kèm theo mọi thay đổi hoặc
              cập nhật nếu có) sẽ được công khai cho các nhà tuyển dụng tiềm
              năng trên Topmass với sự đồng ý của bạn.
            </li>
            <li>
              Topmass cam kết bảo vệ quyền riêng tư và bảo mật thông tin của
              người dùng. Nếu bạn không muốn hồ sơ cá nhân của mình bị công
              khai, hãy tắt tính năng tìm việc và tùy chọn cho phép nhà tuyển
              dụng xem hồ sơ của bạn để tránh bị làm phiền.
            </li>
            <li>
              Bạn hiểu rằng bạn không có quyền sở hữu đối với tài khoản của
              mình. Trong trường hợp bạn quyết định hủy tài khoản trên
              Topmass.vn hoặc tài khoản của bạn bị chấm dứt, tất cả thông tin
              tài khoản của bạn (bao gồm sơ yếu lý lịch, thông tin cá nhân, thư
              xin việc và các công việc đã lưu) sẽ bị đánh dấu là xóa và có thể
              bị gỡ bỏ khỏi cơ sở dữ liệu của Topmass. Thông tin có thể vẫn hiển
              thị trong một thời gian do sự trì hoãn trong quá trình xóa từ các
              máy chủ của chúng tôi hoặc yêu cầu từ cơ quan chức năng. Thêm vào
              đó, bên thứ ba có thể giữ lại bản sao thông tin của bạn.
            </li>
            <li>
              Topmass có quyền xóa tài khoản và toàn bộ thông tin của bạn sau
              một thời gian dài không hoạt động, được định nghĩa là từ ... tháng
              trở lên. Nếu bạn muốn khôi phục thông tin của mình, bạn cần có sự
              đồng ý từ Topmass.
            </li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-4">
            VI. Tuyên Bố Về Quyền Sở Hữu Trí Tuệ
          </div>
          <ul className="list-decimal pl-10 space-y-2 mb-4">
            <li>
              Bạn cam kết và đảm bảo rằng: (i) bạn là chủ sở hữu hoặc có quyền
              hợp pháp đối với tất cả Nội dung mà bạn đăng tải lên hoặc thông
              qua Dịch vụ, và bạn có quyền cấp các quyền và giấy phép theo các
              Điều Khoản Sử Dụng này; (ii) việc đăng và sử dụng Nội dung trên
              hoặc thông qua Dịch vụ không xâm phạm quyền lợi hợp pháp của bất
              kỳ bên thứ ba nào, bao gồm nhưng không giới hạn ở quyền riêng tư,
              quyền công khai, bản quyền, nhãn hiệu thương mại và các quyền sở
              hữu trí tuệ khác; (iii) bạn đồng ý chịu trách nhiệm thanh toán tất
              cả các khoản phí bản quyền, lệ phí và bất kỳ khoản chi phí nào
              khác liên quan đến Nội dung bạn đã đăng tải; và (iv) bạn có quyền
              và đủ năng lực pháp lý để đồng ý tham gia vào các Điều Khoản Sử
              Dụng này.
            </li>
            <li>
              2Dịch vụ của chúng tôi bao gồm Nội dung mà Topmass sở hữu hoặc
              được cấp phép (&quotl;Nội dung Topmass&quot;). Nội dung Topmass
              được bảo vệ bởi các quyền sở hữu trí tuệ như bản quyền, nhãn hiệu
              thương mại, bằng sáng chế và bí mật thương mại. Giữa bạn và
              Topmass, tất cả các quyền về Dịch vụ và Nội dung Topmass thuộc về
              Topmass. Bạn không được phép xóa, thay đổi hoặc che giấu bất kỳ
              thông báo nào về bản quyền, nhãn hiệu thương mại hay quyền sở hữu
              khác liên quan đến Nội dung Topmass, và bạn không có quyền sao
              chép, sửa đổi, điều chỉnh, phát hành lại hoặc khai thác Nội dung
              Topmass mà không có sự đồng ý bằng văn bản của chúng tôi.
            </li>
            <li>
              Logo và tên gọi Topmass là nhãn hiệu thương mại của chúng tôi và
              việc sao chép, làm giả hoặc sử dụng toàn bộ hoặc một phần mà không
              có sự cho phép trước bằng văn bản từ Topmass là không được phép.
              Tất cả tiêu đề trang, đồ họa tùy chỉnh, biểu tượng nút và tập lệnh
              cũng được coi là nhãn hiệu dịch vụ hoặc nhãn hiệu thương mại của
              Topmass và không thể sử dụng mà không có sự đồng ý từ chúng tôi.
            </li>
            <li>
              Mặc dù chúng tôi nỗ lực hết mình để cung cấp Dịch vụ liên tục và
              không gián đoạn, nhưng có thể xảy ra tình trạng gián đoạn do bảo
              trì, nâng cấp, sự cố kỹ thuật hoặc các vấn đề liên quan đến kết
              nối mạng. Topmass cũng có quyền xóa bất kỳ Nội dung nào mà chúng
              tôi cho rằng vi phạm các Điều Khoản này, vi phạm pháp luật hoặc có
              tính chất lăng mạ, gây rối, xúc phạm hoặc đe dọa đến người dùng.
              Chúng tôi có quyền đình chỉ tài khoản người dùng và ngăn cản quyền
              truy cập của họ nếu có hành vi vi phạm. Nội dung đã bị xóa có thể
              được lưu trữ cho mục đích tuân thủ pháp luật, nhưng không thể được
              truy xuất nếu không có yêu cầu hợp lệ từ tòa án. Topmass không
              chịu trách nhiệm pháp lý cho bất kỳ sự thay đổi, tạm ngừng hoặc
              gián đoạn nào của Dịch vụ hoặc việc mất mát bất kỳ Nội dung nào.
              Bạn cũng nhận thức rằng việc truyền tải thông tin qua Internet có
              thể không an toàn.
            </li>
            <li>
              Topmass không chịu trách nhiệm về bất kỳ thông tin nào được đăng
              tải bởi bên thứ ba trên nền tảng của chúng tôi. Chúng tôi sẽ cố
              gắng tối đa để kiểm soát và hạn chế các trường hợp thông tin lừa
              đảo hoặc không chính xác nhằm bảo vệ người dùng. Tuy nhiên,
              Topmass không đảm bảo tính chính xác, độ tin cậy của Nội dung
              người dùng, các sản phẩm phái sinh từ Nội dung người dùng hoặc bất
              kỳ thông tin liên lạc nào khác. Bạn thừa nhận rằng việc tin tưởng
              vào thông tin từ người dùng khác là hoàn toàn do bạn tự chịu rủi
              ro.
            </li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-4">
            VII. Tuyên Bố Miễn Trừ Trách Nhiệm
          </div>
          <ul className="list-decimal pl-10 space-y-2 mb-4">
            <li>
              Topmass không đảm bảo rằng Dịch vụ sẽ hoạt động liên tục, không có
              lỗi, hoặc không bị gián đoạn. Chúng tôi cũng không cam kết rằng
              các lỗi sẽ được sửa chữa kịp thời, hay rằng Dịch vụ và máy chủ
              cung cấp Dịch vụ hoàn toàn an toàn, không chứa bất kỳ thành phần
              độc hại nào, bao gồm nhưng không giới hạn ở virus. Topmass không
              đưa ra bất kỳ tuyên bố nào về tính chính xác, đầy đủ hay tính hữu
              ích của thông tin (bao gồm cả các hướng dẫn) liên quan đến Dịch
              vụ. Bạn chấp nhận rằng việc sử dụng Dịch vụ là hoàn toàn do bạn tự
              quyết định và chịu rủi ro. Chúng tôi cũng không đảm bảo rằng việc
              sử dụng Dịch vụ của bạn tuân thủ luật pháp của bất kỳ khu vực pháp
              lý nào cụ thể. Đặc biệt, một số khu vực pháp lý có thể hạn chế
              hoặc không cho phép các tuyên bố miễn trừ trách nhiệm đối với các
              bảo đảm ngụ ý hoặc các bảo đảm khác, vì vậy các tuyên bố miễn trừ
              trách nhiệm trên có thể không áp dụng cho bạn trong phạm vi luật
              pháp của khu vực pháp lý nơi bạn cư trú.
            </li>
            <li>
              Khi bạn truy cập hoặc sử dụng Dịch vụ, bạn tuyên bố và cam kết
              rằng tất cả hoạt động của bạn là hợp pháp trong mọi khu vực pháp
              lý mà bạn thực hiện việc truy cập hoặc sử dụng Dịch vụ.
            </li>
            <li>
              Topmass không xác nhận nội dung do người dùng tạo ra và từ chối
              mọi trách nhiệm đối với bất kỳ cá nhân hay tổ chức nào về bất kỳ
              tổn thất, thiệt hại (bao gồm cả thiệt hại thực tế, thiệt hại gián
              tiếp, thiệt hại do hậu quả hoặc bất kỳ thiệt hại nào khác), thương
              tích, khiếu nại, trách nhiệm pháp lý hay nguyên nhân nào phát sinh
              từ hoặc liên quan đến bất kỳ nội dung nào.
            </li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-4">
            VIII. Giới Hạn Trách Nhiệm Pháp Lý
          </div>
          <p>
            Trong mọi tình huống, Topmass không chịu trách nhiệm pháp lý đối với
            bạn về bất kỳ tổn thất hoặc thiệt hại nào phát sinh dưới bất kỳ hình
            thức nào. Điều này bao gồm nhưng không giới hạn ở các tổn thất hoặc
            thiệt hại trực tiếp, gián tiếp, kinh tế, cảnh báo, đặc biệt, do
            trừng phạt, ngẫu nhiên hoặc do hậu quả, liên quan trực tiếp hoặc
            gián tiếp đến:
          </p>

          <ul className="list-lower-alpha pl-10 space-y-2 mb-4">
            <li>Dịch vụ</li>
            <li>Nội dung Topmass</li>
            <li>Nội dung do người dùng tạo ra</li>
            <li>
              Việc bạn sử dụng, không thể sử dụng hoặc hiệu quả của Dịch vụ
            </li>
            <li>
              Mọi hành động được thực hiện liên quan đến việc điều tra của
              Topmass hoặc cơ quan thực thi pháp luật về việc sử dụng Dịch vụ
              của bạn hoặc của bất kỳ bên nào khác
            </li>
            <li>
              Bất kỳ hành động nào liên quan đến quyền sở hữu bản quyền hoặc
              quyền sở hữu trí tuệ khác
            </li>
            <li>Mọi lỗi hoặc thiếu sót trong hoạt động của Dịch vụ</li>
            <li>
              Mọi thiệt hại đối với máy tính, thiết bị di động, thiết bị hoặc
              công nghệ khác của người dùng, bao gồm nhưng không giới hạn ở
              thiệt hại do bất kỳ hành vi vi phạm bảo mật nào, hoặc do bất kỳ
              virus, lỗi, giả mạo, gian lận, thiếu sót, gián đoạn, khiếm khuyết,
              trì hoãn trong quá trình hoạt động hoặc truyền dẫn, lỗi mạng, dòng
              máy tính, các sự cố kỹ thuật khác hoặc trục trặc khác.
            </li>
          </ul>
          <p>
            Điều này bao gồm cả thiệt hại do mất lợi nhuận, mất uy tín, mất dữ
            liệu, gián đoạn hoạt động, độ chính xác của kết quả hoặc bất kỳ lỗi
            hoặc trục trặc máy tính nào. Dù Topmass có khả năng dự đoán được
            hoặc đã được thông báo về khả năng xảy ra các thiệt hại đó, cũng
            không có điều gì trong Điều Khoản này sẽ dẫn đến trách nhiệm pháp lý
            của Topmass đối với bạn hoặc bất kỳ ai khác về mất mát, thiệt hại
            hoặc thương tích, bao gồm nhưng không giới hạn ở thương tích cá nhân
            hoặc tử vong.
          </p>
        </div>
        <div>
          <div className="font-bold mb-4">IX. Giải Quyết Tranh Chấp</div>
          <ul className="list-decimal pl-10 space-y-2 mb-4">
            <li>
              Tất cả các tranh chấp phát sinh trong quá trình sử dụng dịch vụ
              của Topmass sẽ được giải quyết theo quy định của pháp luật hiện
              hành tại Cộng hòa xã hội chủ nghĩa Việt Nam.
            </li>
            <li>
              <p>
                Mọi khiếu nại liên quan đến việc sử dụng dịch vụ cần được gửi
                đến Topmass ngay sau khi xảy ra sự việc. Thông tin liên hệ để
                gửi khiếu nại là:
              </p>
              <ul className="list-circle pl-10 mb-4 space-y-2">
                <li>
                  Địa chỉ: Tầng 5, Tòa nhà Mộc Gia, 54/31 Phổ Quang, Phường 02,
                  Quận Tân Bình, TP. Hồ Chí Minh
                </li>
                <li>Điện thoại: 028 71000 555</li>
                <li>Email: support@topmass.vn</li>
              </ul>
            </li>
            <li>
              Topmass sẽ căn cứ vào từng tình huống cụ thể để đề xuất phương án
              giải quyết phù hợp. Người khiếu nại có trách nhiệm cung cấp đầy đủ
              các tài liệu, bằng chứng liên quan đến khiếu nại của mình và phải
              chịu trách nhiệm về tính chính xác, trung thực của các thông tin
              đó theo quy định của pháp luật.
            </li>
            <li>
              Topmass chỉ xem xét, hỗ trợ giải quyết các khiếu nại của người
              dùng trong trường hợp thông tin đăng ký tài khoản được cung cấp
              đầy đủ, chính xác và trung thực.
            </li>
            <li>
              Đối với các tranh chấp giữa người dùng với nhau hoặc với bên thứ
              ba, Topmass có thể cung cấp thông tin liên lạc của các bên liên
              quan để họ tự thương lượng, hoặc tùy vào tình hình thực tế để đưa
              ra giải pháp thích hợp. Topmass cam kết bảo vệ quyền lợi hợp pháp
              và chính đáng của người dùng trong mọi trường hợp.
            </li>
            <li>
              Người dùng đồng ý bảo vệ, bồi hoàn và loại trừ Topmass khỏi mọi
              nghĩa vụ pháp lý, các chi phí, tổn thất, bao gồm nhưng không giới
              hạn ở án phí và phí luật sư, phát sinh từ việc giải quyết tranh
              chấp hoặc do sự vi phạm của người dùng trong quá trình sử dụng
              dịch vụ.
            </li>
            <li>
              Nếu tranh chấp không được giải quyết trong vòng sáu mươi (60) ngày
              kể từ ngày một bên thông báo cho bên còn lại bằng văn bản về sự
              phát sinh tranh chấp, một trong các bên có quyền đưa vụ việc ra
              tòa án có thẩm quyền tại TP. Hà Nội theo quy định của pháp luật.
              Bên thua kiện sẽ chịu toàn bộ chi phí tố tụng tại tòa án.
            </li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-4">X. Hiệu Lực</div>
          <ul className="list-decimal pl-10 space-y-2 mb-4">
            <li>
              Các quy định trong Điều Khoản Sử Dụng này có thể được Topmass cập
              nhật hoặc chỉnh sửa mà không cần thông báo trước cho người dùng.
              Topmass sẽ công bố rõ ràng trên trang web về các thay đổi, bổ sung
              và cập nhật đến bạn để đảm bảo bạn đồng ý với những điều chỉnh đó.
              Hình thức thông báo có thể bao gồm nhưng không giới hạn ở việc gửi
              email, thông báo qua tài khoản Topmass hoặc hiển thị trên trang
              web trước khi các thay đổi có hiệu lực. Nếu bạn không đồng ý với
              các cập nhật hoặc sửa đổi, bạn không có quyền tiếp tục sử dụng
              dịch vụ của Topmass.
            </li>
            <li>
              Trong trường hợp một hoặc một số điều khoản trong Điều Khoản Sử
              Dụng này mâu thuẫn với quy định của pháp luật và bị tòa án tuyên
              bố là vô hiệu, điều khoản đó sẽ được điều chỉnh để phù hợp với quy
              định hiện hành, trong khi các điều khoản còn lại của Điều Khoản Sử
              Dụng vẫn giữ nguyên giá trị và hiệu lực.
            </li>
            <li>
              Điều Khoản Sử Dụng này có giá trị tương đương như một hợp đồng.
              Người dùng hiểu rằng đây là một hợp đồng điện tử, và giá trị pháp
              lý của hợp đồng điện tử không thể bị phủ nhận chỉ vì nó được thể
              hiện dưới dạng thông điệp dữ liệu theo quy định của pháp luật về
              giao dịch điện tử. Bằng cách nhấn vào nút “Tôi đồng ý”, người dùng
              hoàn toàn đồng ý và hiểu rõ các điều khoản trong hợp đồng này, và
              hợp đồng sẽ có hiệu lực ngay từ thời điểm đó. Nếu bạn vi phạm các
              điều khoản này, bạn đồng ý chịu hoàn toàn trách nhiệm và bồi
              thường thiệt hại (nếu có) cho Topmass.
            </li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-4">XI. Thông Tin Liên Lạc</div>
          <ul className="list-decimal pl-10 space-y-2 mb-4">
            <li>
              Nếu bạn có bất kỳ thắc mắc nào liên quan đến các quy định trong
              Điều Khoản Sử Dụng này, xin vui lòng liên hệ với chúng tôi qua địa
              chỉ email <span className="font-medium">support@Topmass.vn</span>.
              Đội ngũ hỗ trợ của Topmass luôn sẵn sàng tiếp nhận và giải đáp mọi
              câu hỏi của bạn một cách nhanh chóng và hiệu quả. Chúng tôi rất
              mong muốn nhận được ý kiến từ bạn để cải thiện dịch vụ của mình.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
