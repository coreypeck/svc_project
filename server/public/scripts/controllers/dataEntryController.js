myApp.controller('dataEntryController', ['$scope', '$http', '$location', '$timeout', '$uibModal', 'loggedinFactory', function($scope, $http, $location, $timeout, $uibModal, loggedinFactory) {
  // console.log("dataEntryController is running");
    $scope.check = false;
    $scope.loggedinFactory = loggedinFactory;
    $scope.thing = {};
    function checkFiscal(){
      var date = new Date();
      var day = date.getDate();
      var month = date.getMonth();
      if(day == 1 && month == 9){
        var year = date.getFullYear();
        // console.log(year);
        return year;
      }else if(day > 1 && month >= 9 && month <= 11){
        var year = date.getFullYear();
        // console.log(year);
        return year;
      }else{
        var year = date.getFullYear();
        year -= 1;
        // console.log(year);
        return year;
      }
    }
    $scope.uncheck = function(id){
      console.log($scope.form);
      delete $scope.form[id];
      console.log($scope.form);
    }
    $scope.checkOctoberFirst = checkFiscal();
    $scope.isLoggedIn = function() {
        loggedinFactory.isLoggedIn().then(function(response) {
            $scope.user = response;
            if (response.user_type == 'admin') {
                $scope.check = true;
            }
        });
    }
    $scope.oneAtATime = true;
    $scope.status = {
        isCustomHeaderOpen: false,
        isFirstOpen: true,
        isFirstDisabled: false
    };
    function updateScroll() {
    window.scrollBy(0, -9000);
    }
    $scope.myFunction = function() {
        window.print();
    };

    function refreshPage() {
    location.reload();
}

    $scope.form = {
        counselor: null,
        date: null,
        sTime: null,
        eTime: null,
        location: null,
        county: null,
        clientNumber: null,
        zipCode: null,
        victimType: '',
        svcPrompt: null,
        previousContact: null,
        previousVisit: null,
        transportation: null,
        counseling: null,
        supportGroup: null,
        lawEnforcementInterview: null,
        prosecutionRelatedAdvocacy: null,
        courtAdvocacy: null,
        assistOFP_HRO: null,
        immigrationSupport: null,
        interventionWithOthers: null,
        forensicExamSupport: null,
        accompanyMedicalAppt: null,
        accompanyDentalAppt: null,
        crisis_counseling: null,
        infoAndReferral: null,
        info_crimjustice: null,
        other_emergency_justice: null,
        safeAtHome: null,
        emergencyFinancialAsst: null,
        reparationsClaimAsst: null,
        svcServices: null,
        otherAgencyReferral: null,
        otherServicesReferral: null,
        adultSexAssault: null,
        adultAbusedAsChild_family: null,
        adultAbusedAsChild_other: null,
        exposing: null,
        minorCSA_family: null,
        minorCSA_other: null,
        obscenePhoneCall: null,
        exploitation_trafficking: null,
        sexualHarassment: null,
        stalking: null,
        internetRelated: null,
        unknownViolence: null,
        bullying: null,
        childPorn: null,
        domesticViolence: null,
        elderAbuse: null,
        teenDating: null,
        sexualViolenceOther: null,
        sexualViolenceOther_specify: null,
        age: null,
        gender: null,
        trans: null,
        orientation: null,
        blind_visImpair: null,
        physDisabled: null,
        mentDisabled: null,
        deafHardHearing: null,
        devDisabled: null,
        notDisabled: null,
        unknownDisabled: null,
        otherDisabled: null,
        otherDisabled_specify: null,
        ethnicBackground: null,
        immigrantStatus: null,
        homeless: null,
        limitedEnglish: null,
        veteran: null,
        supported: null,
        advocacyType: null,
        multiple: null,
        formId: null,
        other_ethnicBackground: null,
        other_immigrantStatus: null
    };

    // MODAL WINDOW
    $scope.open = function(_confirmation) {
        var modalInstance = $uibModal.open({
            controller: "ModalInstanceCtrl",
            templateUrl: 'myModalContent.html',
            resolve: {
                confirmation: function() {
                    return _confirmation;
                }
            }
        });

    };
    //End MODAL WINDOW
  
    $scope.submitVictimForm = function() {
            if ($scope.form.date == null OR $scope.form.advocacyType == null) {
                $scope.showMessage = true
                $scope.message = "Please enter a date and check the Contact Type box before submitting your request.";
                updateScroll();
            } else {
                $scope.showMessage = false
                var standinObject = $scope.thing;
                var thingArray = Object.getOwnPropertyNames(standinObject);
                var potato = {};
                thingArray.forEach(function(propertyName) {
                    potato[propertyName] = standinObject[propertyName];
                });
                var formArray = Object.getOwnPropertyNames(potato);
                formArray.forEach(function(parameter) {
                    var parameterName = potato[parameter];
                    $scope.form[parameterName] = true;
                });
                var data = $scope.form;
                data.date_entered = new Date();
                console.log(data);
                $http.post('/dataRoute/victim', data).then(function(response) {
                        $scope.form = {
                            counselor: null,
                            date: null,
                            sTime: null,
                            eTime: null,
                            location: null,
                            county: null,
                            clientNumber: null,
                            zipCode: null,
                            victimType: '',
                            svcPrompt: null,
                            previousContact: null,
                            previousVisit: null,
                            transportation: null,
                            counseling: null,
                            supportGroup: null,
                            lawEnforcementInterview: null,
                            prosecutionRelatedAdvocacy: null,
                            courtAdvocacy: null,
                            assistOFP_HRO: null,
                            immigrationSupport: null,
                            interventionWithOthers: null,
                            forensicExamSupport: null,
                            accompanyMedicalAppt: null,
                            accompanyDentalAppt: null,
                            crisis_counseling: null,
                            infoAndReferral: null,
                            info_crimjustice: null,
                            other_emergency_justice: null,
                            safeAtHome: null,
                            emergencyFinancialAsst: null,
                            reparationsClaimAsst: null,
                            svcServices: null,
                            otherAgencyReferral: null,
                            otherServicesReferral: null,
                            adultSexAssault: null,
                            adultAbusedAsChild_family: null,
                            adultAbusedAsChild_other: null,
                            exposing: null,
                            minorCSA_family: null,
                            minorCSA_other: null,
                            obscenePhoneCall: null,
                            exploitation_trafficking: null,
                            sexualHarassment: null,
                            stalking: null,
                            internetRelated: null,
                            unknownViolence: null,
                            bullying: null,
                            childPorn: null,
                            domesticViolence: null,
                            elderAbuse: null,
                            teenDating: null,
                            sexualViolenceOther: null,
                            sexualViolenceOther_specify: null,
                            age: null,
                            gender: null,
                            trans: null,
                            orientation: null,
                            blind_visImpair: null,
                            physDisabled: null,
                            mentDisabled: null,
                            deafHardHearing: null,
                            devDisabled: null,
                            notDisabled: null,
                            unknownDisabled: null,
                            otherDisabled: null,
                            otherDisabled_specify: null,
                            ethnicBackground: null,
                            immigrantStatus: null,
                            homeless: null,
                            limitedEnglish: null,
                            veteran: null,
                            supported: null,
                            advocacyType: null,
                            multiple: null,
                            formId: null,
                            other_ethnicBackground: null,
                            other_immigrantStatus: null
                        }
                        // alert("Submissions successful of Form #20")

                        $http.get('/dataRoute/presentation_victim').then(function(response) {
                                var formSubmittedId = response.data.length -1;
                                // console.log(formSubmittedId);
                                var number = response.data[formSubmittedId].id;

                                // console.log(response.data);
                                // console.log(number);
                                $scope.confirmation = number;
                                $scope.open($scope.confirmation);
                                $scope.message = "Form Submited."
                                    // $scope.showMessage = true;
                                    // $scope.message = "Form " + response.data[formSubmittedId].id + " Submitted.";
                            },
                            function(response) {
                                $scope.showMessage = true;
                                $scope.message = "Please try again.";
                            });
                    },
                    function(response) {
                        $scope.showMessage = true;
                        $scope.message = "Please try again.";
                    });
                    }
                }
        ///Search & update victim and non victim form
    $scope.table = {};
    $scope.update = {}

    $scope.searchUpdate = function() {
        if ($scope.formId == null) {
            $scope.showMessage = true
            $scope.message = "Please enter form number before submitting your request.";
            updateScroll();
        } else {
            $scope.showMessage = false
            var data = {};
            var id = $scope.formId;
            var info = Object.getOwnPropertyNames($scope.table);
            $scope[info[0]] = true;
            if (info[0] == "phone") {
                info[0] = "victim";
            }
            data.table = info[0];
            data.number = parseInt($scope.formId);
            $http({
                method: "POST",
                url: '/reportRoute/county/edit',
                data: data
            }).then(function(response) {
                $scope.update = response.data[0];
            });
        }
    }

    ////////////UPDATE FORM /////////////////////////
    $scope.updateForm = function() {
        var data = {}
        var route = '/dataRoute/victim/';
        // console.log('type', $scope.table);
        if ($scope.table.nonvictim == true) {
            route = '/dataRoute/nonvictim/';
        }
        // console.log('route', route);
        // var info = Object.getOwnPropertyNames($scope.table);
        var id = parseInt($scope.update.id);
        data = $scope.update;
        // console.log("update id", id);
        // console.log("update data", data);
        $http({
            method: "PUT",
            url: route + id,
            data: data
        }).then(function(response) {
            // console.log("PUT Success");
            // console.log(response);
            // $scope.confirmation = 26;
            $scope.open($scope.confirmation);
        });
    }

    ///////////DELETE FORM////////////////////////////
    $scope.deleteForm = function() {
       var confirmDelete = confirm('Are you sure you want to delete this entry?');
       if(confirmDelete == false){
         return;
       } else {
        var data = {}
        var id = parseInt($scope.update.id);
        var route = '/dataRoute/victim/';
        if ($scope.table.nonvictim == true) {
            route = '/dataRoute/nonvictim/';
        }
        $http({
            method: "DELETE",
            url: route + id,
        }).then(function(response) {
            $scope.open($scope.confirmation);
            $timeout(refreshPage,1000);
        });
}
    }

///**********END OF CONTROLLER***************************************///////
}]);
