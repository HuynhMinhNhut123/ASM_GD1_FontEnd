// angular.module("myapp", []).controller("myctrl", function($scope){
//     $scope.infor = {
//       name: "Họ Tên KH: " + $scope.username,
//       phone: "Số điện thoại: " + $scope.phone,
//       date: "Ngày sinh: " + $scope.date,
//       address: "Địa chỉ: " + $scope.Address,
//       card: "CCCD / CMNN: " + $scope.card
//     };
//   });

angular.module("myapp", []).controller("myctrl", function($scope){
    $scope.infor = function() {
      $scope.name = "Họ Tên KH: " + $scope.username,
      $scope.phone = "Email: " + $scope.phone,
      $scope.date = "Địa Chỉ: " + $scope.date,
      $scope.address = "Địa Chỉ 2: " + $scope.address,
      $scope.card = "CCCD/CMND: " + $scope.card
    };
  });