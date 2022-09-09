import { g as getDefaultExportFromCjs } from "./index.02372354.js";
function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var pubnub_min$2 = { exports: {} };
/*! 5.0.1 / Consumer  */
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(window, function() {
    return function(e) {
      var t = {};
      function n(r) {
        if (t[r])
          return t[r].exports;
        var i = t[r] = { i: r, l: false, exports: {} };
        return e[r].call(i.exports, i, i.exports, n), i.l = true, i.exports;
      }
      return n.m = e, n.c = t, n.d = function(e2, t2, r) {
        n.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: r });
      }, n.r = function(e2) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      }, n.t = function(e2, t2) {
        if (1 & t2 && (e2 = n(e2)), 8 & t2)
          return e2;
        if (4 & t2 && "object" == typeof e2 && e2 && e2.__esModule)
          return e2;
        var r = /* @__PURE__ */ Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", { enumerable: true, value: e2 }), 2 & t2 && "string" != typeof e2)
          for (var i in e2)
            n.d(r, i, function(t3) {
              return e2[t3];
            }.bind(null, i));
        return r;
      }, n.n = function(e2) {
        var t2 = e2 && e2.__esModule ? function() {
          return e2.default;
        } : function() {
          return e2;
        };
        return n.d(t2, "a", t2), t2;
      }, n.o = function(e2, t2) {
        return Object.prototype.hasOwnProperty.call(e2, t2);
      }, n.p = "", n(n.s = 31);
    }([function(e, t) {
      e.exports = function(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }, e.exports.default = e.exports, e.exports.__esModule = true;
    }, function(e, t, n) {
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      t.default = { PNTimeOperation: "PNTimeOperation", PNHistoryOperation: "PNHistoryOperation", PNDeleteMessagesOperation: "PNDeleteMessagesOperation", PNFetchMessagesOperation: "PNFetchMessagesOperation", PNMessageCounts: "PNMessageCountsOperation", PNSubscribeOperation: "PNSubscribeOperation", PNUnsubscribeOperation: "PNUnsubscribeOperation", PNPublishOperation: "PNPublishOperation", PNSignalOperation: "PNSignalOperation", PNAddMessageActionOperation: "PNAddActionOperation", PNRemoveMessageActionOperation: "PNRemoveMessageActionOperation", PNGetMessageActionsOperation: "PNGetMessageActionsOperation", PNCreateUserOperation: "PNCreateUserOperation", PNUpdateUserOperation: "PNUpdateUserOperation", PNDeleteUserOperation: "PNDeleteUserOperation", PNGetUserOperation: "PNGetUsersOperation", PNGetUsersOperation: "PNGetUsersOperation", PNCreateSpaceOperation: "PNCreateSpaceOperation", PNUpdateSpaceOperation: "PNUpdateSpaceOperation", PNDeleteSpaceOperation: "PNDeleteSpaceOperation", PNGetSpaceOperation: "PNGetSpacesOperation", PNGetSpacesOperation: "PNGetSpacesOperation", PNGetMembersOperation: "PNGetMembersOperation", PNUpdateMembersOperation: "PNUpdateMembersOperation", PNGetMembershipsOperation: "PNGetMembershipsOperation", PNUpdateMembershipsOperation: "PNUpdateMembershipsOperation", PNListFilesOperation: "PNListFilesOperation", PNGenerateUploadUrlOperation: "PNGenerateUploadUrlOperation", PNPublishFileOperation: "PNPublishFileOperation", PNGetFileUrlOperation: "PNGetFileUrlOperation", PNDownloadFileOperation: "PNDownloadFileOperation", PNGetAllUUIDMetadataOperation: "PNGetAllUUIDMetadataOperation", PNGetUUIDMetadataOperation: "PNGetUUIDMetadataOperation", PNSetUUIDMetadataOperation: "PNSetUUIDMetadataOperation", PNRemoveUUIDMetadataOperation: "PNRemoveUUIDMetadataOperation", PNGetAllChannelMetadataOperation: "PNGetAllChannelMetadataOperation", PNGetChannelMetadataOperation: "PNGetChannelMetadataOperation", PNSetChannelMetadataOperation: "PNSetChannelMetadataOperation", PNRemoveChannelMetadataOperation: "PNRemoveChannelMetadataOperation", PNSetMembersOperation: "PNSetMembersOperation", PNSetMembershipsOperation: "PNSetMembershipsOperation", PNPushNotificationEnabledChannelsOperation: "PNPushNotificationEnabledChannelsOperation", PNRemoveAllPushNotificationsOperation: "PNRemoveAllPushNotificationsOperation", PNWhereNowOperation: "PNWhereNowOperation", PNSetStateOperation: "PNSetStateOperation", PNHereNowOperation: "PNHereNowOperation", PNGetStateOperation: "PNGetStateOperation", PNHeartbeatOperation: "PNHeartbeatOperation", PNChannelGroupsOperation: "PNChannelGroupsOperation", PNRemoveGroupOperation: "PNRemoveGroupOperation", PNChannelsForGroupOperation: "PNChannelsForGroupOperation", PNAddChannelsToGroupOperation: "PNAddChannelsToGroupOperation", PNRemoveChannelsFromGroupOperation: "PNRemoveChannelsFromGroupOperation", PNAccessManagerGrant: "PNAccessManagerGrant", PNAccessManagerGrantToken: "PNAccessManagerGrantToken", PNAccessManagerAudit: "PNAccessManagerAudit", PNAccessManagerRevokeToken: "PNAccessManagerRevokeToken", PNHandshakeOperation: "PNHandshakeOperation", PNReceiveMessagesOperation: "PNReceiveMessagesOperation" }, e.exports = t.default;
    }, function(e, t, n) {
      e.exports = {};
    }, function(e, t, n) {
      (function(t2) {
        function n2(e2) {
          return encodeURIComponent(e2).replace(/[!~*'()]/g, function(e3) {
            return "%".concat(e3.charCodeAt(0).toString(16).toUpperCase());
          });
        }
        function r(e2) {
          return function(e3) {
            var t3 = [];
            return Object.keys(e3).forEach(function(e4) {
              return t3.push(e4);
            }), t3;
          }(e2).sort();
        }
        var i = "The Objects v1 API has been deprecated.\nYou can learn more about Objects v2 API at https://www.pubnub.com/docs/web-javascript/api-reference-objects.\nIf you have questions about the Objects v2 API or require additional help with migrating to the new data model, please contact PubNub Support at support@pubnub.com.";
        e.exports = { signPamFromParams: function(e2) {
          return r(e2).map(function(t3) {
            return "".concat(t3, "=").concat(n2(e2[t3]));
          }).join("&");
        }, endsWith: function(e2, t3) {
          return -1 !== e2.indexOf(t3, this.length - t3.length);
        }, createPromise: function() {
          var e2, t3;
          return { promise: new Promise(function(n3, r2) {
            e2 = n3, t3 = r2;
          }), reject: t3, fulfill: e2 };
        }, encodeString: n2, deprecated: function(e2) {
          return function() {
            var n3, r2;
            void 0 !== t2 && ("test" !== (null === (n3 = t2) || void 0 === n3 || null === (r2 = n3.env) || void 0 === r2 ? void 0 : "production") && console.warn(i));
            return e2.apply(void 0, arguments);
          };
        } };
      }).call(this, n(42));
    }, function(e, t) {
      e.exports = function(e2, t2, n) {
        return t2 in e2 ? Object.defineProperty(e2, t2, { value: n, enumerable: true, configurable: true, writable: true }) : e2[t2] = n, e2;
      }, e.exports.default = e.exports, e.exports.__esModule = true;
    }, function(e, t) {
      e.exports = function(e2, t2) {
        if (!(e2 instanceof t2))
          throw new TypeError("Cannot call a class as a function");
      }, e.exports.default = e.exports, e.exports.__esModule = true;
    }, function(e, t) {
      function n(e2, t2) {
        for (var n2 = 0; n2 < t2.length; n2++) {
          var r = t2[n2];
          r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e2, r.key, r);
        }
      }
      e.exports = function(e2, t2, r) {
        return t2 && n(e2.prototype, t2), r && n(e2, r), e2;
      }, e.exports.default = e.exports, e.exports.__esModule = true;
    }, function(e, t) {
      function n(t2) {
        return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? (e.exports = n = function(e2) {
          return typeof e2;
        }, e.exports.default = e.exports, e.exports.__esModule = true) : (e.exports = n = function(e2) {
          return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
        }, e.exports.default = e.exports, e.exports.__esModule = true), n(t2);
      }
      e.exports = n, e.exports.default = e.exports, e.exports.__esModule = true;
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i = r(n(5)), o = r(n(6)), a = r(n(4)), u = r(n(17)), s = (n(2), function() {
        function e2(t2) {
          var n2, r2, o2, s2 = t2.setup;
          if ((0, i.default)(this, e2), (0, a.default)(this, "subscribeKey", void 0), (0, a.default)(this, "publishKey", void 0), (0, a.default)(this, "secretKey", void 0), (0, a.default)(this, "cipherKey", void 0), (0, a.default)(this, "authKey", void 0), (0, a.default)(this, "UUID", void 0), (0, a.default)(this, "proxy", void 0), (0, a.default)(this, "instanceId", void 0), (0, a.default)(this, "sdkName", void 0), (0, a.default)(this, "sdkFamily", void 0), (0, a.default)(this, "partnerId", void 0), (0, a.default)(this, "filterExpression", void 0), (0, a.default)(this, "suppressLeaveEvents", void 0), (0, a.default)(this, "secure", void 0), (0, a.default)(this, "origin", void 0), (0, a.default)(this, "logVerbosity", void 0), (0, a.default)(this, "useInstanceId", void 0), (0, a.default)(this, "useRequestId", void 0), (0, a.default)(this, "keepAlive", void 0), (0, a.default)(this, "keepAliveSettings", void 0), (0, a.default)(this, "autoNetworkDetection", void 0), (0, a.default)(this, "announceSuccessfulHeartbeats", void 0), (0, a.default)(this, "announceFailedHeartbeats", void 0), (0, a.default)(this, "_presenceTimeout", void 0), (0, a.default)(this, "_heartbeatInterval", void 0), (0, a.default)(this, "_subscribeRequestTimeout", void 0), (0, a.default)(this, "_transactionalRequestTimeout", void 0), (0, a.default)(this, "_useSendBeacon", void 0), (0, a.default)(this, "_PNSDKSuffix", void 0), (0, a.default)(this, "requestMessageCountThreshold", void 0), (0, a.default)(this, "restore", void 0), (0, a.default)(this, "dedupeOnSubscribe", void 0), (0, a.default)(this, "maximumCacheSize", void 0), (0, a.default)(this, "customEncrypt", void 0), (0, a.default)(this, "customDecrypt", void 0), (0, a.default)(this, "fileUploadPublishRetryLimit", void 0), (0, a.default)(this, "useRandomIVs", void 0), (0, a.default)(this, "enableSubscribeBeta", void 0), this._PNSDKSuffix = {}, this.instanceId = "pn-".concat(u.default.createUUID()), this.secretKey = s2.secretKey || s2.secret_key, this.subscribeKey = s2.subscribeKey || s2.subscribe_key, this.publishKey = s2.publishKey || s2.publish_key, this.sdkName = s2.sdkName, this.sdkFamily = s2.sdkFamily, this.partnerId = s2.partnerId, this.setAuthKey(s2.authKey), this.setCipherKey(s2.cipherKey), this.setFilterExpression(s2.filterExpression), "string" != typeof s2.origin && !Array.isArray(s2.origin) && void 0 !== s2.origin)
            throw new Error("Origin must be either undefined, a string or a list of strings.");
          if (this.origin = s2.origin || Array.from({ length: 20 }, function(e3, t3) {
            return "ps".concat(t3 + 1, ".pndsn.com");
          }), this.secure = s2.ssl || false, this.restore = s2.restore || false, this.proxy = s2.proxy, this.keepAlive = s2.keepAlive, this.keepAliveSettings = s2.keepAliveSettings, this.autoNetworkDetection = s2.autoNetworkDetection || false, this.dedupeOnSubscribe = s2.dedupeOnSubscribe || false, this.maximumCacheSize = s2.maximumCacheSize || 100, this.customEncrypt = s2.customEncrypt, this.customDecrypt = s2.customDecrypt, this.fileUploadPublishRetryLimit = null !== (n2 = s2.fileUploadPublishRetryLimit) && void 0 !== n2 ? n2 : 5, this.useRandomIVs = null === (r2 = s2.useRandomIVs) || void 0 === r2 || r2, this.enableSubscribeBeta = null !== (o2 = s2.enableSubscribeBeta) && void 0 !== o2 && o2, s2.enableSubscribeBeta && true === s2.enableSubscribeBeta)
            throw new Error("not implemented");
          "undefined" != typeof location && "https:" === location.protocol && (this.secure = true), this.logVerbosity = s2.logVerbosity || false, this.suppressLeaveEvents = s2.suppressLeaveEvents || false, this.announceFailedHeartbeats = s2.announceFailedHeartbeats || true, this.announceSuccessfulHeartbeats = s2.announceSuccessfulHeartbeats || false, this.useInstanceId = s2.useInstanceId || false, this.useRequestId = s2.useRequestId || false, this.requestMessageCountThreshold = s2.requestMessageCountThreshold, this.setTransactionTimeout(s2.transactionalRequestTimeout || 15e3), this.setSubscribeTimeout(s2.subscribeRequestTimeout || 31e4), this.setSendBeaconConfig(s2.useSendBeacon || true), s2.presenceTimeout ? this.setPresenceTimeout(s2.presenceTimeout) : this._presenceTimeout = 300, null != s2.heartbeatInterval && this.setHeartbeatInterval(s2.heartbeatInterval), this.setUUID(s2.uuid);
        }
        return (0, o.default)(e2, [{ key: "getAuthKey", value: function() {
          return this.authKey;
        } }, { key: "setAuthKey", value: function(e3) {
          return this.authKey = e3, this;
        } }, { key: "setCipherKey", value: function(e3) {
          return this.cipherKey = e3, this;
        } }, { key: "getUUID", value: function() {
          return this.UUID;
        } }, { key: "setUUID", value: function(e3) {
          if (!e3 || "string" != typeof e3 || 0 === e3.trim().length)
            throw new Error("Missing uuid parameter. Provide a valid string uuid");
          return this.UUID = e3, this;
        } }, { key: "getFilterExpression", value: function() {
          return this.filterExpression;
        } }, { key: "setFilterExpression", value: function(e3) {
          return this.filterExpression = e3, this;
        } }, { key: "getPresenceTimeout", value: function() {
          return this._presenceTimeout;
        } }, { key: "setPresenceTimeout", value: function(e3) {
          return e3 >= 20 ? this._presenceTimeout = e3 : (this._presenceTimeout = 20, console.log("WARNING: Presence timeout is less than the minimum. Using minimum value: ", this._presenceTimeout)), this.setHeartbeatInterval(this._presenceTimeout / 2 - 1), this;
        } }, { key: "setProxy", value: function(e3) {
          this.proxy = e3;
        } }, { key: "getHeartbeatInterval", value: function() {
          return this._heartbeatInterval;
        } }, { key: "setHeartbeatInterval", value: function(e3) {
          return this._heartbeatInterval = e3, this;
        } }, { key: "getSubscribeTimeout", value: function() {
          return this._subscribeRequestTimeout;
        } }, { key: "setSubscribeTimeout", value: function(e3) {
          return this._subscribeRequestTimeout = e3, this;
        } }, { key: "getTransactionTimeout", value: function() {
          return this._transactionalRequestTimeout;
        } }, { key: "setTransactionTimeout", value: function(e3) {
          return this._transactionalRequestTimeout = e3, this;
        } }, { key: "isSendBeaconEnabled", value: function() {
          return this._useSendBeacon;
        } }, { key: "setSendBeaconConfig", value: function(e3) {
          return this._useSendBeacon = e3, this;
        } }, { key: "getVersion", value: function() {
          return "5.0.1";
        } }, { key: "_addPnsdkSuffix", value: function(e3, t2) {
          this._PNSDKSuffix[e3] = t2;
        } }, { key: "_getPnsdkSuffix", value: function(e3) {
          var t2 = this;
          return Object.keys(this._PNSDKSuffix).reduce(function(n2, r2) {
            return n2 + e3 + t2._PNSDKSuffix[r2];
          }, "");
        } }]), e2;
      }());
      t.default = s, e.exports = t.default;
    }, function(e, t, n) {
      var r = n(80), i = n(81), o = n(82), a = n(84);
      e.exports = function(e2, t2) {
        return r(e2) || i(e2, t2) || o(e2, t2) || a();
      }, e.exports.default = e.exports, e.exports.__esModule = true;
    }, function(e, t, n) {
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      t.default = { PNNetworkUpCategory: "PNNetworkUpCategory", PNNetworkDownCategory: "PNNetworkDownCategory", PNNetworkIssuesCategory: "PNNetworkIssuesCategory", PNTimeoutCategory: "PNTimeoutCategory", PNBadRequestCategory: "PNBadRequestCategory", PNAccessDeniedCategory: "PNAccessDeniedCategory", PNUnknownCategory: "PNUnknownCategory", PNReconnectedCategory: "PNReconnectedCategory", PNConnectedCategory: "PNConnectedCategory", PNRequestMessageCountExceededCategory: "PNRequestMessageCountExceededCategory" }, e.exports = t.default;
    }, function(e, t, n) {
      e.exports = n(75);
    }, function(e, t) {
      function n(e2, t2, n2, r, i, o, a) {
        try {
          var u = e2[o](a), s = u.value;
        } catch (e3) {
          return void n2(e3);
        }
        u.done ? t2(s) : Promise.resolve(s).then(r, i);
      }
      e.exports = function(e2) {
        return function() {
          var t2 = this, r = arguments;
          return new Promise(function(i, o) {
            var a = e2.apply(t2, r);
            function u(e3) {
              n(a, i, o, u, s, "next", e3);
            }
            function s(e3) {
              n(a, i, o, u, s, "throw", e3);
            }
            u(void 0);
          });
        };
      }, e.exports.default = e.exports, e.exports.__esModule = true;
    }, function(e, t) {
      function n(t2) {
        return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e2) {
          return e2.__proto__ || Object.getPrototypeOf(e2);
        }, e.exports.default = e.exports, e.exports.__esModule = true, n(t2);
      }
      e.exports = n, e.exports.default = e.exports, e.exports.__esModule = true;
    }, function(e, t, n) {
      var r = n(15);
      e.exports = function(e2, t2) {
        if ("function" != typeof t2 && null !== t2)
          throw new TypeError("Super expression must either be null or a function");
        e2.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e2, writable: true, configurable: true } }), t2 && r(e2, t2);
      }, e.exports.default = e.exports, e.exports.__esModule = true;
    }, function(e, t) {
      function n(t2, r) {
        return e.exports = n = Object.setPrototypeOf || function(e2, t3) {
          return e2.__proto__ = t3, e2;
        }, e.exports.default = e.exports, e.exports.__esModule = true, n(t2, r);
      }
      e.exports = n, e.exports.default = e.exports, e.exports.__esModule = true;
    }, function(e, t, n) {
      var r = n(7).default, i = n(22);
      e.exports = function(e2, t2) {
        if (t2 && ("object" === r(t2) || "function" == typeof t2))
          return t2;
        if (void 0 !== t2)
          throw new TypeError("Derived constructors may only return object or undefined");
        return i(e2);
      }, e.exports.default = e.exports, e.exports.__esModule = true;
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i = r(n(34)), o = { createUUID: function() {
        return i.default.uuid ? i.default.uuid() : (0, i.default)();
      } };
      t.default = o, e.exports = t.default;
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.PubNubError = void 0, t.createValidationError = b, t.default = function(e2, t2) {
        var n2 = e2.networking, r2 = e2.config, i2 = e2.telemetryManager, o2 = e2.tokenManager, a2 = l.default.createUUID(), u2 = null, s2 = null, c2 = {};
        t2.getOperation() === d.default.PNTimeOperation || t2.getOperation() === d.default.PNChannelGroupsOperation ? u2 = arguments.length <= 2 ? void 0 : arguments[2] : (c2 = arguments.length <= 2 ? void 0 : arguments[2], u2 = arguments.length <= 3 ? void 0 : arguments[3]);
        "undefined" == typeof Promise || u2 || (s2 = f.default.createPromise());
        var h2 = t2.validateParams(e2, c2);
        if (h2)
          return u2 ? u2(b(h2)) : s2 ? (s2.reject(new v("Validation failed, check status for details", b(h2))), s2.promise) : void 0;
        var g2, S = t2.prepareParams(e2, c2), w = m(t2, e2, c2), k = { url: w, operation: t2.getOperation(), timeout: t2.getRequestTimeout(e2), headers: t2.getRequestHeaders ? t2.getRequestHeaders() : {}, ignoreBody: "function" == typeof t2.ignoreBody && t2.ignoreBody(e2), forceBuffered: "function" == typeof t2.forceBuffered ? t2.forceBuffered(e2, c2) : null, abortSignal: "function" == typeof t2.getAbortSignal ? t2.getAbortSignal(e2, c2) : null };
        S.uuid = r2.UUID, S.pnsdk = _(r2);
        var T = i2.operationsLatencyForRequest();
        Object.keys(T).length && (S = y(y({}, S), T));
        r2.useInstanceId && (S.instanceid = r2.instanceId);
        r2.useRequestId && (S.requestid = a2);
        if (t2.isAuthSupported()) {
          var x = o2.getToken() || r2.getAuthKey();
          x && (S.auth = x);
        }
        r2.secretKey && O(e2, w, S, c2, t2);
        var A = function(n3, r3) {
          var o3;
          if (n3.error)
            return t2.handleError && t2.handleError(e2, c2, n3), void (u2 ? u2(n3) : s2 && s2.reject(new v("PubNub call failed, check status for details", n3)));
          i2.stopLatencyMeasure(t2.getOperation(), a2);
          var l2 = t2.handleResponse(e2, r3, c2);
          "function" != typeof (null === (o3 = l2) || void 0 === o3 ? void 0 : o3.then) && (l2 = Promise.resolve(l2)), l2.then(function(e3) {
            u2 ? u2(n3, e3) : s2 && s2.fulfill(e3);
          }).catch(function(e3) {
            if (u2) {
              var n4 = e3;
              t2.getOperation() === d.default.PNSubscribeOperation && (n4 = { statusCode: 400, error: true, operation: t2.getOperation(), errorData: e3, category: p.default.PNUnknownCategory }), u2(n4, null);
            } else
              s2 && s2.reject(new v("PubNub call failed, check status for details", e3));
          });
        };
        if (i2.startLatencyMeasure(t2.getOperation(), a2), "POST" === P(e2, t2, c2)) {
          var M = t2.postPayload(e2, c2);
          g2 = n2.POST(S, M, k, A);
        } else if ("PATCH" === P(e2, t2, c2)) {
          var E = t2.patchPayload(e2, c2);
          g2 = n2.PATCH(S, E, k, A);
        } else
          g2 = "DELETE" === P(e2, t2, c2) ? n2.DELETE(S, k, A) : "GETFILE" === P(e2, t2, c2) ? n2.GETFILE(S, k, A) : n2.GET(S, k, A);
        if (t2.getOperation() === d.default.PNSubscribeOperation)
          return g2;
        if (s2)
          return s2.promise;
      }, t.generatePNSDK = _, t.signRequest = O;
      var i = r(n(4)), o = r(n(5)), a = r(n(14)), u = r(n(16)), s = r(n(13)), c = r(n(48)), l = r(n(17)), f = (n(2), r(n(3))), d = (r(n(8)), r(n(1))), p = r(n(10));
      function h(e2, t2) {
        var n2 = Object.keys(e2);
        if (Object.getOwnPropertySymbols) {
          var r2 = Object.getOwnPropertySymbols(e2);
          t2 && (r2 = r2.filter(function(t3) {
            return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
          })), n2.push.apply(n2, r2);
        }
        return n2;
      }
      function y(e2) {
        for (var t2 = 1; t2 < arguments.length; t2++) {
          var n2 = null != arguments[t2] ? arguments[t2] : {};
          t2 % 2 ? h(Object(n2), true).forEach(function(t3) {
            (0, i.default)(e2, t3, n2[t3]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : h(Object(n2)).forEach(function(t3) {
            Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
        }
        return e2;
      }
      function g(e2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if ("function" == typeof Proxy)
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (e3) {
            return false;
          }
        }();
        return function() {
          var n2, r2 = (0, s.default)(e2);
          if (t2) {
            var i2 = (0, s.default)(this).constructor;
            n2 = Reflect.construct(r2, arguments, i2);
          } else
            n2 = r2.apply(this, arguments);
          return (0, u.default)(this, n2);
        };
      }
      var v = function(e2) {
        (0, a.default)(n2, e2);
        var t2 = g(n2);
        function n2(e3, r2) {
          var i2;
          return (0, o.default)(this, n2), (i2 = t2.call(this, e3)).name = i2.constructor.name, i2.status = r2, i2.message = e3, i2;
        }
        return n2;
      }((0, c.default)(Error));
      function b(e2) {
        return (t2 = { message: e2 }).type = "validationError", t2.error = true, t2;
        var t2;
      }
      function m(e2, t2, n2) {
        return e2.usePost && e2.usePost(t2, n2) ? e2.postURL(t2, n2) : e2.usePatch && e2.usePatch(t2, n2) ? e2.patchURL(t2, n2) : e2.useGetFile && e2.useGetFile(t2, n2) ? e2.getFileURL(t2, n2) : e2.getURL(t2, n2);
      }
      function _(e2) {
        if (e2.sdkName)
          return e2.sdkName;
        var t2 = "PubNub-JS-".concat(e2.sdkFamily);
        e2.partnerId && (t2 += "-".concat(e2.partnerId)), t2 += "/".concat(e2.getVersion());
        var n2 = e2._getPnsdkSuffix(" ");
        return n2.length > 0 && (t2 += n2), t2;
      }
      function P(e2, t2, n2) {
        return t2.usePost && t2.usePost(e2, n2) ? "POST" : t2.usePatch && t2.usePatch(e2, n2) ? "PATCH" : t2.useDelete && t2.useDelete(e2, n2) ? "DELETE" : t2.useGetFile && t2.useGetFile(e2, n2) ? "GETFILE" : "GET";
      }
      function O(e2, t2, n2, r2, i2) {
        var o2 = e2.config, a2 = e2.crypto, u2 = P(e2, i2, r2);
        n2.timestamp = Math.floor(new Date().getTime() / 1e3), "PNPublishOperation" === i2.getOperation() && i2.usePost && i2.usePost(e2, r2) && (u2 = "GET"), "GETFILE" === u2 && (u2 = "GET");
        var s2 = "".concat(u2, "\n").concat(o2.publishKey, "\n").concat(t2, "\n").concat(f.default.signPamFromParams(n2), "\n");
        if ("POST" === u2) {
          var c2 = i2.postPayload(e2, r2);
          s2 += "string" == typeof c2 ? c2 : JSON.stringify(c2);
        } else if ("PATCH" === u2) {
          var l2 = i2.patchPayload(e2, r2);
          s2 += "string" == typeof l2 ? l2 : JSON.stringify(l2);
        }
        var d2 = "v2.".concat(a2.HMACSHA256(s2));
        d2 = (d2 = (d2 = d2.replace(/\+/g, "-")).replace(/\//g, "_")).replace(/=+$/, ""), n2.signature = d2;
      }
      t.PubNubError = v;
    }, function(e, t, n) {
      var r = SyntaxError, i = Function, o = TypeError, a = function(e2) {
        try {
          return i('"use strict"; return (' + e2 + ").constructor;")();
        } catch (e3) {
        }
      }, u = Object.getOwnPropertyDescriptor;
      if (u)
        try {
          u({}, "");
        } catch (e2) {
          u = null;
        }
      var s = function() {
        throw new o();
      }, c = u ? function() {
        try {
          return s;
        } catch (e2) {
          try {
            return u(arguments, "callee").get;
          } catch (e3) {
            return s;
          }
        }
      }() : s, l = n(138)(), f = Object.getPrototypeOf || function(e2) {
        return e2.__proto__;
      }, d = {}, p = "undefined" == typeof Uint8Array ? void 0 : f(Uint8Array), h = { "%AggregateError%": "undefined" == typeof AggregateError ? void 0 : AggregateError, "%Array%": Array, "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer, "%ArrayIteratorPrototype%": l ? f([][Symbol.iterator]()) : void 0, "%AsyncFromSyncIteratorPrototype%": void 0, "%AsyncFunction%": d, "%AsyncGenerator%": d, "%AsyncGeneratorFunction%": d, "%AsyncIteratorPrototype%": d, "%Atomics%": "undefined" == typeof Atomics ? void 0 : Atomics, "%BigInt%": "undefined" == typeof BigInt ? void 0 : BigInt, "%Boolean%": Boolean, "%DataView%": "undefined" == typeof DataView ? void 0 : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": Error, "%eval%": eval, "%EvalError%": EvalError, "%Float32Array%": "undefined" == typeof Float32Array ? void 0 : Float32Array, "%Float64Array%": "undefined" == typeof Float64Array ? void 0 : Float64Array, "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? void 0 : FinalizationRegistry, "%Function%": i, "%GeneratorFunction%": d, "%Int8Array%": "undefined" == typeof Int8Array ? void 0 : Int8Array, "%Int16Array%": "undefined" == typeof Int16Array ? void 0 : Int16Array, "%Int32Array%": "undefined" == typeof Int32Array ? void 0 : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": l ? f(f([][Symbol.iterator]())) : void 0, "%JSON%": "object" == typeof JSON ? JSON : void 0, "%Map%": "undefined" == typeof Map ? void 0 : Map, "%MapIteratorPrototype%": "undefined" != typeof Map && l ? f((/* @__PURE__ */ new Map())[Symbol.iterator]()) : void 0, "%Math%": Math, "%Number%": Number, "%Object%": Object, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": "undefined" == typeof Promise ? void 0 : Promise, "%Proxy%": "undefined" == typeof Proxy ? void 0 : Proxy, "%RangeError%": RangeError, "%ReferenceError%": ReferenceError, "%Reflect%": "undefined" == typeof Reflect ? void 0 : Reflect, "%RegExp%": RegExp, "%Set%": "undefined" == typeof Set ? void 0 : Set, "%SetIteratorPrototype%": "undefined" != typeof Set && l ? f((/* @__PURE__ */ new Set())[Symbol.iterator]()) : void 0, "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": l ? f(""[Symbol.iterator]()) : void 0, "%Symbol%": l ? Symbol : void 0, "%SyntaxError%": r, "%ThrowTypeError%": c, "%TypedArray%": p, "%TypeError%": o, "%Uint8Array%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array, "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray, "%Uint16Array%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array, "%Uint32Array%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array, "%URIError%": URIError, "%WeakMap%": "undefined" == typeof WeakMap ? void 0 : WeakMap, "%WeakRef%": "undefined" == typeof WeakRef ? void 0 : WeakRef, "%WeakSet%": "undefined" == typeof WeakSet ? void 0 : WeakSet }, y = { "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"] }, g = n(20), v = n(141), b = g.call(Function.call, Array.prototype.concat), m = g.call(Function.apply, Array.prototype.splice), _ = g.call(Function.call, String.prototype.replace), P = g.call(Function.call, String.prototype.slice), O = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, S = /\\(\\)?/g, w = function(e2) {
        var t2 = P(e2, 0, 1), n2 = P(e2, -1);
        if ("%" === t2 && "%" !== n2)
          throw new r("invalid intrinsic syntax, expected closing `%`");
        if ("%" === n2 && "%" !== t2)
          throw new r("invalid intrinsic syntax, expected opening `%`");
        var i2 = [];
        return _(e2, O, function(e3, t3, n3, r2) {
          i2[i2.length] = n3 ? _(r2, S, "$1") : t3 || e3;
        }), i2;
      }, k = function(e2, t2) {
        var n2, i2 = e2;
        if (v(y, i2) && (i2 = "%" + (n2 = y[i2])[0] + "%"), v(h, i2)) {
          var u2 = h[i2];
          if (u2 === d && (u2 = function e3(t3) {
            var n3;
            if ("%AsyncFunction%" === t3)
              n3 = a("async function () {}");
            else if ("%GeneratorFunction%" === t3)
              n3 = a("function* () {}");
            else if ("%AsyncGeneratorFunction%" === t3)
              n3 = a("async function* () {}");
            else if ("%AsyncGenerator%" === t3) {
              var r2 = e3("%AsyncGeneratorFunction%");
              r2 && (n3 = r2.prototype);
            } else if ("%AsyncIteratorPrototype%" === t3) {
              var i3 = e3("%AsyncGenerator%");
              i3 && (n3 = f(i3.prototype));
            }
            return h[t3] = n3, n3;
          }(i2)), void 0 === u2 && !t2)
            throw new o("intrinsic " + e2 + " exists, but is not available. Please file an issue!");
          return { alias: n2, name: i2, value: u2 };
        }
        throw new r("intrinsic " + e2 + " does not exist!");
      };
      e.exports = function(e2, t2) {
        if ("string" != typeof e2 || 0 === e2.length)
          throw new o("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && "boolean" != typeof t2)
          throw new o('"allowMissing" argument must be a boolean');
        var n2 = w(e2), i2 = n2.length > 0 ? n2[0] : "", a2 = k("%" + i2 + "%", t2), s2 = a2.name, c2 = a2.value, l2 = false, f2 = a2.alias;
        f2 && (i2 = f2[0], m(n2, b([0, 1], f2)));
        for (var d2 = 1, p2 = true; d2 < n2.length; d2 += 1) {
          var y2 = n2[d2], g2 = P(y2, 0, 1), _2 = P(y2, -1);
          if (('"' === g2 || "'" === g2 || "`" === g2 || '"' === _2 || "'" === _2 || "`" === _2) && g2 !== _2)
            throw new r("property names with quotes must have matching quotes");
          if ("constructor" !== y2 && p2 || (l2 = true), v(h, s2 = "%" + (i2 += "." + y2) + "%"))
            c2 = h[s2];
          else if (null != c2) {
            if (!(y2 in c2)) {
              if (!t2)
                throw new o("base intrinsic for " + e2 + " exists, but the property is not available.");
              return;
            }
            if (u && d2 + 1 >= n2.length) {
              var O2 = u(c2, y2);
              c2 = (p2 = !!O2) && "get" in O2 && !("originalValue" in O2.get) ? O2.get : c2[y2];
            } else
              p2 = v(c2, y2), c2 = c2[y2];
            p2 && !l2 && (h[s2] = c2);
          }
        }
        return c2;
      };
    }, function(e, t, n) {
      var r = n(140);
      e.exports = Function.prototype.bind || r;
    }, function(e, t, n) {
      var r = String.prototype.replace, i = /%20/g, o = "RFC1738", a = "RFC3986";
      e.exports = { default: a, formatters: { RFC1738: function(e2) {
        return r.call(e2, i, "+");
      }, RFC3986: function(e2) {
        return String(e2);
      } }, RFC1738: o, RFC3986: a };
    }, function(e, t) {
      e.exports = function(e2) {
        if (void 0 === e2)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e2;
      }, e.exports.default = e.exports, e.exports.__esModule = true;
    }, function(e, t, n) {
      (function(r) {
        var i = n(0);
        Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
        var o = i(n(5)), a = i(n(6)), u = i(n(4)), s = (i(n(8)), i(n(25)));
        function c(e2) {
          var t2, n2 = [];
          for (t2 = 0; t2 < e2.length; t2 += 1)
            n2[t2 / 4 | 0] |= e2[t2] << 24 - 8 * t2;
          return s.default.lib.WordArray.create(n2, e2.length);
        }
        var l = function() {
          function e2(t2) {
            var n2 = t2.config;
            (0, o.default)(this, e2), (0, u.default)(this, "_config", void 0), (0, u.default)(this, "_iv", void 0), (0, u.default)(this, "_allowedKeyEncodings", void 0), (0, u.default)(this, "_allowedKeyLengths", void 0), (0, u.default)(this, "_allowedModes", void 0), (0, u.default)(this, "_defaultOptions", void 0), this._config = n2, this._iv = "0123456789012345", this._allowedKeyEncodings = ["hex", "utf8", "base64", "binary"], this._allowedKeyLengths = [128, 256], this._allowedModes = ["ecb", "cbc"], this._defaultOptions = { encryptKey: true, keyEncoding: "utf8", keyLength: 256, mode: "cbc" };
          }
          return (0, a.default)(e2, [{ key: "HMACSHA256", value: function(e3) {
            return s.default.HmacSHA256(e3, this._config.secretKey).toString(s.default.enc.Base64);
          } }, { key: "SHA256", value: function(e3) {
            return s.default.SHA256(e3).toString(s.default.enc.Hex);
          } }, { key: "_parseOptions", value: function(e3) {
            var t2 = e3 || {};
            return t2.hasOwnProperty("encryptKey") || (t2.encryptKey = this._defaultOptions.encryptKey), t2.hasOwnProperty("keyEncoding") || (t2.keyEncoding = this._defaultOptions.keyEncoding), t2.hasOwnProperty("keyLength") || (t2.keyLength = this._defaultOptions.keyLength), t2.hasOwnProperty("mode") || (t2.mode = this._defaultOptions.mode), -1 === this._allowedKeyEncodings.indexOf(t2.keyEncoding.toLowerCase()) && (t2.keyEncoding = this._defaultOptions.keyEncoding), -1 === this._allowedKeyLengths.indexOf(parseInt(t2.keyLength, 10)) && (t2.keyLength = this._defaultOptions.keyLength), -1 === this._allowedModes.indexOf(t2.mode.toLowerCase()) && (t2.mode = this._defaultOptions.mode), t2;
          } }, { key: "_decodeKey", value: function(e3, t2) {
            return "base64" === t2.keyEncoding ? s.default.enc.Base64.parse(e3) : "hex" === t2.keyEncoding ? s.default.enc.Hex.parse(e3) : e3;
          } }, { key: "_getPaddedKey", value: function(e3, t2) {
            return e3 = this._decodeKey(e3, t2), t2.encryptKey ? s.default.enc.Utf8.parse(this.SHA256(e3).slice(0, 32)) : e3;
          } }, { key: "_getMode", value: function(e3) {
            return "ecb" === e3.mode ? s.default.mode.ECB : s.default.mode.CBC;
          } }, { key: "_getIV", value: function(e3) {
            return "cbc" === e3.mode ? s.default.enc.Utf8.parse(this._iv) : null;
          } }, { key: "_getRandomIV", value: function() {
            return s.default.lib.WordArray.random(16);
          } }, { key: "encrypt", value: function(e3, t2, n2) {
            return this._config.customEncrypt ? this._config.customEncrypt(e3) : this.pnEncrypt(e3, t2, n2);
          } }, { key: "decrypt", value: function(e3, t2, n2) {
            return this._config.customDecrypt ? this._config.customDecrypt(e3) : this.pnDecrypt(e3, t2, n2);
          } }, { key: "pnEncrypt", value: function(e3, t2, n2) {
            if (!t2 && !this._config.cipherKey)
              return e3;
            n2 = this._parseOptions(n2);
            var r2 = this._getMode(n2), i2 = this._getPaddedKey(t2 || this._config.cipherKey, n2);
            if (this._config.useRandomIVs) {
              var o2 = this._getRandomIV(), a2 = s.default.AES.encrypt(e3, i2, { iv: o2, mode: r2 }).ciphertext;
              return o2.clone().concat(a2.clone()).toString(s.default.enc.Base64);
            }
            var u2 = this._getIV(n2);
            return s.default.AES.encrypt(e3, i2, { iv: u2, mode: r2 }).ciphertext.toString(s.default.enc.Base64) || e3;
          } }, { key: "pnDecrypt", value: function(e3, t2, n2) {
            if (!t2 && !this._config.cipherKey)
              return e3;
            n2 = this._parseOptions(n2);
            var i2 = this._getMode(n2), o2 = this._getPaddedKey(t2 || this._config.cipherKey, n2);
            if (this._config.useRandomIVs) {
              var a2 = r.from(e3, "base64"), u2 = c(a2.slice(0, 16)), l2 = c(a2.slice(16));
              try {
                var f = s.default.AES.decrypt({ ciphertext: l2 }, o2, { iv: u2, mode: i2 }).toString(s.default.enc.Utf8);
                return JSON.parse(f);
              } catch (e4) {
                return null;
              }
            } else {
              var d = this._getIV(n2);
              try {
                var p = s.default.enc.Base64.parse(e3), h = s.default.AES.decrypt({ ciphertext: p }, o2, { iv: d, mode: i2 }).toString(s.default.enc.Utf8);
                return JSON.parse(h);
              } catch (e4) {
                return null;
              }
            }
          } }]), e2;
        }();
        t.default = l, e.exports = t.default;
      }).call(this, n(24).Buffer);
    }, function(e, t, n) {
      (function(e2) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <http://feross.org>
         * @license  MIT
         */
        var r = n(36), i = n(37), o = n(38);
        function a() {
          return s.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function u(e3, t2) {
          if (a() < t2)
            throw new RangeError("Invalid typed array length");
          return s.TYPED_ARRAY_SUPPORT ? (e3 = new Uint8Array(t2)).__proto__ = s.prototype : (null === e3 && (e3 = new s(t2)), e3.length = t2), e3;
        }
        function s(e3, t2, n2) {
          if (!(s.TYPED_ARRAY_SUPPORT || this instanceof s))
            return new s(e3, t2, n2);
          if ("number" == typeof e3) {
            if ("string" == typeof t2)
              throw new Error("If encoding is specified then the first argument must be a string");
            return f(this, e3);
          }
          return c(this, e3, t2, n2);
        }
        function c(e3, t2, n2, r2) {
          if ("number" == typeof t2)
            throw new TypeError('"value" argument must not be a number');
          return "undefined" != typeof ArrayBuffer && t2 instanceof ArrayBuffer ? function(e4, t3, n3, r3) {
            if (t3.byteLength, n3 < 0 || t3.byteLength < n3)
              throw new RangeError("'offset' is out of bounds");
            if (t3.byteLength < n3 + (r3 || 0))
              throw new RangeError("'length' is out of bounds");
            t3 = void 0 === n3 && void 0 === r3 ? new Uint8Array(t3) : void 0 === r3 ? new Uint8Array(t3, n3) : new Uint8Array(t3, n3, r3);
            s.TYPED_ARRAY_SUPPORT ? (e4 = t3).__proto__ = s.prototype : e4 = d(e4, t3);
            return e4;
          }(e3, t2, n2, r2) : "string" == typeof t2 ? function(e4, t3, n3) {
            "string" == typeof n3 && "" !== n3 || (n3 = "utf8");
            if (!s.isEncoding(n3))
              throw new TypeError('"encoding" must be a valid string encoding');
            var r3 = 0 | h(t3, n3), i2 = (e4 = u(e4, r3)).write(t3, n3);
            i2 !== r3 && (e4 = e4.slice(0, i2));
            return e4;
          }(e3, t2, n2) : function(e4, t3) {
            if (s.isBuffer(t3)) {
              var n3 = 0 | p(t3.length);
              return 0 === (e4 = u(e4, n3)).length || t3.copy(e4, 0, 0, n3), e4;
            }
            if (t3) {
              if ("undefined" != typeof ArrayBuffer && t3.buffer instanceof ArrayBuffer || "length" in t3)
                return "number" != typeof t3.length || (r3 = t3.length) != r3 ? u(e4, 0) : d(e4, t3);
              if ("Buffer" === t3.type && o(t3.data))
                return d(e4, t3.data);
            }
            var r3;
            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
          }(e3, t2);
        }
        function l(e3) {
          if ("number" != typeof e3)
            throw new TypeError('"size" argument must be a number');
          if (e3 < 0)
            throw new RangeError('"size" argument must not be negative');
        }
        function f(e3, t2) {
          if (l(t2), e3 = u(e3, t2 < 0 ? 0 : 0 | p(t2)), !s.TYPED_ARRAY_SUPPORT)
            for (var n2 = 0; n2 < t2; ++n2)
              e3[n2] = 0;
          return e3;
        }
        function d(e3, t2) {
          var n2 = t2.length < 0 ? 0 : 0 | p(t2.length);
          e3 = u(e3, n2);
          for (var r2 = 0; r2 < n2; r2 += 1)
            e3[r2] = 255 & t2[r2];
          return e3;
        }
        function p(e3) {
          if (e3 >= a())
            throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
          return 0 | e3;
        }
        function h(e3, t2) {
          if (s.isBuffer(e3))
            return e3.length;
          if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e3) || e3 instanceof ArrayBuffer))
            return e3.byteLength;
          "string" != typeof e3 && (e3 = "" + e3);
          var n2 = e3.length;
          if (0 === n2)
            return 0;
          for (var r2 = false; ; )
            switch (t2) {
              case "ascii":
              case "latin1":
              case "binary":
                return n2;
              case "utf8":
              case "utf-8":
              case void 0:
                return K(e3).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * n2;
              case "hex":
                return n2 >>> 1;
              case "base64":
                return B(e3).length;
              default:
                if (r2)
                  return K(e3).length;
                t2 = ("" + t2).toLowerCase(), r2 = true;
            }
        }
        function y(e3, t2, n2) {
          var r2 = false;
          if ((void 0 === t2 || t2 < 0) && (t2 = 0), t2 > this.length)
            return "";
          if ((void 0 === n2 || n2 > this.length) && (n2 = this.length), n2 <= 0)
            return "";
          if ((n2 >>>= 0) <= (t2 >>>= 0))
            return "";
          for (e3 || (e3 = "utf8"); ; )
            switch (e3) {
              case "hex":
                return M(this, t2, n2);
              case "utf8":
              case "utf-8":
                return T(this, t2, n2);
              case "ascii":
                return x(this, t2, n2);
              case "latin1":
              case "binary":
                return A(this, t2, n2);
              case "base64":
                return k(this, t2, n2);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return E(this, t2, n2);
              default:
                if (r2)
                  throw new TypeError("Unknown encoding: " + e3);
                e3 = (e3 + "").toLowerCase(), r2 = true;
            }
        }
        function g(e3, t2, n2) {
          var r2 = e3[t2];
          e3[t2] = e3[n2], e3[n2] = r2;
        }
        function v(e3, t2, n2, r2, i2) {
          if (0 === e3.length)
            return -1;
          if ("string" == typeof n2 ? (r2 = n2, n2 = 0) : n2 > 2147483647 ? n2 = 2147483647 : n2 < -2147483648 && (n2 = -2147483648), n2 = +n2, isNaN(n2) && (n2 = i2 ? 0 : e3.length - 1), n2 < 0 && (n2 = e3.length + n2), n2 >= e3.length) {
            if (i2)
              return -1;
            n2 = e3.length - 1;
          } else if (n2 < 0) {
            if (!i2)
              return -1;
            n2 = 0;
          }
          if ("string" == typeof t2 && (t2 = s.from(t2, r2)), s.isBuffer(t2))
            return 0 === t2.length ? -1 : b(e3, t2, n2, r2, i2);
          if ("number" == typeof t2)
            return t2 &= 255, s.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i2 ? Uint8Array.prototype.indexOf.call(e3, t2, n2) : Uint8Array.prototype.lastIndexOf.call(e3, t2, n2) : b(e3, [t2], n2, r2, i2);
          throw new TypeError("val must be string, number or Buffer");
        }
        function b(e3, t2, n2, r2, i2) {
          var o2, a2 = 1, u2 = e3.length, s2 = t2.length;
          if (void 0 !== r2 && ("ucs2" === (r2 = String(r2).toLowerCase()) || "ucs-2" === r2 || "utf16le" === r2 || "utf-16le" === r2)) {
            if (e3.length < 2 || t2.length < 2)
              return -1;
            a2 = 2, u2 /= 2, s2 /= 2, n2 /= 2;
          }
          function c2(e4, t3) {
            return 1 === a2 ? e4[t3] : e4.readUInt16BE(t3 * a2);
          }
          if (i2) {
            var l2 = -1;
            for (o2 = n2; o2 < u2; o2++)
              if (c2(e3, o2) === c2(t2, -1 === l2 ? 0 : o2 - l2)) {
                if (-1 === l2 && (l2 = o2), o2 - l2 + 1 === s2)
                  return l2 * a2;
              } else
                -1 !== l2 && (o2 -= o2 - l2), l2 = -1;
          } else
            for (n2 + s2 > u2 && (n2 = u2 - s2), o2 = n2; o2 >= 0; o2--) {
              for (var f2 = true, d2 = 0; d2 < s2; d2++)
                if (c2(e3, o2 + d2) !== c2(t2, d2)) {
                  f2 = false;
                  break;
                }
              if (f2)
                return o2;
            }
          return -1;
        }
        function m(e3, t2, n2, r2) {
          n2 = Number(n2) || 0;
          var i2 = e3.length - n2;
          r2 ? (r2 = Number(r2)) > i2 && (r2 = i2) : r2 = i2;
          var o2 = t2.length;
          if (o2 % 2 != 0)
            throw new TypeError("Invalid hex string");
          r2 > o2 / 2 && (r2 = o2 / 2);
          for (var a2 = 0; a2 < r2; ++a2) {
            var u2 = parseInt(t2.substr(2 * a2, 2), 16);
            if (isNaN(u2))
              return a2;
            e3[n2 + a2] = u2;
          }
          return a2;
        }
        function _(e3, t2, n2, r2) {
          return G(K(t2, e3.length - n2), e3, n2, r2);
        }
        function P(e3, t2, n2, r2) {
          return G(function(e4) {
            for (var t3 = [], n3 = 0; n3 < e4.length; ++n3)
              t3.push(255 & e4.charCodeAt(n3));
            return t3;
          }(t2), e3, n2, r2);
        }
        function O(e3, t2, n2, r2) {
          return P(e3, t2, n2, r2);
        }
        function S(e3, t2, n2, r2) {
          return G(B(t2), e3, n2, r2);
        }
        function w(e3, t2, n2, r2) {
          return G(function(e4, t3) {
            for (var n3, r3, i2, o2 = [], a2 = 0; a2 < e4.length && !((t3 -= 2) < 0); ++a2)
              n3 = e4.charCodeAt(a2), r3 = n3 >> 8, i2 = n3 % 256, o2.push(i2), o2.push(r3);
            return o2;
          }(t2, e3.length - n2), e3, n2, r2);
        }
        function k(e3, t2, n2) {
          return 0 === t2 && n2 === e3.length ? r.fromByteArray(e3) : r.fromByteArray(e3.slice(t2, n2));
        }
        function T(e3, t2, n2) {
          n2 = Math.min(e3.length, n2);
          for (var r2 = [], i2 = t2; i2 < n2; ) {
            var o2, a2, u2, s2, c2 = e3[i2], l2 = null, f2 = c2 > 239 ? 4 : c2 > 223 ? 3 : c2 > 191 ? 2 : 1;
            if (i2 + f2 <= n2)
              switch (f2) {
                case 1:
                  c2 < 128 && (l2 = c2);
                  break;
                case 2:
                  128 == (192 & (o2 = e3[i2 + 1])) && (s2 = (31 & c2) << 6 | 63 & o2) > 127 && (l2 = s2);
                  break;
                case 3:
                  o2 = e3[i2 + 1], a2 = e3[i2 + 2], 128 == (192 & o2) && 128 == (192 & a2) && (s2 = (15 & c2) << 12 | (63 & o2) << 6 | 63 & a2) > 2047 && (s2 < 55296 || s2 > 57343) && (l2 = s2);
                  break;
                case 4:
                  o2 = e3[i2 + 1], a2 = e3[i2 + 2], u2 = e3[i2 + 3], 128 == (192 & o2) && 128 == (192 & a2) && 128 == (192 & u2) && (s2 = (15 & c2) << 18 | (63 & o2) << 12 | (63 & a2) << 6 | 63 & u2) > 65535 && s2 < 1114112 && (l2 = s2);
              }
            null === l2 ? (l2 = 65533, f2 = 1) : l2 > 65535 && (l2 -= 65536, r2.push(l2 >>> 10 & 1023 | 55296), l2 = 56320 | 1023 & l2), r2.push(l2), i2 += f2;
          }
          return function(e4) {
            var t3 = e4.length;
            if (t3 <= 4096)
              return String.fromCharCode.apply(String, e4);
            var n3 = "", r3 = 0;
            for (; r3 < t3; )
              n3 += String.fromCharCode.apply(String, e4.slice(r3, r3 += 4096));
            return n3;
          }(r2);
        }
        t.Buffer = s, t.SlowBuffer = function(e3) {
          +e3 != e3 && (e3 = 0);
          return s.alloc(+e3);
        }, t.INSPECT_MAX_BYTES = 50, s.TYPED_ARRAY_SUPPORT = void 0 !== e2.TYPED_ARRAY_SUPPORT ? e2.TYPED_ARRAY_SUPPORT : function() {
          try {
            var e3 = new Uint8Array(1);
            return e3.__proto__ = { __proto__: Uint8Array.prototype, foo: function() {
              return 42;
            } }, 42 === e3.foo() && "function" == typeof e3.subarray && 0 === e3.subarray(1, 1).byteLength;
          } catch (e4) {
            return false;
          }
        }(), t.kMaxLength = a(), s.poolSize = 8192, s._augment = function(e3) {
          return e3.__proto__ = s.prototype, e3;
        }, s.from = function(e3, t2, n2) {
          return c(null, e3, t2, n2);
        }, s.TYPED_ARRAY_SUPPORT && (s.prototype.__proto__ = Uint8Array.prototype, s.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && s[Symbol.species] === s && Object.defineProperty(s, Symbol.species, { value: null, configurable: true })), s.alloc = function(e3, t2, n2) {
          return function(e4, t3, n3, r2) {
            return l(t3), t3 <= 0 ? u(e4, t3) : void 0 !== n3 ? "string" == typeof r2 ? u(e4, t3).fill(n3, r2) : u(e4, t3).fill(n3) : u(e4, t3);
          }(null, e3, t2, n2);
        }, s.allocUnsafe = function(e3) {
          return f(null, e3);
        }, s.allocUnsafeSlow = function(e3) {
          return f(null, e3);
        }, s.isBuffer = function(e3) {
          return !(null == e3 || !e3._isBuffer);
        }, s.compare = function(e3, t2) {
          if (!s.isBuffer(e3) || !s.isBuffer(t2))
            throw new TypeError("Arguments must be Buffers");
          if (e3 === t2)
            return 0;
          for (var n2 = e3.length, r2 = t2.length, i2 = 0, o2 = Math.min(n2, r2); i2 < o2; ++i2)
            if (e3[i2] !== t2[i2]) {
              n2 = e3[i2], r2 = t2[i2];
              break;
            }
          return n2 < r2 ? -1 : r2 < n2 ? 1 : 0;
        }, s.isEncoding = function(e3) {
          switch (String(e3).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return true;
            default:
              return false;
          }
        }, s.concat = function(e3, t2) {
          if (!o(e3))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e3.length)
            return s.alloc(0);
          var n2;
          if (void 0 === t2)
            for (t2 = 0, n2 = 0; n2 < e3.length; ++n2)
              t2 += e3[n2].length;
          var r2 = s.allocUnsafe(t2), i2 = 0;
          for (n2 = 0; n2 < e3.length; ++n2) {
            var a2 = e3[n2];
            if (!s.isBuffer(a2))
              throw new TypeError('"list" argument must be an Array of Buffers');
            a2.copy(r2, i2), i2 += a2.length;
          }
          return r2;
        }, s.byteLength = h, s.prototype._isBuffer = true, s.prototype.swap16 = function() {
          var e3 = this.length;
          if (e3 % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var t2 = 0; t2 < e3; t2 += 2)
            g(this, t2, t2 + 1);
          return this;
        }, s.prototype.swap32 = function() {
          var e3 = this.length;
          if (e3 % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var t2 = 0; t2 < e3; t2 += 4)
            g(this, t2, t2 + 3), g(this, t2 + 1, t2 + 2);
          return this;
        }, s.prototype.swap64 = function() {
          var e3 = this.length;
          if (e3 % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var t2 = 0; t2 < e3; t2 += 8)
            g(this, t2, t2 + 7), g(this, t2 + 1, t2 + 6), g(this, t2 + 2, t2 + 5), g(this, t2 + 3, t2 + 4);
          return this;
        }, s.prototype.toString = function() {
          var e3 = 0 | this.length;
          return 0 === e3 ? "" : 0 === arguments.length ? T(this, 0, e3) : y.apply(this, arguments);
        }, s.prototype.equals = function(e3) {
          if (!s.isBuffer(e3))
            throw new TypeError("Argument must be a Buffer");
          return this === e3 || 0 === s.compare(this, e3);
        }, s.prototype.inspect = function() {
          var e3 = "", n2 = t.INSPECT_MAX_BYTES;
          return this.length > 0 && (e3 = this.toString("hex", 0, n2).match(/.{2}/g).join(" "), this.length > n2 && (e3 += " ... ")), "<Buffer " + e3 + ">";
        }, s.prototype.compare = function(e3, t2, n2, r2, i2) {
          if (!s.isBuffer(e3))
            throw new TypeError("Argument must be a Buffer");
          if (void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = e3 ? e3.length : 0), void 0 === r2 && (r2 = 0), void 0 === i2 && (i2 = this.length), t2 < 0 || n2 > e3.length || r2 < 0 || i2 > this.length)
            throw new RangeError("out of range index");
          if (r2 >= i2 && t2 >= n2)
            return 0;
          if (r2 >= i2)
            return -1;
          if (t2 >= n2)
            return 1;
          if (this === e3)
            return 0;
          for (var o2 = (i2 >>>= 0) - (r2 >>>= 0), a2 = (n2 >>>= 0) - (t2 >>>= 0), u2 = Math.min(o2, a2), c2 = this.slice(r2, i2), l2 = e3.slice(t2, n2), f2 = 0; f2 < u2; ++f2)
            if (c2[f2] !== l2[f2]) {
              o2 = c2[f2], a2 = l2[f2];
              break;
            }
          return o2 < a2 ? -1 : a2 < o2 ? 1 : 0;
        }, s.prototype.includes = function(e3, t2, n2) {
          return -1 !== this.indexOf(e3, t2, n2);
        }, s.prototype.indexOf = function(e3, t2, n2) {
          return v(this, e3, t2, n2, true);
        }, s.prototype.lastIndexOf = function(e3, t2, n2) {
          return v(this, e3, t2, n2, false);
        }, s.prototype.write = function(e3, t2, n2, r2) {
          if (void 0 === t2)
            r2 = "utf8", n2 = this.length, t2 = 0;
          else if (void 0 === n2 && "string" == typeof t2)
            r2 = t2, n2 = this.length, t2 = 0;
          else {
            if (!isFinite(t2))
              throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            t2 |= 0, isFinite(n2) ? (n2 |= 0, void 0 === r2 && (r2 = "utf8")) : (r2 = n2, n2 = void 0);
          }
          var i2 = this.length - t2;
          if ((void 0 === n2 || n2 > i2) && (n2 = i2), e3.length > 0 && (n2 < 0 || t2 < 0) || t2 > this.length)
            throw new RangeError("Attempt to write outside buffer bounds");
          r2 || (r2 = "utf8");
          for (var o2 = false; ; )
            switch (r2) {
              case "hex":
                return m(this, e3, t2, n2);
              case "utf8":
              case "utf-8":
                return _(this, e3, t2, n2);
              case "ascii":
                return P(this, e3, t2, n2);
              case "latin1":
              case "binary":
                return O(this, e3, t2, n2);
              case "base64":
                return S(this, e3, t2, n2);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return w(this, e3, t2, n2);
              default:
                if (o2)
                  throw new TypeError("Unknown encoding: " + r2);
                r2 = ("" + r2).toLowerCase(), o2 = true;
            }
        }, s.prototype.toJSON = function() {
          return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
        };
        function x(e3, t2, n2) {
          var r2 = "";
          n2 = Math.min(e3.length, n2);
          for (var i2 = t2; i2 < n2; ++i2)
            r2 += String.fromCharCode(127 & e3[i2]);
          return r2;
        }
        function A(e3, t2, n2) {
          var r2 = "";
          n2 = Math.min(e3.length, n2);
          for (var i2 = t2; i2 < n2; ++i2)
            r2 += String.fromCharCode(e3[i2]);
          return r2;
        }
        function M(e3, t2, n2) {
          var r2 = e3.length;
          (!t2 || t2 < 0) && (t2 = 0), (!n2 || n2 < 0 || n2 > r2) && (n2 = r2);
          for (var i2 = "", o2 = t2; o2 < n2; ++o2)
            i2 += L(e3[o2]);
          return i2;
        }
        function E(e3, t2, n2) {
          for (var r2 = e3.slice(t2, n2), i2 = "", o2 = 0; o2 < r2.length; o2 += 2)
            i2 += String.fromCharCode(r2[o2] + 256 * r2[o2 + 1]);
          return i2;
        }
        function j(e3, t2, n2) {
          if (e3 % 1 != 0 || e3 < 0)
            throw new RangeError("offset is not uint");
          if (e3 + t2 > n2)
            throw new RangeError("Trying to access beyond buffer length");
        }
        function R(e3, t2, n2, r2, i2, o2) {
          if (!s.isBuffer(e3))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (t2 > i2 || t2 < o2)
            throw new RangeError('"value" argument is out of bounds');
          if (n2 + r2 > e3.length)
            throw new RangeError("Index out of range");
        }
        function N(e3, t2, n2, r2) {
          t2 < 0 && (t2 = 65535 + t2 + 1);
          for (var i2 = 0, o2 = Math.min(e3.length - n2, 2); i2 < o2; ++i2)
            e3[n2 + i2] = (t2 & 255 << 8 * (r2 ? i2 : 1 - i2)) >>> 8 * (r2 ? i2 : 1 - i2);
        }
        function C(e3, t2, n2, r2) {
          t2 < 0 && (t2 = 4294967295 + t2 + 1);
          for (var i2 = 0, o2 = Math.min(e3.length - n2, 4); i2 < o2; ++i2)
            e3[n2 + i2] = t2 >>> 8 * (r2 ? i2 : 3 - i2) & 255;
        }
        function U(e3, t2, n2, r2, i2, o2) {
          if (n2 + r2 > e3.length)
            throw new RangeError("Index out of range");
          if (n2 < 0)
            throw new RangeError("Index out of range");
        }
        function I(e3, t2, n2, r2, o2) {
          return o2 || U(e3, 0, n2, 4), i.write(e3, t2, n2, r2, 23, 4), n2 + 4;
        }
        function D(e3, t2, n2, r2, o2) {
          return o2 || U(e3, 0, n2, 8), i.write(e3, t2, n2, r2, 52, 8), n2 + 8;
        }
        s.prototype.slice = function(e3, t2) {
          var n2, r2 = this.length;
          if ((e3 = ~~e3) < 0 ? (e3 += r2) < 0 && (e3 = 0) : e3 > r2 && (e3 = r2), (t2 = void 0 === t2 ? r2 : ~~t2) < 0 ? (t2 += r2) < 0 && (t2 = 0) : t2 > r2 && (t2 = r2), t2 < e3 && (t2 = e3), s.TYPED_ARRAY_SUPPORT)
            (n2 = this.subarray(e3, t2)).__proto__ = s.prototype;
          else {
            var i2 = t2 - e3;
            n2 = new s(i2, void 0);
            for (var o2 = 0; o2 < i2; ++o2)
              n2[o2] = this[o2 + e3];
          }
          return n2;
        }, s.prototype.readUIntLE = function(e3, t2, n2) {
          e3 |= 0, t2 |= 0, n2 || j(e3, t2, this.length);
          for (var r2 = this[e3], i2 = 1, o2 = 0; ++o2 < t2 && (i2 *= 256); )
            r2 += this[e3 + o2] * i2;
          return r2;
        }, s.prototype.readUIntBE = function(e3, t2, n2) {
          e3 |= 0, t2 |= 0, n2 || j(e3, t2, this.length);
          for (var r2 = this[e3 + --t2], i2 = 1; t2 > 0 && (i2 *= 256); )
            r2 += this[e3 + --t2] * i2;
          return r2;
        }, s.prototype.readUInt8 = function(e3, t2) {
          return t2 || j(e3, 1, this.length), this[e3];
        }, s.prototype.readUInt16LE = function(e3, t2) {
          return t2 || j(e3, 2, this.length), this[e3] | this[e3 + 1] << 8;
        }, s.prototype.readUInt16BE = function(e3, t2) {
          return t2 || j(e3, 2, this.length), this[e3] << 8 | this[e3 + 1];
        }, s.prototype.readUInt32LE = function(e3, t2) {
          return t2 || j(e3, 4, this.length), (this[e3] | this[e3 + 1] << 8 | this[e3 + 2] << 16) + 16777216 * this[e3 + 3];
        }, s.prototype.readUInt32BE = function(e3, t2) {
          return t2 || j(e3, 4, this.length), 16777216 * this[e3] + (this[e3 + 1] << 16 | this[e3 + 2] << 8 | this[e3 + 3]);
        }, s.prototype.readIntLE = function(e3, t2, n2) {
          e3 |= 0, t2 |= 0, n2 || j(e3, t2, this.length);
          for (var r2 = this[e3], i2 = 1, o2 = 0; ++o2 < t2 && (i2 *= 256); )
            r2 += this[e3 + o2] * i2;
          return r2 >= (i2 *= 128) && (r2 -= Math.pow(2, 8 * t2)), r2;
        }, s.prototype.readIntBE = function(e3, t2, n2) {
          e3 |= 0, t2 |= 0, n2 || j(e3, t2, this.length);
          for (var r2 = t2, i2 = 1, o2 = this[e3 + --r2]; r2 > 0 && (i2 *= 256); )
            o2 += this[e3 + --r2] * i2;
          return o2 >= (i2 *= 128) && (o2 -= Math.pow(2, 8 * t2)), o2;
        }, s.prototype.readInt8 = function(e3, t2) {
          return t2 || j(e3, 1, this.length), 128 & this[e3] ? -1 * (255 - this[e3] + 1) : this[e3];
        }, s.prototype.readInt16LE = function(e3, t2) {
          t2 || j(e3, 2, this.length);
          var n2 = this[e3] | this[e3 + 1] << 8;
          return 32768 & n2 ? 4294901760 | n2 : n2;
        }, s.prototype.readInt16BE = function(e3, t2) {
          t2 || j(e3, 2, this.length);
          var n2 = this[e3 + 1] | this[e3] << 8;
          return 32768 & n2 ? 4294901760 | n2 : n2;
        }, s.prototype.readInt32LE = function(e3, t2) {
          return t2 || j(e3, 4, this.length), this[e3] | this[e3 + 1] << 8 | this[e3 + 2] << 16 | this[e3 + 3] << 24;
        }, s.prototype.readInt32BE = function(e3, t2) {
          return t2 || j(e3, 4, this.length), this[e3] << 24 | this[e3 + 1] << 16 | this[e3 + 2] << 8 | this[e3 + 3];
        }, s.prototype.readFloatLE = function(e3, t2) {
          return t2 || j(e3, 4, this.length), i.read(this, e3, true, 23, 4);
        }, s.prototype.readFloatBE = function(e3, t2) {
          return t2 || j(e3, 4, this.length), i.read(this, e3, false, 23, 4);
        }, s.prototype.readDoubleLE = function(e3, t2) {
          return t2 || j(e3, 8, this.length), i.read(this, e3, true, 52, 8);
        }, s.prototype.readDoubleBE = function(e3, t2) {
          return t2 || j(e3, 8, this.length), i.read(this, e3, false, 52, 8);
        }, s.prototype.writeUIntLE = function(e3, t2, n2, r2) {
          (e3 = +e3, t2 |= 0, n2 |= 0, r2) || R(this, e3, t2, n2, Math.pow(2, 8 * n2) - 1, 0);
          var i2 = 1, o2 = 0;
          for (this[t2] = 255 & e3; ++o2 < n2 && (i2 *= 256); )
            this[t2 + o2] = e3 / i2 & 255;
          return t2 + n2;
        }, s.prototype.writeUIntBE = function(e3, t2, n2, r2) {
          (e3 = +e3, t2 |= 0, n2 |= 0, r2) || R(this, e3, t2, n2, Math.pow(2, 8 * n2) - 1, 0);
          var i2 = n2 - 1, o2 = 1;
          for (this[t2 + i2] = 255 & e3; --i2 >= 0 && (o2 *= 256); )
            this[t2 + i2] = e3 / o2 & 255;
          return t2 + n2;
        }, s.prototype.writeUInt8 = function(e3, t2, n2) {
          return e3 = +e3, t2 |= 0, n2 || R(this, e3, t2, 1, 255, 0), s.TYPED_ARRAY_SUPPORT || (e3 = Math.floor(e3)), this[t2] = 255 & e3, t2 + 1;
        }, s.prototype.writeUInt16LE = function(e3, t2, n2) {
          return e3 = +e3, t2 |= 0, n2 || R(this, e3, t2, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[t2] = 255 & e3, this[t2 + 1] = e3 >>> 8) : N(this, e3, t2, true), t2 + 2;
        }, s.prototype.writeUInt16BE = function(e3, t2, n2) {
          return e3 = +e3, t2 |= 0, n2 || R(this, e3, t2, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[t2] = e3 >>> 8, this[t2 + 1] = 255 & e3) : N(this, e3, t2, false), t2 + 2;
        }, s.prototype.writeUInt32LE = function(e3, t2, n2) {
          return e3 = +e3, t2 |= 0, n2 || R(this, e3, t2, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[t2 + 3] = e3 >>> 24, this[t2 + 2] = e3 >>> 16, this[t2 + 1] = e3 >>> 8, this[t2] = 255 & e3) : C(this, e3, t2, true), t2 + 4;
        }, s.prototype.writeUInt32BE = function(e3, t2, n2) {
          return e3 = +e3, t2 |= 0, n2 || R(this, e3, t2, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[t2] = e3 >>> 24, this[t2 + 1] = e3 >>> 16, this[t2 + 2] = e3 >>> 8, this[t2 + 3] = 255 & e3) : C(this, e3, t2, false), t2 + 4;
        }, s.prototype.writeIntLE = function(e3, t2, n2, r2) {
          if (e3 = +e3, t2 |= 0, !r2) {
            var i2 = Math.pow(2, 8 * n2 - 1);
            R(this, e3, t2, n2, i2 - 1, -i2);
          }
          var o2 = 0, a2 = 1, u2 = 0;
          for (this[t2] = 255 & e3; ++o2 < n2 && (a2 *= 256); )
            e3 < 0 && 0 === u2 && 0 !== this[t2 + o2 - 1] && (u2 = 1), this[t2 + o2] = (e3 / a2 >> 0) - u2 & 255;
          return t2 + n2;
        }, s.prototype.writeIntBE = function(e3, t2, n2, r2) {
          if (e3 = +e3, t2 |= 0, !r2) {
            var i2 = Math.pow(2, 8 * n2 - 1);
            R(this, e3, t2, n2, i2 - 1, -i2);
          }
          var o2 = n2 - 1, a2 = 1, u2 = 0;
          for (this[t2 + o2] = 255 & e3; --o2 >= 0 && (a2 *= 256); )
            e3 < 0 && 0 === u2 && 0 !== this[t2 + o2 + 1] && (u2 = 1), this[t2 + o2] = (e3 / a2 >> 0) - u2 & 255;
          return t2 + n2;
        }, s.prototype.writeInt8 = function(e3, t2, n2) {
          return e3 = +e3, t2 |= 0, n2 || R(this, e3, t2, 1, 127, -128), s.TYPED_ARRAY_SUPPORT || (e3 = Math.floor(e3)), e3 < 0 && (e3 = 255 + e3 + 1), this[t2] = 255 & e3, t2 + 1;
        }, s.prototype.writeInt16LE = function(e3, t2, n2) {
          return e3 = +e3, t2 |= 0, n2 || R(this, e3, t2, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[t2] = 255 & e3, this[t2 + 1] = e3 >>> 8) : N(this, e3, t2, true), t2 + 2;
        }, s.prototype.writeInt16BE = function(e3, t2, n2) {
          return e3 = +e3, t2 |= 0, n2 || R(this, e3, t2, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[t2] = e3 >>> 8, this[t2 + 1] = 255 & e3) : N(this, e3, t2, false), t2 + 2;
        }, s.prototype.writeInt32LE = function(e3, t2, n2) {
          return e3 = +e3, t2 |= 0, n2 || R(this, e3, t2, 4, 2147483647, -2147483648), s.TYPED_ARRAY_SUPPORT ? (this[t2] = 255 & e3, this[t2 + 1] = e3 >>> 8, this[t2 + 2] = e3 >>> 16, this[t2 + 3] = e3 >>> 24) : C(this, e3, t2, true), t2 + 4;
        }, s.prototype.writeInt32BE = function(e3, t2, n2) {
          return e3 = +e3, t2 |= 0, n2 || R(this, e3, t2, 4, 2147483647, -2147483648), e3 < 0 && (e3 = 4294967295 + e3 + 1), s.TYPED_ARRAY_SUPPORT ? (this[t2] = e3 >>> 24, this[t2 + 1] = e3 >>> 16, this[t2 + 2] = e3 >>> 8, this[t2 + 3] = 255 & e3) : C(this, e3, t2, false), t2 + 4;
        }, s.prototype.writeFloatLE = function(e3, t2, n2) {
          return I(this, e3, t2, true, n2);
        }, s.prototype.writeFloatBE = function(e3, t2, n2) {
          return I(this, e3, t2, false, n2);
        }, s.prototype.writeDoubleLE = function(e3, t2, n2) {
          return D(this, e3, t2, true, n2);
        }, s.prototype.writeDoubleBE = function(e3, t2, n2) {
          return D(this, e3, t2, false, n2);
        }, s.prototype.copy = function(e3, t2, n2, r2) {
          if (n2 || (n2 = 0), r2 || 0 === r2 || (r2 = this.length), t2 >= e3.length && (t2 = e3.length), t2 || (t2 = 0), r2 > 0 && r2 < n2 && (r2 = n2), r2 === n2)
            return 0;
          if (0 === e3.length || 0 === this.length)
            return 0;
          if (t2 < 0)
            throw new RangeError("targetStart out of bounds");
          if (n2 < 0 || n2 >= this.length)
            throw new RangeError("sourceStart out of bounds");
          if (r2 < 0)
            throw new RangeError("sourceEnd out of bounds");
          r2 > this.length && (r2 = this.length), e3.length - t2 < r2 - n2 && (r2 = e3.length - t2 + n2);
          var i2, o2 = r2 - n2;
          if (this === e3 && n2 < t2 && t2 < r2)
            for (i2 = o2 - 1; i2 >= 0; --i2)
              e3[i2 + t2] = this[i2 + n2];
          else if (o2 < 1e3 || !s.TYPED_ARRAY_SUPPORT)
            for (i2 = 0; i2 < o2; ++i2)
              e3[i2 + t2] = this[i2 + n2];
          else
            Uint8Array.prototype.set.call(e3, this.subarray(n2, n2 + o2), t2);
          return o2;
        }, s.prototype.fill = function(e3, t2, n2, r2) {
          if ("string" == typeof e3) {
            if ("string" == typeof t2 ? (r2 = t2, t2 = 0, n2 = this.length) : "string" == typeof n2 && (r2 = n2, n2 = this.length), 1 === e3.length) {
              var i2 = e3.charCodeAt(0);
              i2 < 256 && (e3 = i2);
            }
            if (void 0 !== r2 && "string" != typeof r2)
              throw new TypeError("encoding must be a string");
            if ("string" == typeof r2 && !s.isEncoding(r2))
              throw new TypeError("Unknown encoding: " + r2);
          } else
            "number" == typeof e3 && (e3 &= 255);
          if (t2 < 0 || this.length < t2 || this.length < n2)
            throw new RangeError("Out of range index");
          if (n2 <= t2)
            return this;
          var o2;
          if (t2 >>>= 0, n2 = void 0 === n2 ? this.length : n2 >>> 0, e3 || (e3 = 0), "number" == typeof e3)
            for (o2 = t2; o2 < n2; ++o2)
              this[o2] = e3;
          else {
            var a2 = s.isBuffer(e3) ? e3 : K(new s(e3, r2).toString()), u2 = a2.length;
            for (o2 = 0; o2 < n2 - t2; ++o2)
              this[o2 + t2] = a2[o2 % u2];
          }
          return this;
        };
        var F = /[^+\/0-9A-Za-z-_]/g;
        function L(e3) {
          return e3 < 16 ? "0" + e3.toString(16) : e3.toString(16);
        }
        function K(e3, t2) {
          var n2;
          t2 = t2 || 1 / 0;
          for (var r2 = e3.length, i2 = null, o2 = [], a2 = 0; a2 < r2; ++a2) {
            if ((n2 = e3.charCodeAt(a2)) > 55295 && n2 < 57344) {
              if (!i2) {
                if (n2 > 56319) {
                  (t2 -= 3) > -1 && o2.push(239, 191, 189);
                  continue;
                }
                if (a2 + 1 === r2) {
                  (t2 -= 3) > -1 && o2.push(239, 191, 189);
                  continue;
                }
                i2 = n2;
                continue;
              }
              if (n2 < 56320) {
                (t2 -= 3) > -1 && o2.push(239, 191, 189), i2 = n2;
                continue;
              }
              n2 = 65536 + (i2 - 55296 << 10 | n2 - 56320);
            } else
              i2 && (t2 -= 3) > -1 && o2.push(239, 191, 189);
            if (i2 = null, n2 < 128) {
              if ((t2 -= 1) < 0)
                break;
              o2.push(n2);
            } else if (n2 < 2048) {
              if ((t2 -= 2) < 0)
                break;
              o2.push(n2 >> 6 | 192, 63 & n2 | 128);
            } else if (n2 < 65536) {
              if ((t2 -= 3) < 0)
                break;
              o2.push(n2 >> 12 | 224, n2 >> 6 & 63 | 128, 63 & n2 | 128);
            } else {
              if (!(n2 < 1114112))
                throw new Error("Invalid code point");
              if ((t2 -= 4) < 0)
                break;
              o2.push(n2 >> 18 | 240, n2 >> 12 & 63 | 128, n2 >> 6 & 63 | 128, 63 & n2 | 128);
            }
          }
          return o2;
        }
        function B(e3) {
          return r.toByteArray(function(e4) {
            if ((e4 = function(e5) {
              return e5.trim ? e5.trim() : e5.replace(/^\s+|\s+$/g, "");
            }(e4).replace(F, "")).length < 2)
              return "";
            for (; e4.length % 4 != 0; )
              e4 += "=";
            return e4;
          }(e3));
        }
        function G(e3, t2, n2, r2) {
          for (var i2 = 0; i2 < r2 && !(i2 + n2 >= t2.length || i2 >= e3.length); ++i2)
            t2[i2 + n2] = e3[i2];
          return i2;
        }
      }).call(this, n(35));
    }, function(e, t, n) {
      var r, i, o, a, u, s = s || function(e2, t2) {
        var n2 = {}, r2 = n2.lib = {}, i2 = function() {
        }, o2 = r2.Base = { extend: function(e3) {
          i2.prototype = this;
          var t3 = new i2();
          return e3 && t3.mixIn(e3), t3.hasOwnProperty("init") || (t3.init = function() {
            t3.$super.init.apply(this, arguments);
          }), t3.init.prototype = t3, t3.$super = this, t3;
        }, create: function() {
          var e3 = this.extend();
          return e3.init.apply(e3, arguments), e3;
        }, init: function() {
        }, mixIn: function(e3) {
          for (var t3 in e3)
            e3.hasOwnProperty(t3) && (this[t3] = e3[t3]);
          e3.hasOwnProperty("toString") && (this.toString = e3.toString);
        }, clone: function() {
          return this.init.prototype.extend(this);
        } }, a2 = r2.WordArray = o2.extend({ init: function(e3, t3) {
          e3 = this.words = e3 || [], this.sigBytes = null != t3 ? t3 : 4 * e3.length;
        }, toString: function(e3) {
          return (e3 || s2).stringify(this);
        }, concat: function(e3) {
          var t3 = this.words, n3 = e3.words, r3 = this.sigBytes;
          if (e3 = e3.sigBytes, this.clamp(), r3 % 4)
            for (var i3 = 0; i3 < e3; i3++)
              t3[r3 + i3 >>> 2] |= (n3[i3 >>> 2] >>> 24 - i3 % 4 * 8 & 255) << 24 - (r3 + i3) % 4 * 8;
          else if (65535 < n3.length)
            for (i3 = 0; i3 < e3; i3 += 4)
              t3[r3 + i3 >>> 2] = n3[i3 >>> 2];
          else
            t3.push.apply(t3, n3);
          return this.sigBytes += e3, this;
        }, clamp: function() {
          var t3 = this.words, n3 = this.sigBytes;
          t3[n3 >>> 2] &= 4294967295 << 32 - n3 % 4 * 8, t3.length = e2.ceil(n3 / 4);
        }, clone: function() {
          var e3 = o2.clone.call(this);
          return e3.words = this.words.slice(0), e3;
        }, random: function(t3) {
          for (var n3 = [], r3 = 0; r3 < t3; r3 += 4)
            n3.push(4294967296 * e2.random() | 0);
          return new a2.init(n3, t3);
        } }), u2 = n2.enc = {}, s2 = u2.Hex = { stringify: function(e3) {
          var t3 = e3.words;
          e3 = e3.sigBytes;
          for (var n3 = [], r3 = 0; r3 < e3; r3++) {
            var i3 = t3[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
            n3.push((i3 >>> 4).toString(16)), n3.push((15 & i3).toString(16));
          }
          return n3.join("");
        }, parse: function(e3) {
          for (var t3 = e3.length, n3 = [], r3 = 0; r3 < t3; r3 += 2)
            n3[r3 >>> 3] |= parseInt(e3.substr(r3, 2), 16) << 24 - r3 % 8 * 4;
          return new a2.init(n3, t3 / 2);
        } }, c = u2.Latin1 = { stringify: function(e3) {
          var t3 = e3.words;
          e3 = e3.sigBytes;
          for (var n3 = [], r3 = 0; r3 < e3; r3++)
            n3.push(String.fromCharCode(t3[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255));
          return n3.join("");
        }, parse: function(e3) {
          for (var t3 = e3.length, n3 = [], r3 = 0; r3 < t3; r3++)
            n3[r3 >>> 2] |= (255 & e3.charCodeAt(r3)) << 24 - r3 % 4 * 8;
          return new a2.init(n3, t3);
        } }, l = u2.Utf8 = { stringify: function(e3) {
          try {
            return decodeURIComponent(escape(c.stringify(e3)));
          } catch (e4) {
            throw Error("Malformed UTF-8 data");
          }
        }, parse: function(e3) {
          return c.parse(unescape(encodeURIComponent(e3)));
        } }, f = r2.BufferedBlockAlgorithm = o2.extend({ reset: function() {
          this._data = new a2.init(), this._nDataBytes = 0;
        }, _append: function(e3) {
          "string" == typeof e3 && (e3 = l.parse(e3)), this._data.concat(e3), this._nDataBytes += e3.sigBytes;
        }, _process: function(t3) {
          var n3 = this._data, r3 = n3.words, i3 = n3.sigBytes, o3 = this.blockSize, u3 = i3 / (4 * o3);
          if (t3 = (u3 = t3 ? e2.ceil(u3) : e2.max((0 | u3) - this._minBufferSize, 0)) * o3, i3 = e2.min(4 * t3, i3), t3) {
            for (var s3 = 0; s3 < t3; s3 += o3)
              this._doProcessBlock(r3, s3);
            s3 = r3.splice(0, t3), n3.sigBytes -= i3;
          }
          return new a2.init(s3, i3);
        }, clone: function() {
          var e3 = o2.clone.call(this);
          return e3._data = this._data.clone(), e3;
        }, _minBufferSize: 0 });
        r2.Hasher = f.extend({ cfg: o2.extend(), init: function(e3) {
          this.cfg = this.cfg.extend(e3), this.reset();
        }, reset: function() {
          f.reset.call(this), this._doReset();
        }, update: function(e3) {
          return this._append(e3), this._process(), this;
        }, finalize: function(e3) {
          return e3 && this._append(e3), this._doFinalize();
        }, blockSize: 16, _createHelper: function(e3) {
          return function(t3, n3) {
            return new e3.init(n3).finalize(t3);
          };
        }, _createHmacHelper: function(e3) {
          return function(t3, n3) {
            return new d.HMAC.init(e3, n3).finalize(t3);
          };
        } });
        var d = n2.algo = {};
        return n2;
      }(Math);
      !function(e2) {
        for (var t2 = s, n2 = (i2 = t2.lib).WordArray, r2 = i2.Hasher, i2 = t2.algo, o2 = [], a2 = [], u2 = function(e3) {
          return 4294967296 * (e3 - (0 | e3)) | 0;
        }, c = 2, l = 0; 64 > l; ) {
          var f;
          e: {
            f = c;
            for (var d = e2.sqrt(f), p = 2; p <= d; p++)
              if (!(f % p)) {
                f = false;
                break e;
              }
            f = true;
          }
          f && (8 > l && (o2[l] = u2(e2.pow(c, 0.5))), a2[l] = u2(e2.pow(c, 1 / 3)), l++), c++;
        }
        var h = [];
        i2 = i2.SHA256 = r2.extend({ _doReset: function() {
          this._hash = new n2.init(o2.slice(0));
        }, _doProcessBlock: function(e3, t3) {
          for (var n3 = this._hash.words, r3 = n3[0], i3 = n3[1], o3 = n3[2], u3 = n3[3], s2 = n3[4], c2 = n3[5], l2 = n3[6], f2 = n3[7], d2 = 0; 64 > d2; d2++) {
            if (16 > d2)
              h[d2] = 0 | e3[t3 + d2];
            else {
              var p2 = h[d2 - 15], y = h[d2 - 2];
              h[d2] = ((p2 << 25 | p2 >>> 7) ^ (p2 << 14 | p2 >>> 18) ^ p2 >>> 3) + h[d2 - 7] + ((y << 15 | y >>> 17) ^ (y << 13 | y >>> 19) ^ y >>> 10) + h[d2 - 16];
            }
            p2 = f2 + ((s2 << 26 | s2 >>> 6) ^ (s2 << 21 | s2 >>> 11) ^ (s2 << 7 | s2 >>> 25)) + (s2 & c2 ^ ~s2 & l2) + a2[d2] + h[d2], y = ((r3 << 30 | r3 >>> 2) ^ (r3 << 19 | r3 >>> 13) ^ (r3 << 10 | r3 >>> 22)) + (r3 & i3 ^ r3 & o3 ^ i3 & o3), f2 = l2, l2 = c2, c2 = s2, s2 = u3 + p2 | 0, u3 = o3, o3 = i3, i3 = r3, r3 = p2 + y | 0;
          }
          n3[0] = n3[0] + r3 | 0, n3[1] = n3[1] + i3 | 0, n3[2] = n3[2] + o3 | 0, n3[3] = n3[3] + u3 | 0, n3[4] = n3[4] + s2 | 0, n3[5] = n3[5] + c2 | 0, n3[6] = n3[6] + l2 | 0, n3[7] = n3[7] + f2 | 0;
        }, _doFinalize: function() {
          var t3 = this._data, n3 = t3.words, r3 = 8 * this._nDataBytes, i3 = 8 * t3.sigBytes;
          return n3[i3 >>> 5] |= 128 << 24 - i3 % 32, n3[14 + (i3 + 64 >>> 9 << 4)] = e2.floor(r3 / 4294967296), n3[15 + (i3 + 64 >>> 9 << 4)] = r3, t3.sigBytes = 4 * n3.length, this._process(), this._hash;
        }, clone: function() {
          var e3 = r2.clone.call(this);
          return e3._hash = this._hash.clone(), e3;
        } });
        t2.SHA256 = r2._createHelper(i2), t2.HmacSHA256 = r2._createHmacHelper(i2);
      }(Math), i = (r = s).enc.Utf8, r.algo.HMAC = r.lib.Base.extend({ init: function(e2, t2) {
        e2 = this._hasher = new e2.init(), "string" == typeof t2 && (t2 = i.parse(t2));
        var n2 = e2.blockSize, r2 = 4 * n2;
        t2.sigBytes > r2 && (t2 = e2.finalize(t2)), t2.clamp();
        for (var o2 = this._oKey = t2.clone(), a2 = this._iKey = t2.clone(), u2 = o2.words, s2 = a2.words, c = 0; c < n2; c++)
          u2[c] ^= 1549556828, s2[c] ^= 909522486;
        o2.sigBytes = a2.sigBytes = r2, this.reset();
      }, reset: function() {
        var e2 = this._hasher;
        e2.reset(), e2.update(this._iKey);
      }, update: function(e2) {
        return this._hasher.update(e2), this;
      }, finalize: function(e2) {
        var t2 = this._hasher;
        return e2 = t2.finalize(e2), t2.reset(), t2.finalize(this._oKey.clone().concat(e2));
      } }), a = (o = s).lib.WordArray, o.enc.Base64 = { stringify: function(e2) {
        var t2 = e2.words, n2 = e2.sigBytes, r2 = this._map;
        e2.clamp(), e2 = [];
        for (var i2 = 0; i2 < n2; i2 += 3)
          for (var o2 = (t2[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255) << 16 | (t2[i2 + 1 >>> 2] >>> 24 - (i2 + 1) % 4 * 8 & 255) << 8 | t2[i2 + 2 >>> 2] >>> 24 - (i2 + 2) % 4 * 8 & 255, a2 = 0; 4 > a2 && i2 + 0.75 * a2 < n2; a2++)
            e2.push(r2.charAt(o2 >>> 6 * (3 - a2) & 63));
        if (t2 = r2.charAt(64))
          for (; e2.length % 4; )
            e2.push(t2);
        return e2.join("");
      }, parse: function(e2) {
        var t2 = e2.length, n2 = this._map;
        (r2 = n2.charAt(64)) && -1 != (r2 = e2.indexOf(r2)) && (t2 = r2);
        for (var r2 = [], i2 = 0, o2 = 0; o2 < t2; o2++)
          if (o2 % 4) {
            var u2 = n2.indexOf(e2.charAt(o2 - 1)) << o2 % 4 * 2, s2 = n2.indexOf(e2.charAt(o2)) >>> 6 - o2 % 4 * 2;
            r2[i2 >>> 2] |= (u2 | s2) << 24 - i2 % 4 * 8, i2++;
          }
        return a.create(r2, i2);
      }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" }, function(e2) {
        function t2(e3, t3, n3, r3, i3, o3, a3) {
          return ((e3 = e3 + (t3 & n3 | ~t3 & r3) + i3 + a3) << o3 | e3 >>> 32 - o3) + t3;
        }
        function n2(e3, t3, n3, r3, i3, o3, a3) {
          return ((e3 = e3 + (t3 & r3 | n3 & ~r3) + i3 + a3) << o3 | e3 >>> 32 - o3) + t3;
        }
        function r2(e3, t3, n3, r3, i3, o3, a3) {
          return ((e3 = e3 + (t3 ^ n3 ^ r3) + i3 + a3) << o3 | e3 >>> 32 - o3) + t3;
        }
        function i2(e3, t3, n3, r3, i3, o3, a3) {
          return ((e3 = e3 + (n3 ^ (t3 | ~r3)) + i3 + a3) << o3 | e3 >>> 32 - o3) + t3;
        }
        for (var o2 = s, a2 = (c = o2.lib).WordArray, u2 = c.Hasher, c = o2.algo, l = [], f = 0; 64 > f; f++)
          l[f] = 4294967296 * e2.abs(e2.sin(f + 1)) | 0;
        c = c.MD5 = u2.extend({ _doReset: function() {
          this._hash = new a2.init([1732584193, 4023233417, 2562383102, 271733878]);
        }, _doProcessBlock: function(e3, o3) {
          for (var a3 = 0; 16 > a3; a3++) {
            var u3 = e3[s2 = o3 + a3];
            e3[s2] = 16711935 & (u3 << 8 | u3 >>> 24) | 4278255360 & (u3 << 24 | u3 >>> 8);
          }
          a3 = this._hash.words;
          var s2 = e3[o3 + 0], c2 = (u3 = e3[o3 + 1], e3[o3 + 2]), f2 = e3[o3 + 3], d = e3[o3 + 4], p = e3[o3 + 5], h = e3[o3 + 6], y = e3[o3 + 7], g = e3[o3 + 8], v = e3[o3 + 9], b = e3[o3 + 10], m = e3[o3 + 11], _ = e3[o3 + 12], P = e3[o3 + 13], O = e3[o3 + 14], S = e3[o3 + 15], w = t2(w = a3[0], x = a3[1], T = a3[2], k = a3[3], s2, 7, l[0]), k = t2(k, w, x, T, u3, 12, l[1]), T = t2(T, k, w, x, c2, 17, l[2]), x = t2(x, T, k, w, f2, 22, l[3]);
          w = t2(w, x, T, k, d, 7, l[4]), k = t2(k, w, x, T, p, 12, l[5]), T = t2(T, k, w, x, h, 17, l[6]), x = t2(x, T, k, w, y, 22, l[7]), w = t2(w, x, T, k, g, 7, l[8]), k = t2(k, w, x, T, v, 12, l[9]), T = t2(T, k, w, x, b, 17, l[10]), x = t2(x, T, k, w, m, 22, l[11]), w = t2(w, x, T, k, _, 7, l[12]), k = t2(k, w, x, T, P, 12, l[13]), T = t2(T, k, w, x, O, 17, l[14]), w = n2(w, x = t2(x, T, k, w, S, 22, l[15]), T, k, u3, 5, l[16]), k = n2(k, w, x, T, h, 9, l[17]), T = n2(T, k, w, x, m, 14, l[18]), x = n2(x, T, k, w, s2, 20, l[19]), w = n2(w, x, T, k, p, 5, l[20]), k = n2(k, w, x, T, b, 9, l[21]), T = n2(T, k, w, x, S, 14, l[22]), x = n2(x, T, k, w, d, 20, l[23]), w = n2(w, x, T, k, v, 5, l[24]), k = n2(k, w, x, T, O, 9, l[25]), T = n2(T, k, w, x, f2, 14, l[26]), x = n2(x, T, k, w, g, 20, l[27]), w = n2(w, x, T, k, P, 5, l[28]), k = n2(k, w, x, T, c2, 9, l[29]), T = n2(T, k, w, x, y, 14, l[30]), w = r2(w, x = n2(x, T, k, w, _, 20, l[31]), T, k, p, 4, l[32]), k = r2(k, w, x, T, g, 11, l[33]), T = r2(T, k, w, x, m, 16, l[34]), x = r2(x, T, k, w, O, 23, l[35]), w = r2(w, x, T, k, u3, 4, l[36]), k = r2(k, w, x, T, d, 11, l[37]), T = r2(T, k, w, x, y, 16, l[38]), x = r2(x, T, k, w, b, 23, l[39]), w = r2(w, x, T, k, P, 4, l[40]), k = r2(k, w, x, T, s2, 11, l[41]), T = r2(T, k, w, x, f2, 16, l[42]), x = r2(x, T, k, w, h, 23, l[43]), w = r2(w, x, T, k, v, 4, l[44]), k = r2(k, w, x, T, _, 11, l[45]), T = r2(T, k, w, x, S, 16, l[46]), w = i2(w, x = r2(x, T, k, w, c2, 23, l[47]), T, k, s2, 6, l[48]), k = i2(k, w, x, T, y, 10, l[49]), T = i2(T, k, w, x, O, 15, l[50]), x = i2(x, T, k, w, p, 21, l[51]), w = i2(w, x, T, k, _, 6, l[52]), k = i2(k, w, x, T, f2, 10, l[53]), T = i2(T, k, w, x, b, 15, l[54]), x = i2(x, T, k, w, u3, 21, l[55]), w = i2(w, x, T, k, g, 6, l[56]), k = i2(k, w, x, T, S, 10, l[57]), T = i2(T, k, w, x, h, 15, l[58]), x = i2(x, T, k, w, P, 21, l[59]), w = i2(w, x, T, k, d, 6, l[60]), k = i2(k, w, x, T, m, 10, l[61]), T = i2(T, k, w, x, c2, 15, l[62]), x = i2(x, T, k, w, v, 21, l[63]);
          a3[0] = a3[0] + w | 0, a3[1] = a3[1] + x | 0, a3[2] = a3[2] + T | 0, a3[3] = a3[3] + k | 0;
        }, _doFinalize: function() {
          var t3 = this._data, n3 = t3.words, r3 = 8 * this._nDataBytes, i3 = 8 * t3.sigBytes;
          n3[i3 >>> 5] |= 128 << 24 - i3 % 32;
          var o3 = e2.floor(r3 / 4294967296);
          for (n3[15 + (i3 + 64 >>> 9 << 4)] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8), n3[14 + (i3 + 64 >>> 9 << 4)] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8), t3.sigBytes = 4 * (n3.length + 1), this._process(), n3 = (t3 = this._hash).words, r3 = 0; 4 > r3; r3++)
            i3 = n3[r3], n3[r3] = 16711935 & (i3 << 8 | i3 >>> 24) | 4278255360 & (i3 << 24 | i3 >>> 8);
          return t3;
        }, clone: function() {
          var e3 = u2.clone.call(this);
          return e3._hash = this._hash.clone(), e3;
        } }), o2.MD5 = u2._createHelper(c), o2.HmacMD5 = u2._createHmacHelper(c);
      }(Math), function() {
        var e2, t2 = s, n2 = (e2 = t2.lib).Base, r2 = e2.WordArray, i2 = (e2 = t2.algo).EvpKDF = n2.extend({ cfg: n2.extend({ keySize: 4, hasher: e2.MD5, iterations: 1 }), init: function(e3) {
          this.cfg = this.cfg.extend(e3);
        }, compute: function(e3, t3) {
          for (var n3 = (u2 = this.cfg).hasher.create(), i3 = r2.create(), o2 = i3.words, a2 = u2.keySize, u2 = u2.iterations; o2.length < a2; ) {
            s2 && n3.update(s2);
            var s2 = n3.update(e3).finalize(t3);
            n3.reset();
            for (var c = 1; c < u2; c++)
              s2 = n3.finalize(s2), n3.reset();
            i3.concat(s2);
          }
          return i3.sigBytes = 4 * a2, i3;
        } });
        t2.EvpKDF = function(e3, t3, n3) {
          return i2.create(n3).compute(e3, t3);
        };
      }(), s.lib.Cipher || function(e2) {
        var t2 = (h = s).lib, n2 = t2.Base, r2 = t2.WordArray, i2 = t2.BufferedBlockAlgorithm, o2 = h.enc.Base64, a2 = h.algo.EvpKDF, u2 = t2.Cipher = i2.extend({ cfg: n2.extend(), createEncryptor: function(e3, t3) {
          return this.create(this._ENC_XFORM_MODE, e3, t3);
        }, createDecryptor: function(e3, t3) {
          return this.create(this._DEC_XFORM_MODE, e3, t3);
        }, init: function(e3, t3, n3) {
          this.cfg = this.cfg.extend(n3), this._xformMode = e3, this._key = t3, this.reset();
        }, reset: function() {
          i2.reset.call(this), this._doReset();
        }, process: function(e3) {
          return this._append(e3), this._process();
        }, finalize: function(e3) {
          return e3 && this._append(e3), this._doFinalize();
        }, keySize: 4, ivSize: 4, _ENC_XFORM_MODE: 1, _DEC_XFORM_MODE: 2, _createHelper: function(e3) {
          return { encrypt: function(t3, n3, r3) {
            return ("string" == typeof n3 ? y : p).encrypt(e3, t3, n3, r3);
          }, decrypt: function(t3, n3, r3) {
            return ("string" == typeof n3 ? y : p).decrypt(e3, t3, n3, r3);
          } };
        } });
        t2.StreamCipher = u2.extend({ _doFinalize: function() {
          return this._process(true);
        }, blockSize: 1 });
        var c = h.mode = {}, l = function(e3, t3, n3) {
          var r3 = this._iv;
          r3 ? this._iv = void 0 : r3 = this._prevBlock;
          for (var i3 = 0; i3 < n3; i3++)
            e3[t3 + i3] ^= r3[i3];
        }, f = (t2.BlockCipherMode = n2.extend({ createEncryptor: function(e3, t3) {
          return this.Encryptor.create(e3, t3);
        }, createDecryptor: function(e3, t3) {
          return this.Decryptor.create(e3, t3);
        }, init: function(e3, t3) {
          this._cipher = e3, this._iv = t3;
        } })).extend();
        f.Encryptor = f.extend({ processBlock: function(e3, t3) {
          var n3 = this._cipher, r3 = n3.blockSize;
          l.call(this, e3, t3, r3), n3.encryptBlock(e3, t3), this._prevBlock = e3.slice(t3, t3 + r3);
        } }), f.Decryptor = f.extend({ processBlock: function(e3, t3) {
          var n3 = this._cipher, r3 = n3.blockSize, i3 = e3.slice(t3, t3 + r3);
          n3.decryptBlock(e3, t3), l.call(this, e3, t3, r3), this._prevBlock = i3;
        } }), c = c.CBC = f, f = (h.pad = {}).Pkcs7 = { pad: function(e3, t3) {
          for (var n3, i3 = (n3 = (n3 = 4 * t3) - e3.sigBytes % n3) << 24 | n3 << 16 | n3 << 8 | n3, o3 = [], a3 = 0; a3 < n3; a3 += 4)
            o3.push(i3);
          n3 = r2.create(o3, n3), e3.concat(n3);
        }, unpad: function(e3) {
          e3.sigBytes -= 255 & e3.words[e3.sigBytes - 1 >>> 2];
        } }, t2.BlockCipher = u2.extend({ cfg: u2.cfg.extend({ mode: c, padding: f }), reset: function() {
          u2.reset.call(this);
          var e3 = (t3 = this.cfg).iv, t3 = t3.mode;
          if (this._xformMode == this._ENC_XFORM_MODE)
            var n3 = t3.createEncryptor;
          else
            n3 = t3.createDecryptor, this._minBufferSize = 1;
          this._mode = n3.call(t3, this, e3 && e3.words);
        }, _doProcessBlock: function(e3, t3) {
          this._mode.processBlock(e3, t3);
        }, _doFinalize: function() {
          var e3 = this.cfg.padding;
          if (this._xformMode == this._ENC_XFORM_MODE) {
            e3.pad(this._data, this.blockSize);
            var t3 = this._process(true);
          } else
            t3 = this._process(true), e3.unpad(t3);
          return t3;
        }, blockSize: 4 });
        var d = t2.CipherParams = n2.extend({ init: function(e3) {
          this.mixIn(e3);
        }, toString: function(e3) {
          return (e3 || this.formatter).stringify(this);
        } }), p = (c = (h.format = {}).OpenSSL = { stringify: function(e3) {
          var t3 = e3.ciphertext;
          return ((e3 = e3.salt) ? r2.create([1398893684, 1701076831]).concat(e3).concat(t3) : t3).toString(o2);
        }, parse: function(e3) {
          var t3 = (e3 = o2.parse(e3)).words;
          if (1398893684 == t3[0] && 1701076831 == t3[1]) {
            var n3 = r2.create(t3.slice(2, 4));
            t3.splice(0, 4), e3.sigBytes -= 16;
          }
          return d.create({ ciphertext: e3, salt: n3 });
        } }, t2.SerializableCipher = n2.extend({ cfg: n2.extend({ format: c }), encrypt: function(e3, t3, n3, r3) {
          r3 = this.cfg.extend(r3);
          var i3 = e3.createEncryptor(n3, r3);
          return t3 = i3.finalize(t3), i3 = i3.cfg, d.create({ ciphertext: t3, key: n3, iv: i3.iv, algorithm: e3, mode: i3.mode, padding: i3.padding, blockSize: e3.blockSize, formatter: r3.format });
        }, decrypt: function(e3, t3, n3, r3) {
          return r3 = this.cfg.extend(r3), t3 = this._parse(t3, r3.format), e3.createDecryptor(n3, r3).finalize(t3.ciphertext);
        }, _parse: function(e3, t3) {
          return "string" == typeof e3 ? t3.parse(e3, this) : e3;
        } })), h = (h.kdf = {}).OpenSSL = { execute: function(e3, t3, n3, i3) {
          return i3 || (i3 = r2.random(8)), e3 = a2.create({ keySize: t3 + n3 }).compute(e3, i3), n3 = r2.create(e3.words.slice(t3), 4 * n3), e3.sigBytes = 4 * t3, d.create({ key: e3, iv: n3, salt: i3 });
        } }, y = t2.PasswordBasedCipher = p.extend({ cfg: p.cfg.extend({ kdf: h }), encrypt: function(e3, t3, n3, r3) {
          return n3 = (r3 = this.cfg.extend(r3)).kdf.execute(n3, e3.keySize, e3.ivSize), r3.iv = n3.iv, (e3 = p.encrypt.call(this, e3, t3, n3.key, r3)).mixIn(n3), e3;
        }, decrypt: function(e3, t3, n3, r3) {
          return r3 = this.cfg.extend(r3), t3 = this._parse(t3, r3.format), n3 = r3.kdf.execute(n3, e3.keySize, e3.ivSize, t3.salt), r3.iv = n3.iv, p.decrypt.call(this, e3, t3, n3.key, r3);
        } });
      }(), function() {
        for (var e2 = s, t2 = e2.lib.BlockCipher, n2 = e2.algo, r2 = [], i2 = [], o2 = [], a2 = [], u2 = [], c = [], l = [], f = [], d = [], p = [], h = [], y = 0; 256 > y; y++)
          h[y] = 128 > y ? y << 1 : y << 1 ^ 283;
        var g = 0, v = 0;
        for (y = 0; 256 > y; y++) {
          var b = (b = v ^ v << 1 ^ v << 2 ^ v << 3 ^ v << 4) >>> 8 ^ 255 & b ^ 99;
          r2[g] = b, i2[b] = g;
          var m = h[g], _ = h[m], P = h[_], O = 257 * h[b] ^ 16843008 * b;
          o2[g] = O << 24 | O >>> 8, a2[g] = O << 16 | O >>> 16, u2[g] = O << 8 | O >>> 24, c[g] = O, O = 16843009 * P ^ 65537 * _ ^ 257 * m ^ 16843008 * g, l[b] = O << 24 | O >>> 8, f[b] = O << 16 | O >>> 16, d[b] = O << 8 | O >>> 24, p[b] = O, g ? (g = m ^ h[h[h[P ^ m]]], v ^= h[h[v]]) : g = v = 1;
        }
        var S = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
        n2 = n2.AES = t2.extend({ _doReset: function() {
          for (var e3 = (n3 = this._key).words, t3 = n3.sigBytes / 4, n3 = 4 * ((this._nRounds = t3 + 6) + 1), i3 = this._keySchedule = [], o3 = 0; o3 < n3; o3++)
            if (o3 < t3)
              i3[o3] = e3[o3];
            else {
              var a3 = i3[o3 - 1];
              o3 % t3 ? 6 < t3 && 4 == o3 % t3 && (a3 = r2[a3 >>> 24] << 24 | r2[a3 >>> 16 & 255] << 16 | r2[a3 >>> 8 & 255] << 8 | r2[255 & a3]) : (a3 = r2[(a3 = a3 << 8 | a3 >>> 24) >>> 24] << 24 | r2[a3 >>> 16 & 255] << 16 | r2[a3 >>> 8 & 255] << 8 | r2[255 & a3], a3 ^= S[o3 / t3 | 0] << 24), i3[o3] = i3[o3 - t3] ^ a3;
            }
          for (e3 = this._invKeySchedule = [], t3 = 0; t3 < n3; t3++)
            o3 = n3 - t3, a3 = t3 % 4 ? i3[o3] : i3[o3 - 4], e3[t3] = 4 > t3 || 4 >= o3 ? a3 : l[r2[a3 >>> 24]] ^ f[r2[a3 >>> 16 & 255]] ^ d[r2[a3 >>> 8 & 255]] ^ p[r2[255 & a3]];
        }, encryptBlock: function(e3, t3) {
          this._doCryptBlock(e3, t3, this._keySchedule, o2, a2, u2, c, r2);
        }, decryptBlock: function(e3, t3) {
          var n3 = e3[t3 + 1];
          e3[t3 + 1] = e3[t3 + 3], e3[t3 + 3] = n3, this._doCryptBlock(e3, t3, this._invKeySchedule, l, f, d, p, i2), n3 = e3[t3 + 1], e3[t3 + 1] = e3[t3 + 3], e3[t3 + 3] = n3;
        }, _doCryptBlock: function(e3, t3, n3, r3, i3, o3, a3, u3) {
          for (var s2 = this._nRounds, c2 = e3[t3] ^ n3[0], l2 = e3[t3 + 1] ^ n3[1], f2 = e3[t3 + 2] ^ n3[2], d2 = e3[t3 + 3] ^ n3[3], p2 = 4, h2 = 1; h2 < s2; h2++) {
            var y2 = r3[c2 >>> 24] ^ i3[l2 >>> 16 & 255] ^ o3[f2 >>> 8 & 255] ^ a3[255 & d2] ^ n3[p2++], g2 = r3[l2 >>> 24] ^ i3[f2 >>> 16 & 255] ^ o3[d2 >>> 8 & 255] ^ a3[255 & c2] ^ n3[p2++], v2 = r3[f2 >>> 24] ^ i3[d2 >>> 16 & 255] ^ o3[c2 >>> 8 & 255] ^ a3[255 & l2] ^ n3[p2++];
            d2 = r3[d2 >>> 24] ^ i3[c2 >>> 16 & 255] ^ o3[l2 >>> 8 & 255] ^ a3[255 & f2] ^ n3[p2++], c2 = y2, l2 = g2, f2 = v2;
          }
          y2 = (u3[c2 >>> 24] << 24 | u3[l2 >>> 16 & 255] << 16 | u3[f2 >>> 8 & 255] << 8 | u3[255 & d2]) ^ n3[p2++], g2 = (u3[l2 >>> 24] << 24 | u3[f2 >>> 16 & 255] << 16 | u3[d2 >>> 8 & 255] << 8 | u3[255 & c2]) ^ n3[p2++], v2 = (u3[f2 >>> 24] << 24 | u3[d2 >>> 16 & 255] << 16 | u3[c2 >>> 8 & 255] << 8 | u3[255 & l2]) ^ n3[p2++], d2 = (u3[d2 >>> 24] << 24 | u3[c2 >>> 16 & 255] << 16 | u3[l2 >>> 8 & 255] << 8 | u3[255 & f2]) ^ n3[p2++], e3[t3] = y2, e3[t3 + 1] = g2, e3[t3 + 2] = v2, e3[t3 + 3] = d2;
        }, keySize: 8 });
        e2.AES = t2._createHelper(n2);
      }(), s.mode.ECB = ((u = s.lib.BlockCipherMode.extend()).Encryptor = u.extend({ processBlock: function(e2, t2) {
        this._cipher.encryptBlock(e2, t2);
      } }), u.Decryptor = u.extend({ processBlock: function(e2, t2) {
        this._cipher.decryptBlock(e2, t2);
      } }), u), e.exports = s;
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i = r(n(5)), o = r(n(6)), a = r(n(4)), u = (n(2), r(n(10))), s = function() {
        function e2() {
          (0, i.default)(this, e2), (0, a.default)(this, "_listeners", void 0), this._listeners = [];
        }
        return (0, o.default)(e2, [{ key: "addListener", value: function(e3) {
          this._listeners.push(e3);
        } }, { key: "removeListener", value: function(e3) {
          var t2 = [];
          this._listeners.forEach(function(n2) {
            n2 !== e3 && t2.push(n2);
          }), this._listeners = t2;
        } }, { key: "removeAllListeners", value: function() {
          this._listeners = [];
        } }, { key: "announcePresence", value: function(e3) {
          this._listeners.forEach(function(t2) {
            t2.presence && t2.presence(e3);
          });
        } }, { key: "announceStatus", value: function(e3) {
          this._listeners.forEach(function(t2) {
            t2.status && t2.status(e3);
          });
        } }, { key: "announceMessage", value: function(e3) {
          this._listeners.forEach(function(t2) {
            t2.message && t2.message(e3);
          });
        } }, { key: "announceSignal", value: function(e3) {
          this._listeners.forEach(function(t2) {
            t2.signal && t2.signal(e3);
          });
        } }, { key: "announceMessageAction", value: function(e3) {
          this._listeners.forEach(function(t2) {
            t2.messageAction && t2.messageAction(e3);
          });
        } }, { key: "announceFile", value: function(e3) {
          this._listeners.forEach(function(t2) {
            t2.file && t2.file(e3);
          });
        } }, { key: "announceObjects", value: function(e3) {
          this._listeners.forEach(function(t2) {
            t2.objects && t2.objects(e3);
          });
        } }, { key: "announceUser", value: function(e3) {
          this._listeners.forEach(function(t2) {
            t2.user && t2.user(e3);
          });
        } }, { key: "announceSpace", value: function(e3) {
          this._listeners.forEach(function(t2) {
            t2.space && t2.space(e3);
          });
        } }, { key: "announceMembership", value: function(e3) {
          this._listeners.forEach(function(t2) {
            t2.membership && t2.membership(e3);
          });
        } }, { key: "announceNetworkUp", value: function() {
          var e3 = {};
          e3.category = u.default.PNNetworkUpCategory, this.announceStatus(e3);
        } }, { key: "announceNetworkDown", value: function() {
          var e3 = {};
          e3.category = u.default.PNNetworkDownCategory, this.announceStatus(e3);
        } }]), e2;
      }();
      t.default = s, e.exports = t.default;
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNTimeOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function() {
        return "/time/0";
      }, t.handleResponse = function(e2, t2) {
        return { timetoken: t2[0] };
      }, t.isAuthSupported = function() {
        return false;
      }, t.prepareParams = function() {
        return {};
      }, t.validateParams = function() {
      };
      n(2);
      var i = r(n(1));
    }, function(e, t, n) {
    }, function(e, t, n) {
      var r = n(21), i = Object.prototype.hasOwnProperty, o = Array.isArray, a = function() {
        for (var e2 = [], t2 = 0; t2 < 256; ++t2)
          e2.push("%" + ((t2 < 16 ? "0" : "") + t2.toString(16)).toUpperCase());
        return e2;
      }(), u = function(e2, t2) {
        for (var n2 = t2 && t2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, r2 = 0; r2 < e2.length; ++r2)
          void 0 !== e2[r2] && (n2[r2] = e2[r2]);
        return n2;
      };
      e.exports = { arrayToObject: u, assign: function(e2, t2) {
        return Object.keys(t2).reduce(function(e3, n2) {
          return e3[n2] = t2[n2], e3;
        }, e2);
      }, combine: function(e2, t2) {
        return [].concat(e2, t2);
      }, compact: function(e2) {
        for (var t2 = [{ obj: { o: e2 }, prop: "o" }], n2 = [], r2 = 0; r2 < t2.length; ++r2)
          for (var i2 = t2[r2], a2 = i2.obj[i2.prop], u2 = Object.keys(a2), s = 0; s < u2.length; ++s) {
            var c = u2[s], l = a2[c];
            "object" == typeof l && null !== l && -1 === n2.indexOf(l) && (t2.push({ obj: a2, prop: c }), n2.push(l));
          }
        return function(e3) {
          for (; e3.length > 1; ) {
            var t3 = e3.pop(), n3 = t3.obj[t3.prop];
            if (o(n3)) {
              for (var r3 = [], i3 = 0; i3 < n3.length; ++i3)
                void 0 !== n3[i3] && r3.push(n3[i3]);
              t3.obj[t3.prop] = r3;
            }
          }
        }(t2), e2;
      }, decode: function(e2, t2, n2) {
        var r2 = e2.replace(/\+/g, " ");
        if ("iso-8859-1" === n2)
          return r2.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
          return decodeURIComponent(r2);
        } catch (e3) {
          return r2;
        }
      }, encode: function(e2, t2, n2, i2, o2) {
        if (0 === e2.length)
          return e2;
        var u2 = e2;
        if ("symbol" == typeof e2 ? u2 = Symbol.prototype.toString.call(e2) : "string" != typeof e2 && (u2 = String(e2)), "iso-8859-1" === n2)
          return escape(u2).replace(/%u[0-9a-f]{4}/gi, function(e3) {
            return "%26%23" + parseInt(e3.slice(2), 16) + "%3B";
          });
        for (var s = "", c = 0; c < u2.length; ++c) {
          var l = u2.charCodeAt(c);
          45 === l || 46 === l || 95 === l || 126 === l || l >= 48 && l <= 57 || l >= 65 && l <= 90 || l >= 97 && l <= 122 || o2 === r.RFC1738 && (40 === l || 41 === l) ? s += u2.charAt(c) : l < 128 ? s += a[l] : l < 2048 ? s += a[192 | l >> 6] + a[128 | 63 & l] : l < 55296 || l >= 57344 ? s += a[224 | l >> 12] + a[128 | l >> 6 & 63] + a[128 | 63 & l] : (c += 1, l = 65536 + ((1023 & l) << 10 | 1023 & u2.charCodeAt(c)), s += a[240 | l >> 18] + a[128 | l >> 12 & 63] + a[128 | l >> 6 & 63] + a[128 | 63 & l]);
        }
        return s;
      }, isBuffer: function(e2) {
        return !(!e2 || "object" != typeof e2) && !!(e2.constructor && e2.constructor.isBuffer && e2.constructor.isBuffer(e2));
      }, isRegExp: function(e2) {
        return "[object RegExp]" === Object.prototype.toString.call(e2);
      }, maybeMap: function(e2, t2) {
        if (o(e2)) {
          for (var n2 = [], r2 = 0; r2 < e2.length; r2 += 1)
            n2.push(t2(e2[r2]));
          return n2;
        }
        return t2(e2);
      }, merge: function e2(t2, n2, r2) {
        if (!n2)
          return t2;
        if ("object" != typeof n2) {
          if (o(t2))
            t2.push(n2);
          else {
            if (!t2 || "object" != typeof t2)
              return [t2, n2];
            (r2 && (r2.plainObjects || r2.allowPrototypes) || !i.call(Object.prototype, n2)) && (t2[n2] = true);
          }
          return t2;
        }
        if (!t2 || "object" != typeof t2)
          return [t2].concat(n2);
        var a2 = t2;
        return o(t2) && !o(n2) && (a2 = u(t2, r2)), o(t2) && o(n2) ? (n2.forEach(function(n3, o2) {
          if (i.call(t2, o2)) {
            var a3 = t2[o2];
            a3 && "object" == typeof a3 && n3 && "object" == typeof n3 ? t2[o2] = e2(a3, n3, r2) : t2.push(n3);
          } else
            t2[o2] = n3;
        }), t2) : Object.keys(n2).reduce(function(t3, o2) {
          var a3 = n2[o2];
          return i.call(t3, o2) ? t3[o2] = e2(t3[o2], a3, r2) : t3[o2] = a3, t3;
        }, a2);
      } };
    }, function(e, t, n) {
      function r(e2) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
          return typeof e3;
        } : function(e3) {
          return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
        })(e2);
      }
      e.exports = function(e2) {
        return null !== e2 && "object" === r(e2);
      };
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i = r(n(5)), o = r(n(14)), a = r(n(16)), u = r(n(13)), s = r(n(7)), c = r(n(32)), l = r(n(33)), f = r(n(128)), d = r(n(25)), p = r(n(129)), h = r(n(130)), y = n(131), g = (n(2), r(n(151))), v = r(n(152));
      function b(e2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if ("function" == typeof Proxy)
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (e3) {
            return false;
          }
        }();
        return function() {
          var n2, r2 = (0, u.default)(e2);
          if (t2) {
            var i2 = (0, u.default)(this).constructor;
            n2 = Reflect.construct(r2, arguments, i2);
          } else
            n2 = r2.apply(this, arguments);
          return (0, a.default)(this, n2);
        };
      }
      function m(e2) {
        if (!navigator || !navigator.sendBeacon)
          return false;
        navigator.sendBeacon(e2);
      }
      function _(e2) {
        for (var t2 = d.default.enc.Base64.parse(e2).words, n2 = new ArrayBuffer(4 * t2.length), r2 = new Uint8Array(n2), i2 = 0, o2 = 0, a2 = 0; a2 < t2.length; a2 += 1) {
          var u2 = t2[a2];
          r2[o2 = 4 * a2] = (4278190080 & u2) >> 24, r2[o2 + 1] = (16711680 & u2) >> 16, r2[o2 + 2] = (65280 & u2) >> 8, r2[o2 + 3] = 255 & u2;
        }
        for (var s2 = o2 + 3; s2 >= o2; s2 -= 1)
          0 === r2[s2] && i2 < 3 && (i2 += 1);
        return i2 > 0 ? r2.buffer.slice(0, r2.byteLength - i2) : r2.buffer;
      }
      function P(e2) {
        var t2 = function(e3) {
          return e3 && "object" === (0, s.default)(e3) && e3.constructor === Object;
        };
        if (!t2(e2))
          return e2;
        var n2 = {};
        return Object.keys(e2).forEach(function(r2) {
          var i2 = function(e3) {
            return "string" == typeof e3 || e3 instanceof String;
          }(r2), o2 = r2, a2 = e2[r2];
          Array.isArray(r2) || i2 && r2.indexOf(",") >= 0 ? o2 = (i2 ? r2.split(",") : r2).reduce(function(e3, t3) {
            return e3 += String.fromCharCode(t3);
          }, "") : (function(e3) {
            return "number" == typeof e3 && isFinite(e3);
          }(r2) || i2 && !isNaN(r2)) && (o2 = String.fromCharCode(i2 ? parseInt(r2, 10) : 10));
          n2[o2] = t2(a2) ? P(a2) : a2;
        }), n2;
      }
      var O = function(e2) {
        (0, o.default)(n2, e2);
        var t2 = b(n2);
        function n2(e3) {
          var r2;
          (0, i.default)(this, n2);
          var o2 = e3.listenToBrowserNetworkEvents, a2 = void 0 === o2 || o2;
          return e3.db = p.default, e3.sdkFamily = "Web", e3.networking = new f.default({ del: y.del, get: y.get, post: y.post, patch: y.patch, sendBeacon: m, getfile: y.getfile, postfile: y.postfile }), e3.cbor = new h.default(function(e4) {
            return P(c.default.decode(e4));
          }, _), e3.PubNubFile = v.default, e3.cryptography = new g.default(), r2 = t2.call(this, e3), a2 && (window.addEventListener("offline", function() {
            r2.networkDownDetected();
          }), window.addEventListener("online", function() {
            r2.networkUpDetected();
          })), r2;
        }
        return n2;
      }(l.default);
      t.default = O, e.exports = t.default;
    }, function(e, t, n) {
      var r, i;
      !function(o, a) {
        var u = Math.pow(2, -24), s = Math.pow(2, 32), c = Math.pow(2, 53);
        void 0 === (i = "function" == typeof (r = { encode: function(e2) {
          var t2, n2 = new ArrayBuffer(256), r2 = new DataView(n2), i2 = 0;
          function o2(e3) {
            for (var o3 = n2.byteLength, a3 = i2 + e3; o3 < a3; )
              o3 *= 2;
            if (o3 !== n2.byteLength) {
              var u3 = r2;
              n2 = new ArrayBuffer(o3), r2 = new DataView(n2);
              for (var s2 = i2 + 3 >> 2, c2 = 0; c2 < s2; ++c2)
                r2.setUint32(4 * c2, u3.getUint32(4 * c2));
            }
            return t2 = e3, r2;
          }
          function a2() {
            i2 += t2;
          }
          function u2(e3) {
            a2(o2(1).setUint8(i2, e3));
          }
          function l(e3) {
            for (var t3 = o2(e3.length), n3 = 0; n3 < e3.length; ++n3)
              t3.setUint8(i2 + n3, e3[n3]);
            a2();
          }
          function f(e3, t3) {
            t3 < 24 ? u2(e3 << 5 | t3) : t3 < 256 ? (u2(e3 << 5 | 24), u2(t3)) : t3 < 65536 ? (u2(e3 << 5 | 25), function(e4) {
              a2(o2(2).setUint16(i2, e4));
            }(t3)) : t3 < 4294967296 ? (u2(e3 << 5 | 26), function(e4) {
              a2(o2(4).setUint32(i2, e4));
            }(t3)) : (u2(e3 << 5 | 27), function(e4) {
              var t4 = e4 % s, n3 = (e4 - t4) / s, r3 = o2(8);
              r3.setUint32(i2, n3), r3.setUint32(i2 + 4, t4), a2();
            }(t3));
          }
          if (function e3(t3) {
            var n3;
            if (false === t3)
              return u2(244);
            if (true === t3)
              return u2(245);
            if (null === t3)
              return u2(246);
            if (void 0 === t3)
              return u2(247);
            switch (typeof t3) {
              case "number":
                if (Math.floor(t3) === t3) {
                  if (0 <= t3 && t3 <= c)
                    return f(0, t3);
                  if (-c <= t3 && t3 < 0)
                    return f(1, -(t3 + 1));
                }
                return u2(251), function(e4) {
                  a2(o2(8).setFloat64(i2, e4));
                }(t3);
              case "string":
                var r3 = [];
                for (n3 = 0; n3 < t3.length; ++n3) {
                  var s2 = t3.charCodeAt(n3);
                  s2 < 128 ? r3.push(s2) : s2 < 2048 ? (r3.push(192 | s2 >> 6), r3.push(128 | 63 & s2)) : s2 < 55296 ? (r3.push(224 | s2 >> 12), r3.push(128 | s2 >> 6 & 63), r3.push(128 | 63 & s2)) : (s2 = (1023 & s2) << 10, s2 |= 1023 & t3.charCodeAt(++n3), s2 += 65536, r3.push(240 | s2 >> 18), r3.push(128 | s2 >> 12 & 63), r3.push(128 | s2 >> 6 & 63), r3.push(128 | 63 & s2));
                }
                return f(3, r3.length), l(r3);
              default:
                var d2;
                if (Array.isArray(t3))
                  for (f(4, d2 = t3.length), n3 = 0; n3 < d2; ++n3)
                    e3(t3[n3]);
                else if (t3 instanceof Uint8Array)
                  f(2, t3.length), l(t3);
                else {
                  var p2 = Object.keys(t3);
                  for (f(5, d2 = p2.length), n3 = 0; n3 < d2; ++n3) {
                    var h2 = p2[n3];
                    e3(h2), e3(t3[h2]);
                  }
                }
            }
          }(e2), "slice" in n2)
            return n2.slice(0, i2);
          for (var d = new ArrayBuffer(i2), p = new DataView(d), h = 0; h < i2; ++h)
            p.setUint8(h, r2.getUint8(h));
          return d;
        }, decode: function(e2, t2, n2) {
          var r2 = new DataView(e2), i2 = 0;
          function o2(e3, t3) {
            return i2 += t3, e3;
          }
          function a2(t3) {
            return o2(new Uint8Array(e2, i2, t3), t3);
          }
          function c2() {
            return o2(r2.getUint8(i2), 1);
          }
          function l() {
            return o2(r2.getUint16(i2), 2);
          }
          function f() {
            return o2(r2.getUint32(i2), 4);
          }
          function d() {
            return 255 === r2.getUint8(i2) && (i2 += 1, true);
          }
          function p(e3) {
            if (e3 < 24)
              return e3;
            if (24 === e3)
              return c2();
            if (25 === e3)
              return l();
            if (26 === e3)
              return f();
            if (27 === e3)
              return f() * s + f();
            if (31 === e3)
              return -1;
            throw "Invalid length encoding";
          }
          function h(e3) {
            var t3 = c2();
            if (255 === t3)
              return -1;
            var n3 = p(31 & t3);
            if (n3 < 0 || t3 >> 5 !== e3)
              throw "Invalid indefinite length element";
            return n3;
          }
          function y(e3, t3) {
            for (var n3 = 0; n3 < t3; ++n3) {
              var r3 = c2();
              128 & r3 && (r3 < 224 ? (r3 = (31 & r3) << 6 | 63 & c2(), t3 -= 1) : r3 < 240 ? (r3 = (15 & r3) << 12 | (63 & c2()) << 6 | 63 & c2(), t3 -= 2) : (r3 = (15 & r3) << 18 | (63 & c2()) << 12 | (63 & c2()) << 6 | 63 & c2(), t3 -= 3)), r3 < 65536 ? e3.push(r3) : (r3 -= 65536, e3.push(55296 | r3 >> 10), e3.push(56320 | 1023 & r3));
            }
          }
          "function" != typeof t2 && (t2 = function(e3) {
            return e3;
          }), "function" != typeof n2 && (n2 = function() {
          });
          var g = function e3() {
            var s2, f2, g2 = c2(), v = g2 >> 5, b = 31 & g2;
            if (7 === v)
              switch (b) {
                case 25:
                  return function() {
                    var e4 = new ArrayBuffer(4), t3 = new DataView(e4), n3 = l(), r3 = 32768 & n3, i3 = 31744 & n3, o3 = 1023 & n3;
                    if (31744 === i3)
                      i3 = 261120;
                    else if (0 !== i3)
                      i3 += 114688;
                    else if (0 !== o3)
                      return o3 * u;
                    return t3.setUint32(0, r3 << 16 | i3 << 13 | o3 << 13), t3.getFloat32(0);
                  }();
                case 26:
                  return o2(r2.getFloat32(i2), 4);
                case 27:
                  return o2(r2.getFloat64(i2), 8);
              }
            if ((f2 = p(b)) < 0 && (v < 2 || 6 < v))
              throw "Invalid length";
            switch (v) {
              case 0:
                return f2;
              case 1:
                return -1 - f2;
              case 2:
                if (f2 < 0) {
                  for (var m = [], _ = 0; (f2 = h(v)) >= 0; )
                    _ += f2, m.push(a2(f2));
                  var P = new Uint8Array(_), O = 0;
                  for (s2 = 0; s2 < m.length; ++s2)
                    P.set(m[s2], O), O += m[s2].length;
                  return P;
                }
                return a2(f2);
              case 3:
                var S = [];
                if (f2 < 0)
                  for (; (f2 = h(v)) >= 0; )
                    y(S, f2);
                else
                  y(S, f2);
                return String.fromCharCode.apply(null, S);
              case 4:
                var w;
                if (f2 < 0)
                  for (w = []; !d(); )
                    w.push(e3());
                else
                  for (w = new Array(f2), s2 = 0; s2 < f2; ++s2)
                    w[s2] = e3();
                return w;
              case 5:
                var k = {};
                for (s2 = 0; s2 < f2 || f2 < 0 && !d(); ++s2) {
                  k[e3()] = e3();
                }
                return k;
              case 6:
                return t2(e3(), f2);
              case 7:
                switch (f2) {
                  case 20:
                    return false;
                  case 21:
                    return true;
                  case 22:
                    return null;
                  case 23:
                    return;
                  default:
                    return n2(f2);
                }
            }
          }();
          if (i2 !== e2.byteLength)
            throw "Remaining bytes";
          return g;
        } }) ? r.call(t, n, t, e) : r) || (e.exports = i);
      }();
    }, function(e, t, n) {
      var r = n(0), i = n(7);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var o = r(n(5)), a = r(n(6)), u = r(n(4)), s = r(n(8)), c = r(n(23)), l = r(n(39)), f = r(n(43)), d = r(n(44)), p = r(n(26)), h = r(n(47)), y = r(n(18)), g = n(3), v = Ie(n(52)), b = Ie(n(53)), m = Ie(n(54)), _ = Ie(n(55)), P = Ie(n(56)), O = Ie(n(57)), S = Ie(n(58)), w = Ie(n(59)), k = Ie(n(60)), T = Ie(n(61)), x = Ie(n(62)), A = Ie(n(63)), M = Ie(n(64)), E = Ie(n(65)), j = Ie(n(66)), R = Ie(n(67)), N = Ie(n(68)), C = Ie(n(69)), U = (n(28), Ie(n(70)), r(n(71))), I = r(n(72)), D = r(n(73)), F = r(n(74)), L = r(n(76)), K = r(n(77)), B = r(n(78)), G = r(n(79)), q = r(n(85)), H = r(n(86)), z = r(n(87)), W = r(n(88)), V = r(n(89)), Y = r(n(90)), J = r(n(91)), $ = r(n(92)), X = r(n(93)), Q = r(n(94)), Z = r(n(95)), ee = Ie(n(96)), te = Ie(n(97)), ne = Ie(n(98)), re = Ie(n(99)), ie = Ie(n(100)), oe = Ie(n(101)), ae = Ie(n(102)), ue = Ie(n(103)), se = Ie(n(104)), ce = Ie(n(105)), le = Ie(n(106)), fe = Ie(n(107)), de = Ie(n(108)), pe = Ie(n(109)), he = Ie(n(110)), ye = Ie(n(111)), ge = Ie(n(112)), ve = Ie(n(113)), be = Ie(n(114)), me = Ie(n(115)), _e = Ie(n(116)), Pe = r(n(117)), Oe = Ie(n(118)), Se = Ie(n(119)), we = Ie(n(120)), ke = Ie(n(121)), Te = Ie(n(122)), xe = Ie(n(123)), Ae = Ie(n(27)), Me = Ie(n(124)), Ee = r(n(125)), je = r(n(126)), Re = (Ie(n(127)), r(n(1))), Ne = r(n(10)), Ce = (n(2), r(n(17)));
      function Ue(e2) {
        if ("function" != typeof WeakMap)
          return null;
        var t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
        return (Ue = function(e3) {
          return e3 ? n2 : t2;
        })(e2);
      }
      function Ie(e2, t2) {
        if (!t2 && e2 && e2.__esModule)
          return e2;
        if (null === e2 || "object" !== i(e2) && "function" != typeof e2)
          return { default: e2 };
        var n2 = Ue(t2);
        if (n2 && n2.has(e2))
          return n2.get(e2);
        var r2 = {}, o2 = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var a2 in e2)
          if ("default" !== a2 && Object.prototype.hasOwnProperty.call(e2, a2)) {
            var u2 = o2 ? Object.getOwnPropertyDescriptor(e2, a2) : null;
            u2 && (u2.get || u2.set) ? Object.defineProperty(r2, a2, u2) : r2[a2] = e2[a2];
          }
        return r2.default = e2, n2 && n2.set(e2, r2), r2;
      }
      function De(e2, t2) {
        var n2 = Object.keys(e2);
        if (Object.getOwnPropertySymbols) {
          var r2 = Object.getOwnPropertySymbols(e2);
          t2 && (r2 = r2.filter(function(t3) {
            return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
          })), n2.push.apply(n2, r2);
        }
        return n2;
      }
      function Fe(e2) {
        for (var t2 = 1; t2 < arguments.length; t2++) {
          var n2 = null != arguments[t2] ? arguments[t2] : {};
          t2 % 2 ? De(Object(n2), true).forEach(function(t3) {
            (0, u.default)(e2, t3, n2[t3]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : De(Object(n2)).forEach(function(t3) {
            Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
        }
        return e2;
      }
      var Le = function() {
        function e2(t2) {
          var n2 = this;
          (0, o.default)(this, e2), (0, u.default)(this, "_config", void 0), (0, u.default)(this, "_telemetryManager", void 0), (0, u.default)(this, "_listenerManager", void 0), (0, u.default)(this, "_tokenManager", void 0), (0, u.default)(this, "time", void 0), (0, u.default)(this, "publish", void 0), (0, u.default)(this, "fire", void 0), (0, u.default)(this, "history", void 0), (0, u.default)(this, "deleteMessages", void 0), (0, u.default)(this, "messageCounts", void 0), (0, u.default)(this, "fetchMessages", void 0), (0, u.default)(this, "channelGroups", void 0), (0, u.default)(this, "push", void 0), (0, u.default)(this, "hereNow", void 0), (0, u.default)(this, "whereNow", void 0), (0, u.default)(this, "getState", void 0), (0, u.default)(this, "setState", void 0), (0, u.default)(this, "iAmHere", void 0), (0, u.default)(this, "iAmAway", void 0), (0, u.default)(this, "setPresenceState", void 0), (0, u.default)(this, "handshake", void 0), (0, u.default)(this, "receiveMessages", void 0), (0, u.default)(this, "grant", void 0), (0, u.default)(this, "grantToken", void 0), (0, u.default)(this, "audit", void 0), (0, u.default)(this, "revokeToken", void 0), (0, u.default)(this, "subscribe", void 0), (0, u.default)(this, "signal", void 0), (0, u.default)(this, "presence", void 0), (0, u.default)(this, "unsubscribe", void 0), (0, u.default)(this, "unsubscribeAll", void 0), (0, u.default)(this, "addMessageAction", void 0), (0, u.default)(this, "removeMessageAction", void 0), (0, u.default)(this, "getMessageActions", void 0), (0, u.default)(this, "File", void 0), (0, u.default)(this, "encryptFile", void 0), (0, u.default)(this, "decryptFile", void 0), (0, u.default)(this, "listFiles", void 0), (0, u.default)(this, "sendFile", void 0), (0, u.default)(this, "downloadFile", void 0), (0, u.default)(this, "getFileUrl", void 0), (0, u.default)(this, "deleteFile", void 0), (0, u.default)(this, "publishFile", void 0), (0, u.default)(this, "objects", void 0), (0, u.default)(this, "createUser", void 0), (0, u.default)(this, "updateUser", void 0), (0, u.default)(this, "deleteUser", void 0), (0, u.default)(this, "getUser", void 0), (0, u.default)(this, "getUsers", void 0), (0, u.default)(this, "createSpace", void 0), (0, u.default)(this, "updateSpace", void 0), (0, u.default)(this, "deleteSpace", void 0), (0, u.default)(this, "getSpaces", void 0), (0, u.default)(this, "getSpace", void 0), (0, u.default)(this, "getMembers", void 0), (0, u.default)(this, "addMembers", void 0), (0, u.default)(this, "updateMembers", void 0), (0, u.default)(this, "removeMembers", void 0), (0, u.default)(this, "getMemberships", void 0), (0, u.default)(this, "joinSpaces", void 0), (0, u.default)(this, "updateMemberships", void 0), (0, u.default)(this, "leaveSpaces", void 0), (0, u.default)(this, "disconnect", void 0), (0, u.default)(this, "reconnect", void 0), (0, u.default)(this, "destroy", void 0), (0, u.default)(this, "stop", void 0), (0, u.default)(this, "getSubscribedChannels", void 0), (0, u.default)(this, "getSubscribedChannelGroups", void 0), (0, u.default)(this, "addListener", void 0), (0, u.default)(this, "removeListener", void 0), (0, u.default)(this, "removeAllListeners", void 0), (0, u.default)(this, "parseToken", void 0), (0, u.default)(this, "setToken", void 0), (0, u.default)(this, "getToken", void 0), (0, u.default)(this, "getAuthKey", void 0), (0, u.default)(this, "setAuthKey", void 0), (0, u.default)(this, "setCipherKey", void 0), (0, u.default)(this, "setUUID", void 0), (0, u.default)(this, "getUUID", void 0), (0, u.default)(this, "getFilterExpression", void 0), (0, u.default)(this, "setFilterExpression", void 0), (0, u.default)(this, "setHeartbeatInterval", void 0), (0, u.default)(this, "setProxy", void 0), (0, u.default)(this, "encrypt", void 0), (0, u.default)(this, "decrypt", void 0);
          var r2 = t2.networking, i2 = t2.cbor, a2 = this._config = new s.default({ setup: t2 }), d2 = new c.default({ config: a2 }), Re2 = t2.cryptography;
          r2.init(a2);
          var Ne2 = this._tokenManager = new h.default(a2, i2), Ce2 = this._telemetryManager = new f.default({ maximumSamplesCount: 6e4 }), Ue2 = { config: a2, networking: r2, crypto: d2, cryptography: Re2, tokenManager: Ne2, telemetryManager: Ce2, PubNubFile: t2.PubNubFile };
          this.File = t2.PubNubFile, this.encryptFile = function(e3, t3) {
            return Re2.encryptFile(e3, t3, n2.File);
          }, this.decryptFile = function(e3, t3) {
            return Re2.decryptFile(e3, t3, n2.File);
          };
          var Ie2 = y.default.bind(this, Ue2, Ae), De2 = y.default.bind(this, Ue2, T), Le2 = y.default.bind(this, Ue2, A), Ke = y.default.bind(this, Ue2, E), Be = y.default.bind(this, Ue2, Me), Ge = this._listenerManager = new p.default(), qe = new l.default({ timeEndpoint: Ie2, leaveEndpoint: De2, heartbeatEndpoint: Le2, setStateEndpoint: Ke, subscribeEndpoint: Be, crypto: Ue2.crypto, config: Ue2.config, listenerManager: Ge, getFileUrl: function(e3) {
            return (0, L.default)(Ue2, e3);
          } });
          this.addListener = Ge.addListener.bind(Ge), this.removeListener = Ge.removeListener.bind(Ge), this.removeAllListeners = Ge.removeAllListeners.bind(Ge), this.parseToken = Ne2.parseToken.bind(Ne2), this.setToken = Ne2.setToken.bind(Ne2), this.getToken = Ne2.getToken.bind(Ne2), this.channelGroups = { listGroups: y.default.bind(this, Ue2, _), listChannels: y.default.bind(this, Ue2, P), addChannels: y.default.bind(this, Ue2, v), removeChannels: y.default.bind(this, Ue2, b), deleteGroup: y.default.bind(this, Ue2, m) }, this.push = { addChannels: y.default.bind(this, Ue2, O), removeChannels: y.default.bind(this, Ue2, S), deleteDevice: y.default.bind(this, Ue2, k), listChannels: y.default.bind(this, Ue2, w) }, this.hereNow = y.default.bind(this, Ue2, j), this.whereNow = y.default.bind(this, Ue2, x), this.getState = y.default.bind(this, Ue2, M), this.setState = qe.adaptStateChange.bind(qe), this.iAmHere = y.default.bind(this, Ue2, A), this.iAmAway = y.default.bind(this, Ue2, T), this.setPresenceState = y.default.bind(this, Ue2, E), this.grant = y.default.bind(this, Ue2, me), this.grantToken = y.default.bind(this, Ue2, _e), this.audit = y.default.bind(this, Ue2, be), this.revokeToken = y.default.bind(this, Ue2, Pe.default), this.publish = y.default.bind(this, Ue2, Oe), this.fire = function(e3, t3) {
            return e3.replicate = false, e3.storeInHistory = false, n2.publish(e3, t3);
          }, this.signal = y.default.bind(this, Ue2, Se), this.history = y.default.bind(this, Ue2, we), this.deleteMessages = y.default.bind(this, Ue2, ke), this.messageCounts = y.default.bind(this, Ue2, Te), this.fetchMessages = y.default.bind(this, Ue2, xe), this.addMessageAction = y.default.bind(this, Ue2, R), this.removeMessageAction = y.default.bind(this, Ue2, N), this.getMessageActions = y.default.bind(this, Ue2, C), this.listFiles = y.default.bind(this, Ue2, U.default);
          var He = y.default.bind(this, Ue2, I.default);
          this.publishFile = y.default.bind(this, Ue2, D.default), this.sendFile = (0, F.default)({ generateUploadUrl: He, publishFile: this.publishFile, modules: Ue2 }), this.getFileUrl = function(e3) {
            return (0, L.default)(Ue2, e3);
          }, this.downloadFile = y.default.bind(this, Ue2, K.default), this.deleteFile = y.default.bind(this, Ue2, B.default), this.handshake = y.default.bind(this, Ue2, Ee.default), this.receiveMessages = y.default.bind(this, Ue2, je.default), this.objects = { getAllUUIDMetadata: y.default.bind(this, Ue2, G.default), getUUIDMetadata: y.default.bind(this, Ue2, q.default), setUUIDMetadata: y.default.bind(this, Ue2, H.default), removeUUIDMetadata: y.default.bind(this, Ue2, z.default), getAllChannelMetadata: y.default.bind(this, Ue2, W.default), getChannelMetadata: y.default.bind(this, Ue2, V.default), setChannelMetadata: y.default.bind(this, Ue2, Y.default), removeChannelMetadata: y.default.bind(this, Ue2, J.default), getChannelMembers: y.default.bind(this, Ue2, $.default), setChannelMembers: function(e3) {
            for (var t3 = arguments.length, r3 = new Array(t3 > 1 ? t3 - 1 : 0), i3 = 1; i3 < t3; i3++)
              r3[i3 - 1] = arguments[i3];
            return y.default.call.apply(y.default, [n2, Ue2, X.default, Fe({ type: "set" }, e3)].concat(r3));
          }, removeChannelMembers: function(e3) {
            for (var t3 = arguments.length, r3 = new Array(t3 > 1 ? t3 - 1 : 0), i3 = 1; i3 < t3; i3++)
              r3[i3 - 1] = arguments[i3];
            return y.default.call.apply(y.default, [n2, Ue2, X.default, Fe({ type: "delete" }, e3)].concat(r3));
          }, getMemberships: y.default.bind(this, Ue2, Q.default), setMemberships: function(e3) {
            for (var t3 = arguments.length, r3 = new Array(t3 > 1 ? t3 - 1 : 0), i3 = 1; i3 < t3; i3++)
              r3[i3 - 1] = arguments[i3];
            return y.default.call.apply(y.default, [n2, Ue2, Z.default, Fe({ type: "set" }, e3)].concat(r3));
          }, removeMemberships: function(e3) {
            for (var t3 = arguments.length, r3 = new Array(t3 > 1 ? t3 - 1 : 0), i3 = 1; i3 < t3; i3++)
              r3[i3 - 1] = arguments[i3];
            return y.default.call.apply(y.default, [n2, Ue2, Z.default, Fe({ type: "delete" }, e3)].concat(r3));
          } }, this.createUser = (0, g.deprecated)(y.default.bind(this, Ue2, ee)), this.updateUser = (0, g.deprecated)(y.default.bind(this, Ue2, te)), this.deleteUser = (0, g.deprecated)(y.default.bind(this, Ue2, ne)), this.getUser = (0, g.deprecated)(y.default.bind(this, Ue2, re)), this.getUsers = (0, g.deprecated)(y.default.bind(this, Ue2, ie)), this.createSpace = (0, g.deprecated)(y.default.bind(this, Ue2, oe)), this.updateSpace = (0, g.deprecated)(y.default.bind(this, Ue2, ae)), this.deleteSpace = (0, g.deprecated)(y.default.bind(this, Ue2, ue)), this.getSpaces = (0, g.deprecated)(y.default.bind(this, Ue2, se)), this.getSpace = (0, g.deprecated)(y.default.bind(this, Ue2, ce)), this.addMembers = (0, g.deprecated)(y.default.bind(this, Ue2, fe)), this.updateMembers = (0, g.deprecated)(y.default.bind(this, Ue2, de)), this.removeMembers = (0, g.deprecated)(y.default.bind(this, Ue2, pe)), this.getMembers = (0, g.deprecated)(y.default.bind(this, Ue2, le)), this.getMemberships = (0, g.deprecated)(y.default.bind(this, Ue2, he)), this.joinSpaces = (0, g.deprecated)(y.default.bind(this, Ue2, ge)), this.updateMemberships = (0, g.deprecated)(y.default.bind(this, Ue2, ye)), this.leaveSpaces = (0, g.deprecated)(y.default.bind(this, Ue2, ve)), this.time = Ie2, this.subscribe = qe.adaptSubscribeChange.bind(qe), this.presence = qe.adaptPresenceChange.bind(qe), this.unsubscribe = qe.adaptUnsubscribeChange.bind(qe), this.disconnect = qe.disconnect.bind(qe), this.reconnect = qe.reconnect.bind(qe), this.destroy = function(e3) {
            qe.unsubscribeAll(e3), qe.disconnect();
          }, this.stop = this.destroy, this.unsubscribeAll = qe.unsubscribeAll.bind(qe), this.getSubscribedChannels = qe.getSubscribedChannels.bind(qe), this.getSubscribedChannelGroups = qe.getSubscribedChannelGroups.bind(qe), this.encrypt = d2.encrypt.bind(d2), this.decrypt = d2.decrypt.bind(d2), this.getAuthKey = Ue2.config.getAuthKey.bind(Ue2.config), this.setAuthKey = Ue2.config.setAuthKey.bind(Ue2.config), this.setCipherKey = Ue2.config.setCipherKey.bind(Ue2.config), this.getUUID = Ue2.config.getUUID.bind(Ue2.config), this.setUUID = Ue2.config.setUUID.bind(Ue2.config), this.getFilterExpression = Ue2.config.getFilterExpression.bind(Ue2.config), this.setFilterExpression = Ue2.config.setFilterExpression.bind(Ue2.config), this.setHeartbeatInterval = Ue2.config.setHeartbeatInterval.bind(Ue2.config), r2.hasModule("proxy") && (this.setProxy = function(e3) {
            Ue2.config.setProxy(e3), n2.reconnect();
          });
        }
        return (0, a.default)(e2, [{ key: "getVersion", value: function() {
          return this._config.getVersion();
        } }, { key: "_addPnsdkSuffix", value: function(e3, t2) {
          this._config._addPnsdkSuffix(e3, t2);
        } }, { key: "networkDownDetected", value: function() {
          this._listenerManager.announceNetworkDown(), this._config.restore ? this.disconnect() : this.destroy(true);
        } }, { key: "networkUpDetected", value: function() {
          this._listenerManager.announceNetworkUp(), this.reconnect();
        } }], [{ key: "notificationPayload", value: function(e3, t2) {
          return new d.default(e3, t2);
        } }, { key: "generateUUID", value: function() {
          return Ce.default.createUUID();
        } }]), e2;
      }();
      t.default = Le, (0, u.default)(Le, "OPERATIONS", Re.default), (0, u.default)(Le, "CATEGORIES", Ne.default), e.exports = t.default;
    }, function(e, t, n) {
      var r, i, o;
      /*! lil-uuid - v0.1 - MIT License - https://github.com/lil-js/uuid */
      i = [t], void 0 === (o = "function" == typeof (r = function(e2) {
        var t2 = { 3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i, 4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i, 5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i, all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i };
        function n2() {
          var e3, t3, n3 = "";
          for (e3 = 0; e3 < 32; e3++)
            t3 = 16 * Math.random() | 0, 8 !== e3 && 12 !== e3 && 16 !== e3 && 20 !== e3 || (n3 += "-"), n3 += (12 === e3 ? 4 : 16 === e3 ? 3 & t3 | 8 : t3).toString(16);
          return n3;
        }
        function r2(e3, n3) {
          var r3 = t2[n3 || "all"];
          return r3 && r3.test(e3) || false;
        }
        n2.isUUID = r2, n2.VERSION = "0.1.0", e2.uuid = n2, e2.isUUID = r2;
      }) ? r.apply(t, i) : r) || (e.exports = o);
    }, function(e, t) {
      var n;
      n = function() {
        return this;
      }();
      try {
        n = n || new Function("return this")();
      } catch (e2) {
        "object" == typeof window && (n = window);
      }
      e.exports = n;
    }, function(e, t, n) {
      t.byteLength = function(e2) {
        var t2 = c(e2), n2 = t2[0], r2 = t2[1];
        return 3 * (n2 + r2) / 4 - r2;
      }, t.toByteArray = function(e2) {
        var t2, n2, r2 = c(e2), a2 = r2[0], u2 = r2[1], s2 = new o(function(e3, t3, n3) {
          return 3 * (t3 + n3) / 4 - n3;
        }(0, a2, u2)), l2 = 0, f = u2 > 0 ? a2 - 4 : a2;
        for (n2 = 0; n2 < f; n2 += 4)
          t2 = i[e2.charCodeAt(n2)] << 18 | i[e2.charCodeAt(n2 + 1)] << 12 | i[e2.charCodeAt(n2 + 2)] << 6 | i[e2.charCodeAt(n2 + 3)], s2[l2++] = t2 >> 16 & 255, s2[l2++] = t2 >> 8 & 255, s2[l2++] = 255 & t2;
        2 === u2 && (t2 = i[e2.charCodeAt(n2)] << 2 | i[e2.charCodeAt(n2 + 1)] >> 4, s2[l2++] = 255 & t2);
        1 === u2 && (t2 = i[e2.charCodeAt(n2)] << 10 | i[e2.charCodeAt(n2 + 1)] << 4 | i[e2.charCodeAt(n2 + 2)] >> 2, s2[l2++] = t2 >> 8 & 255, s2[l2++] = 255 & t2);
        return s2;
      }, t.fromByteArray = function(e2) {
        for (var t2, n2 = e2.length, i2 = n2 % 3, o2 = [], a2 = 0, u2 = n2 - i2; a2 < u2; a2 += 16383)
          o2.push(l(e2, a2, a2 + 16383 > u2 ? u2 : a2 + 16383));
        1 === i2 ? (t2 = e2[n2 - 1], o2.push(r[t2 >> 2] + r[t2 << 4 & 63] + "==")) : 2 === i2 && (t2 = (e2[n2 - 2] << 8) + e2[n2 - 1], o2.push(r[t2 >> 10] + r[t2 >> 4 & 63] + r[t2 << 2 & 63] + "="));
        return o2.join("");
      };
      for (var r = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", u = 0, s = a.length; u < s; ++u)
        r[u] = a[u], i[a.charCodeAt(u)] = u;
      function c(e2) {
        var t2 = e2.length;
        if (t2 % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var n2 = e2.indexOf("=");
        return -1 === n2 && (n2 = t2), [n2, n2 === t2 ? 0 : 4 - n2 % 4];
      }
      function l(e2, t2, n2) {
        for (var i2, o2, a2 = [], u2 = t2; u2 < n2; u2 += 3)
          i2 = (e2[u2] << 16 & 16711680) + (e2[u2 + 1] << 8 & 65280) + (255 & e2[u2 + 2]), a2.push(r[(o2 = i2) >> 18 & 63] + r[o2 >> 12 & 63] + r[o2 >> 6 & 63] + r[63 & o2]);
        return a2.join("");
      }
      i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63;
    }, function(e, t) {
      /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
      t.read = function(e2, t2, n, r, i) {
        var o, a, u = 8 * i - r - 1, s = (1 << u) - 1, c = s >> 1, l = -7, f = n ? i - 1 : 0, d = n ? -1 : 1, p = e2[t2 + f];
        for (f += d, o = p & (1 << -l) - 1, p >>= -l, l += u; l > 0; o = 256 * o + e2[t2 + f], f += d, l -= 8)
          ;
        for (a = o & (1 << -l) - 1, o >>= -l, l += r; l > 0; a = 256 * a + e2[t2 + f], f += d, l -= 8)
          ;
        if (0 === o)
          o = 1 - c;
        else {
          if (o === s)
            return a ? NaN : 1 / 0 * (p ? -1 : 1);
          a += Math.pow(2, r), o -= c;
        }
        return (p ? -1 : 1) * a * Math.pow(2, o - r);
      }, t.write = function(e2, t2, n, r, i, o) {
        var a, u, s, c = 8 * o - i - 1, l = (1 << c) - 1, f = l >> 1, d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = r ? 0 : o - 1, h = r ? 1 : -1, y = t2 < 0 || 0 === t2 && 1 / t2 < 0 ? 1 : 0;
        for (t2 = Math.abs(t2), isNaN(t2) || t2 === 1 / 0 ? (u = isNaN(t2) ? 1 : 0, a = l) : (a = Math.floor(Math.log(t2) / Math.LN2), t2 * (s = Math.pow(2, -a)) < 1 && (a--, s *= 2), (t2 += a + f >= 1 ? d / s : d * Math.pow(2, 1 - f)) * s >= 2 && (a++, s /= 2), a + f >= l ? (u = 0, a = l) : a + f >= 1 ? (u = (t2 * s - 1) * Math.pow(2, i), a += f) : (u = t2 * Math.pow(2, f - 1) * Math.pow(2, i), a = 0)); i >= 8; e2[n + p] = 255 & u, p += h, u /= 256, i -= 8)
          ;
        for (a = a << i | u, c += i; c > 0; e2[n + p] = 255 & a, p += h, a /= 256, c -= 8)
          ;
        e2[n + p - h] |= 128 * y;
      };
    }, function(e, t) {
      var n = {}.toString;
      e.exports = Array.isArray || function(e2) {
        return "[object Array]" == n.call(e2);
      };
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i = r(n(7)), o = r(n(5)), a = r(n(6)), u = r(n(4)), s = (r(n(23)), r(n(8)), r(n(26)), r(n(40))), c = r(n(41)), l = r(n(3)), f = (n(2), r(n(10))), d = function() {
        function e2(t2) {
          var n2 = t2.subscribeEndpoint, r2 = t2.leaveEndpoint, i2 = t2.heartbeatEndpoint, a2 = t2.setStateEndpoint, l2 = t2.timeEndpoint, f2 = t2.getFileUrl, d2 = t2.config, p = t2.crypto, h = t2.listenerManager;
          (0, o.default)(this, e2), (0, u.default)(this, "_crypto", void 0), (0, u.default)(this, "_config", void 0), (0, u.default)(this, "_listenerManager", void 0), (0, u.default)(this, "_reconnectionManager", void 0), (0, u.default)(this, "_leaveEndpoint", void 0), (0, u.default)(this, "_heartbeatEndpoint", void 0), (0, u.default)(this, "_setStateEndpoint", void 0), (0, u.default)(this, "_subscribeEndpoint", void 0), (0, u.default)(this, "_getFileUrl", void 0), (0, u.default)(this, "_channels", void 0), (0, u.default)(this, "_presenceChannels", void 0), (0, u.default)(this, "_heartbeatChannels", void 0), (0, u.default)(this, "_heartbeatChannelGroups", void 0), (0, u.default)(this, "_channelGroups", void 0), (0, u.default)(this, "_presenceChannelGroups", void 0), (0, u.default)(this, "_currentTimetoken", void 0), (0, u.default)(this, "_lastTimetoken", void 0), (0, u.default)(this, "_storedTimetoken", void 0), (0, u.default)(this, "_region", void 0), (0, u.default)(this, "_subscribeCall", void 0), (0, u.default)(this, "_heartbeatTimer", void 0), (0, u.default)(this, "_subscriptionStatusAnnounced", void 0), (0, u.default)(this, "_autoNetworkDetection", void 0), (0, u.default)(this, "_isOnline", void 0), (0, u.default)(this, "_pendingChannelSubscriptions", void 0), (0, u.default)(this, "_pendingChannelGroupSubscriptions", void 0), (0, u.default)(this, "_dedupingManager", void 0), this._listenerManager = h, this._config = d2, this._leaveEndpoint = r2, this._heartbeatEndpoint = i2, this._setStateEndpoint = a2, this._subscribeEndpoint = n2, this._getFileUrl = f2, this._crypto = p, this._channels = {}, this._presenceChannels = {}, this._heartbeatChannels = {}, this._heartbeatChannelGroups = {}, this._channelGroups = {}, this._presenceChannelGroups = {}, this._pendingChannelSubscriptions = [], this._pendingChannelGroupSubscriptions = [], this._currentTimetoken = 0, this._lastTimetoken = 0, this._storedTimetoken = null, this._subscriptionStatusAnnounced = false, this._isOnline = true, this._reconnectionManager = new s.default({ timeEndpoint: l2 }), this._dedupingManager = new c.default({ config: d2 });
        }
        return (0, a.default)(e2, [{ key: "adaptStateChange", value: function(e3, t2) {
          var n2 = this, r2 = e3.state, i2 = e3.channels, o2 = void 0 === i2 ? [] : i2, a2 = e3.channelGroups, u2 = void 0 === a2 ? [] : a2;
          return o2.forEach(function(e4) {
            e4 in n2._channels && (n2._channels[e4].state = r2);
          }), u2.forEach(function(e4) {
            e4 in n2._channelGroups && (n2._channelGroups[e4].state = r2);
          }), this._setStateEndpoint({ state: r2, channels: o2, channelGroups: u2 }, t2);
        } }, { key: "adaptPresenceChange", value: function(e3) {
          var t2 = this, n2 = e3.connected, r2 = e3.channels, i2 = void 0 === r2 ? [] : r2, o2 = e3.channelGroups, a2 = void 0 === o2 ? [] : o2;
          n2 ? (i2.forEach(function(e4) {
            t2._heartbeatChannels[e4] = { state: {} };
          }), a2.forEach(function(e4) {
            t2._heartbeatChannelGroups[e4] = { state: {} };
          })) : (i2.forEach(function(e4) {
            e4 in t2._heartbeatChannels && delete t2._heartbeatChannels[e4];
          }), a2.forEach(function(e4) {
            e4 in t2._heartbeatChannelGroups && delete t2._heartbeatChannelGroups[e4];
          }), false === this._config.suppressLeaveEvents && this._leaveEndpoint({ channels: i2, channelGroups: a2 }, function(e4) {
            t2._listenerManager.announceStatus(e4);
          })), this.reconnect();
        } }, { key: "adaptSubscribeChange", value: function(e3) {
          var t2 = this, n2 = e3.timetoken, r2 = e3.channels, i2 = void 0 === r2 ? [] : r2, o2 = e3.channelGroups, a2 = void 0 === o2 ? [] : o2, u2 = e3.withPresence, s2 = void 0 !== u2 && u2, c2 = e3.withHeartbeats, l2 = void 0 !== c2 && c2;
          this._config.subscribeKey && "" !== this._config.subscribeKey ? (n2 && (this._lastTimetoken = this._currentTimetoken, this._currentTimetoken = n2), "0" !== this._currentTimetoken && 0 !== this._currentTimetoken && (this._storedTimetoken = this._currentTimetoken, this._currentTimetoken = 0), i2.forEach(function(e4) {
            t2._channels[e4] = { state: {} }, s2 && (t2._presenceChannels[e4] = {}), (l2 || t2._config.getHeartbeatInterval()) && (t2._heartbeatChannels[e4] = {}), t2._pendingChannelSubscriptions.push(e4);
          }), a2.forEach(function(e4) {
            t2._channelGroups[e4] = { state: {} }, s2 && (t2._presenceChannelGroups[e4] = {}), (l2 || t2._config.getHeartbeatInterval()) && (t2._heartbeatChannelGroups[e4] = {}), t2._pendingChannelGroupSubscriptions.push(e4);
          }), this._subscriptionStatusAnnounced = false, this.reconnect()) : console && console.log && console.log("subscribe key missing; aborting subscribe");
        } }, { key: "adaptUnsubscribeChange", value: function(e3, t2) {
          var n2 = this, r2 = e3.channels, i2 = void 0 === r2 ? [] : r2, o2 = e3.channelGroups, a2 = void 0 === o2 ? [] : o2, u2 = [], s2 = [];
          i2.forEach(function(e4) {
            e4 in n2._channels && (delete n2._channels[e4], u2.push(e4), e4 in n2._heartbeatChannels && delete n2._heartbeatChannels[e4]), e4 in n2._presenceChannels && (delete n2._presenceChannels[e4], u2.push(e4));
          }), a2.forEach(function(e4) {
            e4 in n2._channelGroups && (delete n2._channelGroups[e4], s2.push(e4), e4 in n2._heartbeatChannelGroups && delete n2._heartbeatChannelGroups[e4]), e4 in n2._presenceChannelGroups && (delete n2._presenceChannelGroups[e4], s2.push(e4));
          }), 0 === u2.length && 0 === s2.length || (false !== this._config.suppressLeaveEvents || t2 || this._leaveEndpoint({ channels: u2, channelGroups: s2 }, function(e4) {
            e4.affectedChannels = u2, e4.affectedChannelGroups = s2, e4.currentTimetoken = n2._currentTimetoken, e4.lastTimetoken = n2._lastTimetoken, n2._listenerManager.announceStatus(e4);
          }), 0 === Object.keys(this._channels).length && 0 === Object.keys(this._presenceChannels).length && 0 === Object.keys(this._channelGroups).length && 0 === Object.keys(this._presenceChannelGroups).length && (this._lastTimetoken = 0, this._currentTimetoken = 0, this._storedTimetoken = null, this._region = null, this._reconnectionManager.stopPolling()), this.reconnect());
        } }, { key: "unsubscribeAll", value: function(e3) {
          this.adaptUnsubscribeChange({ channels: this.getSubscribedChannels(), channelGroups: this.getSubscribedChannelGroups() }, e3);
        } }, { key: "getHeartbeatChannels", value: function() {
          return Object.keys(this._heartbeatChannels);
        } }, { key: "getHeartbeatChannelGroups", value: function() {
          return Object.keys(this._heartbeatChannelGroups);
        } }, { key: "getSubscribedChannels", value: function() {
          return Object.keys(this._channels);
        } }, { key: "getSubscribedChannelGroups", value: function() {
          return Object.keys(this._channelGroups);
        } }, { key: "reconnect", value: function() {
          this._startSubscribeLoop(), this._registerHeartbeatTimer();
        } }, { key: "disconnect", value: function() {
          this._stopSubscribeLoop(), this._stopHeartbeatTimer(), this._reconnectionManager.stopPolling();
        } }, { key: "_registerHeartbeatTimer", value: function() {
          this._stopHeartbeatTimer(), 0 !== this._config.getHeartbeatInterval() && void 0 !== this._config.getHeartbeatInterval() && (this._performHeartbeatLoop(), this._heartbeatTimer = setInterval(this._performHeartbeatLoop.bind(this), 1e3 * this._config.getHeartbeatInterval()));
        } }, { key: "_stopHeartbeatTimer", value: function() {
          this._heartbeatTimer && (clearInterval(this._heartbeatTimer), this._heartbeatTimer = null);
        } }, { key: "_performHeartbeatLoop", value: function() {
          var e3 = this, t2 = this.getHeartbeatChannels(), n2 = this.getHeartbeatChannelGroups(), r2 = {};
          if (0 !== t2.length || 0 !== n2.length) {
            this.getSubscribedChannels().forEach(function(t3) {
              var n3 = e3._channels[t3].state;
              Object.keys(n3).length && (r2[t3] = n3);
            }), this.getSubscribedChannelGroups().forEach(function(t3) {
              var n3 = e3._channelGroups[t3].state;
              Object.keys(n3).length && (r2[t3] = n3);
            });
            this._heartbeatEndpoint({ channels: t2, channelGroups: n2, state: r2 }, function(t3) {
              t3.error && e3._config.announceFailedHeartbeats && e3._listenerManager.announceStatus(t3), t3.error && e3._config.autoNetworkDetection && e3._isOnline && (e3._isOnline = false, e3.disconnect(), e3._listenerManager.announceNetworkDown(), e3.reconnect()), !t3.error && e3._config.announceSuccessfulHeartbeats && e3._listenerManager.announceStatus(t3);
            }.bind(this));
          }
        } }, { key: "_startSubscribeLoop", value: function() {
          var e3 = this;
          this._stopSubscribeLoop();
          var t2 = {}, n2 = [], r2 = [];
          if (Object.keys(this._channels).forEach(function(r3) {
            var i3 = e3._channels[r3].state;
            Object.keys(i3).length && (t2[r3] = i3), n2.push(r3);
          }), Object.keys(this._presenceChannels).forEach(function(e4) {
            n2.push("".concat(e4, "-pnpres"));
          }), Object.keys(this._channelGroups).forEach(function(n3) {
            var i3 = e3._channelGroups[n3].state;
            Object.keys(i3).length && (t2[n3] = i3), r2.push(n3);
          }), Object.keys(this._presenceChannelGroups).forEach(function(e4) {
            r2.push("".concat(e4, "-pnpres"));
          }), 0 !== n2.length || 0 !== r2.length) {
            var i2 = { channels: n2, channelGroups: r2, state: t2, timetoken: this._currentTimetoken, filterExpression: this._config.filterExpression, region: this._region };
            this._subscribeCall = this._subscribeEndpoint(i2, this._processSubscribeResponse.bind(this));
          }
        } }, { key: "_processSubscribeResponse", value: function(e3, t2) {
          var n2 = this;
          if (e3.error)
            e3.category === f.default.PNTimeoutCategory ? this._startSubscribeLoop() : e3.category === f.default.PNNetworkIssuesCategory ? (this.disconnect(), e3.error && this._config.autoNetworkDetection && this._isOnline && (this._isOnline = false, this._listenerManager.announceNetworkDown()), this._reconnectionManager.onReconnection(function() {
              n2._config.autoNetworkDetection && !n2._isOnline && (n2._isOnline = true, n2._listenerManager.announceNetworkUp()), n2.reconnect(), n2._subscriptionStatusAnnounced = true;
              var t3 = { category: f.default.PNReconnectedCategory, operation: e3.operation, lastTimetoken: n2._lastTimetoken, currentTimetoken: n2._currentTimetoken };
              n2._listenerManager.announceStatus(t3);
            }), this._reconnectionManager.startPolling(), this._listenerManager.announceStatus(e3)) : e3.category === f.default.PNBadRequestCategory ? (this._stopHeartbeatTimer(), this._listenerManager.announceStatus(e3)) : this._listenerManager.announceStatus(e3);
          else {
            if (this._storedTimetoken ? (this._currentTimetoken = this._storedTimetoken, this._storedTimetoken = null) : (this._lastTimetoken = this._currentTimetoken, this._currentTimetoken = t2.metadata.timetoken), !this._subscriptionStatusAnnounced) {
              var r2 = {};
              r2.category = f.default.PNConnectedCategory, r2.operation = e3.operation, r2.affectedChannels = this._pendingChannelSubscriptions, r2.subscribedChannels = this.getSubscribedChannels(), r2.affectedChannelGroups = this._pendingChannelGroupSubscriptions, r2.lastTimetoken = this._lastTimetoken, r2.currentTimetoken = this._currentTimetoken, this._subscriptionStatusAnnounced = true, this._listenerManager.announceStatus(r2), this._pendingChannelSubscriptions = [], this._pendingChannelGroupSubscriptions = [];
            }
            var o2 = t2.messages || [], a2 = this._config, u2 = a2.requestMessageCountThreshold, s2 = a2.dedupeOnSubscribe;
            if (u2 && o2.length >= u2) {
              var c2 = {};
              c2.category = f.default.PNRequestMessageCountExceededCategory, c2.operation = e3.operation, this._listenerManager.announceStatus(c2);
            }
            o2.forEach(function(e4) {
              var t3 = e4.channel, r3 = e4.subscriptionMatch, o3 = e4.publishMetaData;
              if (t3 === r3 && (r3 = null), s2) {
                if (n2._dedupingManager.isDuplicate(e4))
                  return;
                n2._dedupingManager.addEntry(e4);
              }
              if (l.default.endsWith(e4.channel, "-pnpres")) {
                var a3 = { channel: null, subscription: null };
                a3.actualChannel = null != r3 ? t3 : null, a3.subscribedChannel = null != r3 ? r3 : t3, t3 && (a3.channel = t3.substring(0, t3.lastIndexOf("-pnpres"))), r3 && (a3.subscription = r3.substring(0, r3.lastIndexOf("-pnpres"))), a3.action = e4.payload.action, a3.state = e4.payload.data, a3.timetoken = o3.publishTimetoken, a3.occupancy = e4.payload.occupancy, a3.uuid = e4.payload.uuid, a3.timestamp = e4.payload.timestamp, e4.payload.join && (a3.join = e4.payload.join), e4.payload.leave && (a3.leave = e4.payload.leave), e4.payload.timeout && (a3.timeout = e4.payload.timeout), n2._listenerManager.announcePresence(a3);
              } else if (1 === e4.messageType) {
                var u3 = { channel: null, subscription: null };
                u3.channel = t3, u3.subscription = r3, u3.timetoken = o3.publishTimetoken, u3.publisher = e4.issuingClientId, e4.userMetadata && (u3.userMetadata = e4.userMetadata), u3.message = e4.payload, n2._listenerManager.announceSignal(u3);
              } else if (2 === e4.messageType) {
                var c3 = { channel: null, subscription: null };
                c3.channel = t3, c3.subscription = r3, c3.timetoken = o3.publishTimetoken, c3.publisher = e4.issuingClientId, e4.userMetadata && (c3.userMetadata = e4.userMetadata), c3.message = { event: e4.payload.event, type: e4.payload.type, data: e4.payload.data }, n2._listenerManager.announceObjects(c3), "user" === e4.payload.type ? n2._listenerManager.announceUser(c3) : "space" === e4.payload.type ? n2._listenerManager.announceSpace(c3) : "membership" === e4.payload.type && n2._listenerManager.announceMembership(c3);
              } else if (3 === e4.messageType) {
                var f2 = {};
                f2.channel = t3, f2.subscription = r3, f2.timetoken = o3.publishTimetoken, f2.publisher = e4.issuingClientId, f2.data = { messageTimetoken: e4.payload.data.messageTimetoken, actionTimetoken: e4.payload.data.actionTimetoken, type: e4.payload.data.type, uuid: e4.issuingClientId, value: e4.payload.data.value }, f2.event = e4.payload.event, n2._listenerManager.announceMessageAction(f2);
              } else if (4 === e4.messageType) {
                var d2 = {};
                d2.channel = t3, d2.subscription = r3, d2.timetoken = o3.publishTimetoken, d2.publisher = e4.issuingClientId;
                var p = e4.payload;
                if (n2._config.cipherKey) {
                  var h = n2._crypto.decrypt(e4.payload);
                  "object" === (0, i.default)(h) && null !== h && (p = h);
                }
                e4.userMetadata && (d2.userMetadata = e4.userMetadata), d2.message = p.message, d2.file = { id: p.file.id, name: p.file.name, url: n2._getFileUrl({ id: p.file.id, name: p.file.name, channel: t3 }) }, n2._listenerManager.announceFile(d2);
              } else {
                var y = { channel: null, subscription: null };
                y.actualChannel = null != r3 ? t3 : null, y.subscribedChannel = null != r3 ? r3 : t3, y.channel = t3, y.subscription = r3, y.timetoken = o3.publishTimetoken, y.publisher = e4.issuingClientId, e4.userMetadata && (y.userMetadata = e4.userMetadata), n2._config.cipherKey ? y.message = n2._crypto.decrypt(e4.payload) : y.message = e4.payload, n2._listenerManager.announceMessage(y);
              }
            }), this._region = t2.metadata.region, this._startSubscribeLoop();
          }
        } }, { key: "_stopSubscribeLoop", value: function() {
          this._subscribeCall && ("function" == typeof this._subscribeCall.abort && this._subscribeCall.abort(), this._subscribeCall = null);
        } }]), e2;
      }();
      t.default = d, e.exports = t.default;
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i = r(n(5)), o = r(n(6)), a = r(n(4)), u = (r(n(27)), n(2), function() {
        function e2(t2) {
          var n2 = t2.timeEndpoint;
          (0, i.default)(this, e2), (0, a.default)(this, "_reconnectionCallback", void 0), (0, a.default)(this, "_timeEndpoint", void 0), (0, a.default)(this, "_timeTimer", void 0), this._timeEndpoint = n2;
        }
        return (0, o.default)(e2, [{ key: "onReconnection", value: function(e3) {
          this._reconnectionCallback = e3;
        } }, { key: "startPolling", value: function() {
          this._timeTimer = setInterval(this._performTimeLoop.bind(this), 3e3);
        } }, { key: "stopPolling", value: function() {
          clearInterval(this._timeTimer);
        } }, { key: "_performTimeLoop", value: function() {
          var e3 = this;
          this._timeEndpoint(function(t2) {
            t2.error || (clearInterval(e3._timeTimer), e3._reconnectionCallback());
          });
        } }]), e2;
      }());
      t.default = u, e.exports = t.default;
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i = r(n(5)), o = r(n(6)), a = r(n(4)), u = (r(n(8)), n(2), function() {
        function e2(t2) {
          var n2 = t2.config;
          (0, i.default)(this, e2), (0, a.default)(this, "_config", void 0), (0, a.default)(this, "hashHistory", void 0), this.hashHistory = [], this._config = n2;
        }
        return (0, o.default)(e2, [{ key: "getKey", value: function(e3) {
          var t2 = function(e4) {
            var t3 = 0;
            if (0 === e4.length)
              return t3;
            for (var n3 = 0; n3 < e4.length; n3 += 1) {
              t3 = (t3 << 5) - t3 + e4.charCodeAt(n3), t3 &= t3;
            }
            return t3;
          }(JSON.stringify(e3.payload)).toString(), n2 = e3.publishMetaData.publishTimetoken;
          return "".concat(n2, "-").concat(t2);
        } }, { key: "isDuplicate", value: function(e3) {
          return this.hashHistory.includes(this.getKey(e3));
        } }, { key: "addEntry", value: function(e3) {
          this.hashHistory.length >= this._config.maximumCacheSize && this.hashHistory.shift(), this.hashHistory.push(this.getKey(e3));
        } }, { key: "clearHistory", value: function() {
          this.hashHistory = [];
        } }]), e2;
      }());
      t.default = u, e.exports = t.default;
    }, function(e, t) {
      var n, r, i = e.exports = {};
      function o() {
        throw new Error("setTimeout has not been defined");
      }
      function a() {
        throw new Error("clearTimeout has not been defined");
      }
      function u(e2) {
        if (n === setTimeout)
          return setTimeout(e2, 0);
        if ((n === o || !n) && setTimeout)
          return n = setTimeout, setTimeout(e2, 0);
        try {
          return n(e2, 0);
        } catch (t2) {
          try {
            return n.call(null, e2, 0);
          } catch (t3) {
            return n.call(this, e2, 0);
          }
        }
      }
      !function() {
        try {
          n = "function" == typeof setTimeout ? setTimeout : o;
        } catch (e2) {
          n = o;
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : a;
        } catch (e2) {
          r = a;
        }
      }();
      var s, c = [], l = false, f = -1;
      function d() {
        l && s && (l = false, s.length ? c = s.concat(c) : f = -1, c.length && p());
      }
      function p() {
        if (!l) {
          var e2 = u(d);
          l = true;
          for (var t2 = c.length; t2; ) {
            for (s = c, c = []; ++f < t2; )
              s && s[f].run();
            f = -1, t2 = c.length;
          }
          s = null, l = false, function(e3) {
            if (r === clearTimeout)
              return clearTimeout(e3);
            if ((r === a || !r) && clearTimeout)
              return r = clearTimeout, clearTimeout(e3);
            try {
              r(e3);
            } catch (t3) {
              try {
                return r.call(null, e3);
              } catch (t4) {
                return r.call(this, e3);
              }
            }
          }(e2);
        }
      }
      function h(e2, t2) {
        this.fun = e2, this.array = t2;
      }
      function y() {
      }
      i.nextTick = function(e2) {
        var t2 = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n2 = 1; n2 < arguments.length; n2++)
            t2[n2 - 1] = arguments[n2];
        c.push(new h(e2, t2)), 1 !== c.length || l || u(p);
      }, h.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, i.title = "browser", i.browser = true, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = y, i.addListener = y, i.once = y, i.off = y, i.removeListener = y, i.removeAllListeners = y, i.emit = y, i.prependListener = y, i.prependOnceListener = y, i.listeners = function(e2) {
        return [];
      }, i.binding = function(e2) {
        throw new Error("process.binding is not supported");
      }, i.cwd = function() {
        return "/";
      }, i.chdir = function(e2) {
        throw new Error("process.chdir is not supported");
      }, i.umask = function() {
        return 0;
      };
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i = r(n(5)), o = r(n(6)), a = r(n(4)), u = r(n(1)), s = function() {
        function e2(t2) {
          (0, i.default)(this, e2), (0, a.default)(this, "_maximumSamplesCount", 100), (0, a.default)(this, "_trackedLatencies", {}), (0, a.default)(this, "_latencies", {}), this._maximumSamplesCount = t2.maximumSamplesCount || this._maximumSamplesCount;
        }
        return (0, o.default)(e2, [{ key: "operationsLatencyForRequest", value: function() {
          var e3 = this, t2 = {};
          return Object.keys(this._latencies).forEach(function(n2) {
            var r2 = e3._latencies[n2], i2 = e3._averageLatency(r2);
            i2 > 0 && (t2["l_".concat(n2)] = i2);
          }), t2;
        } }, { key: "startLatencyMeasure", value: function(e3, t2) {
          e3 !== u.default.PNSubscribeOperation && t2 && (this._trackedLatencies[t2] = Date.now());
        } }, { key: "stopLatencyMeasure", value: function(e3, t2) {
          if (e3 !== u.default.PNSubscribeOperation && t2) {
            var n2 = this._endpointName(e3), r2 = this._latencies[n2], i2 = this._trackedLatencies[t2];
            r2 || (r2 = this._latencies[n2] = []), r2.push(Date.now() - i2), r2.length > this._maximumSamplesCount && r2.splice(0, r2.length - this._maximumSamplesCount), delete this._trackedLatencies[t2];
          }
        } }, { key: "_averageLatency", value: function(e3) {
          return Math.floor(e3.reduce(function(e4, t2) {
            return e4 + t2;
          }, 0) / e3.length);
        } }, { key: "_endpointName", value: function(e3) {
          var t2 = null;
          switch (e3) {
            case u.default.PNPublishOperation:
              t2 = "pub";
              break;
            case u.default.PNSignalOperation:
              t2 = "sig";
              break;
            case u.default.PNHistoryOperation:
            case u.default.PNFetchMessagesOperation:
            case u.default.PNDeleteMessagesOperation:
            case u.default.PNMessageCounts:
              t2 = "hist";
              break;
            case u.default.PNUnsubscribeOperation:
            case u.default.PNWhereNowOperation:
            case u.default.PNHereNowOperation:
            case u.default.PNHeartbeatOperation:
            case u.default.PNSetStateOperation:
            case u.default.PNGetStateOperation:
              t2 = "pres";
              break;
            case u.default.PNAddChannelsToGroupOperation:
            case u.default.PNRemoveChannelsFromGroupOperation:
            case u.default.PNChannelGroupsOperation:
            case u.default.PNRemoveGroupOperation:
            case u.default.PNChannelsForGroupOperation:
              t2 = "cg";
              break;
            case u.default.PNPushNotificationEnabledChannelsOperation:
            case u.default.PNRemoveAllPushNotificationsOperation:
              t2 = "push";
              break;
            case u.default.PNCreateUserOperation:
            case u.default.PNUpdateUserOperation:
            case u.default.PNDeleteUserOperation:
            case u.default.PNGetUserOperation:
            case u.default.PNGetUsersOperation:
            case u.default.PNCreateSpaceOperation:
            case u.default.PNUpdateSpaceOperation:
            case u.default.PNDeleteSpaceOperation:
            case u.default.PNGetSpaceOperation:
            case u.default.PNGetSpacesOperation:
            case u.default.PNGetMembersOperation:
            case u.default.PNUpdateMembersOperation:
            case u.default.PNGetMembershipsOperation:
            case u.default.PNUpdateMembershipsOperation:
              t2 = "obj";
              break;
            case u.default.PNAddMessageActionOperation:
            case u.default.PNRemoveMessageActionOperation:
            case u.default.PNGetMessageActionsOperation:
              t2 = "msga";
              break;
            case u.default.PNAccessManagerGrant:
            case u.default.PNAccessManagerAudit:
              t2 = "pam";
              break;
            case u.default.PNAccessManagerGrantToken:
            case u.default.PNAccessManagerRevokeToken:
              t2 = "pamv3";
              break;
            default:
              t2 = "time";
          }
          return t2;
        } }]), e2;
      }();
      t.default = s, e.exports = t.default;
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = t.MPNSNotificationPayload = t.FCMNotificationPayload = t.APNSNotificationPayload = void 0;
      var i = r(n(45)), o = r(n(22)), a = r(n(14)), u = r(n(16)), s = r(n(13)), c = r(n(5)), l = r(n(6)), f = r(n(4)), d = (n(2), ["notification", "data"]);
      function p(e2, t2) {
        var n2 = Object.keys(e2);
        if (Object.getOwnPropertySymbols) {
          var r2 = Object.getOwnPropertySymbols(e2);
          t2 && (r2 = r2.filter(function(t3) {
            return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
          })), n2.push.apply(n2, r2);
        }
        return n2;
      }
      function h(e2) {
        for (var t2 = 1; t2 < arguments.length; t2++) {
          var n2 = null != arguments[t2] ? arguments[t2] : {};
          t2 % 2 ? p(Object(n2), true).forEach(function(t3) {
            (0, f.default)(e2, t3, n2[t3]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : p(Object(n2)).forEach(function(t3) {
            Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
        }
        return e2;
      }
      function y(e2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if ("function" == typeof Proxy)
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (e3) {
            return false;
          }
        }();
        return function() {
          var n2, r2 = (0, s.default)(e2);
          if (t2) {
            var i2 = (0, s.default)(this).constructor;
            n2 = Reflect.construct(r2, arguments, i2);
          } else
            n2 = r2.apply(this, arguments);
          return (0, u.default)(this, n2);
        };
      }
      var g = function() {
        function e2(t2, n2, r2) {
          (0, c.default)(this, e2), (0, f.default)(this, "_subtitle", void 0), (0, f.default)(this, "_payload", void 0), (0, f.default)(this, "_badge", void 0), (0, f.default)(this, "_sound", void 0), (0, f.default)(this, "_title", void 0), (0, f.default)(this, "_body", void 0), this._payload = t2, this._setDefaultPayloadStructure(), this.title = n2, this.body = r2;
        }
        return (0, l.default)(e2, [{ key: "payload", get: function() {
          return this._payload;
        } }, { key: "title", set: function(e3) {
          this._title = e3;
        } }, { key: "subtitle", set: function(e3) {
          this._subtitle = e3;
        } }, { key: "body", set: function(e3) {
          this._body = e3;
        } }, { key: "badge", set: function(e3) {
          this._badge = e3;
        } }, { key: "sound", set: function(e3) {
          this._sound = e3;
        } }, { key: "_setDefaultPayloadStructure", value: function() {
        } }, { key: "toObject", value: function() {
          return {};
        } }]), e2;
      }(), v = function(e2) {
        (0, a.default)(n2, e2);
        var t2 = y(n2);
        function n2() {
          var e3;
          (0, c.default)(this, n2);
          for (var r2 = arguments.length, i2 = new Array(r2), a2 = 0; a2 < r2; a2++)
            i2[a2] = arguments[a2];
          return e3 = t2.call.apply(t2, [this].concat(i2)), (0, f.default)((0, o.default)(e3), "_configurations", void 0), (0, f.default)((0, o.default)(e3), "_apnsPushType", void 0), (0, f.default)((0, o.default)(e3), "_isSilent", void 0), e3;
        }
        return (0, l.default)(n2, [{ key: "configurations", set: function(e3) {
          e3 && e3.length && (this._configurations = e3);
        } }, { key: "notification", get: function() {
          return this._payload.aps;
        } }, { key: "title", get: function() {
          return this._title;
        }, set: function(e3) {
          e3 && e3.length && (this._payload.aps.alert.title = e3, this._title = e3);
        } }, { key: "subtitle", get: function() {
          return this._subtitle;
        }, set: function(e3) {
          e3 && e3.length && (this._payload.aps.alert.subtitle = e3, this._subtitle = e3);
        } }, { key: "body", get: function() {
          return this._body;
        }, set: function(e3) {
          e3 && e3.length && (this._payload.aps.alert.body = e3, this._body = e3);
        } }, { key: "badge", get: function() {
          return this._badge;
        }, set: function(e3) {
          null != e3 && (this._payload.aps.badge = e3, this._badge = e3);
        } }, { key: "sound", get: function() {
          return this._sound;
        }, set: function(e3) {
          e3 && e3.length && (this._payload.aps.sound = e3, this._sound = e3);
        } }, { key: "silent", set: function(e3) {
          this._isSilent = e3;
        } }, { key: "_setDefaultPayloadStructure", value: function() {
          this._payload.aps = { alert: {} };
        } }, { key: "toObject", value: function() {
          var e3 = this, t3 = h({}, this._payload), n3 = t3.aps, r2 = n3.alert;
          if (this._isSilent && (n3["content-available"] = 1), "apns2" === this._apnsPushType) {
            if (!this._configurations || !this._configurations.length)
              throw new ReferenceError("APNS2 configuration is missing");
            var i2 = [];
            this._configurations.forEach(function(t4) {
              i2.push(e3._objectFromAPNS2Configuration(t4));
            }), i2.length && (t3.pn_push = i2);
          }
          return r2 && Object.keys(r2).length || delete n3.alert, this._isSilent && (delete n3.alert, delete n3.badge, delete n3.sound, r2 = {}), this._isSilent || Object.keys(r2).length ? t3 : null;
        } }, { key: "_objectFromAPNS2Configuration", value: function(e3) {
          var t3 = this;
          if (!e3.targets || !e3.targets.length)
            throw new ReferenceError("At least one APNS2 target should be provided");
          var n3 = [];
          e3.targets.forEach(function(e4) {
            n3.push(t3._objectFromAPNSTarget(e4));
          });
          var r2 = e3.collapseId, i2 = e3.expirationDate, o2 = { auth_method: "token", targets: n3, version: "v2" };
          return r2 && r2.length && (o2.collapse_id = r2), i2 && (o2.expiration = i2.toISOString()), o2;
        } }, { key: "_objectFromAPNSTarget", value: function(e3) {
          if (!e3.topic || !e3.topic.length)
            throw new TypeError("Target 'topic' undefined.");
          var t3 = e3.topic, n3 = e3.environment, r2 = void 0 === n3 ? "development" : n3, i2 = e3.excludedDevices, o2 = void 0 === i2 ? [] : i2, a2 = { topic: t3, environment: r2 };
          return o2.length && (a2.excluded_devices = o2), a2;
        } }]), n2;
      }(g);
      t.APNSNotificationPayload = v;
      var b = function(e2) {
        (0, a.default)(n2, e2);
        var t2 = y(n2);
        function n2() {
          var e3;
          (0, c.default)(this, n2);
          for (var r2 = arguments.length, i2 = new Array(r2), a2 = 0; a2 < r2; a2++)
            i2[a2] = arguments[a2];
          return e3 = t2.call.apply(t2, [this].concat(i2)), (0, f.default)((0, o.default)(e3), "_backContent", void 0), (0, f.default)((0, o.default)(e3), "_backTitle", void 0), (0, f.default)((0, o.default)(e3), "_count", void 0), (0, f.default)((0, o.default)(e3), "_type", void 0), e3;
        }
        return (0, l.default)(n2, [{ key: "backContent", get: function() {
          return this._backContent;
        }, set: function(e3) {
          e3 && e3.length && (this._payload.back_content = e3, this._backContent = e3);
        } }, { key: "backTitle", get: function() {
          return this._backTitle;
        }, set: function(e3) {
          e3 && e3.length && (this._payload.back_title = e3, this._backTitle = e3);
        } }, { key: "count", get: function() {
          return this._count;
        }, set: function(e3) {
          null != e3 && (this._payload.count = e3, this._count = e3);
        } }, { key: "title", get: function() {
          return this._title;
        }, set: function(e3) {
          e3 && e3.length && (this._payload.title = e3, this._title = e3);
        } }, { key: "type", get: function() {
          return this._type;
        }, set: function(e3) {
          e3 && e3.length && (this._payload.type = e3, this._type = e3);
        } }, { key: "subtitle", get: function() {
          return this.backTitle;
        }, set: function(e3) {
          this.backTitle = e3;
        } }, { key: "body", get: function() {
          return this.backContent;
        }, set: function(e3) {
          this.backContent = e3;
        } }, { key: "badge", get: function() {
          return this.count;
        }, set: function(e3) {
          this.count = e3;
        } }, { key: "toObject", value: function() {
          return Object.keys(this._payload).length ? h({}, this._payload) : null;
        } }]), n2;
      }(g);
      t.MPNSNotificationPayload = b;
      var m = function(e2) {
        (0, a.default)(n2, e2);
        var t2 = y(n2);
        function n2() {
          var e3;
          (0, c.default)(this, n2);
          for (var r2 = arguments.length, i2 = new Array(r2), a2 = 0; a2 < r2; a2++)
            i2[a2] = arguments[a2];
          return e3 = t2.call.apply(t2, [this].concat(i2)), (0, f.default)((0, o.default)(e3), "_isSilent", void 0), (0, f.default)((0, o.default)(e3), "_icon", void 0), (0, f.default)((0, o.default)(e3), "_tag", void 0), e3;
        }
        return (0, l.default)(n2, [{ key: "notification", get: function() {
          return this._payload.notification;
        } }, { key: "data", get: function() {
          return this._payload.data;
        } }, { key: "title", get: function() {
          return this._title;
        }, set: function(e3) {
          e3 && e3.length && (this._payload.notification.title = e3, this._title = e3);
        } }, { key: "body", get: function() {
          return this._body;
        }, set: function(e3) {
          e3 && e3.length && (this._payload.notification.body = e3, this._body = e3);
        } }, { key: "sound", get: function() {
          return this._sound;
        }, set: function(e3) {
          e3 && e3.length && (this._payload.notification.sound = e3, this._sound = e3);
        } }, { key: "icon", get: function() {
          return this._icon;
        }, set: function(e3) {
          e3 && e3.length && (this._payload.notification.icon = e3, this._icon = e3);
        } }, { key: "tag", get: function() {
          return this._tag;
        }, set: function(e3) {
          e3 && e3.length && (this._payload.notification.tag = e3, this._tag = e3);
        } }, { key: "silent", set: function(e3) {
          this._isSilent = e3;
        } }, { key: "_setDefaultPayloadStructure", value: function() {
          this._payload.notification = {}, this._payload.data = {};
        } }, { key: "toObject", value: function() {
          var e3 = h({}, this._payload.data), t3 = null, n3 = {};
          if (Object.keys(this._payload).length > 2) {
            var r2 = this._payload, o2 = (r2.notification, r2.data, (0, i.default)(r2, d));
            e3 = h(h({}, e3), o2);
          }
          return this._isSilent ? e3.notification = this._payload.notification : t3 = this._payload.notification, Object.keys(e3).length && (n3.data = e3), t3 && Object.keys(t3).length && (n3.notification = t3), Object.keys(n3).length ? n3 : null;
        } }]), n2;
      }(g);
      t.FCMNotificationPayload = m;
      var _ = function() {
        function e2(t2, n2) {
          (0, c.default)(this, e2), (0, f.default)(this, "_payload", void 0), (0, f.default)(this, "_debugging", void 0), (0, f.default)(this, "_subtitle", void 0), (0, f.default)(this, "_badge", void 0), (0, f.default)(this, "_sound", void 0), (0, f.default)(this, "_title", void 0), (0, f.default)(this, "_body", void 0), (0, f.default)(this, "apns", void 0), (0, f.default)(this, "mpns", void 0), (0, f.default)(this, "fcm", void 0), this._payload = { apns: {}, mpns: {}, fcm: {} }, this._title = t2, this._body = n2, this.apns = new v(this._payload.apns, t2, n2), this.mpns = new b(this._payload.mpns, t2, n2), this.fcm = new m(this._payload.fcm, t2, n2);
        }
        return (0, l.default)(e2, [{ key: "debugging", set: function(e3) {
          this._debugging = e3;
        } }, { key: "title", get: function() {
          return this._title;
        } }, { key: "body", get: function() {
          return this._body;
        } }, { key: "subtitle", get: function() {
          return this._subtitle;
        }, set: function(e3) {
          this._subtitle = e3, this.apns.subtitle = e3, this.mpns.subtitle = e3, this.fcm.subtitle = e3;
        } }, { key: "badge", get: function() {
          return this._badge;
        }, set: function(e3) {
          this._badge = e3, this.apns.badge = e3, this.mpns.badge = e3, this.fcm.badge = e3;
        } }, { key: "sound", get: function() {
          return this._sound;
        }, set: function(e3) {
          this._sound = e3, this.apns.sound = e3, this.mpns.sound = e3, this.fcm.sound = e3;
        } }, { key: "buildPayload", value: function(e3) {
          var t2 = {};
          if (e3.includes("apns") || e3.includes("apns2")) {
            this.apns._apnsPushType = e3.includes("apns") ? "apns" : "apns2";
            var n2 = this.apns.toObject();
            n2 && Object.keys(n2).length && (t2.pn_apns = n2);
          }
          if (e3.includes("mpns")) {
            var r2 = this.mpns.toObject();
            r2 && Object.keys(r2).length && (t2.pn_mpns = r2);
          }
          if (e3.includes("fcm")) {
            var i2 = this.fcm.toObject();
            i2 && Object.keys(i2).length && (t2.pn_gcm = i2);
          }
          return Object.keys(t2).length && this._debugging && (t2.pn_debug = true), t2;
        } }]), e2;
      }();
      t.default = _;
    }, function(e, t, n) {
      var r = n(46);
      e.exports = function(e2, t2) {
        if (null == e2)
          return {};
        var n2, i, o = r(e2, t2);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e2);
          for (i = 0; i < a.length; i++)
            n2 = a[i], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o[n2] = e2[n2]);
        }
        return o;
      }, e.exports.default = e.exports, e.exports.__esModule = true;
    }, function(e, t) {
      e.exports = function(e2, t2) {
        if (null == e2)
          return {};
        var n, r, i = {}, o = Object.keys(e2);
        for (r = 0; r < o.length; r++)
          n = o[r], t2.indexOf(n) >= 0 || (i[n] = e2[n]);
        return i;
      }, e.exports.default = e.exports, e.exports.__esModule = true;
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i = r(n(5)), o = r(n(6)), a = r(n(4)), u = (r(n(8)), n(2), function() {
        function e2(t2, n2) {
          (0, i.default)(this, e2), (0, a.default)(this, "_config", void 0), (0, a.default)(this, "_cbor", void 0), (0, a.default)(this, "_token", void 0), this._config = t2, this._cbor = n2;
        }
        return (0, o.default)(e2, [{ key: "setToken", value: function(e3) {
          e3 && e3.length > 0 ? this._token = e3 : this._token = void 0;
        } }, { key: "getToken", value: function() {
          return this._token;
        } }, { key: "extractPermissions", value: function(e3) {
          var t2 = { read: false, write: false, manage: false, delete: false, get: false, update: false, join: false };
          return 128 == (128 & e3) && (t2.join = true), 64 == (64 & e3) && (t2.update = true), 32 == (32 & e3) && (t2.get = true), 8 == (8 & e3) && (t2.delete = true), 4 == (4 & e3) && (t2.manage = true), 2 == (2 & e3) && (t2.write = true), 1 == (1 & e3) && (t2.read = true), t2;
        } }, { key: "parseToken", value: function(e3) {
          var t2 = this, n2 = this._cbor.decodeToken(e3);
          if (void 0 !== n2) {
            var r2 = n2.res.uuid ? Object.keys(n2.res.uuid) : [], i2 = Object.keys(n2.res.chan), o2 = Object.keys(n2.res.grp), a2 = n2.pat.uuid ? Object.keys(n2.pat.uuid) : [], u2 = Object.keys(n2.pat.chan), s = Object.keys(n2.pat.grp), c = { version: n2.v, timestamp: n2.t, ttl: n2.ttl, authorized_uuid: n2.uuid }, l = r2.length > 0, f = i2.length > 0, d = o2.length > 0;
            (l || f || d) && (c.resources = {}, l && (c.resources.uuids = {}, r2.forEach(function(e4) {
              c.resources.uuids[e4] = t2.extractPermissions(n2.res.uuid[e4]);
            })), f && (c.resources.channels = {}, i2.forEach(function(e4) {
              c.resources.channels[e4] = t2.extractPermissions(n2.res.chan[e4]);
            })), d && (c.resources.groups = {}, o2.forEach(function(e4) {
              c.resources.groups[e4] = t2.extractPermissions(n2.res.grp[e4]);
            })));
            var p = a2.length > 0, h = u2.length > 0, y = s.length > 0;
            return (p || h || y) && (c.patterns = {}, p && (c.patterns.uuids = {}, a2.forEach(function(e4) {
              c.patterns.uuids[e4] = t2.extractPermissions(n2.pat.uuid[e4]);
            })), h && (c.patterns.channels = {}, u2.forEach(function(e4) {
              c.patterns.channels[e4] = t2.extractPermissions(n2.pat.chan[e4]);
            })), y && (c.patterns.groups = {}, s.forEach(function(e4) {
              c.patterns.groups[e4] = t2.extractPermissions(n2.pat.grp[e4]);
            }))), Object.keys(n2.meta).length > 0 && (c.meta = n2.meta), c.signature = n2.sig, c;
          }
        } }]), e2;
      }());
      t.default = u, e.exports = t.default;
    }, function(e, t, n) {
      var r = n(13), i = n(15), o = n(49), a = n(50);
      function u(t2) {
        var n2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
        return e.exports = u = function(e2) {
          if (null === e2 || !o(e2))
            return e2;
          if ("function" != typeof e2)
            throw new TypeError("Super expression must either be null or a function");
          if (void 0 !== n2) {
            if (n2.has(e2))
              return n2.get(e2);
            n2.set(e2, t3);
          }
          function t3() {
            return a(e2, arguments, r(this).constructor);
          }
          return t3.prototype = Object.create(e2.prototype, { constructor: { value: t3, enumerable: false, writable: true, configurable: true } }), i(t3, e2);
        }, e.exports.default = e.exports, e.exports.__esModule = true, u(t2);
      }
      e.exports = u, e.exports.default = e.exports, e.exports.__esModule = true;
    }, function(e, t) {
      e.exports = function(e2) {
        return -1 !== Function.toString.call(e2).indexOf("[native code]");
      }, e.exports.default = e.exports, e.exports.__esModule = true;
    }, function(e, t, n) {
      var r = n(15), i = n(51);
      function o(t2, n2, a) {
        return i() ? (e.exports = o = Reflect.construct, e.exports.default = e.exports, e.exports.__esModule = true) : (e.exports = o = function(e2, t3, n3) {
          var i2 = [null];
          i2.push.apply(i2, t3);
          var o2 = new (Function.bind.apply(e2, i2))();
          return n3 && r(o2, n3.prototype), o2;
        }, e.exports.default = e.exports, e.exports.__esModule = true), o.apply(null, arguments);
      }
      e.exports = o, e.exports.default = e.exports, e.exports.__esModule = true;
    }, function(e, t) {
      e.exports = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if ("function" == typeof Proxy)
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (e2) {
          return false;
        }
      }, e.exports.default = e.exports, e.exports.__esModule = true;
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNAddChannelsToGroupOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = t2.channelGroup, r2 = e2.config;
        return "/v1/channel-registration/sub-key/".concat(r2.subscribeKey, "/channel-group/").concat(o.default.encodeString(n2));
      }, t.handleResponse = function() {
        return {};
      }, t.isAuthSupported = function() {
        return true;
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.channels;
        return { add: (void 0 === n2 ? [] : n2).join(",") };
      }, t.validateParams = function(e2, t2) {
        var n2 = t2.channels, r2 = t2.channelGroup, i2 = e2.config;
        if (!r2)
          return "Missing Channel Group";
        if (!n2 || 0 === n2.length)
          return "Missing Channels";
        if (!i2.subscribeKey)
          return "Missing Subscribe Key";
      };
      n(2);
      var i = r(n(1)), o = r(n(3));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNRemoveChannelsFromGroupOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = t2.channelGroup, r2 = e2.config;
        return "/v1/channel-registration/sub-key/".concat(r2.subscribeKey, "/channel-group/").concat(o.default.encodeString(n2));
      }, t.handleResponse = function() {
        return {};
      }, t.isAuthSupported = function() {
        return true;
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.channels;
        return { remove: (void 0 === n2 ? [] : n2).join(",") };
      }, t.validateParams = function(e2, t2) {
        var n2 = t2.channels, r2 = t2.channelGroup, i2 = e2.config;
        if (!r2)
          return "Missing Channel Group";
        if (!n2 || 0 === n2.length)
          return "Missing Channels";
        if (!i2.subscribeKey)
          return "Missing Subscribe Key";
      };
      n(2);
      var i = r(n(1)), o = r(n(3));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNRemoveGroupOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = t2.channelGroup, r2 = e2.config;
        return "/v1/channel-registration/sub-key/".concat(r2.subscribeKey, "/channel-group/").concat(o.default.encodeString(n2), "/remove");
      }, t.handleResponse = function() {
        return {};
      }, t.isAuthSupported = function() {
        return true;
      }, t.prepareParams = function() {
        return {};
      }, t.validateParams = function(e2, t2) {
        var n2 = t2.channelGroup, r2 = e2.config;
        if (!n2)
          return "Missing Channel Group";
        if (!r2.subscribeKey)
          return "Missing Subscribe Key";
      };
      n(2);
      var i = r(n(1)), o = r(n(3));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNChannelGroupsOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2) {
        var t2 = e2.config;
        return "/v1/channel-registration/sub-key/".concat(t2.subscribeKey, "/channel-group");
      }, t.handleResponse = function(e2, t2) {
        return { groups: t2.payload.groups };
      }, t.isAuthSupported = function() {
        return true;
      }, t.prepareParams = function() {
        return {};
      }, t.validateParams = function(e2) {
        if (!e2.config.subscribeKey)
          return "Missing Subscribe Key";
      };
      n(2);
      var i = r(n(1));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNChannelsForGroupOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = t2.channelGroup, r2 = e2.config;
        return "/v1/channel-registration/sub-key/".concat(r2.subscribeKey, "/channel-group/").concat(o.default.encodeString(n2));
      }, t.handleResponse = function(e2, t2) {
        return { channels: t2.payload.channels };
      }, t.isAuthSupported = function() {
        return true;
      }, t.prepareParams = function() {
        return {};
      }, t.validateParams = function(e2, t2) {
        var n2 = t2.channelGroup, r2 = e2.config;
        if (!n2)
          return "Missing Channel Group";
        if (!r2.subscribeKey)
          return "Missing Subscribe Key";
      };
      n(2);
      var i = r(n(1)), o = r(n(3));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNPushNotificationEnabledChannelsOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = t2.device, r2 = t2.pushGateway, i2 = e2.config;
        if ("apns2" === r2)
          return "/v2/push/sub-key/".concat(i2.subscribeKey, "/devices-apns2/").concat(n2);
        return "/v1/push/sub-key/".concat(i2.subscribeKey, "/devices/").concat(n2);
      }, t.handleResponse = function() {
        return {};
      }, t.isAuthSupported = function() {
        return true;
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.pushGateway, r2 = t2.channels, i2 = void 0 === r2 ? [] : r2, o = t2.environment, a = void 0 === o ? "development" : o, u = t2.topic, s = { type: n2, add: i2.join(",") };
        "apns2" === n2 && delete (s = Object.assign({}, s, { environment: a, topic: u })).type;
        return s;
      }, t.validateParams = function(e2, t2) {
        var n2 = t2.device, r2 = t2.pushGateway, i2 = t2.channels, o = t2.topic, a = e2.config;
        if (!n2)
          return "Missing Device ID (device)";
        if (!r2)
          return "Missing GW Type (pushGateway: gcm, apns or apns2)";
        if ("apns2" === r2 && !o)
          return "Missing APNS2 topic";
        if (!i2 || 0 === i2.length)
          return "Missing Channels";
        if (!a.subscribeKey)
          return "Missing Subscribe Key";
      };
      n(2);
      var i = r(n(1));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNPushNotificationEnabledChannelsOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = t2.device, r2 = t2.pushGateway, i2 = e2.config;
        if ("apns2" === r2)
          return "/v2/push/sub-key/".concat(i2.subscribeKey, "/devices-apns2/").concat(n2);
        return "/v1/push/sub-key/".concat(i2.subscribeKey, "/devices/").concat(n2);
      }, t.handleResponse = function() {
        return {};
      }, t.isAuthSupported = function() {
        return true;
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.pushGateway, r2 = t2.channels, i2 = void 0 === r2 ? [] : r2, o = t2.environment, a = void 0 === o ? "development" : o, u = t2.topic, s = { type: n2, remove: i2.join(",") };
        "apns2" === n2 && delete (s = Object.assign({}, s, { environment: a, topic: u })).type;
        return s;
      }, t.validateParams = function(e2, t2) {
        var n2 = t2.device, r2 = t2.pushGateway, i2 = t2.channels, o = t2.topic, a = e2.config;
        if (!n2)
          return "Missing Device ID (device)";
        if (!r2)
          return "Missing GW Type (pushGateway: gcm, apns or apns2)";
        if ("apns2" === r2 && !o)
          return "Missing APNS2 topic";
        if (!i2 || 0 === i2.length)
          return "Missing Channels";
        if (!a.subscribeKey)
          return "Missing Subscribe Key";
      };
      n(2);
      var i = r(n(1));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNPushNotificationEnabledChannelsOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = t2.device, r2 = t2.pushGateway, i2 = e2.config;
        if ("apns2" === r2)
          return "/v2/push/sub-key/".concat(i2.subscribeKey, "/devices-apns2/").concat(n2);
        return "/v1/push/sub-key/".concat(i2.subscribeKey, "/devices/").concat(n2);
      }, t.handleResponse = function(e2, t2) {
        return { channels: t2 };
      }, t.isAuthSupported = function() {
        return true;
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.pushGateway, r2 = t2.environment, i2 = void 0 === r2 ? "development" : r2, o = t2.topic, a = { type: n2 };
        "apns2" === n2 && delete (a = Object.assign({}, a, { environment: i2, topic: o })).type;
        return a;
      }, t.validateParams = function(e2, t2) {
        var n2 = t2.device, r2 = t2.pushGateway, i2 = t2.topic, o = e2.config;
        if (!n2)
          return "Missing Device ID (device)";
        if (!r2)
          return "Missing GW Type (pushGateway: gcm, apns or apns2)";
        if ("apns2" === r2 && !i2)
          return "Missing APNS2 topic";
        if (!o.subscribeKey)
          return "Missing Subscribe Key";
      };
      n(2);
      var i = r(n(1));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNRemoveAllPushNotificationsOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = t2.device, r2 = t2.pushGateway, i2 = e2.config;
        if ("apns2" === r2)
          return "/v2/push/sub-key/".concat(i2.subscribeKey, "/devices-apns2/").concat(n2, "/remove");
        return "/v1/push/sub-key/".concat(i2.subscribeKey, "/devices/").concat(n2, "/remove");
      }, t.handleResponse = function() {
        return {};
      }, t.isAuthSupported = function() {
        return true;
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.pushGateway, r2 = t2.environment, i2 = void 0 === r2 ? "development" : r2, o = t2.topic, a = { type: n2 };
        "apns2" === n2 && delete (a = Object.assign({}, a, { environment: i2, topic: o })).type;
        return a;
      }, t.validateParams = function(e2, t2) {
        var n2 = t2.device, r2 = t2.pushGateway, i2 = t2.topic, o = e2.config;
        if (!n2)
          return "Missing Device ID (device)";
        if (!r2)
          return "Missing GW Type (pushGateway: gcm, apns or apns2)";
        if ("apns2" === r2 && !i2)
          return "Missing APNS2 topic";
        if (!o.subscribeKey)
          return "Missing Subscribe Key";
      };
      n(2);
      var i = r(n(1));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNUnsubscribeOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = e2.config, r2 = t2.channels, i2 = void 0 === r2 ? [] : r2, a = i2.length > 0 ? i2.join(",") : ",";
        return "/v2/presence/sub-key/".concat(n2.subscribeKey, "/channel/").concat(o.default.encodeString(a), "/leave");
      }, t.handleResponse = function() {
        return {};
      }, t.isAuthSupported = function() {
        return true;
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.channelGroups, r2 = void 0 === n2 ? [] : n2, i2 = {};
        r2.length > 0 && (i2["channel-group"] = r2.join(","));
        return i2;
      }, t.validateParams = function(e2) {
        if (!e2.config.subscribeKey)
          return "Missing Subscribe Key";
      };
      n(2);
      var i = r(n(1)), o = r(n(3));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNWhereNowOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = e2.config, r2 = t2.uuid, i2 = void 0 === r2 ? n2.UUID : r2;
        return "/v2/presence/sub-key/".concat(n2.subscribeKey, "/uuid/").concat(o.default.encodeString(i2));
      }, t.handleResponse = function(e2, t2) {
        if (!t2.payload)
          return { channels: [] };
        return { channels: t2.payload.channels };
      }, t.isAuthSupported = function() {
        return true;
      }, t.prepareParams = function() {
        return {};
      }, t.validateParams = function(e2) {
        if (!e2.config.subscribeKey)
          return "Missing Subscribe Key";
      };
      n(2);
      var i = r(n(1)), o = r(n(3));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNHeartbeatOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = e2.config, r2 = t2.channels, i2 = void 0 === r2 ? [] : r2, a = i2.length > 0 ? i2.join(",") : ",";
        return "/v2/presence/sub-key/".concat(n2.subscribeKey, "/channel/").concat(o.default.encodeString(a), "/heartbeat");
      }, t.handleResponse = function() {
        return {};
      }, t.isAuthSupported = function() {
        return true;
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.channelGroups, r2 = void 0 === n2 ? [] : n2, i2 = t2.state, o2 = void 0 === i2 ? {} : i2, a = e2.config, u = {};
        r2.length > 0 && (u["channel-group"] = r2.join(","));
        return u.state = JSON.stringify(o2), u.heartbeat = a.getPresenceTimeout(), u;
      }, t.validateParams = function(e2) {
        if (!e2.config.subscribeKey)
          return "Missing Subscribe Key";
      };
      n(2);
      var i = r(n(1)), o = r(n(3));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNGetStateOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = e2.config, r2 = t2.uuid, i2 = void 0 === r2 ? n2.UUID : r2, a = t2.channels, u = void 0 === a ? [] : a, s = u.length > 0 ? u.join(",") : ",";
        return "/v2/presence/sub-key/".concat(n2.subscribeKey, "/channel/").concat(o.default.encodeString(s), "/uuid/").concat(i2);
      }, t.handleResponse = function(e2, t2, n2) {
        var r2 = n2.channels, i2 = void 0 === r2 ? [] : r2, o2 = n2.channelGroups, a = void 0 === o2 ? [] : o2, u = {};
        1 === i2.length && 0 === a.length ? u[i2[0]] = t2.payload : u = t2.payload;
        return { channels: u };
      }, t.isAuthSupported = function() {
        return true;
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.channelGroups, r2 = void 0 === n2 ? [] : n2, i2 = {};
        r2.length > 0 && (i2["channel-group"] = r2.join(","));
        return i2;
      }, t.validateParams = function(e2) {
        if (!e2.config.subscribeKey)
          return "Missing Subscribe Key";
      };
      n(2);
      var i = r(n(1)), o = r(n(3));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNSetStateOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = e2.config, r2 = t2.channels, i2 = void 0 === r2 ? [] : r2, a = i2.length > 0 ? i2.join(",") : ",";
        return "/v2/presence/sub-key/".concat(n2.subscribeKey, "/channel/").concat(o.default.encodeString(a), "/uuid/").concat(o.default.encodeString(n2.UUID), "/data");
      }, t.handleResponse = function(e2, t2) {
        return { state: t2.payload };
      }, t.isAuthSupported = function() {
        return true;
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.state, r2 = t2.channelGroups, i2 = void 0 === r2 ? [] : r2, o2 = {};
        o2.state = JSON.stringify(n2), i2.length > 0 && (o2["channel-group"] = i2.join(","));
        return o2;
      }, t.validateParams = function(e2, t2) {
        var n2 = e2.config, r2 = t2.state, i2 = t2.channels, o2 = void 0 === i2 ? [] : i2, a = t2.channelGroups, u = void 0 === a ? [] : a;
        if (!r2)
          return "Missing State";
        if (!n2.subscribeKey)
          return "Missing Subscribe Key";
        if (0 === o2.length && 0 === u.length)
          return "Please provide a list of channels and/or channel-groups";
      };
      n(2);
      var i = r(n(1)), o = r(n(3));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return o.default.PNHereNowOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = e2.config, r2 = t2.channels, i2 = void 0 === r2 ? [] : r2, o2 = t2.channelGroups, u2 = void 0 === o2 ? [] : o2, s2 = "/v2/presence/sub-key/".concat(n2.subscribeKey);
        if (i2.length > 0 || u2.length > 0) {
          var c = i2.length > 0 ? i2.join(",") : ",";
          s2 += "/channel/".concat(a.default.encodeString(c));
        }
        return s2;
      }, t.handleError = function(e2, t2, n2) {
        402 !== n2.statusCode || this.getURL(e2, t2).includes("channel") || (n2.errorData.message = "You have tried to perform a Global Here Now operation, your keyset configuration does not support that. Please provide a channel, or enable the Global Here Now feature from the Portal.");
      }, t.handleResponse = function(e2, t2, n2) {
        var r2, i2 = n2.channels, o2 = void 0 === i2 ? [] : i2, a2 = n2.channelGroups, u2 = void 0 === a2 ? [] : a2, s2 = n2.includeUUIDs, c = void 0 === s2 || s2, l = n2.includeState, f = void 0 !== l && l;
        r2 = o2.length > 1 || u2.length > 0 || 0 === u2.length && 0 === o2.length ? function() {
          var e3 = {};
          return e3.totalChannels = t2.payload.total_channels, e3.totalOccupancy = t2.payload.total_occupancy, e3.channels = {}, Object.keys(t2.payload.channels).forEach(function(n3) {
            var r3 = t2.payload.channels[n3], i3 = [];
            return e3.channels[n3] = { occupants: i3, name: n3, occupancy: r3.occupancy }, c && r3.uuids.forEach(function(e4) {
              f ? i3.push({ state: e4.state, uuid: e4.uuid }) : i3.push({ state: null, uuid: e4 });
            }), e3;
          }), e3;
        }() : function() {
          var e3 = {}, n3 = [];
          return e3.totalChannels = 1, e3.totalOccupancy = t2.occupancy, e3.channels = {}, e3.channels[o2[0]] = { occupants: n3, name: o2[0], occupancy: t2.occupancy }, c && t2.uuids && t2.uuids.forEach(function(e4) {
            f ? n3.push({ state: e4.state, uuid: e4.uuid }) : n3.push({ state: null, uuid: e4 });
          }), e3;
        }();
        return r2;
      }, t.isAuthSupported = function() {
        return true;
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.channelGroups, r2 = void 0 === n2 ? [] : n2, i2 = t2.includeUUIDs, o2 = void 0 === i2 || i2, a2 = t2.includeState, u2 = void 0 !== a2 && a2, c = t2.queryParameters, l = void 0 === c ? {} : c, f = {};
        o2 || (f.disable_uuids = 1);
        u2 && (f.state = 1);
        r2.length > 0 && (f["channel-group"] = r2.join(","));
        return f = s(s({}, f), l);
      }, t.validateParams = function(e2) {
        if (!e2.config.subscribeKey)
          return "Missing Subscribe Key";
      };
      var i = r(n(4)), o = (n(2), r(n(1))), a = r(n(3));
      function u(e2, t2) {
        var n2 = Object.keys(e2);
        if (Object.getOwnPropertySymbols) {
          var r2 = Object.getOwnPropertySymbols(e2);
          t2 && (r2 = r2.filter(function(t3) {
            return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
          })), n2.push.apply(n2, r2);
        }
        return n2;
      }
      function s(e2) {
        for (var t2 = 1; t2 < arguments.length; t2++) {
          var n2 = null != arguments[t2] ? arguments[t2] : {};
          t2 % 2 ? u(Object(n2), true).forEach(function(t3) {
            (0, i.default)(e2, t3, n2[t3]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : u(Object(n2)).forEach(function(t3) {
            Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
        }
        return e2;
      }
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNAddMessageActionOperation;
      }, t.getRequestHeaders = function() {
        return { "Content-Type": "application/json" };
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.handleResponse = function(e2, t2) {
        return { data: t2.data };
      }, t.isAuthSupported = function() {
        return true;
      }, t.postPayload = function(e2, t2) {
        return t2.action;
      }, t.postURL = function(e2, t2) {
        var n2 = e2.config, r2 = t2.channel, i2 = t2.messageTimetoken;
        return "/v1/message-actions/".concat(n2.subscribeKey, "/channel/").concat(o.default.encodeString(r2), "/message/").concat(i2);
      }, t.prepareParams = function() {
        return {};
      }, t.usePost = function() {
        return true;
      }, t.validateParams = function(e2, t2) {
        var n2 = e2.config, r2 = t2.action, i2 = t2.channel;
        if (!t2.messageTimetoken)
          return "Missing message timetoken";
        if (!n2.subscribeKey)
          return "Missing Subscribe Key";
        if (!i2)
          return "Missing message channel";
        if (!r2)
          return "Missing Action";
        if (!r2.value)
          return "Missing Action.value";
        if (!r2.type)
          return "Missing Action.type";
        if (r2.type.length > 15)
          return "Action.type value exceed maximum length of 15";
      };
      n(2);
      var i = r(n(1)), o = r(n(3));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNRemoveMessageActionOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = e2.config, r2 = t2.channel, i2 = t2.actionTimetoken, a = t2.messageTimetoken;
        return "/v1/message-actions/".concat(n2.subscribeKey, "/channel/").concat(o.default.encodeString(r2), "/message/").concat(a, "/action/").concat(i2);
      }, t.handleResponse = function(e2, t2) {
        return { data: t2.data };
      }, t.isAuthSupported = function() {
        return true;
      }, t.prepareParams = function() {
        return {};
      }, t.useDelete = function() {
        return true;
      }, t.validateParams = function(e2, t2) {
        var n2 = e2.config, r2 = t2.channel, i2 = t2.actionTimetoken;
        if (!t2.messageTimetoken)
          return "Missing message timetoken";
        if (!i2)
          return "Missing action timetoken";
        if (!n2.subscribeKey)
          return "Missing Subscribe Key";
        if (!r2)
          return "Missing message channel";
      };
      n(2);
      var i = r(n(1)), o = r(n(3));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNGetMessageActionsOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = e2.config, r2 = t2.channel;
        return "/v1/message-actions/".concat(n2.subscribeKey, "/channel/").concat(o.default.encodeString(r2));
      }, t.handleResponse = function(e2, t2) {
        var n2 = { data: t2.data, start: null, end: null };
        n2.data.length && (n2.end = n2.data[n2.data.length - 1].actionTimetoken, n2.start = n2.data[0].actionTimetoken);
        return n2;
      }, t.isAuthSupported = function() {
        return true;
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.limit, r2 = t2.start, i2 = t2.end, o2 = {};
        n2 && (o2.limit = n2);
        r2 && (o2.start = r2);
        i2 && (o2.end = i2);
        return o2;
      }, t.validateParams = function(e2, t2) {
        var n2 = e2.config, r2 = t2.channel;
        if (!n2.subscribeKey)
          return "Missing Subscribe Key";
        if (!r2)
          return "Missing message channel";
      };
      n(2);
      var i = r(n(1)), o = r(n(3));
    }, function(e, t, n) {
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i = r(n(1)), o = r(n(3)), a = { getOperation: function() {
        return i.default.PNListFilesOperation;
      }, validateParams: function(e2, t2) {
        if (null == t2 || !t2.channel)
          return "channel can't be empty";
      }, getURL: function(e2, t2) {
        var n2 = e2.config;
        return "/v1/files/".concat(n2.subscribeKey, "/channels/").concat(o.default.encodeString(t2.channel), "/files");
      }, getRequestTimeout: function(e2) {
        return e2.config.getTransactionTimeout();
      }, isAuthSupported: function() {
        return true;
      }, prepareParams: function(e2, t2) {
        var n2 = {};
        return t2.limit && (n2.limit = t2.limit), t2.next && (n2.next = t2.next), n2;
      }, handleResponse: function(e2, t2) {
        return { status: t2.status, data: t2.data, next: t2.next, count: t2.count };
      } };
      t.default = a, e.exports = t.default;
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i = r(n(1)), o = r(n(3)), a = { getOperation: function() {
        return i.default.PNGenerateUploadUrlOperation;
      }, validateParams: function(e2, t2) {
        return null != t2 && t2.channel ? null != t2 && t2.name ? void 0 : "name can't be empty" : "channel can't be empty";
      }, usePost: function() {
        return true;
      }, postURL: function(e2, t2) {
        var n2 = e2.config;
        return "/v1/files/".concat(n2.subscribeKey, "/channels/").concat(o.default.encodeString(t2.channel), "/generate-upload-url");
      }, postPayload: function(e2, t2) {
        return { name: t2.name };
      }, getRequestTimeout: function(e2) {
        return e2.config.getTransactionTimeout();
      }, isAuthSupported: function() {
        return true;
      }, prepareParams: function() {
        return {};
      }, handleResponse: function(e2, t2) {
        return { status: t2.status, data: t2.data, file_upload_request: t2.file_upload_request };
      } };
      t.default = a, e.exports = t.default;
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i = r(n(7)), o = r(n(1)), a = r(n(3)), u = { getOperation: function() {
        return o.default.PNPublishFileOperation;
      }, validateParams: function(e2, t2) {
        return null != t2 && t2.channel ? null != t2 && t2.fileId ? null != t2 && t2.fileName ? void 0 : "file name can't be empty" : "file id can't be empty" : "channel can't be empty";
      }, getURL: function(e2, t2) {
        var n2 = e2.config, r2 = n2.publishKey, i2 = n2.subscribeKey, o2 = function(e3, t3) {
          var n3 = e3.crypto, r3 = e3.config, i3 = JSON.stringify(t3);
          return r3.cipherKey && (i3 = n3.encrypt(i3), i3 = JSON.stringify(i3)), i3 || "";
        }(e2, { message: t2.message, file: { name: t2.fileName, id: t2.fileId } });
        return "/v1/files/publish-file/".concat(r2, "/").concat(i2, "/0/").concat(a.default.encodeString(t2.channel), "/0/").concat(a.default.encodeString(o2));
      }, getRequestTimeout: function(e2) {
        return e2.config.getTransactionTimeout();
      }, isAuthSupported: function() {
        return true;
      }, prepareParams: function(e2, t2) {
        var n2 = {};
        return t2.ttl && (n2.ttl = t2.ttl), void 0 !== t2.storeInHistory && (n2.store = t2.storeInHistory ? "1" : "0"), t2.meta && "object" === (0, i.default)(t2.meta) && (n2.meta = JSON.stringify(t2.meta)), n2;
      }, handleResponse: function(e2, t2) {
        return { timetoken: t2[2] };
      } };
      t.default = u, e.exports = t.default;
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i = r(n(11)), o = r(n(12)), a = n(18), u = function(e2) {
        return new Promise(function(t2) {
          var n2 = "";
          e2.on("data", function(e3) {
            n2 += e3.toString("utf8");
          }), e2.on("end", function() {
            t2(n2);
          });
        });
      };
      t.default = function(e2) {
        var t2, n2, r2, s, c, l, f, d, p, h = (r2 = (t2 = e2).generateUploadUrl, s = t2.publishFile, c = t2.modules, l = c.PubNubFile, f = c.config, d = c.cryptography, p = c.networking, n2 = (0, o.default)(i.default.mark(function e3(t3) {
          var n3, o2, c2, h2, y, g, v, b, m, _, P, O, S, w, k, T, x, A, M, E, j, R;
          return i.default.wrap(function(e4) {
            for (; ; )
              switch (e4.prev = e4.next) {
                case 0:
                  if (n3 = t3.channel, o2 = t3.file, c2 = t3.message, h2 = t3.cipherKey, y = t3.meta, g = t3.ttl, v = t3.storeInHistory, n3) {
                    e4.next = 3;
                    break;
                  }
                  throw new a.PubNubError("Validation failed, check status for details", (0, a.createValidationError)("channel can't be empty"));
                case 3:
                  if (o2) {
                    e4.next = 5;
                    break;
                  }
                  throw new a.PubNubError("Validation failed, check status for details", (0, a.createValidationError)("file can't be empty"));
                case 5:
                  return b = l.create(o2), e4.next = 8, r2({ channel: n3, name: b.name });
                case 8:
                  if (m = e4.sent, _ = m.file_upload_request, P = _.url, O = _.form_fields, S = m.data, w = S.id, k = S.name, !l.supportsEncryptFile || !(null != h2 ? h2 : f.cipherKey)) {
                    e4.next = 19;
                    break;
                  }
                  return e4.next = 18, d.encryptFile(null != h2 ? h2 : f.cipherKey, b, l);
                case 18:
                  b = e4.sent;
                case 19:
                  if (T = O, b.mimeType && (T = O.map(function(e5) {
                    return "Content-Type" === e5.key ? { key: e5.key, value: b.mimeType } : e5;
                  })), e4.prev = 21, !l.supportsFileUri || !o2.uri) {
                    e4.next = 34;
                    break;
                  }
                  return e4.t0 = p, e4.t1 = P, e4.t2 = T, e4.next = 28, b.toFileUri();
                case 28:
                  return e4.t3 = e4.sent, e4.next = 31, e4.t0.POSTFILE.call(e4.t0, e4.t1, e4.t2, e4.t3);
                case 31:
                  x = e4.sent, e4.next = 71;
                  break;
                case 34:
                  if (!l.supportsFile) {
                    e4.next = 46;
                    break;
                  }
                  return e4.t4 = p, e4.t5 = P, e4.t6 = T, e4.next = 40, b.toFile();
                case 40:
                  return e4.t7 = e4.sent, e4.next = 43, e4.t4.POSTFILE.call(e4.t4, e4.t5, e4.t6, e4.t7);
                case 43:
                  x = e4.sent, e4.next = 71;
                  break;
                case 46:
                  if (!l.supportsBuffer) {
                    e4.next = 58;
                    break;
                  }
                  return e4.t8 = p, e4.t9 = P, e4.t10 = T, e4.next = 52, b.toBuffer();
                case 52:
                  return e4.t11 = e4.sent, e4.next = 55, e4.t8.POSTFILE.call(e4.t8, e4.t9, e4.t10, e4.t11);
                case 55:
                  x = e4.sent, e4.next = 71;
                  break;
                case 58:
                  if (!l.supportsBlob) {
                    e4.next = 70;
                    break;
                  }
                  return e4.t12 = p, e4.t13 = P, e4.t14 = T, e4.next = 64, b.toBlob();
                case 64:
                  return e4.t15 = e4.sent, e4.next = 67, e4.t12.POSTFILE.call(e4.t12, e4.t13, e4.t14, e4.t15);
                case 67:
                  x = e4.sent, e4.next = 71;
                  break;
                case 70:
                  throw new Error("Unsupported environment");
                case 71:
                  e4.next = 80;
                  break;
                case 73:
                  return e4.prev = 73, e4.t16 = e4.catch(21), e4.next = 77, u(e4.t16.response);
                case 77:
                  throw A = e4.sent, M = /<Message>(.*)<\/Message>/gi.exec(A), new a.PubNubError(M ? "Upload to bucket failed: ".concat(M[1]) : "Upload to bucket failed.", e4.t16);
                case 80:
                  if (204 === x.status) {
                    e4.next = 82;
                    break;
                  }
                  throw new a.PubNubError("Upload to bucket was unsuccessful", x);
                case 82:
                  E = f.fileUploadPublishRetryLimit, j = false, R = { timetoken: "0" };
                case 85:
                  return e4.prev = 85, e4.next = 88, s({ channel: n3, message: c2, fileId: w, fileName: k, meta: y, storeInHistory: v, ttl: g });
                case 88:
                  R = e4.sent, j = true, e4.next = 95;
                  break;
                case 92:
                  e4.prev = 92, e4.t17 = e4.catch(85), E -= 1;
                case 95:
                  if (!j && E > 0) {
                    e4.next = 85;
                    break;
                  }
                case 96:
                  if (j) {
                    e4.next = 100;
                    break;
                  }
                  throw new a.PubNubError("Publish failed. You may want to execute that operation manually using pubnub.publishFile", { channel: n3, id: w, name: k });
                case 100:
                  return e4.abrupt("return", { timetoken: R.timetoken, id: w, name: k });
                case 101:
                case "end":
                  return e4.stop();
              }
          }, e3, null, [[21, 73], [85, 92]]);
        })), function(e3) {
          return n2.apply(this, arguments);
        });
        return function(e3, t3) {
          var n3 = h(e3);
          return "function" == typeof t3 ? (n3.then(function(e4) {
            return t3(null, e4);
          }).catch(function(e4) {
            return t3(e4, null);
          }), n3) : n3;
        };
      }, e.exports = t.default;
    }, function(e, t, n) {
      var r = function(e2) {
        var t2 = Object.prototype, n2 = t2.hasOwnProperty, r2 = "function" == typeof Symbol ? Symbol : {}, i = r2.iterator || "@@iterator", o = r2.asyncIterator || "@@asyncIterator", a = r2.toStringTag || "@@toStringTag";
        function u(e3, t3, n3) {
          return Object.defineProperty(e3, t3, { value: n3, enumerable: true, configurable: true, writable: true }), e3[t3];
        }
        try {
          u({}, "");
        } catch (e3) {
          u = function(e4, t3, n3) {
            return e4[t3] = n3;
          };
        }
        function s(e3, t3, n3, r3) {
          var i2 = t3 && t3.prototype instanceof f ? t3 : f, o2 = Object.create(i2.prototype), a2 = new S(r3 || []);
          return o2._invoke = function(e4, t4, n4) {
            var r4 = "suspendedStart";
            return function(i3, o3) {
              if ("executing" === r4)
                throw new Error("Generator is already running");
              if ("completed" === r4) {
                if ("throw" === i3)
                  throw o3;
                return k();
              }
              for (n4.method = i3, n4.arg = o3; ; ) {
                var a3 = n4.delegate;
                if (a3) {
                  var u2 = _(a3, n4);
                  if (u2) {
                    if (u2 === l)
                      continue;
                    return u2;
                  }
                }
                if ("next" === n4.method)
                  n4.sent = n4._sent = n4.arg;
                else if ("throw" === n4.method) {
                  if ("suspendedStart" === r4)
                    throw r4 = "completed", n4.arg;
                  n4.dispatchException(n4.arg);
                } else
                  "return" === n4.method && n4.abrupt("return", n4.arg);
                r4 = "executing";
                var s2 = c(e4, t4, n4);
                if ("normal" === s2.type) {
                  if (r4 = n4.done ? "completed" : "suspendedYield", s2.arg === l)
                    continue;
                  return { value: s2.arg, done: n4.done };
                }
                "throw" === s2.type && (r4 = "completed", n4.method = "throw", n4.arg = s2.arg);
              }
            };
          }(e3, n3, a2), o2;
        }
        function c(e3, t3, n3) {
          try {
            return { type: "normal", arg: e3.call(t3, n3) };
          } catch (e4) {
            return { type: "throw", arg: e4 };
          }
        }
        e2.wrap = s;
        var l = {};
        function f() {
        }
        function d() {
        }
        function p() {
        }
        var h = {};
        u(h, i, function() {
          return this;
        });
        var y = Object.getPrototypeOf, g = y && y(y(w([])));
        g && g !== t2 && n2.call(g, i) && (h = g);
        var v = p.prototype = f.prototype = Object.create(h);
        function b(e3) {
          ["next", "throw", "return"].forEach(function(t3) {
            u(e3, t3, function(e4) {
              return this._invoke(t3, e4);
            });
          });
        }
        function m(e3, t3) {
          var r3;
          this._invoke = function(i2, o2) {
            function a2() {
              return new t3(function(r4, a3) {
                !function r5(i3, o3, a4, u2) {
                  var s2 = c(e3[i3], e3, o3);
                  if ("throw" !== s2.type) {
                    var l2 = s2.arg, f2 = l2.value;
                    return f2 && "object" == typeof f2 && n2.call(f2, "__await") ? t3.resolve(f2.__await).then(function(e4) {
                      r5("next", e4, a4, u2);
                    }, function(e4) {
                      r5("throw", e4, a4, u2);
                    }) : t3.resolve(f2).then(function(e4) {
                      l2.value = e4, a4(l2);
                    }, function(e4) {
                      return r5("throw", e4, a4, u2);
                    });
                  }
                  u2(s2.arg);
                }(i2, o2, r4, a3);
              });
            }
            return r3 = r3 ? r3.then(a2, a2) : a2();
          };
        }
        function _(e3, t3) {
          var n3 = e3.iterator[t3.method];
          if (void 0 === n3) {
            if (t3.delegate = null, "throw" === t3.method) {
              if (e3.iterator.return && (t3.method = "return", t3.arg = void 0, _(e3, t3), "throw" === t3.method))
                return l;
              t3.method = "throw", t3.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return l;
          }
          var r3 = c(n3, e3.iterator, t3.arg);
          if ("throw" === r3.type)
            return t3.method = "throw", t3.arg = r3.arg, t3.delegate = null, l;
          var i2 = r3.arg;
          return i2 ? i2.done ? (t3[e3.resultName] = i2.value, t3.next = e3.nextLoc, "return" !== t3.method && (t3.method = "next", t3.arg = void 0), t3.delegate = null, l) : i2 : (t3.method = "throw", t3.arg = new TypeError("iterator result is not an object"), t3.delegate = null, l);
        }
        function P(e3) {
          var t3 = { tryLoc: e3[0] };
          1 in e3 && (t3.catchLoc = e3[1]), 2 in e3 && (t3.finallyLoc = e3[2], t3.afterLoc = e3[3]), this.tryEntries.push(t3);
        }
        function O(e3) {
          var t3 = e3.completion || {};
          t3.type = "normal", delete t3.arg, e3.completion = t3;
        }
        function S(e3) {
          this.tryEntries = [{ tryLoc: "root" }], e3.forEach(P, this), this.reset(true);
        }
        function w(e3) {
          if (e3) {
            var t3 = e3[i];
            if (t3)
              return t3.call(e3);
            if ("function" == typeof e3.next)
              return e3;
            if (!isNaN(e3.length)) {
              var r3 = -1, o2 = function t4() {
                for (; ++r3 < e3.length; )
                  if (n2.call(e3, r3))
                    return t4.value = e3[r3], t4.done = false, t4;
                return t4.value = void 0, t4.done = true, t4;
              };
              return o2.next = o2;
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: true };
        }
        return d.prototype = p, u(v, "constructor", p), u(p, "constructor", d), d.displayName = u(p, a, "GeneratorFunction"), e2.isGeneratorFunction = function(e3) {
          var t3 = "function" == typeof e3 && e3.constructor;
          return !!t3 && (t3 === d || "GeneratorFunction" === (t3.displayName || t3.name));
        }, e2.mark = function(e3) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(e3, p) : (e3.__proto__ = p, u(e3, a, "GeneratorFunction")), e3.prototype = Object.create(v), e3;
        }, e2.awrap = function(e3) {
          return { __await: e3 };
        }, b(m.prototype), u(m.prototype, o, function() {
          return this;
        }), e2.AsyncIterator = m, e2.async = function(t3, n3, r3, i2, o2) {
          void 0 === o2 && (o2 = Promise);
          var a2 = new m(s(t3, n3, r3, i2), o2);
          return e2.isGeneratorFunction(n3) ? a2 : a2.next().then(function(e3) {
            return e3.done ? e3.value : a2.next();
          });
        }, b(v), u(v, a, "Generator"), u(v, i, function() {
          return this;
        }), u(v, "toString", function() {
          return "[object Generator]";
        }), e2.keys = function(e3) {
          var t3 = [];
          for (var n3 in e3)
            t3.push(n3);
          return t3.reverse(), function n4() {
            for (; t3.length; ) {
              var r3 = t3.pop();
              if (r3 in e3)
                return n4.value = r3, n4.done = false, n4;
            }
            return n4.done = true, n4;
          };
        }, e2.values = w, S.prototype = { constructor: S, reset: function(e3) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !e3)
            for (var t3 in this)
              "t" === t3.charAt(0) && n2.call(this, t3) && !isNaN(+t3.slice(1)) && (this[t3] = void 0);
        }, stop: function() {
          this.done = true;
          var e3 = this.tryEntries[0].completion;
          if ("throw" === e3.type)
            throw e3.arg;
          return this.rval;
        }, dispatchException: function(e3) {
          if (this.done)
            throw e3;
          var t3 = this;
          function r3(n3, r4) {
            return a2.type = "throw", a2.arg = e3, t3.next = n3, r4 && (t3.method = "next", t3.arg = void 0), !!r4;
          }
          for (var i2 = this.tryEntries.length - 1; i2 >= 0; --i2) {
            var o2 = this.tryEntries[i2], a2 = o2.completion;
            if ("root" === o2.tryLoc)
              return r3("end");
            if (o2.tryLoc <= this.prev) {
              var u2 = n2.call(o2, "catchLoc"), s2 = n2.call(o2, "finallyLoc");
              if (u2 && s2) {
                if (this.prev < o2.catchLoc)
                  return r3(o2.catchLoc, true);
                if (this.prev < o2.finallyLoc)
                  return r3(o2.finallyLoc);
              } else if (u2) {
                if (this.prev < o2.catchLoc)
                  return r3(o2.catchLoc, true);
              } else {
                if (!s2)
                  throw new Error("try statement without catch or finally");
                if (this.prev < o2.finallyLoc)
                  return r3(o2.finallyLoc);
              }
            }
          }
        }, abrupt: function(e3, t3) {
          for (var r3 = this.tryEntries.length - 1; r3 >= 0; --r3) {
            var i2 = this.tryEntries[r3];
            if (i2.tryLoc <= this.prev && n2.call(i2, "finallyLoc") && this.prev < i2.finallyLoc) {
              var o2 = i2;
              break;
            }
          }
          o2 && ("break" === e3 || "continue" === e3) && o2.tryLoc <= t3 && t3 <= o2.finallyLoc && (o2 = null);
          var a2 = o2 ? o2.completion : {};
          return a2.type = e3, a2.arg = t3, o2 ? (this.method = "next", this.next = o2.finallyLoc, l) : this.complete(a2);
        }, complete: function(e3, t3) {
          if ("throw" === e3.type)
            throw e3.arg;
          return "break" === e3.type || "continue" === e3.type ? this.next = e3.arg : "return" === e3.type ? (this.rval = this.arg = e3.arg, this.method = "return", this.next = "end") : "normal" === e3.type && t3 && (this.next = t3), l;
        }, finish: function(e3) {
          for (var t3 = this.tryEntries.length - 1; t3 >= 0; --t3) {
            var n3 = this.tryEntries[t3];
            if (n3.finallyLoc === e3)
              return this.complete(n3.completion, n3.afterLoc), O(n3), l;
          }
        }, catch: function(e3) {
          for (var t3 = this.tryEntries.length - 1; t3 >= 0; --t3) {
            var n3 = this.tryEntries[t3];
            if (n3.tryLoc === e3) {
              var r3 = n3.completion;
              if ("throw" === r3.type) {
                var i2 = r3.arg;
                O(n3);
              }
              return i2;
            }
          }
          throw new Error("illegal catch attempt");
        }, delegateYield: function(e3, t3, n3) {
          return this.delegate = { iterator: w(e3), resultName: t3, nextLoc: n3 }, "next" === this.method && (this.arg = void 0), l;
        } }, e2;
      }(e.exports);
      try {
        regeneratorRuntime = r;
      } catch (e2) {
        "object" == typeof globalThis ? globalThis.regeneratorRuntime = r : Function("r", "regeneratorRuntime = r")(r);
      }
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i = n(18), o = r(n(3));
      t.default = function(e2, t2) {
        var n2 = t2.channel, r2 = t2.id, a = t2.name, u = e2.config, s = e2.networking;
        if (!n2)
          throw new i.PubNubError("Validation failed, check status for details", (0, i.createValidationError)("channel can't be empty"));
        if (!r2)
          throw new i.PubNubError("Validation failed, check status for details", (0, i.createValidationError)("file id can't be empty"));
        if (!a)
          throw new i.PubNubError("Validation failed, check status for details", (0, i.createValidationError)("file name can't be empty"));
        var c = "/v1/files/".concat(u.subscribeKey, "/channels/").concat(o.default.encodeString(n2), "/files/").concat(r2, "/").concat(a), l = {};
        l.uuid = u.getUUID(), l.pnsdk = (0, i.generatePNSDK)(u), u.getAuthKey() && (l.auth = u.getAuthKey()), u.secretKey && (0, i.signRequest)(e2, c, l, {}, { getOperation: function() {
          return "PubNubGetFileUrlOperation";
        } });
        var f = Object.keys(l).map(function(e3) {
          return "".concat(encodeURIComponent(e3), "=").concat(encodeURIComponent(l[e3]));
        }).join("&");
        return "" !== f ? "".concat(s.getStandardOrigin()).concat(c, "?").concat(f) : "".concat(s.getStandardOrigin()).concat(c);
      }, e.exports = t.default;
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i, o = r(n(11)), a = r(n(12)), u = r(n(1)), s = r(n(3)), c = { getOperation: function() {
        return u.default.PNDownloadFileOperation;
      }, validateParams: function(e2, t2) {
        return null != t2 && t2.channel ? null != t2 && t2.name ? null != t2 && t2.id ? void 0 : "id can't be empty" : "name can't be empty" : "channel can't be empty";
      }, useGetFile: function() {
        return true;
      }, getFileURL: function(e2, t2) {
        var n2 = e2.config;
        return "/v1/files/".concat(n2.subscribeKey, "/channels/").concat(s.default.encodeString(t2.channel), "/files/").concat(t2.id, "/").concat(t2.name);
      }, getRequestTimeout: function(e2) {
        return e2.config.getTransactionTimeout();
      }, isAuthSupported: function() {
        return true;
      }, ignoreBody: function() {
        return true;
      }, forceBuffered: function() {
        return true;
      }, prepareParams: function() {
        return {};
      }, handleResponse: (i = (0, a.default)(o.default.mark(function e2(t2, n2, r2) {
        var i2, a2, u2, s2, c2, l, f;
        return o.default.wrap(function(e3) {
          for (; ; )
            switch (e3.prev = e3.next) {
              case 0:
                if (u2 = t2.PubNubFile, s2 = t2.config, c2 = t2.cryptography, l = n2.response.body, !u2.supportsEncryptFile || !(null !== (i2 = r2.cipherKey) && void 0 !== i2 ? i2 : s2.cipherKey)) {
                  e3.next = 6;
                  break;
                }
                return e3.next = 5, c2.decrypt(null !== (f = r2.cipherKey) && void 0 !== f ? f : s2.cipherKey, l);
              case 5:
                l = e3.sent;
              case 6:
                return e3.abrupt("return", u2.create({ data: l, name: null !== (a2 = n2.response.name) && void 0 !== a2 ? a2 : r2.name, mimeType: n2.response.type }));
              case 7:
              case "end":
                return e3.stop();
            }
        }, e2);
      })), function(e2, t2, n2) {
        return i.apply(this, arguments);
      }) };
      t.default = c, e.exports = t.default;
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i = r(n(1)), o = r(n(3)), a = { getOperation: function() {
        return i.default.PNListFilesOperation;
      }, validateParams: function(e2, t2) {
        return null != t2 && t2.channel ? null != t2 && t2.id ? null != t2 && t2.name ? void 0 : "file name can't be empty" : "file id can't be empty" : "channel can't be empty";
      }, useDelete: function() {
        return true;
      }, getURL: function(e2, t2) {
        var n2 = e2.config;
        return "/v1/files/".concat(n2.subscribeKey, "/channels/").concat(o.default.encodeString(t2.channel), "/files/").concat(t2.id, "/").concat(t2.name);
      }, getRequestTimeout: function(e2) {
        return e2.config.getTransactionTimeout();
      }, isAuthSupported: function() {
        return true;
      }, prepareParams: function() {
        return {};
      }, handleResponse: function(e2, t2) {
        return { status: t2.status };
      } };
      t.default = a, e.exports = t.default;
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i = r(n(9)), o = r(n(1)), a = { getOperation: function() {
        return o.default.PNGetAllUUIDMetadataOperation;
      }, validateParams: function() {
      }, getURL: function(e2) {
        var t2 = e2.config;
        return "/v2/objects/".concat(t2.subscribeKey, "/uuids");
      }, getRequestTimeout: function(e2) {
        return e2.config.getTransactionTimeout();
      }, isAuthSupported: function() {
        return true;
      }, prepareParams: function(e2, t2) {
        var n2, r2, o2, a2, u, s, c, l, f, d = {};
        (null != t2 && null !== (n2 = t2.include) && void 0 !== n2 && n2.customFields && (d.include = "custom"), null != t2 && null !== (r2 = t2.include) && void 0 !== r2 && r2.totalCount) && (d.count = null === (s = t2.include) || void 0 === s ? void 0 : s.totalCount);
        null != t2 && null !== (o2 = t2.page) && void 0 !== o2 && o2.next && (d.start = null === (c = t2.page) || void 0 === c ? void 0 : c.next);
        null != t2 && null !== (a2 = t2.page) && void 0 !== a2 && a2.prev && (d.end = null === (l = t2.page) || void 0 === l ? void 0 : l.prev);
        (null != t2 && t2.filter && (d.filter = t2.filter), d.limit = null !== (u = null == t2 ? void 0 : t2.limit) && void 0 !== u ? u : 100, null != t2 && t2.sort) && (d.sort = Object.entries(null !== (f = t2.sort) && void 0 !== f ? f : {}).map(function(e3) {
          var t3 = (0, i.default)(e3, 2), n3 = t3[0], r3 = t3[1];
          return "asc" === r3 || "desc" === r3 ? "".concat(n3, ":").concat(r3) : n3;
        }));
        return d;
      }, handleResponse: function(e2, t2) {
        return { status: t2.status, data: t2.data, totalCount: t2.totalCount, next: t2.next, prev: t2.prev };
      } };
      t.default = a, e.exports = t.default;
    }, function(e, t) {
      e.exports = function(e2) {
        if (Array.isArray(e2))
          return e2;
      }, e.exports.default = e.exports, e.exports.__esModule = true;
    }, function(e, t) {
      e.exports = function(e2, t2) {
        var n = null == e2 ? null : "undefined" != typeof Symbol && e2[Symbol.iterator] || e2["@@iterator"];
        if (null != n) {
          var r, i, o = [], a = true, u = false;
          try {
            for (n = n.call(e2); !(a = (r = n.next()).done) && (o.push(r.value), !t2 || o.length !== t2); a = true)
              ;
          } catch (e3) {
            u = true, i = e3;
          } finally {
            try {
              a || null == n.return || n.return();
            } finally {
              if (u)
                throw i;
            }
          }
          return o;
        }
      }, e.exports.default = e.exports, e.exports.__esModule = true;
    }, function(e, t, n) {
      var r = n(83);
      e.exports = function(e2, t2) {
        if (e2) {
          if ("string" == typeof e2)
            return r(e2, t2);
          var n2 = Object.prototype.toString.call(e2).slice(8, -1);
          return "Object" === n2 && e2.constructor && (n2 = e2.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e2) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? r(e2, t2) : void 0;
        }
      }, e.exports.default = e.exports, e.exports.__esModule = true;
    }, function(e, t) {
      e.exports = function(e2, t2) {
        (null == t2 || t2 > e2.length) && (t2 = e2.length);
        for (var n = 0, r = new Array(t2); n < t2; n++)
          r[n] = e2[n];
        return r;
      }, e.exports.default = e.exports, e.exports.__esModule = true;
    }, function(e, t) {
      e.exports = function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }, e.exports.default = e.exports, e.exports.__esModule = true;
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i = r(n(1)), o = r(n(3)), a = { getOperation: function() {
        return i.default.PNGetUUIDMetadataOperation;
      }, validateParams: function() {
      }, getURL: function(e2, t2) {
        var n2, r2 = e2.config;
        return "/v2/objects/".concat(r2.subscribeKey, "/uuids/").concat(o.default.encodeString(null !== (n2 = null == t2 ? void 0 : t2.uuid) && void 0 !== n2 ? n2 : r2.getUUID()));
      }, getRequestTimeout: function(e2) {
        return e2.config.getTransactionTimeout();
      }, isAuthSupported: function() {
        return true;
      }, prepareParams: function(e2, t2) {
        var n2, r2, i2, o2 = e2.config;
        return { uuid: null !== (n2 = null == t2 ? void 0 : t2.uuid) && void 0 !== n2 ? n2 : o2.getUUID(), include: (null === (r2 = null == t2 || null === (i2 = t2.include) || void 0 === i2 ? void 0 : i2.customFields) || void 0 === r2 || r2) && "custom" };
      }, handleResponse: function(e2, t2) {
        return { status: t2.status, data: t2.data };
      } };
      t.default = a, e.exports = t.default;
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i = r(n(1)), o = r(n(3)), a = { getOperation: function() {
        return i.default.PNSetUUIDMetadataOperation;
      }, validateParams: function(e2, t2) {
        if (null == t2 || !t2.data)
          return "Data cannot be empty";
      }, usePatch: function() {
        return true;
      }, patchURL: function(e2, t2) {
        var n2, r2 = e2.config;
        return "/v2/objects/".concat(r2.subscribeKey, "/uuids/").concat(o.default.encodeString(null !== (n2 = t2.uuid) && void 0 !== n2 ? n2 : r2.getUUID()));
      }, patchPayload: function(e2, t2) {
        return t2.data;
      }, getRequestTimeout: function(e2) {
        return e2.config.getTransactionTimeout();
      }, isAuthSupported: function() {
        return true;
      }, prepareParams: function(e2, t2) {
        var n2, r2, i2, o2 = e2.config;
        return { uuid: null !== (n2 = null == t2 ? void 0 : t2.uuid) && void 0 !== n2 ? n2 : o2.getUUID(), include: (null === (r2 = null == t2 || null === (i2 = t2.include) || void 0 === i2 ? void 0 : i2.customFields) || void 0 === r2 || r2) && "custom" };
      }, handleResponse: function(e2, t2) {
        return { status: t2.status, data: t2.data };
      } };
      t.default = a, e.exports = t.default;
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i = r(n(1)), o = r(n(3)), a = { getOperation: function() {
        return i.default.PNRemoveUUIDMetadataOperation;
      }, validateParams: function() {
      }, getURL: function(e2, t2) {
        var n2, r2 = e2.config;
        return "/v2/objects/".concat(r2.subscribeKey, "/uuids/").concat(o.default.encodeString(null !== (n2 = null == t2 ? void 0 : t2.uuid) && void 0 !== n2 ? n2 : r2.getUUID()));
      }, useDelete: function() {
        return true;
      }, getRequestTimeout: function(e2) {
        return e2.config.getTransactionTimeout();
      }, isAuthSupported: function() {
        return true;
      }, prepareParams: function(e2, t2) {
        var n2, r2 = e2.config;
        return { uuid: null !== (n2 = null == t2 ? void 0 : t2.uuid) && void 0 !== n2 ? n2 : r2.getUUID() };
      }, handleResponse: function(e2, t2) {
        return { status: t2.status, data: t2.data };
      } };
      t.default = a, e.exports = t.default;
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i = r(n(9)), o = r(n(1)), a = { getOperation: function() {
        return o.default.PNGetAllChannelMetadataOperation;
      }, validateParams: function() {
      }, getURL: function(e2) {
        var t2 = e2.config;
        return "/v2/objects/".concat(t2.subscribeKey, "/channels");
      }, getRequestTimeout: function(e2) {
        return e2.config.getTransactionTimeout();
      }, isAuthSupported: function() {
        return true;
      }, prepareParams: function(e2, t2) {
        var n2, r2, o2, a2, u, s, c, l, f, d = {};
        (null != t2 && null !== (n2 = t2.include) && void 0 !== n2 && n2.customFields && (d.include = "custom"), null != t2 && null !== (r2 = t2.include) && void 0 !== r2 && r2.totalCount) && (d.count = null === (s = t2.include) || void 0 === s ? void 0 : s.totalCount);
        null != t2 && null !== (o2 = t2.page) && void 0 !== o2 && o2.next && (d.start = null === (c = t2.page) || void 0 === c ? void 0 : c.next);
        null != t2 && null !== (a2 = t2.page) && void 0 !== a2 && a2.prev && (d.end = null === (l = t2.page) || void 0 === l ? void 0 : l.prev);
        (null != t2 && t2.filter && (d.filter = t2.filter), d.limit = null !== (u = null == t2 ? void 0 : t2.limit) && void 0 !== u ? u : 100, null != t2 && t2.sort) && (d.sort = Object.entries(null !== (f = t2.sort) && void 0 !== f ? f : {}).map(function(e3) {
          var t3 = (0, i.default)(e3, 2), n3 = t3[0], r3 = t3[1];
          return "asc" === r3 || "desc" === r3 ? "".concat(n3, ":").concat(r3) : n3;
        }));
        return d;
      }, handleResponse: function(e2, t2) {
        return { status: t2.status, data: t2.data, totalCount: t2.totalCount, prev: t2.prev, next: t2.next };
      } };
      t.default = a, e.exports = t.default;
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i = r(n(1)), o = r(n(3)), a = { getOperation: function() {
        return i.default.PNGetChannelMetadataOperation;
      }, validateParams: function(e2, t2) {
        if (null == t2 || !t2.channel)
          return "Channel cannot be empty";
      }, getURL: function(e2, t2) {
        var n2 = e2.config;
        return "/v2/objects/".concat(n2.subscribeKey, "/channels/").concat(o.default.encodeString(t2.channel));
      }, getRequestTimeout: function(e2) {
        return e2.config.getTransactionTimeout();
      }, isAuthSupported: function() {
        return true;
      }, prepareParams: function(e2, t2) {
        var n2, r2;
        return { include: (null === (n2 = null == t2 || null === (r2 = t2.include) || void 0 === r2 ? void 0 : r2.customFields) || void 0 === n2 || n2) && "custom" };
      }, handleResponse: function(e2, t2) {
        return { status: t2.status, data: t2.data };
      } };
      t.default = a, e.exports = t.default;
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i = r(n(1)), o = r(n(3)), a = { getOperation: function() {
        return i.default.PNSetChannelMetadataOperation;
      }, validateParams: function(e2, t2) {
        return null != t2 && t2.channel ? null != t2 && t2.data ? void 0 : "Data cannot be empty" : "Channel cannot be empty";
      }, usePatch: function() {
        return true;
      }, patchURL: function(e2, t2) {
        var n2 = e2.config;
        return "/v2/objects/".concat(n2.subscribeKey, "/channels/").concat(o.default.encodeString(t2.channel));
      }, patchPayload: function(e2, t2) {
        return t2.data;
      }, getRequestTimeout: function(e2) {
        return e2.config.getTransactionTimeout();
      }, isAuthSupported: function() {
        return true;
      }, prepareParams: function(e2, t2) {
        var n2, r2;
        return { include: (null === (n2 = null == t2 || null === (r2 = t2.include) || void 0 === r2 ? void 0 : r2.customFields) || void 0 === n2 || n2) && "custom" };
      }, handleResponse: function(e2, t2) {
        return { status: t2.status, data: t2.data };
      } };
      t.default = a, e.exports = t.default;
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i = r(n(1)), o = r(n(3)), a = { getOperation: function() {
        return i.default.PNRemoveChannelMetadataOperation;
      }, validateParams: function(e2, t2) {
        if (null == t2 || !t2.channel)
          return "Channel cannot be empty";
      }, getURL: function(e2, t2) {
        var n2 = e2.config;
        return "/v2/objects/".concat(n2.subscribeKey, "/channels/").concat(o.default.encodeString(t2.channel));
      }, useDelete: function() {
        return true;
      }, getRequestTimeout: function(e2) {
        return e2.config.getTransactionTimeout();
      }, isAuthSupported: function() {
        return true;
      }, prepareParams: function() {
        return {};
      }, handleResponse: function(e2, t2) {
        return { status: t2.status, data: t2.data };
      } };
      t.default = a, e.exports = t.default;
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i = r(n(9)), o = r(n(1)), a = r(n(3)), u = { getOperation: function() {
        return o.default.PNGetMembersOperation;
      }, validateParams: function(e2, t2) {
        if (null == t2 || !t2.channel)
          return "UUID cannot be empty";
      }, getURL: function(e2, t2) {
        var n2 = e2.config;
        return "/v2/objects/".concat(n2.subscribeKey, "/channels/").concat(a.default.encodeString(t2.channel), "/uuids");
      }, getRequestTimeout: function(e2) {
        return e2.config.getTransactionTimeout();
      }, isAuthSupported: function() {
        return true;
      }, prepareParams: function(e2, t2) {
        var n2, r2, o2, a2, u2, s, c, l, f, d, p, h, y = {};
        null != t2 && t2.include && (y.include = [], null !== (u2 = t2.include) && void 0 !== u2 && u2.customFields && y.include.push("custom"), null !== (s = t2.include) && void 0 !== s && s.customUUIDFields && y.include.push("uuid.custom"), (null === (c = null === (l = t2.include) || void 0 === l ? void 0 : l.UUIDFields) || void 0 === c || c) && y.include.push("uuid"), y.include = y.include.join(","));
        null != t2 && null !== (n2 = t2.include) && void 0 !== n2 && n2.totalCount && (y.count = null === (f = t2.include) || void 0 === f ? void 0 : f.totalCount);
        null != t2 && null !== (r2 = t2.page) && void 0 !== r2 && r2.next && (y.start = null === (d = t2.page) || void 0 === d ? void 0 : d.next);
        null != t2 && null !== (o2 = t2.page) && void 0 !== o2 && o2.prev && (y.end = null === (p = t2.page) || void 0 === p ? void 0 : p.prev);
        (null != t2 && t2.filter && (y.filter = t2.filter), y.limit = null !== (a2 = null == t2 ? void 0 : t2.limit) && void 0 !== a2 ? a2 : 100, null != t2 && t2.sort) && (y.sort = Object.entries(null !== (h = t2.sort) && void 0 !== h ? h : {}).map(function(e3) {
          var t3 = (0, i.default)(e3, 2), n3 = t3[0], r3 = t3[1];
          return "asc" === r3 || "desc" === r3 ? "".concat(n3, ":").concat(r3) : n3;
        }));
        return y;
      }, handleResponse: function(e2, t2) {
        return { status: t2.status, data: t2.data, totalCount: t2.totalCount, prev: t2.prev, next: t2.next };
      } };
      t.default = u, e.exports = t.default;
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i = r(n(9)), o = r(n(4)), a = r(n(1)), u = r(n(3)), s = { getOperation: function() {
        return a.default.PNSetMembersOperation;
      }, validateParams: function(e2, t2) {
        return null != t2 && t2.channel ? null != t2 && t2.uuids && 0 !== (null == t2 ? void 0 : t2.uuids.length) ? void 0 : "UUIDs cannot be empty" : "Channel cannot be empty";
      }, usePatch: function() {
        return true;
      }, patchURL: function(e2, t2) {
        var n2 = e2.config;
        return "/v2/objects/".concat(n2.subscribeKey, "/channels/").concat(u.default.encodeString(t2.channel), "/uuids");
      }, patchPayload: function(e2, t2) {
        return (0, o.default)({ set: [], remove: [] }, t2.type, t2.uuids.map(function(e3) {
          return "string" == typeof e3 ? { uuid: { id: e3 } } : { uuid: { id: e3.id }, custom: e3.custom };
        }));
      }, getRequestTimeout: function(e2) {
        return e2.config.getTransactionTimeout();
      }, isAuthSupported: function() {
        return true;
      }, prepareParams: function(e2, t2) {
        var n2, r2, o2, a2, u2, s2, c, l, f, d = {};
        null != t2 && t2.include && (d.include = [], null !== (a2 = t2.include) && void 0 !== a2 && a2.customFields && d.include.push("custom"), null !== (u2 = t2.include) && void 0 !== u2 && u2.customUUIDFields && d.include.push("uuid.custom"), null !== (s2 = t2.include) && void 0 !== s2 && s2.UUIDFields && d.include.push("uuid"), d.include = d.include.join(","));
        (null != t2 && null !== (n2 = t2.include) && void 0 !== n2 && n2.totalCount && (d.count = true), null != t2 && null !== (r2 = t2.page) && void 0 !== r2 && r2.next) && (d.start = null === (c = t2.page) || void 0 === c ? void 0 : c.next);
        null != t2 && null !== (o2 = t2.page) && void 0 !== o2 && o2.prev && (d.end = null === (l = t2.page) || void 0 === l ? void 0 : l.prev);
        (null != t2 && t2.filter && (d.filter = t2.filter), null != t2 && t2.limit && (d.limit = t2.limit), null != t2 && t2.sort) && (d.sort = Object.entries(null !== (f = t2.sort) && void 0 !== f ? f : {}).map(function(e3) {
          var t3 = (0, i.default)(e3, 2), n3 = t3[0], r3 = t3[1];
          return "asc" === r3 || "desc" === r3 ? "".concat(n3, ":").concat(r3) : n3;
        }));
        return d;
      }, handleResponse: function(e2, t2) {
        return { status: t2.status, data: t2.data, totalCount: t2.totalCount, prev: t2.prev, next: t2.next };
      } };
      t.default = s, e.exports = t.default;
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i = r(n(9)), o = r(n(1)), a = r(n(3)), u = { getOperation: function() {
        return o.default.PNGetMembershipsOperation;
      }, validateParams: function() {
      }, getURL: function(e2, t2) {
        var n2, r2 = e2.config;
        return "/v2/objects/".concat(r2.subscribeKey, "/uuids/").concat(a.default.encodeString(null !== (n2 = null == t2 ? void 0 : t2.uuid) && void 0 !== n2 ? n2 : r2.getUUID()), "/channels");
      }, getRequestTimeout: function(e2) {
        return e2.config.getTransactionTimeout();
      }, isAuthSupported: function() {
        return true;
      }, prepareParams: function(e2, t2) {
        var n2, r2, o2, a2, u2, s, c, l, f, d, p, h = {};
        null != t2 && t2.include && (h.include = [], null !== (u2 = t2.include) && void 0 !== u2 && u2.customFields && h.include.push("custom"), null !== (s = t2.include) && void 0 !== s && s.customChannelFields && h.include.push("channel.custom"), null !== (c = t2.include) && void 0 !== c && c.channelFields && h.include.push("channel"), h.include = h.include.join(","));
        null != t2 && null !== (n2 = t2.include) && void 0 !== n2 && n2.totalCount && (h.count = null === (l = t2.include) || void 0 === l ? void 0 : l.totalCount);
        null != t2 && null !== (r2 = t2.page) && void 0 !== r2 && r2.next && (h.start = null === (f = t2.page) || void 0 === f ? void 0 : f.next);
        null != t2 && null !== (o2 = t2.page) && void 0 !== o2 && o2.prev && (h.end = null === (d = t2.page) || void 0 === d ? void 0 : d.prev);
        (null != t2 && t2.filter && (h.filter = t2.filter), h.limit = null !== (a2 = null == t2 ? void 0 : t2.limit) && void 0 !== a2 ? a2 : 100, null != t2 && t2.sort) && (h.sort = Object.entries(null !== (p = t2.sort) && void 0 !== p ? p : {}).map(function(e3) {
          var t3 = (0, i.default)(e3, 2), n3 = t3[0], r3 = t3[1];
          return "asc" === r3 || "desc" === r3 ? "".concat(n3, ":").concat(r3) : n3;
        }));
        return h;
      }, handleResponse: function(e2, t2) {
        return { status: t2.status, data: t2.data, totalCount: t2.totalCount, prev: t2.prev, next: t2.next };
      } };
      t.default = u, e.exports = t.default;
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i = r(n(9)), o = r(n(4)), a = r(n(1)), u = r(n(3)), s = { getOperation: function() {
        return a.default.PNSetMembershipsOperation;
      }, validateParams: function(e2, t2) {
        if (null == t2 || !t2.channels || 0 === (null == t2 ? void 0 : t2.channels.length))
          return "Channels cannot be empty";
      }, usePatch: function() {
        return true;
      }, patchURL: function(e2, t2) {
        var n2, r2 = e2.config;
        return "/v2/objects/".concat(r2.subscribeKey, "/uuids/").concat(u.default.encodeString(null !== (n2 = t2.uuid) && void 0 !== n2 ? n2 : r2.getUUID()), "/channels");
      }, patchPayload: function(e2, t2) {
        return (0, o.default)({ set: [], remove: [] }, t2.type, t2.channels.map(function(e3) {
          return "string" == typeof e3 ? { channel: { id: e3 } } : { channel: { id: e3.id }, custom: e3.custom };
        }));
      }, getRequestTimeout: function(e2) {
        return e2.config.getTransactionTimeout();
      }, isAuthSupported: function() {
        return true;
      }, prepareParams: function(e2, t2) {
        var n2, r2, o2, a2, u2, s2, c, l, f, d = {};
        null != t2 && t2.include && (d.include = [], null !== (a2 = t2.include) && void 0 !== a2 && a2.customFields && d.include.push("custom"), null !== (u2 = t2.include) && void 0 !== u2 && u2.customChannelFields && d.include.push("channel.custom"), null !== (s2 = t2.include) && void 0 !== s2 && s2.channelFields && d.include.push("channel"), d.include = d.include.join(","));
        (null != t2 && null !== (n2 = t2.include) && void 0 !== n2 && n2.totalCount && (d.count = true), null != t2 && null !== (r2 = t2.page) && void 0 !== r2 && r2.next) && (d.start = null === (c = t2.page) || void 0 === c ? void 0 : c.next);
        null != t2 && null !== (o2 = t2.page) && void 0 !== o2 && o2.prev && (d.end = null === (l = t2.page) || void 0 === l ? void 0 : l.prev);
        (null != t2 && t2.filter && (d.filter = t2.filter), null != t2 && t2.limit && (d.limit = t2.limit), null != t2 && t2.sort) && (d.sort = Object.entries(null !== (f = t2.sort) && void 0 !== f ? f : {}).map(function(e3) {
          var t3 = (0, i.default)(e3, 2), n3 = t3[0], r3 = t3[1];
          return "asc" === r3 || "desc" === r3 ? "".concat(n3, ":").concat(r3) : n3;
        }));
        return d;
      }, handleResponse: function(e2, t2) {
        return { status: t2.status, data: t2.data, totalCount: t2.totalCount, prev: t2.prev, next: t2.next };
      } };
      t.default = s, e.exports = t.default;
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNCreateUserOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2) {
        var t2 = e2.config;
        return "/v1/objects/".concat(t2.subscribeKey, "/users");
      }, t.handleResponse = function(e2, t2) {
        return t2;
      }, t.isAuthSupported = function() {
        return true;
      }, t.postPayload = function(e2, t2) {
        return function(e3, t3) {
          return t3;
        }(0, t2);
      }, t.postURL = function(e2) {
        var t2 = e2.config;
        return "/v1/objects/".concat(t2.subscribeKey, "/users");
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.include, r2 = {};
        n2 ? void 0 === n2.customFields && (n2.customFields = true) : n2 = { customFields: true };
        if (n2) {
          var i2 = [];
          n2.customFields && i2.push("custom");
          var o = i2.join(",");
          o.length > 0 && (r2.include = o);
        }
        return r2;
      }, t.usePost = function() {
        return true;
      }, t.validateParams = function(e2, t2) {
        var n2 = e2.config, r2 = t2.id, i2 = t2.name, o = t2.custom;
        if (!r2)
          return "Missing User.id";
        if (!i2)
          return "Missing User.name";
        if (!n2.subscribeKey)
          return "Missing Subscribe Key";
        if (o && !Object.values(o).every(function(e3) {
          return "string" == typeof e3 || "number" == typeof e3 || "boolean" == typeof e3;
        }))
          return "Invalid custom type, only string, number and boolean values are allowed.";
      };
      n(2);
      var i = r(n(1));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNUpdateUserOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = e2.config, r2 = t2.id;
        return "/v1/objects/".concat(n2.subscribeKey, "/users/").concat(o.default.encodeString(r2));
      }, t.handleResponse = function(e2, t2) {
        return t2;
      }, t.isAuthSupported = function() {
        return true;
      }, t.patchPayload = function(e2, t2) {
        return function(e3, t3) {
          return t3;
        }(0, t2);
      }, t.patchURL = function(e2, t2) {
        var n2 = e2.config, r2 = t2.id;
        return "/v1/objects/".concat(n2.subscribeKey, "/users/").concat(o.default.encodeString(r2));
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.include, r2 = {};
        n2 ? void 0 === n2.customFields && (n2.customFields = true) : n2 = { customFields: true };
        if (n2) {
          var i2 = [];
          n2.customFields && i2.push("custom");
          var o2 = i2.join(",");
          o2.length > 0 && (r2.include = o2);
        }
        return r2;
      }, t.usePatch = function() {
        return true;
      }, t.validateParams = function(e2, t2) {
        var n2 = e2.config, r2 = t2.id, i2 = t2.name, o2 = t2.custom;
        if (!r2)
          return "Missing User.id";
        if (!i2)
          return "Missing User.name";
        if (!n2.subscribeKey)
          return "Missing Subscribe Key";
        if (o2 && !Object.values(o2).every(function(e3) {
          return "string" == typeof e3 || "number" == typeof e3 || "boolean" == typeof e3;
        }))
          return "Invalid custom type, only string, number and boolean values are allowed.";
      };
      n(2);
      var i = r(n(1)), o = r(n(3));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNDeleteUserOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = e2.config;
        return "/v1/objects/".concat(n2.subscribeKey, "/users/").concat(o.default.encodeString(t2));
      }, t.handleResponse = function(e2, t2) {
        return t2;
      }, t.isAuthSupported = function() {
        return true;
      }, t.prepareParams = function() {
        return {};
      }, t.useDelete = function() {
        return true;
      }, t.validateParams = function(e2, t2) {
        var n2 = e2.config;
        if (!t2)
          return "Missing UserId";
        if (!n2.subscribeKey)
          return "Missing Subscribe Key";
      };
      n(2);
      var i = r(n(1)), o = r(n(3));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNGetUserOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = e2.config;
        return "/v1/objects/".concat(n2.subscribeKey, "/users/").concat(o.default.encodeString(t2.userId));
      }, t.handleResponse = function(e2, t2) {
        return t2;
      }, t.isAuthSupported = function() {
        return true;
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.include, r2 = {};
        n2 ? void 0 === n2.customFields && (n2.customFields = true) : n2 = { customFields: true };
        if (n2) {
          var i2 = [];
          n2.customFields && i2.push("custom");
          var o2 = i2.join(",");
          o2.length > 0 && (r2.include = o2);
        }
        return r2;
      }, t.validateParams = function(e2, t2) {
        if (!t2.userId)
          return "Missing userId";
      };
      n(2);
      var i = r(n(1)), o = r(n(3));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNGetUsersOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2) {
        var t2 = e2.config;
        return "/v1/objects/".concat(t2.subscribeKey, "/users");
      }, t.handleResponse = function(e2, t2) {
        return t2;
      }, t.isAuthSupported = function() {
        return true;
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.include, r2 = t2.limit, i2 = t2.page, o = t2.filter, a = {};
        r2 && (a.limit = r2);
        if (n2) {
          var u = [];
          n2.totalCount && (a.count = true), n2.customFields && u.push("custom");
          var s = u.join(",");
          s.length > 0 && (a.include = s);
        }
        i2 && (i2.next && (a.start = i2.next), i2.prev && (a.end = i2.prev));
        o && (a.filter = o);
        return a;
      }, t.validateParams = function() {
      };
      n(2);
      var i = r(n(1));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNCreateSpaceOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2) {
        var t2 = e2.config;
        return "/v1/objects/".concat(t2.subscribeKey, "/spaces");
      }, t.handleResponse = function(e2, t2) {
        return t2;
      }, t.isAuthSupported = function() {
        return true;
      }, t.postPayload = function(e2, t2) {
        return function(e3, t3) {
          return t3;
        }(0, t2);
      }, t.postURL = function(e2) {
        var t2 = e2.config;
        return "/v1/objects/".concat(t2.subscribeKey, "/spaces");
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.include, r2 = {};
        n2 ? void 0 === n2.customFields && (n2.customFields = true) : n2 = { customFields: true };
        if (n2) {
          var i2 = [];
          n2.customFields && i2.push("custom");
          var o = i2.join(",");
          o.length > 0 && (r2.include = o);
        }
        return r2;
      }, t.usePost = function() {
        return true;
      }, t.validateParams = function(e2, t2) {
        var n2 = e2.config, r2 = t2.id, i2 = t2.name, o = t2.custom;
        if (!r2)
          return "Missing Space.id";
        if (!i2)
          return "Missing Space.name";
        if (!n2.subscribeKey)
          return "Missing Subscribe Key";
        if (o && !Object.values(o).every(function(e3) {
          return "string" == typeof e3 || "number" == typeof e3 || "boolean" == typeof e3;
        }))
          return "Invalid custom type, only string, number and boolean values are allowed.";
      };
      n(2);
      var i = r(n(1));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNUpdateSpaceOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = e2.config, r2 = t2.id;
        return "/v1/objects/".concat(n2.subscribeKey, "/spaces/").concat(o.default.encodeString(r2));
      }, t.handleResponse = function(e2, t2) {
        return t2;
      }, t.isAuthSupported = function() {
        return true;
      }, t.patchPayload = function(e2, t2) {
        return function(e3, t3) {
          return t3;
        }(0, t2);
      }, t.patchURL = function(e2, t2) {
        var n2 = e2.config, r2 = t2.id;
        return "/v1/objects/".concat(n2.subscribeKey, "/spaces/").concat(o.default.encodeString(r2));
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.include, r2 = {};
        n2 ? void 0 === n2.customFields && (n2.customFields = true) : n2 = { customFields: true };
        if (n2) {
          var i2 = [];
          n2.customFields && i2.push("custom");
          var o2 = i2.join(",");
          o2.length > 0 && (r2.include = o2);
        }
        return r2;
      }, t.usePatch = function() {
        return true;
      }, t.validateParams = function(e2, t2) {
        var n2 = e2.config, r2 = t2.id, i2 = t2.name, o2 = t2.custom;
        if (!r2)
          return "Missing Space.id";
        if (!i2)
          return "Missing Space.name";
        if (!n2.subscribeKey)
          return "Missing Subscribe Key";
        if (o2 && !Object.values(o2).every(function(e3) {
          return "string" == typeof e3 || "number" == typeof e3 || "boolean" == typeof e3;
        }))
          return "Invalid custom type, only string, number and boolean values are allowed.";
      };
      n(2);
      var i = r(n(1)), o = r(n(3));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNDeleteSpaceOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = e2.config;
        return "/v1/objects/".concat(n2.subscribeKey, "/spaces/").concat(o.default.encodeString(t2));
      }, t.handleResponse = function(e2, t2) {
        return t2;
      }, t.isAuthSupported = function() {
        return true;
      }, t.prepareParams = function() {
        return {};
      }, t.useDelete = function() {
        return true;
      }, t.validateParams = function(e2, t2) {
        var n2 = e2.config;
        if (!t2)
          return "Missing SpaceId";
        if (!n2.subscribeKey)
          return "Missing Subscribe Key";
      };
      n(2);
      var i = r(n(1)), o = r(n(3));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNGetSpacesOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2) {
        var t2 = e2.config;
        return "/v1/objects/".concat(t2.subscribeKey, "/spaces");
      }, t.handleResponse = function(e2, t2) {
        return t2;
      }, t.isAuthSupported = function() {
        return true;
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.include, r2 = t2.limit, i2 = t2.page, o = t2.filter, a = {};
        r2 && (a.limit = r2);
        if (n2) {
          var u = [];
          n2.totalCount && (a.count = true), n2.customFields && u.push("custom");
          var s = u.join(",");
          s.length > 0 && (a.include = s);
        }
        i2 && (i2.next && (a.start = i2.next), i2.prev && (a.end = i2.prev));
        o && (a.filter = o);
        return a;
      }, t.validateParams = function() {
      };
      n(2);
      var i = r(n(1));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNGetSpaceOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = e2.config;
        return "/v1/objects/".concat(n2.subscribeKey, "/spaces/").concat(o.default.encodeString(t2.spaceId));
      }, t.handleResponse = function(e2, t2) {
        return t2;
      }, t.isAuthSupported = function() {
        return true;
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.include, r2 = {};
        n2 ? void 0 === n2.customFields && (n2.customFields = true) : n2 = { customFields: true };
        if (n2) {
          var i2 = [];
          n2.customFields && i2.push("custom");
          var o2 = i2.join(",");
          o2.length > 0 && (r2.include = o2);
        }
        return r2;
      }, t.validateParams = function(e2, t2) {
        if (!t2.spaceId)
          return "Missing spaceId";
      };
      n(2);
      var i = r(n(1)), o = r(n(3));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNGetMembersOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = e2.config;
        return "/v1/objects/".concat(n2.subscribeKey, "/spaces/").concat(o.default.encodeString(t2.spaceId), "/users");
      }, t.handleResponse = function(e2, t2) {
        return t2;
      }, t.isAuthSupported = function() {
        return true;
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.include, r2 = t2.limit, i2 = t2.page, o2 = t2.filter, a = {};
        r2 && (a.limit = r2);
        if (n2) {
          var u = [];
          n2.totalCount && (a.count = true), n2.customFields && u.push("custom"), n2.userFields && u.push("user"), n2.customUserFields && u.push("user.custom");
          var s = u.join(",");
          s.length > 0 && (a.include = s);
        }
        i2 && (i2.next && (a.start = i2.next), i2.prev && (a.end = i2.prev));
        o2 && (a.filter = o2);
        return a;
      }, t.validateParams = function(e2, t2) {
        if (!t2.spaceId)
          return "Missing spaceId";
      };
      n(2);
      var i = r(n(1)), o = r(n(3));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNUpdateMembersOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = e2.config;
        return "/v1/objects/".concat(n2.subscribeKey, "/spaces/").concat(o.default.encodeString(t2.spaceId), "/users");
      }, t.handleResponse = function(e2, t2) {
        return t2;
      }, t.isAuthSupported = function() {
        return true;
      }, t.patchPayload = function(e2, t2) {
        return function(e3, t3) {
          var n2 = t3.users, r2 = {};
          n2 && n2.length > 0 && (r2.add = [], n2.forEach(function(e4) {
            var t4 = { id: e4.id };
            e4.custom && (t4.custom = e4.custom), r2.add.push(t4);
          }));
          return r2;
        }(0, t2);
      }, t.patchURL = function(e2, t2) {
        var n2 = e2.config;
        return "/v1/objects/".concat(n2.subscribeKey, "/spaces/").concat(o.default.encodeString(t2.spaceId), "/users");
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.include, r2 = t2.limit, i2 = t2.page, o2 = {};
        r2 && (o2.limit = r2);
        if (n2) {
          var a = [];
          n2.totalCount && (o2.count = true), n2.customFields && a.push("custom"), n2.spaceFields && a.push("space"), n2.customSpaceFields && a.push("space.custom");
          var u = a.join(",");
          u.length > 0 && (o2.include = u);
        }
        i2 && (i2.next && (o2.start = i2.next), i2.prev && (o2.end = i2.prev));
        return o2;
      }, t.usePatch = function() {
        return true;
      }, t.validateParams = function(e2, t2) {
        var n2 = t2.spaceId, r2 = t2.users;
        if (!n2)
          return "Missing spaceId";
        if (!r2)
          return "Missing users";
      };
      n(2);
      var i = r(n(1)), o = r(n(3));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNUpdateMembersOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = e2.config;
        return "/v1/objects/".concat(n2.subscribeKey, "/spaces/").concat(o.default.encodeString(t2.spaceId), "/users");
      }, t.handleResponse = function(e2, t2) {
        return t2;
      }, t.isAuthSupported = function() {
        return true;
      }, t.patchPayload = function(e2, t2) {
        return function(e3, t3) {
          var n2 = t3.addMembers, r2 = t3.updateMembers, i2 = t3.removeMembers, o2 = t3.users, a = {};
          n2 && n2.length > 0 && (a.add = [], n2.forEach(function(e4) {
            var t4 = { id: e4.id };
            e4.custom && (t4.custom = e4.custom), a.add.push(t4);
          }));
          r2 && r2.length > 0 && (a.update = [], r2.forEach(function(e4) {
            var t4 = { id: e4.id };
            e4.custom && (t4.custom = e4.custom), a.update.push(t4);
          }));
          o2 && o2.length > 0 && (a.update = a.update || [], o2.forEach(function(e4) {
            var t4 = { id: e4.id };
            e4.custom && (t4.custom = e4.custom), a.update.push(t4);
          }));
          i2 && i2.length > 0 && (a.remove = [], i2.forEach(function(e4) {
            a.remove.push({ id: e4 });
          }));
          return a;
        }(0, t2);
      }, t.patchURL = function(e2, t2) {
        var n2 = e2.config;
        return "/v1/objects/".concat(n2.subscribeKey, "/spaces/").concat(o.default.encodeString(t2.spaceId), "/users");
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.include, r2 = t2.limit, i2 = t2.page, o2 = {};
        r2 && (o2.limit = r2);
        if (n2) {
          var a = [];
          n2.totalCount && (o2.count = true), n2.customFields && a.push("custom"), n2.spaceFields && a.push("space"), n2.customSpaceFields && a.push("space.custom");
          var u = a.join(",");
          u.length > 0 && (o2.include = u);
        }
        i2 && (i2.next && (o2.start = i2.next), i2.prev && (o2.end = i2.prev));
        return o2;
      }, t.usePatch = function() {
        return true;
      }, t.validateParams = function(e2, t2) {
        var n2 = t2.spaceId, r2 = t2.users;
        if (!n2)
          return "Missing spaceId";
        if (!r2)
          return "Missing users";
      };
      n(2);
      var i = r(n(1)), o = r(n(3));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNUpdateMembersOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = e2.config;
        return "/v1/objects/".concat(n2.subscribeKey, "/spaces/").concat(o.default.encodeString(t2.spaceId), "/users");
      }, t.handleResponse = function(e2, t2) {
        return t2;
      }, t.isAuthSupported = function() {
        return true;
      }, t.patchPayload = function(e2, t2) {
        return function(e3, t3) {
          var n2 = t3.users, r2 = {};
          n2 && n2.length > 0 && (r2.remove = [], n2.forEach(function(e4) {
            r2.remove.push({ id: e4 });
          }));
          return r2;
        }(0, t2);
      }, t.patchURL = function(e2, t2) {
        var n2 = e2.config;
        return "/v1/objects/".concat(n2.subscribeKey, "/spaces/").concat(o.default.encodeString(t2.spaceId), "/users");
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.include, r2 = t2.limit, i2 = t2.page, o2 = {};
        r2 && (o2.limit = r2);
        if (n2) {
          var a = [];
          n2.totalCount && (o2.count = true), n2.customFields && a.push("custom"), n2.spaceFields && a.push("space"), n2.customSpaceFields && a.push("space.custom");
          var u = a.join(",");
          u.length > 0 && (o2.include = u);
        }
        i2 && (i2.next && (o2.start = i2.next), i2.prev && (o2.end = i2.prev));
        return o2;
      }, t.usePatch = function() {
        return true;
      }, t.validateParams = function(e2, t2) {
        var n2 = t2.spaceId, r2 = t2.users;
        if (!n2)
          return "Missing spaceId";
        if (!r2)
          return "Missing users";
      };
      n(2);
      var i = r(n(1)), o = r(n(3));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNGetMembershipsOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = e2.config;
        return "/v1/objects/".concat(n2.subscribeKey, "/users/").concat(o.default.encodeString(t2.userId), "/spaces");
      }, t.handleResponse = function(e2, t2) {
        return t2;
      }, t.isAuthSupported = function() {
        return true;
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.include, r2 = t2.limit, i2 = t2.page, o2 = t2.filter, a = {};
        r2 && (a.limit = r2);
        if (n2) {
          var u = [];
          n2.totalCount && (a.count = true), n2.customFields && u.push("custom"), n2.spaceFields && u.push("space"), n2.customSpaceFields && u.push("space.custom");
          var s = u.join(",");
          s.length > 0 && (a.include = s);
        }
        i2 && (i2.next && (a.start = i2.next), i2.prev && (a.end = i2.prev));
        o2 && (a.filter = o2);
        return a;
      }, t.validateParams = function(e2, t2) {
        if (!t2.userId)
          return "Missing userId";
      };
      n(2);
      var i = r(n(1)), o = r(n(3));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNUpdateMembershipsOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = e2.config;
        return "/v1/objects/".concat(n2.subscribeKey, "/users/").concat(o.default.encodeString(t2.userId), "/spaces");
      }, t.handleResponse = function(e2, t2) {
        return t2;
      }, t.isAuthSupported = function() {
        return true;
      }, t.patchPayload = function(e2, t2) {
        return function(e3, t3) {
          var n2 = t3.addMemberships, r2 = t3.updateMemberships, i2 = t3.removeMemberships, o2 = t3.spaces, a = {};
          n2 && n2.length > 0 && (a.add = [], n2.forEach(function(e4) {
            var t4 = { id: e4.id };
            e4.custom && (t4.custom = e4.custom), a.add.push(t4);
          }));
          r2 && r2.length > 0 && (a.update = [], r2.forEach(function(e4) {
            var t4 = { id: e4.id };
            e4.custom && (t4.custom = e4.custom), a.update.push(t4);
          }));
          o2 && o2.length > 0 && (a.update = a.update || [], o2.forEach(function(e4) {
            var t4 = { id: e4.id };
            e4.custom && (t4.custom = e4.custom), a.update.push(t4);
          }));
          i2 && i2.length > 0 && (a.remove = [], i2.forEach(function(e4) {
            a.remove.push({ id: e4 });
          }));
          return a;
        }(0, t2);
      }, t.patchURL = function(e2, t2) {
        var n2 = e2.config;
        return "/v1/objects/".concat(n2.subscribeKey, "/users/").concat(o.default.encodeString(t2.userId), "/spaces");
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.include, r2 = t2.limit, i2 = t2.page, o2 = {};
        r2 && (o2.limit = r2);
        if (n2) {
          var a = [];
          n2.totalCount && (o2.count = true), n2.customFields && a.push("custom"), n2.spaceFields && a.push("space"), n2.customSpaceFields && a.push("space.custom");
          var u = a.join(",");
          u.length > 0 && (o2.include = u);
        }
        i2 && (i2.next && (o2.start = i2.next), i2.prev && (o2.end = i2.prev));
        return o2;
      }, t.usePatch = function() {
        return true;
      }, t.validateParams = function(e2, t2) {
        var n2 = t2.userId, r2 = t2.spaces;
        if (!n2)
          return "Missing userId";
        if (!r2)
          return "Missing spaces";
      };
      n(2);
      var i = r(n(1)), o = r(n(3));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNUpdateMembershipsOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = e2.config;
        return "/v1/objects/".concat(n2.subscribeKey, "/users/").concat(o.default.encodeString(t2.userId), "/spaces");
      }, t.handleResponse = function(e2, t2) {
        return t2;
      }, t.isAuthSupported = function() {
        return true;
      }, t.patchPayload = function(e2, t2) {
        return function(e3, t3) {
          var n2 = t3.spaces, r2 = {};
          n2 && n2.length > 0 && (r2.add = [], n2.forEach(function(e4) {
            var t4 = { id: e4.id };
            e4.custom && (t4.custom = e4.custom), r2.add.push(t4);
          }));
          return r2;
        }(0, t2);
      }, t.patchURL = function(e2, t2) {
        var n2 = e2.config;
        return "/v1/objects/".concat(n2.subscribeKey, "/users/").concat(o.default.encodeString(t2.userId), "/spaces");
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.include, r2 = t2.limit, i2 = t2.page, o2 = {};
        r2 && (o2.limit = r2);
        if (n2) {
          var a = [];
          n2.totalCount && (o2.count = true), n2.customFields && a.push("custom"), n2.spaceFields && a.push("space"), n2.customSpaceFields && a.push("space.custom");
          var u = a.join(",");
          u.length > 0 && (o2.include = u);
        }
        i2 && (i2.next && (o2.start = i2.next), i2.prev && (o2.end = i2.prev));
        return o2;
      }, t.usePatch = function() {
        return true;
      }, t.validateParams = function(e2, t2) {
        var n2 = t2.userId, r2 = t2.spaces;
        if (!n2)
          return "Missing userId";
        if (!r2)
          return "Missing spaces";
      };
      n(2);
      var i = r(n(1)), o = r(n(3));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNUpdateMembershipsOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = e2.config;
        return "/v1/objects/".concat(n2.subscribeKey, "/users/").concat(o.default.encodeString(t2.userId), "/spaces");
      }, t.handleResponse = function(e2, t2) {
        return t2;
      }, t.isAuthSupported = function() {
        return true;
      }, t.patchPayload = function(e2, t2) {
        return function(e3, t3) {
          var n2 = t3.spaces, r2 = {};
          n2 && n2.length > 0 && (r2.remove = [], n2.forEach(function(e4) {
            r2.remove.push({ id: e4 });
          }));
          return r2;
        }(0, t2);
      }, t.patchURL = function(e2, t2) {
        var n2 = e2.config;
        return "/v1/objects/".concat(n2.subscribeKey, "/users/").concat(o.default.encodeString(t2.userId), "/spaces");
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.include, r2 = t2.limit, i2 = t2.page, o2 = {};
        r2 && (o2.limit = r2);
        if (n2) {
          var a = [];
          n2.totalCount && (o2.count = true), n2.customFields && a.push("custom"), n2.spaceFields && a.push("space"), n2.customSpaceFields && a.push("space.custom");
          var u = a.join(",");
          u.length > 0 && (o2.include = u);
        }
        i2 && (i2.next && (o2.start = i2.next), i2.prev && (o2.end = i2.prev));
        return o2;
      }, t.usePatch = function() {
        return true;
      }, t.validateParams = function(e2, t2) {
        var n2 = t2.userId, r2 = t2.spaces;
        if (!n2)
          return "Missing userId";
        if (!r2)
          return "Missing spaces";
      };
      n(2);
      var i = r(n(1)), o = r(n(3));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNAccessManagerAudit;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2) {
        var t2 = e2.config;
        return "/v2/auth/audit/sub-key/".concat(t2.subscribeKey);
      }, t.handleResponse = function(e2, t2) {
        return t2.payload;
      }, t.isAuthSupported = function() {
        return false;
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.channel, r2 = t2.channelGroup, i2 = t2.authKeys, o = void 0 === i2 ? [] : i2, a = {};
        n2 && (a.channel = n2);
        r2 && (a["channel-group"] = r2);
        o.length > 0 && (a.auth = o.join(","));
        return a;
      }, t.validateParams = function(e2) {
        if (!e2.config.subscribeKey)
          return "Missing Subscribe Key";
      };
      n(2);
      var i = r(n(1));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNAccessManagerGrant;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2) {
        var t2 = e2.config;
        return "/v2/auth/grant/sub-key/".concat(t2.subscribeKey);
      }, t.handleResponse = function() {
        return {};
      }, t.isAuthSupported = function() {
        return false;
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.channels, r2 = void 0 === n2 ? [] : n2, i2 = t2.channelGroups, o = void 0 === i2 ? [] : i2, a = t2.uuids, u = void 0 === a ? [] : a, s = t2.ttl, c = t2.read, l = void 0 !== c && c, f = t2.write, d = void 0 !== f && f, p = t2.manage, h = void 0 !== p && p, y = t2.get, g = void 0 !== y && y, v = t2.join, b = void 0 !== v && v, m = t2.update, _ = void 0 !== m && m, P = t2.authKeys, O = void 0 === P ? [] : P, S = t2.delete, w = {};
        w.r = l ? "1" : "0", w.w = d ? "1" : "0", w.m = h ? "1" : "0", w.d = S ? "1" : "0", w.g = g ? "1" : "0", w.j = b ? "1" : "0", w.u = _ ? "1" : "0", r2.length > 0 && (w.channel = r2.join(","));
        o.length > 0 && (w["channel-group"] = o.join(","));
        O.length > 0 && (w.auth = O.join(","));
        u.length > 0 && (w["target-uuid"] = u.join(","));
        (s || 0 === s) && (w.ttl = s);
        return w;
      }, t.validateParams = function(e2, t2) {
        var n2 = e2.config;
        if (!n2.subscribeKey)
          return "Missing Subscribe Key";
        if (!n2.publishKey)
          return "Missing Publish Key";
        if (!n2.secretKey)
          return "Missing Secret Key";
        if (null != t2.uuids && !t2.authKeys)
          return "authKeys are required for grant request on uuids";
        if (null != t2.uuids && (null != t2.channels || null != t2.channelGroups))
          return "Both channel/channelgroup and uuid cannot be used in the same request";
      };
      n(2);
      var i = r(n(1));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.extractPermissions = o, t.getOperation = function() {
        return i.default.PNAccessManagerGrantToken;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.handleResponse = function(e2, t2) {
        return t2.data.token;
      }, t.isAuthSupported = function() {
        return false;
      }, t.postPayload = function(e2, t2) {
        return function(e3, t3) {
          var n2 = t3.ttl, r2 = t3.resources, i2 = t3.patterns, a = t3.meta, u = t3.authorized_uuid, s = { ttl: 0, permissions: { resources: { channels: {}, groups: {}, uuids: {}, users: {}, spaces: {} }, patterns: { channels: {}, groups: {}, uuids: {}, users: {}, spaces: {} }, meta: {} } };
          if (r2) {
            var c = r2.uuids, l = r2.channels, f = r2.groups;
            c && Object.keys(c).forEach(function(e4) {
              s.permissions.resources.uuids[e4] = o(c[e4]);
            }), l && Object.keys(l).forEach(function(e4) {
              s.permissions.resources.channels[e4] = o(l[e4]);
            }), f && Object.keys(f).forEach(function(e4) {
              s.permissions.resources.groups[e4] = o(f[e4]);
            });
          }
          if (i2) {
            var d = i2.uuids, p = i2.channels, h = i2.groups;
            d && Object.keys(d).forEach(function(e4) {
              s.permissions.patterns.uuids[e4] = o(d[e4]);
            }), p && Object.keys(p).forEach(function(e4) {
              s.permissions.patterns.channels[e4] = o(p[e4]);
            }), h && Object.keys(h).forEach(function(e4) {
              s.permissions.patterns.groups[e4] = o(h[e4]);
            });
          }
          (n2 || 0 === n2) && (s.ttl = n2);
          a && (s.permissions.meta = a);
          u && (s.permissions.uuid = "".concat(u));
          return s;
        }(0, t2);
      }, t.postURL = function(e2) {
        var t2 = e2.config;
        return "/v3/pam/".concat(t2.subscribeKey, "/grant");
      }, t.prepareParams = function() {
        return {};
      }, t.usePost = function() {
        return true;
      }, t.validateParams = function(e2, t2) {
        var n2 = e2.config;
        if (!n2.subscribeKey)
          return "Missing Subscribe Key";
        if (!n2.publishKey)
          return "Missing Publish Key";
        if (!n2.secretKey)
          return "Missing Secret Key";
        if (!t2.resources && !t2.patterns)
          return "Missing either Resources or Patterns.";
        if (t2.resources && (!t2.resources.uuids || 0 === Object.keys(t2.resources.uuids).length) && (!t2.resources.channels || 0 === Object.keys(t2.resources.channels).length) && (!t2.resources.groups || 0 === Object.keys(t2.resources.groups).length) || t2.patterns && (!t2.patterns.uuids || 0 === Object.keys(t2.patterns.uuids).length) && (!t2.patterns.channels || 0 === Object.keys(t2.patterns.channels).length) && (!t2.patterns.groups || 0 === Object.keys(t2.patterns.groups).length))
          return "Missing values for either Resources or Patterns.";
      };
      n(2);
      var i = r(n(1));
      function o(e2) {
        var t2 = 0;
        return e2.join && (t2 |= 128), e2.update && (t2 |= 64), e2.get && (t2 |= 32), e2.delete && (t2 |= 8), e2.manage && (t2 |= 4), e2.write && (t2 |= 2), e2.read && (t2 |= 1), t2;
      }
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i = r(n(1)), o = r(n(3)), a = { getOperation: function() {
        return i.default.PNAccessManagerRevokeToken;
      }, validateParams: function(e2, t2) {
        return e2.config.secretKey ? t2 ? void 0 : "token can't be empty" : "Missing Secret Key";
      }, getURL: function(e2, t2) {
        var n2 = e2.config;
        return "/v3/pam/".concat(n2.subscribeKey, "/grant/").concat(o.default.encodeString(t2));
      }, useDelete: function() {
        return true;
      }, getRequestTimeout: function(e2) {
        return e2.config.getTransactionTimeout();
      }, isAuthSupported: function() {
        return false;
      }, prepareParams: function(e2) {
        return { uuid: e2.config.getUUID() };
      }, handleResponse: function(e2, t2) {
        return { status: t2.status, data: t2.data };
      } };
      t.default = a, e.exports = t.default;
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return o.default.PNPublishOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = e2.config, r2 = t2.channel, i2 = t2.message, o2 = u(e2, i2);
        return "/publish/".concat(n2.publishKey, "/").concat(n2.subscribeKey, "/0/").concat(a.default.encodeString(r2), "/0/").concat(a.default.encodeString(o2));
      }, t.handleResponse = function(e2, t2) {
        return { timetoken: t2[2] };
      }, t.isAuthSupported = function() {
        return true;
      }, t.postPayload = function(e2, t2) {
        var n2 = t2.message;
        return u(e2, n2);
      }, t.postURL = function(e2, t2) {
        var n2 = e2.config, r2 = t2.channel;
        return "/publish/".concat(n2.publishKey, "/").concat(n2.subscribeKey, "/0/").concat(a.default.encodeString(r2), "/0");
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.meta, r2 = t2.replicate, o2 = void 0 === r2 || r2, a2 = t2.storeInHistory, u2 = t2.ttl, s = {};
        null != a2 && (s.store = a2 ? "1" : "0");
        u2 && (s.ttl = u2);
        false === o2 && (s.norep = "true");
        n2 && "object" === (0, i.default)(n2) && (s.meta = JSON.stringify(n2));
        return s;
      }, t.usePost = function(e2, t2) {
        var n2 = t2.sendByPost;
        return void 0 !== n2 && n2;
      }, t.validateParams = function(e2, t2) {
        var n2 = e2.config, r2 = t2.message;
        if (!t2.channel)
          return "Missing Channel";
        if (!r2)
          return "Missing Message";
        if (!n2.subscribeKey)
          return "Missing Subscribe Key";
      };
      var i = r(n(7)), o = (n(2), r(n(1))), a = r(n(3));
      function u(e2, t2) {
        var n2 = e2.crypto, r2 = e2.config, i2 = JSON.stringify(t2);
        return r2.cipherKey && (i2 = n2.encrypt(i2), i2 = JSON.stringify(i2)), i2;
      }
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNSignalOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = e2.config, r2 = t2.channel, i2 = t2.message, a = (u = i2, JSON.stringify(u));
        var u;
        return "/signal/".concat(n2.publishKey, "/").concat(n2.subscribeKey, "/0/").concat(o.default.encodeString(r2), "/0/").concat(o.default.encodeString(a));
      }, t.handleResponse = function(e2, t2) {
        return { timetoken: t2[2] };
      }, t.isAuthSupported = function() {
        return true;
      }, t.prepareParams = function() {
        return {};
      }, t.validateParams = function(e2, t2) {
        var n2 = e2.config, r2 = t2.message;
        if (!t2.channel)
          return "Missing Channel";
        if (!r2)
          return "Missing Message";
        if (!n2.subscribeKey)
          return "Missing Subscribe Key";
      };
      n(2);
      var i = r(n(1)), o = r(n(3));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNHistoryOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = t2.channel, r2 = e2.config;
        return "/v2/history/sub-key/".concat(r2.subscribeKey, "/channel/").concat(o.default.encodeString(n2));
      }, t.handleResponse = function(e2, t2) {
        var n2 = { messages: [], startTimeToken: t2[1], endTimeToken: t2[2] };
        Array.isArray(t2[0]) && t2[0].forEach(function(t3) {
          var r2 = { timetoken: t3.timetoken, entry: a(e2, t3.message) };
          t3.meta && (r2.meta = t3.meta), n2.messages.push(r2);
        });
        return n2;
      }, t.isAuthSupported = function() {
        return true;
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.start, r2 = t2.end, i2 = t2.reverse, o2 = t2.count, a2 = void 0 === o2 ? 100 : o2, u = t2.stringifiedTimeToken, s = void 0 !== u && u, c = t2.includeMeta, l = void 0 !== c && c, f = { include_token: "true" };
        f.count = a2, n2 && (f.start = n2);
        r2 && (f.end = r2);
        s && (f.string_message_token = "true");
        null != i2 && (f.reverse = i2.toString());
        l && (f.include_meta = "true");
        return f;
      }, t.validateParams = function(e2, t2) {
        var n2 = t2.channel, r2 = e2.config;
        if (!n2)
          return "Missing channel";
        if (!r2.subscribeKey)
          return "Missing Subscribe Key";
      };
      n(2);
      var i = r(n(1)), o = r(n(3));
      function a(e2, t2) {
        var n2 = e2.config, r2 = e2.crypto;
        if (!n2.cipherKey)
          return t2;
        try {
          return r2.decrypt(t2);
        } catch (e3) {
          return t2;
        }
      }
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNDeleteMessagesOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = t2.channel, r2 = e2.config;
        return "/v3/history/sub-key/".concat(r2.subscribeKey, "/channel/").concat(o.default.encodeString(n2));
      }, t.handleResponse = function(e2, t2) {
        return t2.payload;
      }, t.isAuthSupported = function() {
        return true;
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.start, r2 = t2.end, i2 = {};
        n2 && (i2.start = n2);
        r2 && (i2.end = r2);
        return i2;
      }, t.useDelete = function() {
        return true;
      }, t.validateParams = function(e2, t2) {
        var n2 = t2.channel, r2 = e2.config;
        if (!n2)
          return "Missing channel";
        if (!r2.subscribeKey)
          return "Missing Subscribe Key";
      };
      n(2);
      var i = r(n(1)), o = r(n(3));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return o.default.PNMessageCounts;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = t2.channels, r2 = e2.config, i2 = n2.join(",");
        return "/v3/history/sub-key/".concat(r2.subscribeKey, "/message-counts/").concat(a.default.encodeString(i2));
      }, t.handleResponse = function(e2, t2) {
        return { channels: t2.channels };
      }, t.isAuthSupported = function() {
        return true;
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.timetoken, r2 = t2.channelTimetokens, o2 = {};
        if (r2 && 1 === r2.length) {
          var a2 = (0, i.default)(r2, 1)[0];
          o2.timetoken = a2;
        } else
          r2 ? o2.channelsTimetoken = r2.join(",") : n2 && (o2.timetoken = n2);
        return o2;
      }, t.validateParams = function(e2, t2) {
        var n2 = t2.channels, r2 = t2.timetoken, i2 = t2.channelTimetokens, o2 = e2.config;
        if (!n2)
          return "Missing channel";
        if (r2 && i2)
          return "timetoken and channelTimetokens are incompatible together";
        if (r2 && i2 && i2.length > 1 && n2.length !== i2.length)
          return "Length of channelTimetokens and channels do not match";
        if (!o2.subscribeKey)
          return "Missing Subscribe Key";
      };
      var i = r(n(9)), o = r(n(1)), a = r(n(3));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNFetchMessagesOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getTransactionTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = t2.channels, r2 = void 0 === n2 ? [] : n2, i2 = t2.includeMessageActions, a = void 0 !== i2 && i2, u = e2.config, s = a ? "history-with-actions" : "history", c = r2.length > 0 ? r2.join(",") : ",";
        return "/v3/".concat(s, "/sub-key/").concat(u.subscribeKey, "/channel/").concat(o.default.encodeString(c));
      }, t.handleResponse = function(e2, t2) {
        var n2 = { channels: {} };
        Object.keys(t2.channels || {}).forEach(function(r2) {
          n2.channels[r2] = [], (t2.channels[r2] || []).forEach(function(t3) {
            var i2 = {};
            i2.channel = r2, i2.timetoken = t3.timetoken, i2.message = function(e3, t4) {
              var n3 = e3.config, r3 = e3.crypto;
              if (!n3.cipherKey)
                return t4;
              try {
                return r3.decrypt(t4);
              } catch (e4) {
                return t4;
              }
            }(e2, t3.message), i2.messageType = t3.message_type, i2.uuid = t3.uuid, t3.actions && (i2.actions = t3.actions, i2.data = t3.actions), t3.meta && (i2.meta = t3.meta), n2.channels[r2].push(i2);
          });
        }), t2.more && (n2.more = t2.more);
        return n2;
      }, t.isAuthSupported = function() {
        return true;
      }, t.prepareParams = function(e2, t2) {
        var n2 = t2.channels, r2 = t2.start, i2 = t2.end, o2 = t2.includeMessageActions, a = t2.count, u = t2.stringifiedTimeToken, s = void 0 !== u && u, c = t2.includeMeta, l = void 0 !== c && c, f = t2.includeUuid, d = t2.includeUUID, p = void 0 === d || d, h = t2.includeMessageType, y = void 0 === h || h, g = {};
        g.max = a || (n2.length > 1 || true === o2 ? 25 : 100);
        r2 && (g.start = r2);
        i2 && (g.end = i2);
        s && (g.string_message_token = "true");
        l && (g.include_meta = "true");
        p && false !== f && (g.include_uuid = "true");
        y && (g.include_message_type = "true");
        return g;
      }, t.validateParams = function(e2, t2) {
        var n2 = t2.channels, r2 = t2.includeMessageActions, i2 = void 0 !== r2 && r2, o2 = e2.config;
        if (!n2 || 0 === n2.length)
          return "Missing channels";
        if (!o2.subscribeKey)
          return "Missing Subscribe Key";
        if (i2 && n2.length > 1)
          throw new TypeError("History can return actions data for a single channel only. Either pass a single channel or disable the includeMessageActions flag.");
      };
      n(2);
      var i = r(n(1)), o = r(n(3));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.getOperation = function() {
        return i.default.PNSubscribeOperation;
      }, t.getRequestTimeout = function(e2) {
        return e2.config.getSubscribeTimeout();
      }, t.getURL = function(e2, t2) {
        var n2 = e2.config, r2 = t2.channels, i2 = void 0 === r2 ? [] : r2, a = i2.length > 0 ? i2.join(",") : ",";
        return "/v2/subscribe/".concat(n2.subscribeKey, "/").concat(o.default.encodeString(a), "/0");
      }, t.handleResponse = function(e2, t2) {
        var n2 = [];
        t2.m.forEach(function(e3) {
          var t3 = { publishTimetoken: e3.p.t, region: e3.p.r }, r3 = { shard: parseInt(e3.a, 10), subscriptionMatch: e3.b, channel: e3.c, messageType: e3.e, payload: e3.d, flags: e3.f, issuingClientId: e3.i, subscribeKey: e3.k, originationTimetoken: e3.o, userMetadata: e3.u, publishMetaData: t3 };
          n2.push(r3);
        });
        var r2 = { timetoken: t2.t.t, region: t2.t.r };
        return { messages: n2, metadata: r2 };
      }, t.isAuthSupported = function() {
        return true;
      }, t.prepareParams = function(e2, t2) {
        var n2 = e2.config, r2 = t2.state, i2 = t2.channelGroups, o2 = void 0 === i2 ? [] : i2, a = t2.timetoken, u = t2.filterExpression, s = t2.region, c = { heartbeat: n2.getPresenceTimeout() };
        o2.length > 0 && (c["channel-group"] = o2.join(","));
        u && u.length > 0 && (c["filter-expr"] = u);
        Object.keys(r2).length && (c.state = JSON.stringify(r2));
        a && (c.tt = a);
        s && (c.tr = s);
        return c;
      }, t.validateParams = function(e2) {
        if (!e2.config.subscribeKey)
          return "Missing Subscribe Key";
      };
      n(2);
      var i = r(n(1)), o = r(n(3));
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i = r(n(1)), o = r(n(3)), a = { getOperation: function() {
        return i.default.PNHandshakeOperation;
      }, validateParams: function(e2, t2) {
        if (!(null != t2 && t2.channels || null != t2 && t2.channelGroups))
          return "channels and channleGroups both should not be empty";
      }, getURL: function(e2, t2) {
        var n2 = e2.config, r2 = t2.channels ? t2.channels.join(",") : ",";
        return "/v2/subscribe/".concat(n2.subscribeKey, "/").concat(o.default.encodeString(r2), "/0");
      }, getRequestTimeout: function(e2) {
        return e2.config.getSubscribeTimeout();
      }, isAuthSupported: function() {
        return true;
      }, prepareParams: function(e2, t2) {
        var n2 = {};
        return t2.channelGroups && (n2["channel-group"] = t2.channelGroups.join(",")), n2.tt = 0, n2;
      }, handleResponse: function(e2, t2) {
        return { region: t2.t.r, timetoken: t2.t.t };
      } };
      t.default = a, e.exports = t.default;
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i = r(n(1)), o = r(n(3)), a = { getOperation: function() {
        return i.default.PNReceiveMessagesOperation;
      }, validateParams: function(e2, t2) {
        return null != t2 && t2.channels || null != t2 && t2.channelGroups ? null != t2 && t2.timetoken ? null != t2 && t2.region ? void 0 : "region can not be empty" : "timetoken can not be empty" : "channels and channleGroups both should not be empty";
      }, getURL: function(e2, t2) {
        var n2 = e2.config, r2 = t2.channels ? t2.channels.join(",") : ",";
        return "/v2/subscribe/".concat(n2.subscribeKey, "/").concat(o.default.encodeString(r2), "/0");
      }, getRequestTimeout: function(e2) {
        return e2.config.getSubscribeTimeout();
      }, isAuthSupported: function() {
        return true;
      }, getAbortSignal: function(e2, t2) {
        return t2.abortSignal;
      }, prepareParams: function(e2, t2) {
        var n2 = {};
        return t2.channelGroups && (n2["channel-group"] = t2.channelGroups.join(",")), n2.tt = t2.timetoken, n2.tr = t2.region, n2;
      }, handleResponse: function(e2, t2) {
        var n2 = [];
        return t2.m.forEach(function(e3) {
          var t3 = { shard: parseInt(e3.a, 10), subscriptionMatch: e3.b, channel: e3.c, messageType: e3.e, payload: e3.d, flags: e3.f, issuingClientId: e3.i, subscribeKey: e3.k, originationTimetoken: e3.o, publishMetaData: { timetoken: e3.p.t, region: e3.p.r } };
          n2.push(t3);
        }), { messages: n2, metadata: { region: t2.t.r, timetoken: t2.t.t } };
      } };
      t.default = a, e.exports = t.default;
    }, function(e, t, n) {
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i = r(n(5)), o = r(n(6)), a = r(n(4)), u = (r(n(8)), r(n(10))), s = (n(2), function() {
        function e2(t2) {
          var n2 = this;
          (0, i.default)(this, e2), (0, a.default)(this, "_modules", void 0), (0, a.default)(this, "_config", void 0), (0, a.default)(this, "_currentSubDomain", void 0), (0, a.default)(this, "_standardOrigin", void 0), (0, a.default)(this, "_subscribeOrigin", void 0), (0, a.default)(this, "_requestTimeout", void 0), (0, a.default)(this, "_coreParams", void 0), this._modules = {}, Object.keys(t2).forEach(function(e3) {
            n2._modules[e3] = t2[e3].bind(n2);
          });
        }
        return (0, o.default)(e2, [{ key: "init", value: function(e3) {
          this._config = e3, Array.isArray(this._config.origin) ? this._currentSubDomain = Math.floor(Math.random() * this._config.origin.length) : this._currentSubDomain = 0, this._coreParams = {}, this.shiftStandardOrigin();
        } }, { key: "nextOrigin", value: function() {
          var e3 = this._config.secure ? "https://" : "http://";
          if ("string" == typeof this._config.origin)
            return "".concat(e3).concat(this._config.origin);
          this._currentSubDomain += 1, this._currentSubDomain >= this._config.origin.length && (this._currentSubDomain = 0);
          var t2 = this._config.origin[this._currentSubDomain];
          return "".concat(e3).concat(t2);
        } }, { key: "hasModule", value: function(e3) {
          return e3 in this._modules;
        } }, { key: "shiftStandardOrigin", value: function() {
          return this._standardOrigin = this.nextOrigin(), this._standardOrigin;
        } }, { key: "getStandardOrigin", value: function() {
          return this._standardOrigin;
        } }, { key: "POSTFILE", value: function(e3, t2, n2) {
          return this._modules.postfile(e3, t2, n2);
        } }, { key: "GETFILE", value: function(e3, t2, n2) {
          return this._modules.getfile(e3, t2, n2);
        } }, { key: "POST", value: function(e3, t2, n2, r2) {
          return this._modules.post(e3, t2, n2, r2);
        } }, { key: "PATCH", value: function(e3, t2, n2, r2) {
          return this._modules.patch(e3, t2, n2, r2);
        } }, { key: "GET", value: function(e3, t2, n2) {
          return this._modules.get(e3, t2, n2);
        } }, { key: "DELETE", value: function(e3, t2, n2) {
          return this._modules.del(e3, t2, n2);
        } }, { key: "_detectErrorCategory", value: function(e3) {
          if ("ENOTFOUND" === e3.code)
            return u.default.PNNetworkIssuesCategory;
          if ("ECONNREFUSED" === e3.code)
            return u.default.PNNetworkIssuesCategory;
          if ("ECONNRESET" === e3.code)
            return u.default.PNNetworkIssuesCategory;
          if ("EAI_AGAIN" === e3.code)
            return u.default.PNNetworkIssuesCategory;
          if (0 === e3.status || e3.hasOwnProperty("status") && void 0 === e3.status)
            return u.default.PNNetworkIssuesCategory;
          if (e3.timeout)
            return u.default.PNTimeoutCategory;
          if ("ETIMEDOUT" === e3.code)
            return u.default.PNNetworkIssuesCategory;
          if (e3.response) {
            if (e3.response.badRequest)
              return u.default.PNBadRequestCategory;
            if (e3.response.forbidden)
              return u.default.PNAccessDeniedCategory;
          }
          return u.default.PNUnknownCategory;
        } }]), e2;
      }());
      t.default = s, e.exports = t.default;
    }, function(e, t, n) {
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var r = { get: function(e2) {
        try {
          return localStorage.getItem(e2);
        } catch (e3) {
          return null;
        }
      }, set: function(e2, t2) {
        try {
          return localStorage.setItem(e2, t2);
        } catch (e3) {
          return null;
        }
      } };
      t.default = r, e.exports = t.default;
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i = r(n(7)), o = r(n(5)), a = r(n(6)), u = r(n(4)), s = function() {
        function e2(t2, n2) {
          (0, o.default)(this, e2), (0, u.default)(this, "_base64ToBinary", void 0), (0, u.default)(this, "_cborReader", void 0), this._base64ToBinary = n2, this._decode = t2;
        }
        return (0, a.default)(e2, [{ key: "decodeToken", value: function(e3) {
          var t2 = "";
          e3.length % 4 == 3 ? t2 = "=" : e3.length % 4 == 2 && (t2 = "==");
          var n2 = e3.replace(/-/gi, "+").replace(/_/gi, "/") + t2, r2 = this._decode(this._base64ToBinary(n2));
          if ("object" === (0, i.default)(r2))
            return r2;
        } }]), e2;
      }();
      t.default = s, e.exports = t.default;
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.del = function(e2, t2, n2) {
        var r2 = a.default.delete(this.getStandardOrigin() + t2.url).set(t2.headers).query(e2);
        return s.call(this, r2, t2, n2);
      }, t.get = function(e2, t2, n2) {
        var r2 = a.default.get(this.getStandardOrigin() + t2.url).set(t2.headers).query(e2);
        return s.call(this, r2, t2, n2);
      }, t.getfile = function(e2, t2, n2) {
        var r2 = a.default.get(this.getStandardOrigin() + t2.url).set(t2.headers).query(e2);
        return s.call(this, r2, t2, n2);
      }, t.patch = function(e2, t2, n2, r2) {
        var i2 = a.default.patch(this.getStandardOrigin() + n2.url).query(e2).set(n2.headers).send(t2);
        return s.call(this, i2, n2, r2);
      }, t.post = function(e2, t2, n2, r2) {
        var i2 = a.default.post(this.getStandardOrigin() + n2.url).query(e2).set(n2.headers).send(t2);
        return s.call(this, i2, n2, r2);
      }, t.postfile = function(e2, t2, n2) {
        return c.apply(this, arguments);
      };
      var i = r(n(11)), o = r(n(12)), a = r(n(132));
      n(2);
      function u(e2) {
        var t2 = new Date().getTime(), n2 = new Date().toISOString(), r2 = console && console.log ? console : window && window.console && window.console.log ? window.console : console;
        r2.log("<<<<<"), r2.log("[".concat(n2, "]"), "\n", e2.url, "\n", e2.qs), r2.log("-----"), e2.on("response", function(n3) {
          var i2 = new Date().getTime() - t2, o2 = new Date().toISOString();
          r2.log(">>>>>>"), r2.log("[".concat(o2, " / ").concat(i2, "]"), "\n", e2.url, "\n", e2.qs, "\n", n3.text), r2.log("-----");
        });
      }
      function s(e2, t2, n2) {
        var r2 = this;
        this._config.logVerbosity && (e2 = e2.use(u)), this._config.proxy && this._modules.proxy && (e2 = this._modules.proxy.call(this, e2)), this._config.keepAlive && this._modules.keepAlive && (e2 = this._modules.keepAlive(e2));
        var i2 = e2;
        return t2.abortSignal && t2.abortSignal.on("abort", function() {
          i2.abort();
        }), true === t2.forceBuffered ? i2 = "undefined" == typeof Blob ? i2.buffer().responseType("arraybuffer") : i2.responseType("arraybuffer") : false === t2.forceBuffered && (i2 = i2.buffer(false)), (i2 = i2.timeout(t2.timeout)).end(function(e3, i3) {
          var o2, a2 = {};
          if (a2.error = null !== e3, a2.operation = t2.operation, i3 && i3.status && (a2.statusCode = i3.status), e3) {
            if (e3.response && e3.response.text && !r2._config.logVerbosity)
              try {
                a2.errorData = JSON.parse(e3.response.text);
              } catch (t3) {
                a2.errorData = e3;
              }
            else
              a2.errorData = e3;
            return a2.category = r2._detectErrorCategory(e3), n2(a2, null);
          }
          if (t2.ignoreBody)
            o2 = { headers: i3.headers, redirects: i3.redirects, response: i3 };
          else
            try {
              o2 = JSON.parse(i3.text);
            } catch (e4) {
              return a2.errorData = i3, a2.error = true, n2(a2, null);
            }
          return o2.error && 1 === o2.error && o2.status && o2.message && o2.service ? (a2.errorData = o2, a2.statusCode = o2.status, a2.error = true, a2.category = r2._detectErrorCategory(a2), n2(a2, null)) : (o2.error && o2.error.message && (a2.errorData = o2.error), n2(a2, o2));
        }), i2;
      }
      function c() {
        return (c = (0, o.default)(i.default.mark(function e2(t2, n2, r2) {
          var o2, u2;
          return i.default.wrap(function(e3) {
            for (; ; )
              switch (e3.prev = e3.next) {
                case 0:
                  return o2 = a.default.post(t2), n2.forEach(function(e4) {
                    var t3 = e4.key, n3 = e4.value;
                    o2 = o2.field(t3, n3);
                  }), o2.attach("file", r2, { contentType: "application/octet-stream" }), e3.next = 5, o2;
                case 5:
                  return u2 = e3.sent, e3.abrupt("return", u2);
                case 7:
                case "end":
                  return e3.stop();
              }
          }, e2);
        }))).apply(this, arguments);
      }
    }, function(e, t, n) {
      function r(e2) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
          return typeof e3;
        } : function(e3) {
          return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
        })(e2);
      }
      var i;
      "undefined" != typeof window ? i = window : "undefined" == typeof self ? (console.warn("Using browser-only version of superagent in non-browser environment"), i = void 0) : i = self;
      var o = n(133), a = n(134), u = n(135), s = n(147), c = n(30), l = n(148), f = n(150);
      function d() {
      }
      e.exports = function(e2, n2) {
        return "function" == typeof n2 ? new t.Request("GET", e2).end(n2) : 1 === arguments.length ? new t.Request("GET", e2) : new t.Request(e2, n2);
      };
      var p = t = e.exports;
      t.Request = _, p.getXHR = function() {
        if (i.XMLHttpRequest && (!i.location || "file:" !== i.location.protocol || !i.ActiveXObject))
          return new XMLHttpRequest();
        try {
          return new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e2) {
        }
        try {
          return new ActiveXObject("Msxml2.XMLHTTP.6.0");
        } catch (e2) {
        }
        try {
          return new ActiveXObject("Msxml2.XMLHTTP.3.0");
        } catch (e2) {
        }
        try {
          return new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e2) {
        }
        throw new Error("Browser-only version of superagent could not find XHR");
      };
      var h = "".trim ? function(e2) {
        return e2.trim();
      } : function(e2) {
        return e2.replace(/(^\s*|\s*$)/g, "");
      };
      function y(e2) {
        if (!c(e2))
          return e2;
        var t2 = [];
        for (var n2 in e2)
          Object.prototype.hasOwnProperty.call(e2, n2) && g(t2, n2, e2[n2]);
        return t2.join("&");
      }
      function g(e2, t2, n2) {
        if (void 0 !== n2)
          if (null !== n2)
            if (Array.isArray(n2))
              n2.forEach(function(n3) {
                g(e2, t2, n3);
              });
            else if (c(n2))
              for (var r2 in n2)
                Object.prototype.hasOwnProperty.call(n2, r2) && g(e2, "".concat(t2, "[").concat(r2, "]"), n2[r2]);
            else
              e2.push(encodeURI(t2) + "=" + encodeURIComponent(n2));
          else
            e2.push(encodeURI(t2));
      }
      function v(e2) {
        for (var t2, n2, r2 = {}, i2 = e2.split("&"), o2 = 0, a2 = i2.length; o2 < a2; ++o2)
          -1 === (n2 = (t2 = i2[o2]).indexOf("=")) ? r2[decodeURIComponent(t2)] = "" : r2[decodeURIComponent(t2.slice(0, n2))] = decodeURIComponent(t2.slice(n2 + 1));
        return r2;
      }
      function b(e2) {
        return /[/+]json($|[^-\w])/i.test(e2);
      }
      function m(e2) {
        this.req = e2, this.xhr = this.req.xhr, this.text = "HEAD" !== this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText;
        var t2 = this.xhr.status;
        1223 === t2 && (t2 = 204), this._setStatusProperties(t2), this.headers = function(e3) {
          for (var t3, n2, r2, i2, o2 = e3.split(/\r?\n/), a2 = {}, u2 = 0, s2 = o2.length; u2 < s2; ++u2)
            -1 !== (t3 = (n2 = o2[u2]).indexOf(":")) && (r2 = n2.slice(0, t3).toLowerCase(), i2 = h(n2.slice(t3 + 1)), a2[r2] = i2);
          return a2;
        }(this.xhr.getAllResponseHeaders()), this.header = this.headers, this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), null === this.text && e2._responseType ? this.body = this.xhr.response : this.body = "HEAD" === this.req.method ? null : this._parseBody(this.text ? this.text : this.xhr.response);
      }
      function _(e2, t2) {
        var n2 = this;
        this._query = this._query || [], this.method = e2, this.url = t2, this.header = {}, this._header = {}, this.on("end", function() {
          var e3, t3 = null, r2 = null;
          try {
            r2 = new m(n2);
          } catch (e4) {
            return (t3 = new Error("Parser is unable to parse the response")).parse = true, t3.original = e4, n2.xhr ? (t3.rawResponse = void 0 === n2.xhr.responseType ? n2.xhr.responseText : n2.xhr.response, t3.status = n2.xhr.status ? n2.xhr.status : null, t3.statusCode = t3.status) : (t3.rawResponse = null, t3.status = null), n2.callback(t3);
          }
          n2.emit("response", r2);
          try {
            n2._isResponseOK(r2) || (e3 = new Error(r2.statusText || r2.text || "Unsuccessful HTTP response"));
          } catch (t4) {
            e3 = t4;
          }
          e3 ? (e3.original = t3, e3.response = r2, e3.status = r2.status, n2.callback(e3, r2)) : n2.callback(null, r2);
        });
      }
      function P(e2, t2, n2) {
        var r2 = p("DELETE", e2);
        return "function" == typeof t2 && (n2 = t2, t2 = null), t2 && r2.send(t2), n2 && r2.end(n2), r2;
      }
      p.serializeObject = y, p.parseString = v, p.types = { html: "text/html", json: "application/json", xml: "text/xml", urlencoded: "application/x-www-form-urlencoded", form: "application/x-www-form-urlencoded", "form-data": "application/x-www-form-urlencoded" }, p.serialize = { "application/x-www-form-urlencoded": u.stringify, "application/json": a }, p.parse = { "application/x-www-form-urlencoded": v, "application/json": JSON.parse }, l(m.prototype), m.prototype._parseBody = function(e2) {
        var t2 = p.parse[this.type];
        return this.req._parser ? this.req._parser(this, e2) : (!t2 && b(this.type) && (t2 = p.parse["application/json"]), t2 && e2 && (e2.length > 0 || e2 instanceof Object) ? t2(e2) : null);
      }, m.prototype.toError = function() {
        var e2 = this.req, t2 = e2.method, n2 = e2.url, r2 = "cannot ".concat(t2, " ").concat(n2, " (").concat(this.status, ")"), i2 = new Error(r2);
        return i2.status = this.status, i2.method = t2, i2.url = n2, i2;
      }, p.Response = m, o(_.prototype), s(_.prototype), _.prototype.type = function(e2) {
        return this.set("Content-Type", p.types[e2] || e2), this;
      }, _.prototype.accept = function(e2) {
        return this.set("Accept", p.types[e2] || e2), this;
      }, _.prototype.auth = function(e2, t2, n2) {
        1 === arguments.length && (t2 = ""), "object" === r(t2) && null !== t2 && (n2 = t2, t2 = ""), n2 || (n2 = { type: "function" == typeof btoa ? "basic" : "auto" });
        var i2 = function(e3) {
          if ("function" == typeof btoa)
            return btoa(e3);
          throw new Error("Cannot use basic auth, btoa is not a function");
        };
        return this._auth(e2, t2, n2, i2);
      }, _.prototype.query = function(e2) {
        return "string" != typeof e2 && (e2 = y(e2)), e2 && this._query.push(e2), this;
      }, _.prototype.attach = function(e2, t2, n2) {
        if (t2) {
          if (this._data)
            throw new Error("superagent can't mix .send() and .attach()");
          this._getFormData().append(e2, t2, n2 || t2.name);
        }
        return this;
      }, _.prototype._getFormData = function() {
        return this._formData || (this._formData = new i.FormData()), this._formData;
      }, _.prototype.callback = function(e2, t2) {
        if (this._shouldRetry(e2, t2))
          return this._retry();
        var n2 = this._callback;
        this.clearTimeout(), e2 && (this._maxRetries && (e2.retries = this._retries - 1), this.emit("error", e2)), n2(e2, t2);
      }, _.prototype.crossDomainError = function() {
        var e2 = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
        e2.crossDomain = true, e2.status = this.status, e2.method = this.method, e2.url = this.url, this.callback(e2);
      }, _.prototype.agent = function() {
        return console.warn("This is not supported in browser version of superagent"), this;
      }, _.prototype.ca = _.prototype.agent, _.prototype.buffer = _.prototype.ca, _.prototype.write = function() {
        throw new Error("Streaming is not supported in browser version of superagent");
      }, _.prototype.pipe = _.prototype.write, _.prototype._isHost = function(e2) {
        return e2 && "object" === r(e2) && !Array.isArray(e2) && "[object Object]" !== Object.prototype.toString.call(e2);
      }, _.prototype.end = function(e2) {
        this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), this._endCalled = true, this._callback = e2 || d, this._finalizeQueryString(), this._end();
      }, _.prototype._setUploadTimeout = function() {
        var e2 = this;
        this._uploadTimeout && !this._uploadTimeoutTimer && (this._uploadTimeoutTimer = setTimeout(function() {
          e2._timeoutError("Upload timeout of ", e2._uploadTimeout, "ETIMEDOUT");
        }, this._uploadTimeout));
      }, _.prototype._end = function() {
        if (this._aborted)
          return this.callback(new Error("The request has been aborted even before .end() was called"));
        var e2 = this;
        this.xhr = p.getXHR();
        var t2 = this.xhr, n2 = this._formData || this._data;
        this._setTimeouts(), t2.onreadystatechange = function() {
          var n3 = t2.readyState;
          if (n3 >= 2 && e2._responseTimeoutTimer && clearTimeout(e2._responseTimeoutTimer), 4 === n3) {
            var r3;
            try {
              r3 = t2.status;
            } catch (e3) {
              r3 = 0;
            }
            if (!r3) {
              if (e2.timedout || e2._aborted)
                return;
              return e2.crossDomainError();
            }
            e2.emit("end");
          }
        };
        var r2 = function(t3, n3) {
          n3.total > 0 && (n3.percent = n3.loaded / n3.total * 100, 100 === n3.percent && clearTimeout(e2._uploadTimeoutTimer)), n3.direction = t3, e2.emit("progress", n3);
        };
        if (this.hasListeners("progress"))
          try {
            t2.addEventListener("progress", r2.bind(null, "download")), t2.upload && t2.upload.addEventListener("progress", r2.bind(null, "upload"));
          } catch (e3) {
          }
        t2.upload && this._setUploadTimeout();
        try {
          this.username && this.password ? t2.open(this.method, this.url, true, this.username, this.password) : t2.open(this.method, this.url, true);
        } catch (e3) {
          return this.callback(e3);
        }
        if (this._withCredentials && (t2.withCredentials = true), !this._formData && "GET" !== this.method && "HEAD" !== this.method && "string" != typeof n2 && !this._isHost(n2)) {
          var i2 = this._header["content-type"], o2 = this._serializer || p.serialize[i2 ? i2.split(";")[0] : ""];
          !o2 && b(i2) && (o2 = p.serialize["application/json"]), o2 && (n2 = o2(n2));
        }
        for (var a2 in this.header)
          null !== this.header[a2] && Object.prototype.hasOwnProperty.call(this.header, a2) && t2.setRequestHeader(a2, this.header[a2]);
        this._responseType && (t2.responseType = this._responseType), this.emit("request", this), t2.send(void 0 === n2 ? null : n2);
      }, p.agent = function() {
        return new f();
      }, ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function(e2) {
        f.prototype[e2.toLowerCase()] = function(t2, n2) {
          var r2 = new p.Request(e2, t2);
          return this._setDefaults(r2), n2 && r2.end(n2), r2;
        };
      }), f.prototype.del = f.prototype.delete, p.get = function(e2, t2, n2) {
        var r2 = p("GET", e2);
        return "function" == typeof t2 && (n2 = t2, t2 = null), t2 && r2.query(t2), n2 && r2.end(n2), r2;
      }, p.head = function(e2, t2, n2) {
        var r2 = p("HEAD", e2);
        return "function" == typeof t2 && (n2 = t2, t2 = null), t2 && r2.query(t2), n2 && r2.end(n2), r2;
      }, p.options = function(e2, t2, n2) {
        var r2 = p("OPTIONS", e2);
        return "function" == typeof t2 && (n2 = t2, t2 = null), t2 && r2.send(t2), n2 && r2.end(n2), r2;
      }, p.del = P, p.delete = P, p.patch = function(e2, t2, n2) {
        var r2 = p("PATCH", e2);
        return "function" == typeof t2 && (n2 = t2, t2 = null), t2 && r2.send(t2), n2 && r2.end(n2), r2;
      }, p.post = function(e2, t2, n2) {
        var r2 = p("POST", e2);
        return "function" == typeof t2 && (n2 = t2, t2 = null), t2 && r2.send(t2), n2 && r2.end(n2), r2;
      }, p.put = function(e2, t2, n2) {
        var r2 = p("PUT", e2);
        return "function" == typeof t2 && (n2 = t2, t2 = null), t2 && r2.send(t2), n2 && r2.end(n2), r2;
      };
    }, function(e, t, n) {
      function r(e2) {
        if (e2)
          return function(e3) {
            for (var t2 in r.prototype)
              e3[t2] = r.prototype[t2];
            return e3;
          }(e2);
      }
      e.exports = r, r.prototype.on = r.prototype.addEventListener = function(e2, t2) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e2] = this._callbacks["$" + e2] || []).push(t2), this;
      }, r.prototype.once = function(e2, t2) {
        function n2() {
          this.off(e2, n2), t2.apply(this, arguments);
        }
        return n2.fn = t2, this.on(e2, n2), this;
      }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(e2, t2) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length)
          return this._callbacks = {}, this;
        var n2, r2 = this._callbacks["$" + e2];
        if (!r2)
          return this;
        if (1 == arguments.length)
          return delete this._callbacks["$" + e2], this;
        for (var i = 0; i < r2.length; i++)
          if ((n2 = r2[i]) === t2 || n2.fn === t2) {
            r2.splice(i, 1);
            break;
          }
        return 0 === r2.length && delete this._callbacks["$" + e2], this;
      }, r.prototype.emit = function(e2) {
        this._callbacks = this._callbacks || {};
        for (var t2 = new Array(arguments.length - 1), n2 = this._callbacks["$" + e2], r2 = 1; r2 < arguments.length; r2++)
          t2[r2 - 1] = arguments[r2];
        if (n2) {
          r2 = 0;
          for (var i = (n2 = n2.slice(0)).length; r2 < i; ++r2)
            n2[r2].apply(this, t2);
        }
        return this;
      }, r.prototype.listeners = function(e2) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + e2] || [];
      }, r.prototype.hasListeners = function(e2) {
        return !!this.listeners(e2).length;
      };
    }, function(e, t) {
      e.exports = o, o.default = o, o.stable = s, o.stableStringify = s;
      var n = [], r = [];
      function i() {
        return { depthLimit: Number.MAX_SAFE_INTEGER, edgesLimit: Number.MAX_SAFE_INTEGER };
      }
      function o(e2, t2, o2, u2) {
        var s2;
        void 0 === u2 && (u2 = i()), function e3(t3, n2, r2, i2, o3, u3, s3) {
          var c2;
          if (u3 += 1, "object" == typeof t3 && null !== t3) {
            for (c2 = 0; c2 < i2.length; c2++)
              if (i2[c2] === t3)
                return void a("[Circular]", t3, n2, o3);
            if (void 0 !== s3.depthLimit && u3 > s3.depthLimit)
              return void a("[...]", t3, n2, o3);
            if (void 0 !== s3.edgesLimit && r2 + 1 > s3.edgesLimit)
              return void a("[...]", t3, n2, o3);
            if (i2.push(t3), Array.isArray(t3))
              for (c2 = 0; c2 < t3.length; c2++)
                e3(t3[c2], c2, c2, i2, t3, u3, s3);
            else {
              var l2 = Object.keys(t3);
              for (c2 = 0; c2 < l2.length; c2++) {
                var f = l2[c2];
                e3(t3[f], f, c2, i2, t3, u3, s3);
              }
            }
            i2.pop();
          }
        }(e2, "", 0, [], void 0, 0, u2);
        try {
          s2 = 0 === r.length ? JSON.stringify(e2, t2, o2) : JSON.stringify(e2, c(t2), o2);
        } catch (e3) {
          return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
        } finally {
          for (; 0 !== n.length; ) {
            var l = n.pop();
            4 === l.length ? Object.defineProperty(l[0], l[1], l[3]) : l[0][l[1]] = l[2];
          }
        }
        return s2;
      }
      function a(e2, t2, i2, o2) {
        var a2 = Object.getOwnPropertyDescriptor(o2, i2);
        void 0 !== a2.get ? a2.configurable ? (Object.defineProperty(o2, i2, { value: e2 }), n.push([o2, i2, t2, a2])) : r.push([t2, i2, e2]) : (o2[i2] = e2, n.push([o2, i2, t2]));
      }
      function u(e2, t2) {
        return e2 < t2 ? -1 : e2 > t2 ? 1 : 0;
      }
      function s(e2, t2, o2, s2) {
        void 0 === s2 && (s2 = i());
        var l, f = function e3(t3, r2, i2, o3, s3, c2, l2) {
          var f2;
          if (c2 += 1, "object" == typeof t3 && null !== t3) {
            for (f2 = 0; f2 < o3.length; f2++)
              if (o3[f2] === t3)
                return void a("[Circular]", t3, r2, s3);
            try {
              if ("function" == typeof t3.toJSON)
                return;
            } catch (e4) {
              return;
            }
            if (void 0 !== l2.depthLimit && c2 > l2.depthLimit)
              return void a("[...]", t3, r2, s3);
            if (void 0 !== l2.edgesLimit && i2 + 1 > l2.edgesLimit)
              return void a("[...]", t3, r2, s3);
            if (o3.push(t3), Array.isArray(t3))
              for (f2 = 0; f2 < t3.length; f2++)
                e3(t3[f2], f2, f2, o3, t3, c2, l2);
            else {
              var d2 = {}, p = Object.keys(t3).sort(u);
              for (f2 = 0; f2 < p.length; f2++) {
                var h = p[f2];
                e3(t3[h], h, f2, o3, t3, c2, l2), d2[h] = t3[h];
              }
              if (void 0 === s3)
                return d2;
              n.push([s3, r2, t3]), s3[r2] = d2;
            }
            o3.pop();
          }
        }(e2, "", 0, [], void 0, 0, s2) || e2;
        try {
          l = 0 === r.length ? JSON.stringify(f, t2, o2) : JSON.stringify(f, c(t2), o2);
        } catch (e3) {
          return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
        } finally {
          for (; 0 !== n.length; ) {
            var d = n.pop();
            4 === d.length ? Object.defineProperty(d[0], d[1], d[3]) : d[0][d[1]] = d[2];
          }
        }
        return l;
      }
      function c(e2) {
        return e2 = void 0 !== e2 ? e2 : function(e3, t2) {
          return t2;
        }, function(t2, n2) {
          if (r.length > 0)
            for (var i2 = 0; i2 < r.length; i2++) {
              var o2 = r[i2];
              if (o2[1] === t2 && o2[0] === n2) {
                n2 = o2[2], r.splice(i2, 1);
                break;
              }
            }
          return e2.call(this, t2, n2);
        };
      }
    }, function(e, t, n) {
      var r = n(136), i = n(146), o = n(21);
      e.exports = { formats: o, parse: i, stringify: r };
    }, function(e, t, n) {
      var r = n(137), i = n(29), o = n(21), a = Object.prototype.hasOwnProperty, u = { brackets: function(e2) {
        return e2 + "[]";
      }, comma: "comma", indices: function(e2, t2) {
        return e2 + "[" + t2 + "]";
      }, repeat: function(e2) {
        return e2;
      } }, s = Array.isArray, c = String.prototype.split, l = Array.prototype.push, f = function(e2, t2) {
        l.apply(e2, s(t2) ? t2 : [t2]);
      }, d = Date.prototype.toISOString, p = o.default, h = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: i.encode, encodeValuesOnly: false, format: p, formatter: o.formatters[p], indices: false, serializeDate: function(e2) {
        return d.call(e2);
      }, skipNulls: false, strictNullHandling: false }, y = {}, g = function e2(t2, n2, o2, a2, u2, l2, d2, p2, g2, v, b, m, _, P, O) {
        for (var S, w = t2, k = O, T = 0, x = false; void 0 !== (k = k.get(y)) && !x; ) {
          var A = k.get(t2);
          if (T += 1, void 0 !== A) {
            if (A === T)
              throw new RangeError("Cyclic object value");
            x = true;
          }
          void 0 === k.get(y) && (T = 0);
        }
        if ("function" == typeof d2 ? w = d2(n2, w) : w instanceof Date ? w = v(w) : "comma" === o2 && s(w) && (w = i.maybeMap(w, function(e3) {
          return e3 instanceof Date ? v(e3) : e3;
        })), null === w) {
          if (a2)
            return l2 && !_ ? l2(n2, h.encoder, P, "key", b) : n2;
          w = "";
        }
        if ("string" == typeof (S = w) || "number" == typeof S || "boolean" == typeof S || "symbol" == typeof S || "bigint" == typeof S || i.isBuffer(w)) {
          if (l2) {
            var M = _ ? n2 : l2(n2, h.encoder, P, "key", b);
            if ("comma" === o2 && _) {
              for (var E = c.call(String(w), ","), j = "", R = 0; R < E.length; ++R)
                j += (0 === R ? "" : ",") + m(l2(E[R], h.encoder, P, "value", b));
              return [m(M) + "=" + j];
            }
            return [m(M) + "=" + m(l2(w, h.encoder, P, "value", b))];
          }
          return [m(n2) + "=" + m(String(w))];
        }
        var N, C = [];
        if (void 0 === w)
          return C;
        if ("comma" === o2 && s(w))
          N = [{ value: w.length > 0 ? w.join(",") || null : void 0 }];
        else if (s(d2))
          N = d2;
        else {
          var U = Object.keys(w);
          N = p2 ? U.sort(p2) : U;
        }
        for (var I = 0; I < N.length; ++I) {
          var D = N[I], F = "object" == typeof D && void 0 !== D.value ? D.value : w[D];
          if (!u2 || null !== F) {
            var L = s(w) ? "function" == typeof o2 ? o2(n2, D) : n2 : n2 + (g2 ? "." + D : "[" + D + "]");
            O.set(t2, T);
            var K = r();
            K.set(y, O), f(C, e2(F, L, o2, a2, u2, l2, d2, p2, g2, v, b, m, _, P, K));
          }
        }
        return C;
      };
      e.exports = function(e2, t2) {
        var n2, i2 = e2, c2 = function(e3) {
          if (!e3)
            return h;
          if (null !== e3.encoder && void 0 !== e3.encoder && "function" != typeof e3.encoder)
            throw new TypeError("Encoder has to be a function.");
          var t3 = e3.charset || h.charset;
          if (void 0 !== e3.charset && "utf-8" !== e3.charset && "iso-8859-1" !== e3.charset)
            throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
          var n3 = o.default;
          if (void 0 !== e3.format) {
            if (!a.call(o.formatters, e3.format))
              throw new TypeError("Unknown format option provided.");
            n3 = e3.format;
          }
          var r2 = o.formatters[n3], i3 = h.filter;
          return ("function" == typeof e3.filter || s(e3.filter)) && (i3 = e3.filter), { addQueryPrefix: "boolean" == typeof e3.addQueryPrefix ? e3.addQueryPrefix : h.addQueryPrefix, allowDots: void 0 === e3.allowDots ? h.allowDots : !!e3.allowDots, charset: t3, charsetSentinel: "boolean" == typeof e3.charsetSentinel ? e3.charsetSentinel : h.charsetSentinel, delimiter: void 0 === e3.delimiter ? h.delimiter : e3.delimiter, encode: "boolean" == typeof e3.encode ? e3.encode : h.encode, encoder: "function" == typeof e3.encoder ? e3.encoder : h.encoder, encodeValuesOnly: "boolean" == typeof e3.encodeValuesOnly ? e3.encodeValuesOnly : h.encodeValuesOnly, filter: i3, format: n3, formatter: r2, serializeDate: "function" == typeof e3.serializeDate ? e3.serializeDate : h.serializeDate, skipNulls: "boolean" == typeof e3.skipNulls ? e3.skipNulls : h.skipNulls, sort: "function" == typeof e3.sort ? e3.sort : null, strictNullHandling: "boolean" == typeof e3.strictNullHandling ? e3.strictNullHandling : h.strictNullHandling };
        }(t2);
        "function" == typeof c2.filter ? i2 = (0, c2.filter)("", i2) : s(c2.filter) && (n2 = c2.filter);
        var l2, d2 = [];
        if ("object" != typeof i2 || null === i2)
          return "";
        l2 = t2 && t2.arrayFormat in u ? t2.arrayFormat : t2 && "indices" in t2 ? t2.indices ? "indices" : "repeat" : "indices";
        var p2 = u[l2];
        n2 || (n2 = Object.keys(i2)), c2.sort && n2.sort(c2.sort);
        for (var y2 = r(), v = 0; v < n2.length; ++v) {
          var b = n2[v];
          c2.skipNulls && null === i2[b] || f(d2, g(i2[b], b, p2, c2.strictNullHandling, c2.skipNulls, c2.encode ? c2.encoder : null, c2.filter, c2.sort, c2.allowDots, c2.serializeDate, c2.format, c2.formatter, c2.encodeValuesOnly, c2.charset, y2));
        }
        var m = d2.join(c2.delimiter), _ = true === c2.addQueryPrefix ? "?" : "";
        return c2.charsetSentinel && ("iso-8859-1" === c2.charset ? _ += "utf8=%26%2310003%3B&" : _ += "utf8=%E2%9C%93&"), m.length > 0 ? _ + m : "";
      };
    }, function(e, t, n) {
      var r = n(19), i = n(142), o = n(144), a = r("%TypeError%"), u = r("%WeakMap%", true), s = r("%Map%", true), c = i("WeakMap.prototype.get", true), l = i("WeakMap.prototype.set", true), f = i("WeakMap.prototype.has", true), d = i("Map.prototype.get", true), p = i("Map.prototype.set", true), h = i("Map.prototype.has", true), y = function(e2, t2) {
        for (var n2, r2 = e2; null !== (n2 = r2.next); r2 = n2)
          if (n2.key === t2)
            return r2.next = n2.next, n2.next = e2.next, e2.next = n2, n2;
      };
      e.exports = function() {
        var e2, t2, n2, r2 = { assert: function(e3) {
          if (!r2.has(e3))
            throw new a("Side channel does not contain " + o(e3));
        }, get: function(r3) {
          if (u && r3 && ("object" == typeof r3 || "function" == typeof r3)) {
            if (e2)
              return c(e2, r3);
          } else if (s) {
            if (t2)
              return d(t2, r3);
          } else if (n2)
            return function(e3, t3) {
              var n3 = y(e3, t3);
              return n3 && n3.value;
            }(n2, r3);
        }, has: function(r3) {
          if (u && r3 && ("object" == typeof r3 || "function" == typeof r3)) {
            if (e2)
              return f(e2, r3);
          } else if (s) {
            if (t2)
              return h(t2, r3);
          } else if (n2)
            return function(e3, t3) {
              return !!y(e3, t3);
            }(n2, r3);
          return false;
        }, set: function(r3, i2) {
          u && r3 && ("object" == typeof r3 || "function" == typeof r3) ? (e2 || (e2 = new u()), l(e2, r3, i2)) : s ? (t2 || (t2 = new s()), p(t2, r3, i2)) : (n2 || (n2 = { key: {}, next: null }), function(e3, t3, n3) {
            var r4 = y(e3, t3);
            r4 ? r4.value = n3 : e3.next = { key: t3, next: e3.next, value: n3 };
          }(n2, r3, i2));
        } };
        return r2;
      };
    }, function(e, t, n) {
      var r = "undefined" != typeof Symbol && Symbol, i = n(139);
      e.exports = function() {
        return "function" == typeof r && ("function" == typeof Symbol && ("symbol" == typeof r("foo") && ("symbol" == typeof Symbol("bar") && i())));
      };
    }, function(e, t, n) {
      e.exports = function() {
        if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols)
          return false;
        if ("symbol" == typeof Symbol.iterator)
          return true;
        var e2 = {}, t2 = Symbol("test"), n2 = Object(t2);
        if ("string" == typeof t2)
          return false;
        if ("[object Symbol]" !== Object.prototype.toString.call(t2))
          return false;
        if ("[object Symbol]" !== Object.prototype.toString.call(n2))
          return false;
        for (t2 in e2[t2] = 42, e2)
          return false;
        if ("function" == typeof Object.keys && 0 !== Object.keys(e2).length)
          return false;
        if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e2).length)
          return false;
        var r = Object.getOwnPropertySymbols(e2);
        if (1 !== r.length || r[0] !== t2)
          return false;
        if (!Object.prototype.propertyIsEnumerable.call(e2, t2))
          return false;
        if ("function" == typeof Object.getOwnPropertyDescriptor) {
          var i = Object.getOwnPropertyDescriptor(e2, t2);
          if (42 !== i.value || true !== i.enumerable)
            return false;
        }
        return true;
      };
    }, function(e, t, n) {
      var r = "Function.prototype.bind called on incompatible ", i = Array.prototype.slice, o = Object.prototype.toString;
      e.exports = function(e2) {
        var t2 = this;
        if ("function" != typeof t2 || "[object Function]" !== o.call(t2))
          throw new TypeError(r + t2);
        for (var n2, a = i.call(arguments, 1), u = function() {
          if (this instanceof n2) {
            var r2 = t2.apply(this, a.concat(i.call(arguments)));
            return Object(r2) === r2 ? r2 : this;
          }
          return t2.apply(e2, a.concat(i.call(arguments)));
        }, s = Math.max(0, t2.length - a.length), c = [], l = 0; l < s; l++)
          c.push("$" + l);
        if (n2 = Function("binder", "return function (" + c.join(",") + "){ return binder.apply(this,arguments); }")(u), t2.prototype) {
          var f = function() {
          };
          f.prototype = t2.prototype, n2.prototype = new f(), f.prototype = null;
        }
        return n2;
      };
    }, function(e, t, n) {
      var r = n(20);
      e.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
    }, function(e, t, n) {
      var r = n(19), i = n(143), o = i(r("String.prototype.indexOf"));
      e.exports = function(e2, t2) {
        var n2 = r(e2, !!t2);
        return "function" == typeof n2 && o(e2, ".prototype.") > -1 ? i(n2) : n2;
      };
    }, function(e, t, n) {
      var r = n(20), i = n(19), o = i("%Function.prototype.apply%"), a = i("%Function.prototype.call%"), u = i("%Reflect.apply%", true) || r.call(a, o), s = i("%Object.getOwnPropertyDescriptor%", true), c = i("%Object.defineProperty%", true), l = i("%Math.max%");
      if (c)
        try {
          c({}, "a", { value: 1 });
        } catch (e2) {
          c = null;
        }
      e.exports = function(e2) {
        var t2 = u(r, a, arguments);
        if (s && c) {
          var n2 = s(t2, "length");
          n2.configurable && c(t2, "length", { value: 1 + l(0, e2.length - (arguments.length - 1)) });
        }
        return t2;
      };
      var f = function() {
        return u(r, o, arguments);
      };
      c ? c(e.exports, "apply", { value: f }) : e.exports.apply = f;
    }, function(e, t, n) {
      var r = "function" == typeof Map && Map.prototype, i = Object.getOwnPropertyDescriptor && r ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, o = r && i && "function" == typeof i.get ? i.get : null, a = r && Map.prototype.forEach, u = "function" == typeof Set && Set.prototype, s = Object.getOwnPropertyDescriptor && u ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, c = u && s && "function" == typeof s.get ? s.get : null, l = u && Set.prototype.forEach, f = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null, d = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null, p = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null, h = Boolean.prototype.valueOf, y = Object.prototype.toString, g = Function.prototype.toString, v = String.prototype.match, b = "function" == typeof BigInt ? BigInt.prototype.valueOf : null, m = Object.getOwnPropertySymbols, _ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null, P = "function" == typeof Symbol && "object" == typeof Symbol.iterator, O = "function" == typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === P || "symbol") ? Symbol.toStringTag : null, S = Object.prototype.propertyIsEnumerable, w = ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e2) {
        return e2.__proto__;
      } : null), k = n(145).custom, T = k && E(k) ? k : null;
      function x(e2, t2, n2) {
        var r2 = "double" === (n2.quoteStyle || t2) ? '"' : "'";
        return r2 + e2 + r2;
      }
      function A(e2) {
        return String(e2).replace(/"/g, "&quot;");
      }
      function M(e2) {
        return !("[object Array]" !== N(e2) || O && "object" == typeof e2 && O in e2);
      }
      function E(e2) {
        if (P)
          return e2 && "object" == typeof e2 && e2 instanceof Symbol;
        if ("symbol" == typeof e2)
          return true;
        if (!e2 || "object" != typeof e2 || !_)
          return false;
        try {
          return _.call(e2), true;
        } catch (e3) {
        }
        return false;
      }
      e.exports = function e2(t2, n2, r2, i2) {
        var u2 = n2 || {};
        if (R(u2, "quoteStyle") && "single" !== u2.quoteStyle && "double" !== u2.quoteStyle)
          throw new TypeError('option "quoteStyle" must be "single" or "double"');
        if (R(u2, "maxStringLength") && ("number" == typeof u2.maxStringLength ? u2.maxStringLength < 0 && u2.maxStringLength !== 1 / 0 : null !== u2.maxStringLength))
          throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        var s2 = !R(u2, "customInspect") || u2.customInspect;
        if ("boolean" != typeof s2 && "symbol" !== s2)
          throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        if (R(u2, "indent") && null !== u2.indent && "	" !== u2.indent && !(parseInt(u2.indent, 10) === u2.indent && u2.indent > 0))
          throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');
        if (void 0 === t2)
          return "undefined";
        if (null === t2)
          return "null";
        if ("boolean" == typeof t2)
          return t2 ? "true" : "false";
        if ("string" == typeof t2)
          return function e3(t3, n3) {
            if (t3.length > n3.maxStringLength) {
              var r3 = t3.length - n3.maxStringLength, i3 = "... " + r3 + " more character" + (r3 > 1 ? "s" : "");
              return e3(t3.slice(0, n3.maxStringLength), n3) + i3;
            }
            return x(t3.replace(/(['\\])/g, "\\$1").replace(/[\x00-\x1f]/g, U), "single", n3);
          }(t2, u2);
        if ("number" == typeof t2)
          return 0 === t2 ? 1 / 0 / t2 > 0 ? "0" : "-0" : String(t2);
        if ("bigint" == typeof t2)
          return String(t2) + "n";
        var y2 = void 0 === u2.depth ? 5 : u2.depth;
        if (void 0 === r2 && (r2 = 0), r2 >= y2 && y2 > 0 && "object" == typeof t2)
          return M(t2) ? "[Array]" : "[Object]";
        var m2 = function(e3, t3) {
          var n3;
          if ("	" === e3.indent)
            n3 = "	";
          else {
            if (!("number" == typeof e3.indent && e3.indent > 0))
              return null;
            n3 = Array(e3.indent + 1).join(" ");
          }
          return { base: n3, prev: Array(t3 + 1).join(n3) };
        }(u2, r2);
        if (void 0 === i2)
          i2 = [];
        else if (C(i2, t2) >= 0)
          return "[Circular]";
        function S2(t3, n3, o2) {
          if (n3 && (i2 = i2.slice()).push(n3), o2) {
            var a2 = { depth: u2.depth };
            return R(u2, "quoteStyle") && (a2.quoteStyle = u2.quoteStyle), e2(t3, a2, r2 + 1, i2);
          }
          return e2(t3, u2, r2 + 1, i2);
        }
        if ("function" == typeof t2) {
          var k2 = function(e3) {
            if (e3.name)
              return e3.name;
            var t3 = v.call(g.call(e3), /^function\s*([\w$]+)/);
            if (t3)
              return t3[1];
            return null;
          }(t2), j2 = K(t2, S2);
          return "[Function" + (k2 ? ": " + k2 : " (anonymous)") + "]" + (j2.length > 0 ? " { " + j2.join(", ") + " }" : "");
        }
        if (E(t2)) {
          var B = P ? String(t2).replace(/^(Symbol\(.*\))_[^)]*$/, "$1") : _.call(t2);
          return "object" != typeof t2 || P ? B : I(B);
        }
        if (function(e3) {
          if (!e3 || "object" != typeof e3)
            return false;
          if ("undefined" != typeof HTMLElement && e3 instanceof HTMLElement)
            return true;
          return "string" == typeof e3.nodeName && "function" == typeof e3.getAttribute;
        }(t2)) {
          for (var G = "<" + String(t2.nodeName).toLowerCase(), q = t2.attributes || [], H = 0; H < q.length; H++)
            G += " " + q[H].name + "=" + x(A(q[H].value), "double", u2);
          return G += ">", t2.childNodes && t2.childNodes.length && (G += "..."), G += "</" + String(t2.nodeName).toLowerCase() + ">";
        }
        if (M(t2)) {
          if (0 === t2.length)
            return "[]";
          var z = K(t2, S2);
          return m2 && !function(e3) {
            for (var t3 = 0; t3 < e3.length; t3++)
              if (C(e3[t3], "\n") >= 0)
                return false;
            return true;
          }(z) ? "[" + L(z, m2) + "]" : "[ " + z.join(", ") + " ]";
        }
        if (function(e3) {
          return !("[object Error]" !== N(e3) || O && "object" == typeof e3 && O in e3);
        }(t2)) {
          var W = K(t2, S2);
          return 0 === W.length ? "[" + String(t2) + "]" : "{ [" + String(t2) + "] " + W.join(", ") + " }";
        }
        if ("object" == typeof t2 && s2) {
          if (T && "function" == typeof t2[T])
            return t2[T]();
          if ("symbol" !== s2 && "function" == typeof t2.inspect)
            return t2.inspect();
        }
        if (function(e3) {
          if (!o || !e3 || "object" != typeof e3)
            return false;
          try {
            o.call(e3);
            try {
              c.call(e3);
            } catch (e4) {
              return true;
            }
            return e3 instanceof Map;
          } catch (e4) {
          }
          return false;
        }(t2)) {
          var V = [];
          return a.call(t2, function(e3, n3) {
            V.push(S2(n3, t2, true) + " => " + S2(e3, t2));
          }), F("Map", o.call(t2), V, m2);
        }
        if (function(e3) {
          if (!c || !e3 || "object" != typeof e3)
            return false;
          try {
            c.call(e3);
            try {
              o.call(e3);
            } catch (e4) {
              return true;
            }
            return e3 instanceof Set;
          } catch (e4) {
          }
          return false;
        }(t2)) {
          var Y = [];
          return l.call(t2, function(e3) {
            Y.push(S2(e3, t2));
          }), F("Set", c.call(t2), Y, m2);
        }
        if (function(e3) {
          if (!f || !e3 || "object" != typeof e3)
            return false;
          try {
            f.call(e3, f);
            try {
              d.call(e3, d);
            } catch (e4) {
              return true;
            }
            return e3 instanceof WeakMap;
          } catch (e4) {
          }
          return false;
        }(t2))
          return D("WeakMap");
        if (function(e3) {
          if (!d || !e3 || "object" != typeof e3)
            return false;
          try {
            d.call(e3, d);
            try {
              f.call(e3, f);
            } catch (e4) {
              return true;
            }
            return e3 instanceof WeakSet;
          } catch (e4) {
          }
          return false;
        }(t2))
          return D("WeakSet");
        if (function(e3) {
          if (!p || !e3 || "object" != typeof e3)
            return false;
          try {
            return p.call(e3), true;
          } catch (e4) {
          }
          return false;
        }(t2))
          return D("WeakRef");
        if (function(e3) {
          return !("[object Number]" !== N(e3) || O && "object" == typeof e3 && O in e3);
        }(t2))
          return I(S2(Number(t2)));
        if (function(e3) {
          if (!e3 || "object" != typeof e3 || !b)
            return false;
          try {
            return b.call(e3), true;
          } catch (e4) {
          }
          return false;
        }(t2))
          return I(S2(b.call(t2)));
        if (function(e3) {
          return !("[object Boolean]" !== N(e3) || O && "object" == typeof e3 && O in e3);
        }(t2))
          return I(h.call(t2));
        if (function(e3) {
          return !("[object String]" !== N(e3) || O && "object" == typeof e3 && O in e3);
        }(t2))
          return I(S2(String(t2)));
        if (!function(e3) {
          return !("[object Date]" !== N(e3) || O && "object" == typeof e3 && O in e3);
        }(t2) && !function(e3) {
          return !("[object RegExp]" !== N(e3) || O && "object" == typeof e3 && O in e3);
        }(t2)) {
          var J = K(t2, S2), $ = w ? w(t2) === Object.prototype : t2 instanceof Object || t2.constructor === Object, X = t2 instanceof Object ? "" : "null prototype", Q = !$ && O && Object(t2) === t2 && O in t2 ? N(t2).slice(8, -1) : X ? "Object" : "", Z = ($ || "function" != typeof t2.constructor ? "" : t2.constructor.name ? t2.constructor.name + " " : "") + (Q || X ? "[" + [].concat(Q || [], X || []).join(": ") + "] " : "");
          return 0 === J.length ? Z + "{}" : m2 ? Z + "{" + L(J, m2) + "}" : Z + "{ " + J.join(", ") + " }";
        }
        return String(t2);
      };
      var j = Object.prototype.hasOwnProperty || function(e2) {
        return e2 in this;
      };
      function R(e2, t2) {
        return j.call(e2, t2);
      }
      function N(e2) {
        return y.call(e2);
      }
      function C(e2, t2) {
        if (e2.indexOf)
          return e2.indexOf(t2);
        for (var n2 = 0, r2 = e2.length; n2 < r2; n2++)
          if (e2[n2] === t2)
            return n2;
        return -1;
      }
      function U(e2) {
        var t2 = e2.charCodeAt(0), n2 = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t2];
        return n2 ? "\\" + n2 : "\\x" + (t2 < 16 ? "0" : "") + t2.toString(16).toUpperCase();
      }
      function I(e2) {
        return "Object(" + e2 + ")";
      }
      function D(e2) {
        return e2 + " { ? }";
      }
      function F(e2, t2, n2, r2) {
        return e2 + " (" + t2 + ") {" + (r2 ? L(n2, r2) : n2.join(", ")) + "}";
      }
      function L(e2, t2) {
        if (0 === e2.length)
          return "";
        var n2 = "\n" + t2.prev + t2.base;
        return n2 + e2.join("," + n2) + "\n" + t2.prev;
      }
      function K(e2, t2) {
        var n2 = M(e2), r2 = [];
        if (n2) {
          r2.length = e2.length;
          for (var i2 = 0; i2 < e2.length; i2++)
            r2[i2] = R(e2, i2) ? t2(e2[i2], e2) : "";
        }
        var o2, a2 = "function" == typeof m ? m(e2) : [];
        if (P) {
          o2 = {};
          for (var u2 = 0; u2 < a2.length; u2++)
            o2["$" + a2[u2]] = a2[u2];
        }
        for (var s2 in e2)
          R(e2, s2) && (n2 && String(Number(s2)) === s2 && s2 < e2.length || P && o2["$" + s2] instanceof Symbol || (/[^\w$]/.test(s2) ? r2.push(t2(s2, e2) + ": " + t2(e2[s2], e2)) : r2.push(s2 + ": " + t2(e2[s2], e2))));
        if ("function" == typeof m)
          for (var c2 = 0; c2 < a2.length; c2++)
            S.call(e2, a2[c2]) && r2.push("[" + t2(a2[c2]) + "]: " + t2(e2[a2[c2]], e2));
        return r2;
      }
    }, function(e, t) {
    }, function(e, t, n) {
      var r = n(29), i = Object.prototype.hasOwnProperty, o = Array.isArray, a = { allowDots: false, allowPrototypes: false, allowSparse: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: r.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, u = function(e2) {
        return e2.replace(/&#(\d+);/g, function(e3, t2) {
          return String.fromCharCode(parseInt(t2, 10));
        });
      }, s = function(e2, t2) {
        return e2 && "string" == typeof e2 && t2.comma && e2.indexOf(",") > -1 ? e2.split(",") : e2;
      }, c = function(e2, t2, n2, r2) {
        if (e2) {
          var o2 = n2.allowDots ? e2.replace(/\.([^.[]+)/g, "[$1]") : e2, a2 = /(\[[^[\]]*])/g, u2 = n2.depth > 0 && /(\[[^[\]]*])/.exec(o2), c2 = u2 ? o2.slice(0, u2.index) : o2, l = [];
          if (c2) {
            if (!n2.plainObjects && i.call(Object.prototype, c2) && !n2.allowPrototypes)
              return;
            l.push(c2);
          }
          for (var f = 0; n2.depth > 0 && null !== (u2 = a2.exec(o2)) && f < n2.depth; ) {
            if (f += 1, !n2.plainObjects && i.call(Object.prototype, u2[1].slice(1, -1)) && !n2.allowPrototypes)
              return;
            l.push(u2[1]);
          }
          return u2 && l.push("[" + o2.slice(u2.index) + "]"), function(e3, t3, n3, r3) {
            for (var i2 = r3 ? t3 : s(t3, n3), o3 = e3.length - 1; o3 >= 0; --o3) {
              var a3, u3 = e3[o3];
              if ("[]" === u3 && n3.parseArrays)
                a3 = [].concat(i2);
              else {
                a3 = n3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
                var c3 = "[" === u3.charAt(0) && "]" === u3.charAt(u3.length - 1) ? u3.slice(1, -1) : u3, l2 = parseInt(c3, 10);
                n3.parseArrays || "" !== c3 ? !isNaN(l2) && u3 !== c3 && String(l2) === c3 && l2 >= 0 && n3.parseArrays && l2 <= n3.arrayLimit ? (a3 = [])[l2] = i2 : a3[c3] = i2 : a3 = { 0: i2 };
              }
              i2 = a3;
            }
            return i2;
          }(l, t2, n2, r2);
        }
      };
      e.exports = function(e2, t2) {
        var n2 = function(e3) {
          if (!e3)
            return a;
          if (null !== e3.decoder && void 0 !== e3.decoder && "function" != typeof e3.decoder)
            throw new TypeError("Decoder has to be a function.");
          if (void 0 !== e3.charset && "utf-8" !== e3.charset && "iso-8859-1" !== e3.charset)
            throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
          var t3 = void 0 === e3.charset ? a.charset : e3.charset;
          return { allowDots: void 0 === e3.allowDots ? a.allowDots : !!e3.allowDots, allowPrototypes: "boolean" == typeof e3.allowPrototypes ? e3.allowPrototypes : a.allowPrototypes, allowSparse: "boolean" == typeof e3.allowSparse ? e3.allowSparse : a.allowSparse, arrayLimit: "number" == typeof e3.arrayLimit ? e3.arrayLimit : a.arrayLimit, charset: t3, charsetSentinel: "boolean" == typeof e3.charsetSentinel ? e3.charsetSentinel : a.charsetSentinel, comma: "boolean" == typeof e3.comma ? e3.comma : a.comma, decoder: "function" == typeof e3.decoder ? e3.decoder : a.decoder, delimiter: "string" == typeof e3.delimiter || r.isRegExp(e3.delimiter) ? e3.delimiter : a.delimiter, depth: "number" == typeof e3.depth || false === e3.depth ? +e3.depth : a.depth, ignoreQueryPrefix: true === e3.ignoreQueryPrefix, interpretNumericEntities: "boolean" == typeof e3.interpretNumericEntities ? e3.interpretNumericEntities : a.interpretNumericEntities, parameterLimit: "number" == typeof e3.parameterLimit ? e3.parameterLimit : a.parameterLimit, parseArrays: false !== e3.parseArrays, plainObjects: "boolean" == typeof e3.plainObjects ? e3.plainObjects : a.plainObjects, strictNullHandling: "boolean" == typeof e3.strictNullHandling ? e3.strictNullHandling : a.strictNullHandling };
        }(t2);
        if ("" === e2 || null == e2)
          return n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
        for (var l = "string" == typeof e2 ? function(e3, t3) {
          var n3, c2 = {}, l2 = t3.ignoreQueryPrefix ? e3.replace(/^\?/, "") : e3, f2 = t3.parameterLimit === 1 / 0 ? void 0 : t3.parameterLimit, d2 = l2.split(t3.delimiter, f2), p2 = -1, h2 = t3.charset;
          if (t3.charsetSentinel)
            for (n3 = 0; n3 < d2.length; ++n3)
              0 === d2[n3].indexOf("utf8=") && ("utf8=%E2%9C%93" === d2[n3] ? h2 = "utf-8" : "utf8=%26%2310003%3B" === d2[n3] && (h2 = "iso-8859-1"), p2 = n3, n3 = d2.length);
          for (n3 = 0; n3 < d2.length; ++n3)
            if (n3 !== p2) {
              var y2, g, v = d2[n3], b = v.indexOf("]="), m = -1 === b ? v.indexOf("=") : b + 1;
              -1 === m ? (y2 = t3.decoder(v, a.decoder, h2, "key"), g = t3.strictNullHandling ? null : "") : (y2 = t3.decoder(v.slice(0, m), a.decoder, h2, "key"), g = r.maybeMap(s(v.slice(m + 1), t3), function(e4) {
                return t3.decoder(e4, a.decoder, h2, "value");
              })), g && t3.interpretNumericEntities && "iso-8859-1" === h2 && (g = u(g)), v.indexOf("[]=") > -1 && (g = o(g) ? [g] : g), i.call(c2, y2) ? c2[y2] = r.combine(c2[y2], g) : c2[y2] = g;
            }
          return c2;
        }(e2, n2) : e2, f = n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, d = Object.keys(l), p = 0; p < d.length; ++p) {
          var h = d[p], y = c(h, l[h], n2, "string" == typeof e2);
          f = r.merge(f, y, n2);
        }
        return true === n2.allowSparse ? f : r.compact(f);
      };
    }, function(e, t, n) {
      function r(e2) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
          return typeof e3;
        } : function(e3) {
          return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
        })(e2);
      }
      var i = n(30);
      function o(e2) {
        if (e2)
          return function(e3) {
            for (var t2 in o.prototype)
              Object.prototype.hasOwnProperty.call(o.prototype, t2) && (e3[t2] = o.prototype[t2]);
            return e3;
          }(e2);
      }
      e.exports = o, o.prototype.clearTimeout = function() {
        return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), clearTimeout(this._uploadTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, delete this._uploadTimeoutTimer, this;
      }, o.prototype.parse = function(e2) {
        return this._parser = e2, this;
      }, o.prototype.responseType = function(e2) {
        return this._responseType = e2, this;
      }, o.prototype.serialize = function(e2) {
        return this._serializer = e2, this;
      }, o.prototype.timeout = function(e2) {
        if (!e2 || "object" !== r(e2))
          return this._timeout = e2, this._responseTimeout = 0, this._uploadTimeout = 0, this;
        for (var t2 in e2)
          if (Object.prototype.hasOwnProperty.call(e2, t2))
            switch (t2) {
              case "deadline":
                this._timeout = e2.deadline;
                break;
              case "response":
                this._responseTimeout = e2.response;
                break;
              case "upload":
                this._uploadTimeout = e2.upload;
                break;
              default:
                console.warn("Unknown timeout option", t2);
            }
        return this;
      }, o.prototype.retry = function(e2, t2) {
        return 0 !== arguments.length && true !== e2 || (e2 = 1), e2 <= 0 && (e2 = 0), this._maxRetries = e2, this._retries = 0, this._retryCallback = t2, this;
      };
      var a = /* @__PURE__ */ new Set(["ETIMEDOUT", "ECONNRESET", "EADDRINUSE", "ECONNREFUSED", "EPIPE", "ENOTFOUND", "ENETUNREACH", "EAI_AGAIN"]), u = /* @__PURE__ */ new Set([408, 413, 429, 500, 502, 503, 504, 521, 522, 524]);
      o.prototype._shouldRetry = function(e2, t2) {
        if (!this._maxRetries || this._retries++ >= this._maxRetries)
          return false;
        if (this._retryCallback)
          try {
            var n2 = this._retryCallback(e2, t2);
            if (true === n2)
              return true;
            if (false === n2)
              return false;
          } catch (e3) {
            console.error(e3);
          }
        if (t2 && t2.status && u.has(t2.status))
          return true;
        if (e2) {
          if (e2.code && a.has(e2.code))
            return true;
          if (e2.timeout && "ECONNABORTED" === e2.code)
            return true;
          if (e2.crossDomain)
            return true;
        }
        return false;
      }, o.prototype._retry = function() {
        return this.clearTimeout(), this.req && (this.req = null, this.req = this.request()), this._aborted = false, this.timedout = false, this.timedoutError = null, this._end();
      }, o.prototype.then = function(e2, t2) {
        var n2 = this;
        if (!this._fullfilledPromise) {
          var r2 = this;
          this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"), this._fullfilledPromise = new Promise(function(e3, t3) {
            r2.on("abort", function() {
              if (!(n2._maxRetries && n2._maxRetries > n2._retries))
                if (n2.timedout && n2.timedoutError)
                  t3(n2.timedoutError);
                else {
                  var e4 = new Error("Aborted");
                  e4.code = "ABORTED", e4.status = n2.status, e4.method = n2.method, e4.url = n2.url, t3(e4);
                }
            }), r2.end(function(n3, r3) {
              n3 ? t3(n3) : e3(r3);
            });
          });
        }
        return this._fullfilledPromise.then(e2, t2);
      }, o.prototype.catch = function(e2) {
        return this.then(void 0, e2);
      }, o.prototype.use = function(e2) {
        return e2(this), this;
      }, o.prototype.ok = function(e2) {
        if ("function" != typeof e2)
          throw new Error("Callback required");
        return this._okCallback = e2, this;
      }, o.prototype._isResponseOK = function(e2) {
        return !!e2 && (this._okCallback ? this._okCallback(e2) : e2.status >= 200 && e2.status < 300);
      }, o.prototype.get = function(e2) {
        return this._header[e2.toLowerCase()];
      }, o.prototype.getHeader = o.prototype.get, o.prototype.set = function(e2, t2) {
        if (i(e2)) {
          for (var n2 in e2)
            Object.prototype.hasOwnProperty.call(e2, n2) && this.set(n2, e2[n2]);
          return this;
        }
        return this._header[e2.toLowerCase()] = t2, this.header[e2] = t2, this;
      }, o.prototype.unset = function(e2) {
        return delete this._header[e2.toLowerCase()], delete this.header[e2], this;
      }, o.prototype.field = function(e2, t2) {
        if (null == e2)
          throw new Error(".field(name, val) name can not be empty");
        if (this._data)
          throw new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
        if (i(e2)) {
          for (var n2 in e2)
            Object.prototype.hasOwnProperty.call(e2, n2) && this.field(n2, e2[n2]);
          return this;
        }
        if (Array.isArray(t2)) {
          for (var r2 in t2)
            Object.prototype.hasOwnProperty.call(t2, r2) && this.field(e2, t2[r2]);
          return this;
        }
        if (null == t2)
          throw new Error(".field(name, val) val can not be empty");
        return "boolean" == typeof t2 && (t2 = String(t2)), this._getFormData().append(e2, t2), this;
      }, o.prototype.abort = function() {
        return this._aborted || (this._aborted = true, this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit("abort")), this;
      }, o.prototype._auth = function(e2, t2, n2, r2) {
        switch (n2.type) {
          case "basic":
            this.set("Authorization", "Basic ".concat(r2("".concat(e2, ":").concat(t2))));
            break;
          case "auto":
            this.username = e2, this.password = t2;
            break;
          case "bearer":
            this.set("Authorization", "Bearer ".concat(e2));
        }
        return this;
      }, o.prototype.withCredentials = function(e2) {
        return void 0 === e2 && (e2 = true), this._withCredentials = e2, this;
      }, o.prototype.redirects = function(e2) {
        return this._maxRedirects = e2, this;
      }, o.prototype.maxResponseSize = function(e2) {
        if ("number" != typeof e2)
          throw new TypeError("Invalid argument");
        return this._maxResponseSize = e2, this;
      }, o.prototype.toJSON = function() {
        return { method: this.method, url: this.url, data: this._data, headers: this._header };
      }, o.prototype.send = function(e2) {
        var t2 = i(e2), n2 = this._header["content-type"];
        if (this._formData)
          throw new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
        if (t2 && !this._data)
          Array.isArray(e2) ? this._data = [] : this._isHost(e2) || (this._data = {});
        else if (e2 && this._data && this._isHost(this._data))
          throw new Error("Can't merge these send calls");
        if (t2 && i(this._data))
          for (var r2 in e2)
            Object.prototype.hasOwnProperty.call(e2, r2) && (this._data[r2] = e2[r2]);
        else
          "string" == typeof e2 ? (n2 || this.type("form"), (n2 = this._header["content-type"]) && (n2 = n2.toLowerCase().trim()), this._data = "application/x-www-form-urlencoded" === n2 ? this._data ? "".concat(this._data, "&").concat(e2) : e2 : (this._data || "") + e2) : this._data = e2;
        return !t2 || this._isHost(e2) || n2 || this.type("json"), this;
      }, o.prototype.sortQuery = function(e2) {
        return this._sort = void 0 === e2 || e2, this;
      }, o.prototype._finalizeQueryString = function() {
        var e2 = this._query.join("&");
        if (e2 && (this.url += (this.url.includes("?") ? "&" : "?") + e2), this._query.length = 0, this._sort) {
          var t2 = this.url.indexOf("?");
          if (t2 >= 0) {
            var n2 = this.url.slice(t2 + 1).split("&");
            "function" == typeof this._sort ? n2.sort(this._sort) : n2.sort(), this.url = this.url.slice(0, t2) + "?" + n2.join("&");
          }
        }
      }, o.prototype._appendQueryString = function() {
        console.warn("Unsupported");
      }, o.prototype._timeoutError = function(e2, t2, n2) {
        if (!this._aborted) {
          var r2 = new Error("".concat(e2 + t2, "ms exceeded"));
          r2.timeout = t2, r2.code = "ECONNABORTED", r2.errno = n2, this.timedout = true, this.timedoutError = r2, this.abort(), this.callback(r2);
        }
      }, o.prototype._setTimeouts = function() {
        var e2 = this;
        this._timeout && !this._timer && (this._timer = setTimeout(function() {
          e2._timeoutError("Timeout of ", e2._timeout, "ETIME");
        }, this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout(function() {
          e2._timeoutError("Response timeout of ", e2._responseTimeout, "ETIMEDOUT");
        }, this._responseTimeout));
      };
    }, function(e, t, n) {
      var r = n(149);
      function i(e2) {
        if (e2)
          return function(e3) {
            for (var t2 in i.prototype)
              Object.prototype.hasOwnProperty.call(i.prototype, t2) && (e3[t2] = i.prototype[t2]);
            return e3;
          }(e2);
      }
      e.exports = i, i.prototype.get = function(e2) {
        return this.header[e2.toLowerCase()];
      }, i.prototype._setHeaderProperties = function(e2) {
        var t2 = e2["content-type"] || "";
        this.type = r.type(t2);
        var n2 = r.params(t2);
        for (var i2 in n2)
          Object.prototype.hasOwnProperty.call(n2, i2) && (this[i2] = n2[i2]);
        this.links = {};
        try {
          e2.link && (this.links = r.parseLinks(e2.link));
        } catch (e3) {
        }
      }, i.prototype._setStatusProperties = function(e2) {
        var t2 = e2 / 100 | 0;
        this.statusCode = e2, this.status = this.statusCode, this.statusType = t2, this.info = 1 === t2, this.ok = 2 === t2, this.redirect = 3 === t2, this.clientError = 4 === t2, this.serverError = 5 === t2, this.error = (4 === t2 || 5 === t2) && this.toError(), this.created = 201 === e2, this.accepted = 202 === e2, this.noContent = 204 === e2, this.badRequest = 400 === e2, this.unauthorized = 401 === e2, this.notAcceptable = 406 === e2, this.forbidden = 403 === e2, this.notFound = 404 === e2, this.unprocessableEntity = 422 === e2;
      };
    }, function(e, t, n) {
      function r(e2, t2) {
        var n2;
        if ("undefined" == typeof Symbol || null == e2[Symbol.iterator]) {
          if (Array.isArray(e2) || (n2 = function(e3, t3) {
            if (!e3)
              return;
            if ("string" == typeof e3)
              return i(e3, t3);
            var n3 = Object.prototype.toString.call(e3).slice(8, -1);
            "Object" === n3 && e3.constructor && (n3 = e3.constructor.name);
            if ("Map" === n3 || "Set" === n3)
              return Array.from(e3);
            if ("Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
              return i(e3, t3);
          }(e2)) || t2 && e2 && "number" == typeof e2.length) {
            n2 && (e2 = n2);
            var r2 = 0, o = function() {
            };
            return { s: o, n: function() {
              return r2 >= e2.length ? { done: true } : { done: false, value: e2[r2++] };
            }, e: function(e3) {
              throw e3;
            }, f: o };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var a, u = true, s = false;
        return { s: function() {
          n2 = e2[Symbol.iterator]();
        }, n: function() {
          var e3 = n2.next();
          return u = e3.done, e3;
        }, e: function(e3) {
          s = true, a = e3;
        }, f: function() {
          try {
            u || null == n2.return || n2.return();
          } finally {
            if (s)
              throw a;
          }
        } };
      }
      function i(e2, t2) {
        (null == t2 || t2 > e2.length) && (t2 = e2.length);
        for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
          r2[n2] = e2[n2];
        return r2;
      }
      t.type = function(e2) {
        return e2.split(/ *; */).shift();
      }, t.params = function(e2) {
        var t2, n2 = {}, i2 = r(e2.split(/ *; */));
        try {
          for (i2.s(); !(t2 = i2.n()).done; ) {
            var o = t2.value.split(/ *= */), a = o.shift(), u = o.shift();
            a && u && (n2[a] = u);
          }
        } catch (e3) {
          i2.e(e3);
        } finally {
          i2.f();
        }
        return n2;
      }, t.parseLinks = function(e2) {
        var t2, n2 = {}, i2 = r(e2.split(/ *, */));
        try {
          for (i2.s(); !(t2 = i2.n()).done; ) {
            var o = t2.value.split(/ *; */), a = o[0].slice(1, -1);
            n2[o[1].split(/ *= */)[1].slice(1, -1)] = a;
          }
        } catch (e3) {
          i2.e(e3);
        } finally {
          i2.f();
        }
        return n2;
      }, t.cleanHeader = function(e2, t2) {
        return delete e2["content-type"], delete e2["content-length"], delete e2["transfer-encoding"], delete e2.host, t2 && (delete e2.authorization, delete e2.cookie), e2;
      };
    }, function(e, t, n) {
      function r(e2) {
        return function(e3) {
          if (Array.isArray(e3))
            return i(e3);
        }(e2) || function(e3) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e3))
            return Array.from(e3);
        }(e2) || function(e3, t2) {
          if (!e3)
            return;
          if ("string" == typeof e3)
            return i(e3, t2);
          var n2 = Object.prototype.toString.call(e3).slice(8, -1);
          "Object" === n2 && e3.constructor && (n2 = e3.constructor.name);
          if ("Map" === n2 || "Set" === n2)
            return Array.from(e3);
          if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
            return i(e3, t2);
        }(e2) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function i(e2, t2) {
        (null == t2 || t2 > e2.length) && (t2 = e2.length);
        for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
          r2[n2] = e2[n2];
        return r2;
      }
      function o() {
        this._defaults = [];
      }
      ["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert", "disableTLSCerts"].forEach(function(e2) {
        o.prototype[e2] = function() {
          for (var t2 = arguments.length, n2 = new Array(t2), r2 = 0; r2 < t2; r2++)
            n2[r2] = arguments[r2];
          return this._defaults.push({ fn: e2, args: n2 }), this;
        };
      }), o.prototype._setDefaults = function(e2) {
        this._defaults.forEach(function(t2) {
          e2[t2.fn].apply(e2, r(t2.args));
        });
      }, e.exports = o;
    }, function(e, t, n) {
      (function(r) {
        var i = n(0);
        Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
        var o = i(n(11)), a = i(n(12)), u = i(n(5)), s = i(n(6)), c = i(n(4));
        function l(e2, t2) {
          var n2 = new Uint8Array(e2.byteLength + t2.byteLength);
          return n2.set(new Uint8Array(e2), 0), n2.set(new Uint8Array(t2), e2.byteLength), n2.buffer;
        }
        var f = function() {
          function e2() {
            (0, u.default)(this, e2);
          }
          var t2, n2, i2, c2, f2, d, p, h, y;
          return (0, s.default)(e2, [{ key: "algo", get: function() {
            return "aes-256-cbc";
          } }, { key: "encrypt", value: (y = (0, a.default)(o.default.mark(function e3(t3, n3) {
            var r2;
            return o.default.wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    return e4.next = 2, this.getKey(t3);
                  case 2:
                    if (r2 = e4.sent, !(n3 instanceof ArrayBuffer)) {
                      e4.next = 7;
                      break;
                    }
                    return e4.abrupt("return", this.encryptArrayBuffer(r2, n3));
                  case 7:
                    if ("string" != typeof n3) {
                      e4.next = 11;
                      break;
                    }
                    return e4.abrupt("return", this.encryptString(r2, n3));
                  case 11:
                    throw new Error("Cannot encrypt this file. In browsers file encryption supports only string or ArrayBuffer");
                  case 12:
                  case "end":
                    return e4.stop();
                }
            }, e3, this);
          })), function(e3, t3) {
            return y.apply(this, arguments);
          }) }, { key: "decrypt", value: (h = (0, a.default)(o.default.mark(function e3(t3, n3) {
            var r2;
            return o.default.wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    return e4.next = 2, this.getKey(t3);
                  case 2:
                    if (r2 = e4.sent, !(n3 instanceof ArrayBuffer)) {
                      e4.next = 7;
                      break;
                    }
                    return e4.abrupt("return", this.decryptArrayBuffer(r2, n3));
                  case 7:
                    if ("string" != typeof n3) {
                      e4.next = 11;
                      break;
                    }
                    return e4.abrupt("return", this.decryptString(r2, n3));
                  case 11:
                    throw new Error("Cannot decrypt this file. In browsers file decryption supports only string or ArrayBuffer");
                  case 12:
                  case "end":
                    return e4.stop();
                }
            }, e3, this);
          })), function(e3, t3) {
            return h.apply(this, arguments);
          }) }, { key: "encryptFile", value: (p = (0, a.default)(o.default.mark(function e3(t3, n3, r2) {
            var i3, a2, u2;
            return o.default.wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    return e4.next = 2, this.getKey(t3);
                  case 2:
                    return i3 = e4.sent, e4.next = 5, n3.toArrayBuffer();
                  case 5:
                    return a2 = e4.sent, e4.next = 8, this.encryptArrayBuffer(i3, a2);
                  case 8:
                    return u2 = e4.sent, e4.abrupt("return", r2.create({ name: n3.name, mimeType: "application/octet-stream", data: u2 }));
                  case 10:
                  case "end":
                    return e4.stop();
                }
            }, e3, this);
          })), function(e3, t3, n3) {
            return p.apply(this, arguments);
          }) }, { key: "decryptFile", value: (d = (0, a.default)(o.default.mark(function e3(t3, n3, r2) {
            var i3, a2, u2;
            return o.default.wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    return e4.next = 2, this.getKey(t3);
                  case 2:
                    return i3 = e4.sent, e4.next = 5, n3.toArrayBuffer();
                  case 5:
                    return a2 = e4.sent, e4.next = 8, this.decryptArrayBuffer(i3, a2);
                  case 8:
                    return u2 = e4.sent, e4.abrupt("return", r2.create({ name: n3.name, data: u2 }));
                  case 10:
                  case "end":
                    return e4.stop();
                }
            }, e3, this);
          })), function(e3, t3, n3) {
            return d.apply(this, arguments);
          }) }, { key: "getKey", value: (f2 = (0, a.default)(o.default.mark(function e3(t3) {
            var n3, i3, a2;
            return o.default.wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    return n3 = r.from(t3), e4.next = 3, crypto.subtle.digest("SHA-256", n3.buffer);
                  case 3:
                    return i3 = e4.sent, a2 = r.from(r.from(i3).toString("hex").slice(0, 32), "utf8").buffer, e4.abrupt("return", crypto.subtle.importKey("raw", a2, "AES-CBC", true, ["encrypt", "decrypt"]));
                  case 6:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          })), function(e3) {
            return f2.apply(this, arguments);
          }) }, { key: "encryptArrayBuffer", value: (c2 = (0, a.default)(o.default.mark(function e3(t3, n3) {
            var r2;
            return o.default.wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    return r2 = crypto.getRandomValues(new Uint8Array(16)), e4.t0 = l, e4.t1 = r2.buffer, e4.next = 5, crypto.subtle.encrypt({ name: "AES-CBC", iv: r2 }, t3, n3);
                  case 5:
                    return e4.t2 = e4.sent, e4.abrupt("return", (0, e4.t0)(e4.t1, e4.t2));
                  case 7:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          })), function(e3, t3) {
            return c2.apply(this, arguments);
          }) }, { key: "decryptArrayBuffer", value: (i2 = (0, a.default)(o.default.mark(function e3(t3, n3) {
            var r2;
            return o.default.wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    return r2 = n3.slice(0, 16), e4.abrupt("return", crypto.subtle.decrypt({ name: "AES-CBC", iv: r2 }, t3, n3.slice(16)));
                  case 2:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          })), function(e3, t3) {
            return i2.apply(this, arguments);
          }) }, { key: "encryptString", value: (n2 = (0, a.default)(o.default.mark(function e3(t3, n3) {
            var i3, a2, u2, s2;
            return o.default.wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    return i3 = crypto.getRandomValues(new Uint8Array(16)), a2 = r.from(n3).buffer, e4.next = 4, crypto.subtle.encrypt({ name: "AES-CBC", iv: i3 }, t3, a2);
                  case 4:
                    return u2 = e4.sent, s2 = l(i3.buffer, u2), e4.abrupt("return", r.from(s2).toString("utf8"));
                  case 7:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          })), function(e3, t3) {
            return n2.apply(this, arguments);
          }) }, { key: "decryptString", value: (t2 = (0, a.default)(o.default.mark(function e3(t3, n3) {
            var i3, a2, u2, s2;
            return o.default.wrap(function(e4) {
              for (; ; )
                switch (e4.prev = e4.next) {
                  case 0:
                    return i3 = r.from(n3), a2 = i3.slice(0, 16), u2 = i3.slice(16), e4.next = 5, crypto.subtle.decrypt({ name: "AES-CBC", iv: a2 }, t3, u2);
                  case 5:
                    return s2 = e4.sent, e4.abrupt("return", r.from(s2).toString("utf8"));
                  case 7:
                  case "end":
                    return e4.stop();
                }
            }, e3);
          })), function(e3, n3) {
            return t2.apply(this, arguments);
          }) }]), e2;
        }();
        t.default = f, (0, c.default)(f, "IV_LENGTH", 16), e.exports = t.default;
      }).call(this, n(24).Buffer);
    }, function(e, t, n) {
      var r = n(0);
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
      var i, o, a = r(n(11)), u = r(n(12)), s = r(n(5)), c = r(n(6)), l = r(n(4)), f = (n(28), o = i = function() {
        function e2(t3) {
          if ((0, s.default)(this, e2), (0, l.default)(this, "data", void 0), (0, l.default)(this, "name", void 0), (0, l.default)(this, "mimeType", void 0), t3 instanceof File)
            this.data = t3, this.name = this.data.name, this.mimeType = this.data.type;
          else if (t3.data) {
            var n3 = t3.data;
            this.data = new File([n3], t3.name, { type: t3.mimeType }), this.name = t3.name, t3.mimeType && (this.mimeType = t3.mimeType);
          }
          if (void 0 === this.data)
            throw new Error("Couldn't construct a file out of supplied options.");
          if (void 0 === this.name)
            throw new Error("Couldn't guess filename out of the options. Please provide one.");
        }
        var t2, n2, r2, i2, o2, f2, d;
        return (0, c.default)(e2, [{ key: "toBuffer", value: (d = (0, u.default)(a.default.mark(function e3() {
          return a.default.wrap(function(e4) {
            for (; ; )
              switch (e4.prev = e4.next) {
                case 0:
                  throw new Error("This feature is only supported in Node.js environments.");
                case 1:
                case "end":
                  return e4.stop();
              }
          }, e3);
        })), function() {
          return d.apply(this, arguments);
        }) }, { key: "toStream", value: (f2 = (0, u.default)(a.default.mark(function e3() {
          return a.default.wrap(function(e4) {
            for (; ; )
              switch (e4.prev = e4.next) {
                case 0:
                  throw new Error("This feature is only supported in Node.js environments.");
                case 1:
                case "end":
                  return e4.stop();
              }
          }, e3);
        })), function() {
          return f2.apply(this, arguments);
        }) }, { key: "toFileUri", value: (o2 = (0, u.default)(a.default.mark(function e3() {
          return a.default.wrap(function(e4) {
            for (; ; )
              switch (e4.prev = e4.next) {
                case 0:
                  throw new Error("This feature is only supported in react native environments.");
                case 1:
                case "end":
                  return e4.stop();
              }
          }, e3);
        })), function() {
          return o2.apply(this, arguments);
        }) }, { key: "toBlob", value: (i2 = (0, u.default)(a.default.mark(function e3() {
          return a.default.wrap(function(e4) {
            for (; ; )
              switch (e4.prev = e4.next) {
                case 0:
                  return e4.abrupt("return", this.data);
                case 1:
                case "end":
                  return e4.stop();
              }
          }, e3, this);
        })), function() {
          return i2.apply(this, arguments);
        }) }, { key: "toArrayBuffer", value: (r2 = (0, u.default)(a.default.mark(function e3() {
          var t3 = this;
          return a.default.wrap(function(e4) {
            for (; ; )
              switch (e4.prev = e4.next) {
                case 0:
                  return e4.abrupt("return", new Promise(function(e5, n3) {
                    var r3 = new FileReader();
                    r3.addEventListener("load", function() {
                      if (r3.result instanceof ArrayBuffer)
                        return e5(r3.result);
                    }), r3.addEventListener("error", function() {
                      n3(r3.error);
                    }), r3.readAsArrayBuffer(t3.data);
                  }));
                case 1:
                case "end":
                  return e4.stop();
              }
          }, e3);
        })), function() {
          return r2.apply(this, arguments);
        }) }, { key: "toString", value: (n2 = (0, u.default)(a.default.mark(function e3() {
          var t3 = this;
          return a.default.wrap(function(e4) {
            for (; ; )
              switch (e4.prev = e4.next) {
                case 0:
                  return e4.abrupt("return", new Promise(function(e5, n3) {
                    var r3 = new FileReader();
                    r3.addEventListener("load", function() {
                      if ("string" == typeof r3.result)
                        return e5(r3.result);
                    }), r3.addEventListener("error", function() {
                      n3(r3.error);
                    }), r3.readAsBinaryString(t3.data);
                  }));
                case 1:
                case "end":
                  return e4.stop();
              }
          }, e3);
        })), function() {
          return n2.apply(this, arguments);
        }) }, { key: "toFile", value: (t2 = (0, u.default)(a.default.mark(function e3() {
          return a.default.wrap(function(e4) {
            for (; ; )
              switch (e4.prev = e4.next) {
                case 0:
                  return e4.abrupt("return", this.data);
                case 1:
                case "end":
                  return e4.stop();
              }
          }, e3, this);
        })), function() {
          return t2.apply(this, arguments);
        }) }], [{ key: "create", value: function(e3) {
          return new this(e3);
        } }]), e2;
      }(), (0, l.default)(i, "supportsFile", "undefined" != typeof File), (0, l.default)(i, "supportsBlob", "undefined" != typeof Blob), (0, l.default)(i, "supportsArrayBuffer", "undefined" != typeof ArrayBuffer), (0, l.default)(i, "supportsBuffer", false), (0, l.default)(i, "supportsStream", false), (0, l.default)(i, "supportsString", true), (0, l.default)(i, "supportsEncryptFile", true), (0, l.default)(i, "supportsFileUri", false), o);
      t.default = f, e.exports = t.default;
    }]);
  });
})(pubnub_min$2);
const pubnub_min = /* @__PURE__ */ getDefaultExportFromCjs(pubnub_min$2.exports);
const pubnub_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: pubnub_min
}, [pubnub_min$2.exports]);
export {
  pubnub_min$1 as p
};
